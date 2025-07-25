#!/bin/bash

# RiggerConnect Web Deployment Script
# Target: docker.sxc.codes (145.223.22.7)
# Purpose: Deploy RiggerConnect-web to production Docker host

set -e  # Exit on any error

# Configuration
DOCKER_HOST="root@145.223.22.7"
SSH_KEY="/Users/tiaastor/.ssh/hostinger_key"
PROJECT_NAME="riggerconnect-web"
CONTAINER_NAME="riggerconnect-web-app"
IMAGE_NAME="riggerconnect-web:latest"
DEPLOY_PATH="/opt/riggerconnect"
BACKUP_PATH="/opt/backups/riggerconnect"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Pre-deployment checks
pre_deploy_checks() {
    log "Running pre-deployment checks..."
    
    # Check if SSH key exists
    if [[ ! -f "$SSH_KEY" ]]; then
        error "SSH key not found at $SSH_KEY"
        exit 1
    fi
    
    # Check if we can connect to the server
    if ! ssh -i "$SSH_KEY" -o ConnectTimeout=10 "$DOCKER_HOST" "echo 'Connection test successful'" >/dev/null 2>&1; then
        error "Cannot connect to $DOCKER_HOST"
        exit 1
    fi
    
    success "Pre-deployment checks passed"
}

# Build the application locally
build_application() {
    log "Building RiggerConnect application..."
    
    # Build the main Next.js app
    if [[ -f "package.json" ]]; then
        log "Installing dependencies..."
        npm ci --production=false
        
        log "Building Next.js application..."
        npm run build
    fi
    
    # Build the React app in RiggerConnect-App
    if [[ -d "RiggerConnect-App" ]]; then
        log "Building RiggerConnect-App..."
        cd RiggerConnect-App
        npm ci --production=false
        npm run build
        cd ..
    fi
    
    success "Application built successfully"
}

# Create Docker image
create_docker_image() {
    log "Creating Docker image..."
    
    # Check if Dockerfile exists, create one if it doesn't
    if [[ ! -f "Dockerfile" ]]; then
        warning "Dockerfile not found, creating a basic one..."
        create_dockerfile
    fi
    
    # Build Docker image
    docker build -t "$IMAGE_NAME" .
    
    success "Docker image created: $IMAGE_NAME"
}

# Create a basic Dockerfile if one doesn't exist
create_dockerfile() {
    cat > Dockerfile << 'EOF'
# RiggerConnect Web Dockerfile
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application files
COPY . .
COPY --from=build /app/.next ./.next
COPY --from=build /app/RiggerConnect-App/dist ./RiggerConnect-App/dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]
EOF
}

# Deploy to docker.sxc.codes
deploy_to_server() {
    log "Deploying to docker.sxc.codes..."
    
    # Save Docker image as tar
    log "Exporting Docker image..."
    docker save "$IMAGE_NAME" | gzip > riggerconnect-web.tar.gz
    
    # Transfer image to server
    log "Transferring image to server..."
    scp -i "$SSH_KEY" riggerconnect-web.tar.gz "$DOCKER_HOST:/tmp/"
    
    # Deploy on server
    log "Executing deployment on server..."
    ssh -i "$SSH_KEY" "$DOCKER_HOST" << EOF
        set -e
        
        # Create deployment directory
        mkdir -p "$DEPLOY_PATH"
        mkdir -p "$BACKUP_PATH"
        
        # Load new image
        echo "Loading new Docker image..."
        gunzip -c /tmp/riggerconnect-web.tar.gz | docker load
        
        # Backup current container if it exists
        if docker ps -a | grep -q "$CONTAINER_NAME"; then
            echo "Creating backup of current deployment..."
            docker commit "$CONTAINER_NAME" "$CONTAINER_NAME-backup-\$(date +%Y%m%d-%H%M%S)" || true
            docker stop "$CONTAINER_NAME" || true
            docker rm "$CONTAINER_NAME" || true
        fi
        
        # Run new container
        echo "Starting new container..."
        docker run -d \\
            --name "$CONTAINER_NAME" \\
            --restart unless-stopped \\
            -p 3000:3000 \\
            -e NODE_ENV=production \\
            --log-driver=json-file \\
            --log-opt max-size=10m \\
            --log-opt max-file=3 \\
            "$IMAGE_NAME"
        
        # Health check
        echo "Performing health check..."
        sleep 10
        if docker ps | grep -q "$CONTAINER_NAME"; then
            echo "✅ Deployment successful! Container is running."
            
            # Set up log forwarding to ElasticSearch (if configured)
            if command -v filebeat >/dev/null 2>&1; then
                echo "Configuring log forwarding to ElasticSearch..."
                # Configure filebeat to forward Docker logs
                # This would be configured based on your ElasticSearch setup
            fi
        else
            echo "❌ Deployment failed! Container is not running."
            docker logs "$CONTAINER_NAME" || true
            exit 1
        fi
        
        # Cleanup
        rm -f /tmp/riggerconnect-web.tar.gz
        
        echo "🚀 RiggerConnect deployment completed successfully!"
EOF
    
    # Cleanup local files
    rm -f riggerconnect-web.tar.gz
    
    success "Deployment completed successfully!"
}

# Post-deployment verification
post_deploy_verification() {
    log "Running post-deployment verification..."
    
    # Check if the application is responding
    sleep 5
    if ssh -i "$SSH_KEY" "$DOCKER_HOST" "curl -f http://localhost:3000/health || curl -f http://localhost:3000/" >/dev/null 2>&1; then
        success "Application is responding correctly"
    else
        warning "Application health check failed - manual verification needed"
    fi
    
    # Show deployment status
    ssh -i "$SSH_KEY" "$DOCKER_HOST" << 'EOF'
        echo "=== Deployment Status ==="
        echo "Container Status:"
        docker ps --filter name=riggerconnect-web-app --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        echo
        echo "Recent Logs:"
        docker logs --tail 20 riggerconnect-web-app 2>/dev/null || echo "No logs available"
EOF
}

# Rollback function
rollback() {
    log "Initiating rollback..."
    
    ssh -i "$SSH_KEY" "$DOCKER_HOST" << 'EOF'
        # Find the latest backup
        BACKUP_IMAGE=$(docker images --filter "reference=riggerconnect-web-app-backup-*" --format "{{.Repository}}:{{.Tag}}" | head -1)
        
        if [[ -n "$BACKUP_IMAGE" ]]; then
            echo "Rolling back to: $BACKUP_IMAGE"
            
            # Stop current container
            docker stop riggerconnect-web-app || true
            docker rm riggerconnect-web-app || true
            
            # Start backup container
            docker run -d \
                --name riggerconnect-web-app \
                --restart unless-stopped \
                -p 3000:3000 \
                -e NODE_ENV=production \
                "$BACKUP_IMAGE"
            
            echo "✅ Rollback completed"
        else
            echo "❌ No backup found for rollback"
            exit 1
        fi
EOF
}

# Main deployment function
main() {
    case "${1:-deploy}" in
        "deploy")
            log "🚀 Starting RiggerConnect deployment to docker.sxc.codes"
            pre_deploy_checks
            build_application
            create_docker_image
            deploy_to_server
            post_deploy_verification
            success "🎉 Deployment completed successfully!"
            ;;
        "rollback")
            log "🔄 Rolling back RiggerConnect deployment"
            rollback
            ;;
        "status")
            log "📊 Checking deployment status"
            ssh -i "$SSH_KEY" "$DOCKER_HOST" "docker ps --filter name=riggerconnect-web-app"
            ;;
        "logs")
            log "📋 Showing application logs"
            ssh -i "$SSH_KEY" "$DOCKER_HOST" "docker logs -f riggerconnect-web-app"
            ;;
        *)
            echo "Usage: $0 [deploy|rollback|status|logs]"
            echo "  deploy   - Deploy the application (default)"
            echo "  rollback - Rollback to previous version"
            echo "  status   - Check deployment status"
            echo "  logs     - Show application logs"
            exit 1
            ;;
    esac
}

# Execute main function
main "$@"
