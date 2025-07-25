# Deployment Documentation

## Overview
This document provides comprehensive details on deploying the Rigger Ecosystem across different environments including development, staging, and production.

## Prerequisites
- **Docker**: Ensure Docker is installed and running.
- **Kubernetes**: Access to Kubernetes cluster with kubectl configured.
- **CI/CD Pipeline**: Ensure GitLab CI or GitHub Actions is set up and accessible.
- **Environment Variables**: Ensure all required environment variables are set.

## Environment Setup

### Development Environment

1. **Clone Repository**
    ```bash
    git clone git@github.com:tiation-repos/{repository-name}.git
    cd {repository-name}
    ```

2. **Environment Variables**
   - Copy `.env.example` to `.env` and update configuration values.
   ```bash
   cp .env.example .env
   vim .env
   ```

3. **Start Services**
    ```bash
    docker-compose up --build
    ```

### Staging Environment

1. **Configure Staging Credentials**
   - Set up Kubernetes secrets for database connections, API keys, etc.

2. **Deploy to Staging**
    ```bash
    kubectl config use-context staging
    kubectl apply -f k8s/staging-app.yaml
    kubectl apply -f k8s/staging-db.yaml
    ```

3. **Run Tests**
   ```bash
   helm test staging-app
   ```

### Production Environment

1. **Ensure Compliance Requirements**
   - Conduct security checks and compliance audits.
   - Verify logging, monitoring, and backups are configured.

2. **Deploy to Production**
    ```bash
    kubectl config use-context production
    kubectl apply -f k8s/frontend-app.yaml
    kubectl apply -f k8s/backend-app.yaml
    ```

3. **Check Deployment Health**
   - Watch for application readiness:
   ```bash
   kubectl get pods
   ```

## CI/CD Pipeline

### GitLab CI

- **Configuration**: Update `.gitlab-ci.yml` for build and deployment stages.

### GitHub Actions

- **Configuration**: Update workflows in `.github/workflows/` for multi-stage build and deployment.

## Rollbacks and Disaster Recovery

### Rollback Procedure
1. **Identify faulty deployment**: Check logs and alerting systems.
2. **Rollback**: Redeploy previous stable revision.
   ```bash
   kubectl rollout undo deployment/app-deployment
   ```
3. **Verify Rollback**: Check application status and logs.

### Disaster Recovery

- Ensure regular backups are taken.
- Conduct recovery drills routinely.
- Review recovery point objectives (RPO) and recovery time objectives (RTO).

## Deployment to docker.sxc.codes

### Quick Deployment
```bash
# SSH to docker.sxc.codes and run deployment script
ssh root@docker.sxc.codes 
./deploy-riggerconnect.sh
```

### Using Local Deployment Script (Recommended)
```bash
# Run deployment from local machine with full validation
./deploy-riggerconnect.sh deploy

# Check deployment status
./deploy-riggerconnect.sh status

# View application logs
./deploy-riggerconnect.sh logs

# Rollback if needed
./deploy-riggerconnect.sh rollback
```

### Security Hardening Checklist
- ✅ Environment variables validation implemented
- ✅ No hardcoded secrets in source code
- ✅ Proper .gitignore configuration for sensitive files
- ✅ SSH key-based authentication for deployment
- ✅ Container security with non-root user
- ✅ Log rotation and centralized logging

## Monitoring and Logging

### Grafana Dashboard
- **Access URL**: [https://grafana.sxc.codes](https://grafana.sxc.codes)
- **Server**: grafana.sxc.codes (153.92.214.1)
- Monitor performance metrics, application health, and alerts
- Available dashboards:
  - RiggerConnect Application Metrics: `https://grafana.sxc.codes/d/riggerconnect-app`
  - Infrastructure Overview: `https://grafana.sxc.codes/d/infrastructure`
  - Docker Container Metrics: `https://grafana.sxc.codes/d/docker-containers`
  - Database Performance: `https://grafana.sxc.codes/d/supabase-db`

### ElasticSearch Logging
- **Access URL**: [https://elastic.sxc.codes](https://elastic.sxc.codes)
- **Server**: elastic.sxc.codes (145.223.22.14)
- **Kibana Access**: https://elastic.sxc.codes:5601
- Centralized log aggregation and indexing (ELK stack)
- Automated log forwarding from Docker containers
- Security event monitoring and alerting

**Detailed monitoring setup**: See [docs/monitoring/README.md](../monitoring/README.md)

## Security Best Practices
- Enable HTTPS for all endpoints.
- Rotate API keys and credentials regularly.
- Conduct security audits and penetration tests.

## Compliance and Legal
- Ensure GDPR and CCPA compliance.
- Regularly update privacy policies and user agreements.

---

**Version**: 1.0
**Last Updated**: January 2025

For deployment support contact:
- **Primary**: tiatheone@protonmail.com
- **Technical**: garrett@sxc.codes
- **Documentation**: [https://docs.rigger.sxc.codes](https://docs.rigger.sxc.codes)
