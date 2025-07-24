# RiggerConnect Web Documentation

🏗️ **A ChaseWhiteRabbit NGO Initiative** - *Ethical Technology for Blue-Collar Excellence*

## 📚 Documentation Structure

This documentation provides comprehensive information about the RiggerConnect web application, following enterprise-grade standards and ethical guidelines.

### Core Documentation

| Section | Description | Path |
|---------|-------------|------|
| [API Reference](./api/) | Complete API documentation and endpoints | `docs/api/` |
| [Architecture](./architecture/) | System design and technical architecture | `docs/architecture/` |
| [Deployment](./deployment/) | Production deployment and CI/CD guides | `docs/deployment/` |
| [Development](./development/) | Development setup and coding standards | `docs/development/` |
| [Security](./security/) | Security guidelines and best practices | `docs/security/` |
| [Testing](./testing/) | Testing strategies and guidelines | `docs/testing/` |
| [Ethics](./ethics/) | Ethical guidelines and responsible AI practices | `docs/ethics/` |

## 🎯 ChaseWhiteRabbit NGO Mission Alignment

RiggerConnect directly supports our NGO's core mission:

- **Empowerment**: Providing digital tools for career advancement
- **Safety**: Promoting workplace safety through knowledge sharing
- **Community**: Building professional networks for blue-collar workers
- **Equity**: Ensuring equal access to opportunities regardless of background

## 🏆 Enterprise Standards

This project adheres to:

- ✅ **Security First**: Regular security audits and vulnerability assessments
- ✅ **Accessibility**: WCAG 2.1 AA compliance for inclusive design
- ✅ **Performance**: Sub-3-second load times and responsive design
- ✅ **Scalability**: Cloud-native architecture supporting growth
- ✅ **Maintainability**: Clean code principles and comprehensive testing

## 🚀 Quick Setup Guide

### Local Development Setup

1. **Prerequisites**
   - Node.js 18+ 
   - npm or yarn
   - Git
   - Docker (optional, for database)

2. **Environment Setup**
   ```bash
   # Clone the repository
   git clone git@github.com:chasewhiterabbit/RiggerConnect-web.git
   cd RiggerConnect-web
   
   # Install dependencies
   npm install
   
   # Set up environment
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Database Setup**
   ```bash
   # Initialize database (if using local setup)
   npm run db:init
   
   # Run migrations
   npm run db:migrate
   
   # Generate types
   npm run db:types
   ```

4. **Development Server**
   ```bash
   # Start development server
   npm run dev
   
   # Run tests
   npm test
   
   # Run E2E tests
   npm run test:e2e
   ```

### Docker Development

```bash
# Build and run with Docker
docker-compose up --build

# Run database migrations in Docker
docker-compose exec web npm run db:migrate
```

## 🔗 Quick Links

- [Project Repository](https://github.com/chasewhiterab bit/RiggerConnect-web)
- [Live Application](https://riggerconnect.sxc.codes)
- [Issue Tracker](https://github.com/chasewhiterabbit/RiggerConnect-web/issues)
- [Contributing Guidelines](../CONTRIBUTING.md)

## 📞 Support

For questions or support:
- **Email**: support@chasewhiterabbit.org
- **Community**: [RiggerConnect Community Forum](https://community.riggerconnect.org)
- **Documentation Issues**: [File a docs issue](https://github.com/chasewhiterabbit/RiggerConnect-web/issues/new?template=documentation.md)

---

*Built with ❤️ by ChaseWhiteRabbit NGO - Transforming lives through ethical technology*
