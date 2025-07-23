# ==========================================================================
# RiggerConnect-web - Enterprise-Grade Docker Container
# ChaseWhiteRabbit NGO Initiative
# 
# Multi-stage build for optimized production deployment
# Includes security hardening and performance optimization
# ==========================================================================

# ---- Dependencies Stage ----
FROM node:20-alpine AS deps

LABEL maintainer="ChaseWhiteRabbit NGO <tech@chasewhiterabbit.org>"
LABEL version="1.0.0"
LABEL description="RiggerConnect-web - Ethical Technology for Blue-Collar Excellence"

# Install security updates
RUN apk update && apk upgrade && apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production --no-audit --no-fund && \
    npm cache clean --force

# ---- Builder Stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json* ./

# Copy source code
COPY . .

# Install all dependencies (including dev dependencies)
RUN npm ci --no-audit --no-fund

# Build the Next.js application
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS production

# Security: Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Install runtime dependencies and security updates
RUN apk add --no-cache \
    dumb-init \
    ca-certificates \
    tzdata && \
    apk update && apk upgrade && \
    rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV TZ=UTC

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Security: Set proper permissions
RUN chown -R nextjs:nodejs /app && \
    chmod -R 755 /app

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => { \
        process.exit(res.statusCode === 200 ? 0 : 1) \
    }).on('error', () => process.exit(1))"

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "server.js"]

# ==========================================================================
# Build Instructions:
# 
# Development:
#   docker build -t rigger-connect-web:dev .
#   docker run -p 3000:3000 --env-file .env rigger-connect-web:dev
#
# Production:
#   docker build --target production -t rigger-connect-web:latest .
#   docker run -d -p 3000:3000 --env-file .env.production rigger-connect-web:latest
#
# Security scan:
#   docker scan rigger-connect-web:latest
# ==========================================================================
