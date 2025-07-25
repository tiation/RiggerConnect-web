# RiggerConnect Monitoring & Observability

## Overview
This document outlines the monitoring and observability setup for RiggerConnect, integrating with Grafana dashboards and ElasticSearch logging infrastructure.

## Monitoring Infrastructure

### 🎯 Grafana Dashboards
**Access URL**: [https://grafana.sxc.codes](https://grafana.sxc.codes)  
**Server**: `grafana.sxc.codes` (153.92.214.1)  
**Role**: Observability / Dashboards / Alerts

#### Available Dashboards

1. **RiggerConnect Application Metrics**
   - URL: `https://grafana.sxc.codes/d/riggerconnect-app`
   - Metrics: Response times, error rates, active users
   - Refresh: 30 seconds

2. **Infrastructure Overview**
   - URL: `https://grafana.sxc.codes/d/infrastructure`
   - Metrics: CPU, Memory, Disk, Network usage
   - Refresh: 1 minute

3. **Docker Container Metrics**
   - URL: `https://grafana.sxc.codes/d/docker-containers`
   - Metrics: Container health, resource usage
   - Refresh: 15 seconds

4. **Database Performance**
   - URL: `https://grafana.sxc.codes/d/supabase-db`
   - Metrics: Query performance, connection pools
   - Refresh: 1 minute

#### Setting Up Alerts

```bash
# Connect to Grafana server
ssh root@153.92.214.1

# Configure alert rules
sudo vim /etc/grafana/provisioning/alerting/rules.yml
```

Example alert configuration:
```yaml
groups:
  - name: riggerconnect-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "High error rate detected"
          
      - alert: ContainerDown
        expr: up{job="docker"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Container is down"
```

### 📊 ElasticSearch Logging
**Access URL**: [https://elastic.sxc.codes](https://elastic.sxc.codes)  
**Server**: `elastic.sxc.codes` (145.223.22.14)  
**Role**: Log aggregation and indexing (ELK stack)

#### Log Configuration

1. **Application Logs**
   ```bash
   # Configure application to send logs to ElasticSearch
   # Add to your application configuration:
   
   ELASTICSEARCH_URL=https://elastic.sxc.codes:9200
   LOG_LEVEL=info
   LOG_FORMAT=json
   ```

2. **Docker Container Logs**
   ```bash
   # Configure Docker daemon for centralized logging
   sudo vim /etc/docker/daemon.json
   
   {
     "log-driver": "json-file",
     "log-opts": {
       "max-size": "10m",
       "max-file": "3",
       "tag": "{{.ImageName}}/{{.Name}}/{{.ID}}"
     }
   }
   ```

3. **Filebeat Configuration**
   ```yaml
   # /etc/filebeat/filebeat.yml
   filebeat.inputs:
   - type: container
     paths:
       - '/var/lib/docker/containers/*/*.log'
     processors:
       - add_docker_metadata:
           host: "unix:///var/run/docker.sock"

   output.elasticsearch:
     hosts: ["elastic.sxc.codes:9200"]
     index: "riggerconnect-logs-%{+yyyy.MM.dd}"
   
   setup.template.name: "riggerconnect"
   setup.template.pattern: "riggerconnect-*"
   ```

#### Log Analysis Queries

Access Kibana at `https://elastic.sxc.codes:5601` for log analysis:

1. **Error Analysis**
   ```
   level:error AND container.name:riggerconnect-web-app
   ```

2. **Performance Monitoring**
   ```
   message:"slow query" OR response_time:>1000
   ```

3. **User Activity**
   ```
   event.category:authentication OR event.action:login
   ```

## 🔧 Setting Up Monitoring

### 1. Install Monitoring Agents

```bash
# On docker.sxc.codes (deployment target)
ssh root@145.223.22.7

# Install Node Exporter for Prometheus metrics
wget https://github.com/prometheus/node_exporter/releases/latest/download/node_exporter-linux-amd64.tar.gz
tar xzf node_exporter-linux-amd64.tar.gz
sudo mv node_exporter /usr/local/bin/
sudo useradd -rs /bin/false node_exporter

# Create systemd service
sudo tee /etc/systemd/system/node_exporter.service << EOF
[Unit]
Description=Node Exporter
After=network.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable node_exporter
sudo systemctl start node_exporter
```

### 2. Configure Application Metrics

Add to your application code:

```typescript
// lib/monitoring/metrics.ts
import { createPrometheusRegistry } from 'prom-client';

const registry = createPrometheusRegistry();

export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  registers: [registry]
});

export const activeUsers = new Gauge({
  name: 'riggerconnect_active_users',
  help: 'Number of active users',
  registers: [registry]
});
```

### 3. Health Check Endpoints

```typescript
// pages/api/health.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Check database connection
    const dbHealth = await checkDatabaseHealth();
    
    // Check external services
    const servicesHealth = await checkExternalServices();
    
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version,
      database: dbHealth,
      services: servicesHealth,
      uptime: process.uptime()
    };
    
    res.status(200).json(health);
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
}
```

## 📈 Key Metrics to Monitor

### Application Metrics
- **Response Time**: 95th percentile < 200ms
- **Error Rate**: < 1% of total requests
- **Throughput**: Requests per second
- **Active Sessions**: Concurrent user count

### Infrastructure Metrics
- **CPU Usage**: < 80% average
- **Memory Usage**: < 85% of available
- **Disk Usage**: < 90% of capacity
- **Network I/O**: Bandwidth utilization

### Database Metrics
- **Connection Pool**: Active/idle connections
- **Query Performance**: Slow query detection (>100ms)
- **Lock Wait Time**: Database lock contention
- **Cache Hit Ratio**: > 95% for optimal performance

## 🚨 Alert Configuration

### Email Alerts
Configure alerts to be sent to:
- **Primary**: tiatheone@protonmail.com
- **Technical**: garrett@sxc.codes  
- **Backup**: garrett.dillman@gmail.com

### Alert Severity Levels

1. **Critical** (Immediate Action Required)
   - Application down
   - Database connection lost
   - High error rate (>5%)

2. **Warning** (Monitor Closely)
   - High response time (>500ms)
   - Resource usage >80%
   - Unusual traffic patterns

3. **Info** (For Awareness)
   - Deployment notifications
   - Scheduled maintenance
   - Performance reports

## 🔒 Security Monitoring

### Log Security Events
- Failed authentication attempts
- Unusual API access patterns
- Database query anomalies
- File system changes

### SIEM Integration
Configure Security Information and Event Management:

```bash
# Example: Send security events to ElasticSearch
curl -X POST "elastic.sxc.codes:9200/security-events/_doc" \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2025-01-25T14:00:00Z",
    "event_type": "failed_login",
    "source_ip": "192.168.1.100",
    "user_agent": "Mozilla/5.0...",
    "severity": "medium"
  }'
```

## 📚 Troubleshooting

### Common Issues

1. **Grafana Dashboard Not Loading**
   ```bash
   # Check Grafana service status
   ssh root@153.92.214.1
   sudo systemctl status grafana-server
   
   # Check logs
   sudo journalctl -u grafana-server -f
   ```

2. **ElasticSearch Connection Issues**
   ```bash
   # Test ElasticSearch connectivity
   curl -X GET "elastic.sxc.codes:9200/_cluster/health"
   
   # Check Filebeat status
   sudo systemctl status filebeat
   ```

3. **Missing Metrics**
   ```bash
   # Verify Node Exporter is running
   curl http://docker.sxc.codes:9100/metrics
   
   # Check Prometheus scrape targets
   # Access Prometheus UI and check targets
   ```

## 📞 Support Contacts

**For monitoring issues contact:**
- **Primary**: tiatheone@protonmail.com
- **Technical**: garrett@sxc.codes
- **Documentation**: [https://docs.rigger.sxc.codes](https://docs.rigger.sxc.codes)

**Emergency Escalation:**
- **24/7 Support**: Available through monitoring alerts
- **Response SLA**: 
  - Critical: 15 minutes
  - Warning: 1 hour
  - Info: Next business day

---

**Last Updated**: January 25, 2025  
**Version**: 1.0  
**Maintained by**: ChaseWhiteRabbit NGO Technical Team
