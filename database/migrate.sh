#!/bin/bash
# RiggerConnect Database Migration Script
# Automates Supabase migrations for development and production
# Compatible with GitLab CI/CD and Docker workflows

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
MIGRATIONS_DIR="$SCRIPT_DIR/migrations"
SUPABASE_CONFIG_FILE="$PROJECT_ROOT/supabase/config.toml"

# Environment validation
validate_environment() {
    echo -e "${BLUE}Validating environment variables...${NC}"
    
    # Required environment variables
    REQUIRED_VARS=("NEXT_PUBLIC_SUPABASE_URL" "NEXT_PUBLIC_SUPABASE_ANON_KEY")
    
    if [[ "$NODE_ENV" == "production" ]]; then
        REQUIRED_VARS+=("SUPABASE_SERVICE_ROLE_KEY")
    fi
    
    for var in "${REQUIRED_VARS[@]}"; do
        if [[ -z "${!var}" ]]; then
            echo -e "${RED}Error: Required environment variable $var is not set${NC}"
            exit 1
        fi
    done
    
    echo -e "${GREEN}Environment validation passed${NC}"
}

# Check if Supabase CLI is installed
check_supabase_cli() {
    if ! command -v supabase &> /dev/null; then
        echo -e "${YELLOW}Supabase CLI not found. Installing...${NC}"
        
        # Install Supabase CLI based on the platform
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            if command -v brew &> /dev/null; then
                brew install supabase/tap/supabase
            else
                echo -e "${RED}Homebrew not found. Please install Supabase CLI manually${NC}"
                echo "Visit: https://supabase.com/docs/guides/cli"
                exit 1
            fi
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            # Linux
            curl -fsSL https://supabase.com/install.sh | sh
            export PATH=$PATH:$HOME/.local/bin
        else
            echo -e "${RED}Unsupported platform. Please install Supabase CLI manually${NC}"
            echo "Visit: https://supabase.com/docs/guides/cli"
            exit 1
        fi
        
        echo -e "${GREEN}Supabase CLI installed successfully${NC}"
    else
        echo -e "${GREEN}Supabase CLI found${NC}"
    fi
}

# Initialize Supabase project if not already initialized
init_supabase_project() {
    if [[ ! -f "$SUPABASE_CONFIG_FILE" ]]; then
        echo -e "${BLUE}Initializing Supabase project...${NC}"
        cd "$PROJECT_ROOT"
        
        # Extract project ID from Supabase URL
        if [[ "$NEXT_PUBLIC_SUPABASE_URL" =~ https://([^.]+)\.supabase\.co ]]; then
            PROJECT_ID="${BASH_REMATCH[1]}"
            echo -e "${BLUE}Detected project ID: $PROJECT_ID${NC}"
            
            # Initialize project
            supabase init
            
            # Link to existing project
            echo "$NEXT_PUBLIC_SUPABASE_ANON_KEY" | supabase login --token -
            supabase link --project-ref "$PROJECT_ID"
            
            echo -e "${GREEN}Supabase project initialized and linked${NC}"
        else
            echo -e "${RED}Invalid Supabase URL format${NC}"
            exit 1
        fi
    else
        echo -e "${GREEN}Supabase project already initialized${NC}"
    fi
}

# Run database migrations
run_migrations() {
    echo -e "${BLUE}Running database migrations...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Copy migration files to Supabase migrations directory
    SUPABASE_MIGRATIONS_DIR="$PROJECT_ROOT/supabase/migrations"
    mkdir -p "$SUPABASE_MIGRATIONS_DIR"
    
    # Copy our custom migrations
    for migration_file in "$MIGRATIONS_DIR"/*.sql; do
        if [[ -f "$migration_file" ]]; then
            filename=$(basename "$migration_file")
            timestamp=$(date +"%Y%m%d%H%M%S")
            target_file="$SUPABASE_MIGRATIONS_DIR/${timestamp}_${filename}"
            
            if [[ ! -f "$target_file" ]]; then
                cp "$migration_file" "$target_file"
                echo -e "${GREEN}Copied migration: $filename${NC}"
            fi
        fi
    done
    
    # Apply migrations
    if [[ "$NODE_ENV" == "production" ]]; then
        echo -e "${YELLOW}Applying migrations to production database...${NC}"
        supabase db push --password "$SUPABASE_DB_PASSWORD"
    else
        echo -e "${BLUE}Applying migrations to development database...${NC}"
        supabase db reset --linked
    fi
    
    echo -e "${GREEN}Migrations completed successfully${NC}"
}

# Generate TypeScript types from database schema
generate_types() {
    echo -e "${BLUE}Generating TypeScript types...${NC}"
    
    cd "$PROJECT_ROOT"
    
    # Generate types
    supabase gen types typescript --linked > lib/supabase/database.types.ts
    
    echo -e "${GREEN}TypeScript types generated${NC}"
}

# Backup database (production only)
backup_database() {
    if [[ "$NODE_ENV" == "production" ]]; then
        echo -e "${BLUE}Creating database backup...${NC}"
        
        BACKUP_DIR="$PROJECT_ROOT/backups"
        mkdir -p "$BACKUP_DIR"
        
        BACKUP_FILE="$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).sql"
        
        # Create backup using pg_dump
        if [[ -n "$SUPABASE_DB_PASSWORD" ]]; then
            PGPASSWORD="$SUPABASE_DB_PASSWORD" pg_dump \
                -h "db.${PROJECT_ID}.supabase.co" \
                -U postgres \
                -d postgres \
                --no-owner \
                --no-acl \
                > "$BACKUP_FILE"
            
            echo -e "${GREEN}Database backup created: $BACKUP_FILE${NC}"
        else
            echo -e "${YELLOW}Skipping backup: SUPABASE_DB_PASSWORD not set${NC}"
        fi
    fi
}

# Main execution flow
main() {
    echo -e "${BLUE}=== RiggerConnect Database Migration Script ===${NC}"
    echo -e "${BLUE}Environment: ${NODE_ENV:-development}${NC}"
    
    case "${1:-migrate}" in
        "validate")
            validate_environment
            ;;
        "init")
            validate_environment
            check_supabase_cli
            init_supabase_project
            ;;
        "migrate")
            validate_environment
            check_supabase_cli
            init_supabase_project
            backup_database
            run_migrations
            generate_types
            ;;
        "types")
            validate_environment
            check_supabase_cli
            generate_types
            ;;
        "backup")
            validate_environment
            backup_database
            ;;
        *)
            echo -e "${YELLOW}Usage: $0 [validate|init|migrate|types|backup]${NC}"
            echo -e "${YELLOW}Default action is 'migrate'${NC}"
            exit 1
            ;;
    esac
    
    echo -e "${GREEN}Operation completed successfully!${NC}"
}

# Execute main function with all arguments
main "$@"
