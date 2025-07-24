# Troubleshooting Guide - RiggerConnect Web

## Common Issues

### Development Environment Issues

#### 1. Port Already in Use
**Problem**: Development server fails to start with "Port 3000 already in use"

**Solution**:
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)

# Or use different port
npm run dev -- --port 3001
```

#### 2. Environment Variables Not Loading
**Problem**: Application cannot connect to Supabase or other services

**Solution**:
```bash
# Verify .env.local exists
ls -la .env.local

# Check environment variables are loaded
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)

# Restart development server
npm run dev
```

#### 3. Module Resolution Errors
**Problem**: TypeScript/import errors for RiggerShared components

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build and Deployment Issues

#### 1. Docker Build Failures
**Problem**: Docker build fails during npm install or build step

**Solution**:
```bash
# Check Docker daemon is running
docker --version

# Build with verbose logging
docker build --no-cache --progress=plain .

# Check available disk space
docker system df
docker system prune
```

#### 2. Kubernetes Pod Crashes
**Problem**: Pods fail to start or crash after deployment

**Solution**:
```bash
# Check pod status
kubectl get pods -l app=riggerconnect-web

# View pod logs
kubectl logs -f deployment/riggerconnect-web

# Describe pod for events
kubectl describe pod <pod-name>

# Check resource limits
kubectl top pods
```

#### 3. SSL Certificate Issues
**Problem**: HTTPS not working or certificate errors

**Solution**:
```bash
# Check cert-manager status
kubectl get certificates

# Verify ingress configuration
kubectl describe ingress riggerconnect-web

# Force certificate renewal
kubectl delete certificate riggerconnect-tls
```

### Database and API Issues

#### 1. Supabase Connection Failures
**Problem**: Cannot connect to Supabase database

**Solution**:
```bash
# Test connection
curl -H "apikey: YOUR_ANON_KEY" \
     -H "Authorization: Bearer YOUR_ANON_KEY" \
     "https://your-project.supabase.co/rest/v1/"

# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Verify network connectivity
ping your-project.supabase.co
```

#### 2. API Rate Limiting
**Problem**: API requests being rate limited

**Solution**:
```javascript
// Implement exponential backoff
const retryWithBackoff = async (fn, retries = 3) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && error.status === 429) {
      await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
      return retryWithBackoff(fn, retries - 1);
    }
    throw error;
  }
};
```

#### 3. Authentication Issues
**Problem**: User authentication failing

**Solution**:
```bash
# Check NextAuth configuration
cat pages/api/auth/[...nextauth].js

# Verify JWT secret
echo $NEXTAUTH_SECRET

# Clear authentication cookies
# In browser dev tools: Application > Storage > Clear
```

### Performance Issues

#### 1. Slow Page Load Times
**Problem**: Pages loading slowly

**Solution**:
```bash
# Analyze bundle size
npm run analyze

# Check for unused dependencies
npx depcheck

# Optimize images
npm install next-optimized-images

# Enable compression
# In next.config.js:
compress: true
```

#### 2. Memory Leaks
**Problem**: High memory usage in production

**Solution**:
```bash
# Monitor memory usage
kubectl top pods

# Increase memory limits
# In helm values.yaml:
resources:
  limits:
    memory: 1Gi

# Profile memory usage
npm install --save-dev @next/bundle-analyzer
```

#### 3. High CPU Usage
**Problem**: Excessive CPU utilization

**Solution**:
```bash
# Check CPU metrics
kubectl top pods

# Profile application
npm install --save-dev clinic

# Optimize React renders
# Use React.memo, useMemo, useCallback
```

### Network and Connectivity Issues

#### 1. CORS Errors
**Problem**: Cross-origin request blocked

**Solution**:
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
        ],
      },
    ];
  },
};
```

#### 2. WebSocket Connection Failures
**Problem**: Real-time features not working

**Solution**:
```javascript
// Check WebSocket connection
const supabase = createClient(url, key, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Test connection
supabase.channel('test').subscribe((status) => {
  console.log('Realtime status:', status);
});
```

#### 3. CDN Cache Issues
**Problem**: Static assets not updating

**Solution**:
```bash
# Purge CloudFlare cache
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
  -H "X-Auth-Email: your@email.com" \
  -H "X-Auth-Key: your_api_key" \
  -d '{"purge_everything":true}'

# Check cache headers
curl -I https://riggerconnect.sxc.codes/
```

## Monitoring and Debugging

### Application Monitoring

#### Grafana Dashboards
Access monitoring at: https://grafana.sxc.codes (153.92.214.1)

Key metrics to monitor:
- Response time
- Error rate
- Active users
- Memory usage
- CPU utilization

#### Log Analysis
```bash
# View application logs
kubectl logs -f deployment/riggerconnect-web

# Search for specific errors
kubectl logs deployment/riggerconnect-web | grep ERROR

# Export logs for analysis
kubectl logs deployment/riggerconnect-web > app.log
```

### Debugging Tools

#### Browser Developer Tools
1. **Network Tab**: Monitor API requests and responses
2. **Performance Tab**: Analyze rendering performance
3. **Application Tab**: Check local storage and cookies
4. **Console Tab**: View JavaScript errors and logs

#### React Developer Tools
```bash
# Install React DevTools extension
# Available for Chrome and Firefox

# Enable profiler
npm install --save-dev @welldone-software/why-did-you-render
```

#### Next.js Debugging
```javascript
// Enable debug mode
DEBUG=* npm run dev

// Or specific modules
DEBUG=next:* npm run dev
```

## Emergency Procedures

### Service Outage Response

1. **Assess Impact**
   - Check monitoring dashboards
   - Identify affected components
   - Estimate user impact

2. **Immediate Response**
   ```bash
   # Check service status
   kubectl get services
   
   # Scale up replicas if needed
   kubectl scale deployment riggerconnect-web --replicas=5
   
   # Restart problematic pods
   kubectl rollout restart deployment/riggerconnect-web
   ```

3. **Communication**
   - Notify stakeholders
   - Update status page
   - Prepare incident report

### Rollback Procedures

#### Quick Rollback
```bash
# Rollback to previous version
helm rollback riggerconnect-web

# Or specific revision
helm rollback riggerconnect-web 2

# Verify rollback success
kubectl get pods -w
```

#### Database Rollback
```bash
# If database migration caused issues
npx supabase db reset --linked

# Restore from backup
# Contact Supabase support for point-in-time recovery
```

## Getting Help

### Internal Support
- **Primary Contact**: tiatheone@protonmail.com
- **Infrastructure**: garrett@sxc.codes
- **General Support**: garrett.dillman@gmail.com

### External Resources
- **Next.js Documentation**: https://nextjs.org/docs
- **Supabase Support**: https://supabase.com/support
- **Kubernetes Documentation**: https://kubernetes.io/docs/

### Community Support
- **Rigger Community Forum**: Available through the application
- **GitHub Issues**: For bug reports and feature requests
- **ChaseWhiteRabbit NGO**: info@chasewhiterabbit.org

## FAQ

### Q: How do I enable debug mode?
A: Set `NODE_ENV=development` and `DEBUG=*` environment variables.

### Q: Why are my changes not appearing?
A: Clear browser cache, restart development server, and check for caching middleware.

### Q: How do I test the production build locally?
A: Run `npm run build && npm start` to test the production build.

### Q: What should I do if the database is slow?
A: Check query performance, add database indexes, and consider connection pooling.

### Q: How do I update RiggerShared components?
A: Run `npm update @rigger/shared-components @rigger/shared-utils` and test thoroughly.
