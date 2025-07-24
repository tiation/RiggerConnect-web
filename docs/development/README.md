# Development Guide

🏗️ **RiggerConnect Development Setup** - *ChaseWhiteRabbit NGO Initiative*

## 🚀 Getting Started

This comprehensive guide will help you set up and contribute to the RiggerConnect-web repository with enterprise-grade development practices.

## 🛠️ Prerequisites

- **Node.js 18+ or latest LTS version**
- **npm 9.0+ or yarn/pnpm equivalent**
- **Docker & Docker Compose** for containerization
- **Git** with SSH keys configured for GitHub
- **VSCode** (recommended) with suggested extensions

## 📋 Setup Instructions

### 1. Clone the Repository
```bash
git clone git@github.com:chasewhiterabbit/riggerconnect-web.git
cd riggerconnect-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
# Copy environment template
cp .env.example .env.local

# Edit with your configuration
# Required: Supabase URL, Keys, Auth Secret
# Optional: Analytics, Email, Monitoring
```

**Key Environment Variables:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXTAUTH_SECRET=your_nextauth_secret
NGO_DONATION_PERCENTAGE=5
```

### 4. Database Setup
```bash
# Initialize database
npm run db:init

# Run migrations
npm run db:migrate

# Generate TypeScript types  
npm run db:types

# Validate setup
npm run db:validate
```

### 5. Run Development Server
```bash
# Start development server (with Turbopack)
npm run dev

# Alternative: Standard Next.js dev
npm run dev:standard

# Access at http://localhost:3000
```

## 🐳 Docker Development (Alternative)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run migrations in container
docker-compose exec web npm run db:migrate

# Stop containers
docker-compose down
```

## 🔄 Development Workflow

### Branch Strategy
- Create feature branches from `main`
- Use descriptive branch names: `feature/worker-profile-enhancement`
- Follow conventional commits: `feat:`, `fix:`, `docs:`, `chore:`

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb + Next.js config
- **Prettier**: Auto-formatting on save
- **Tailwind CSS**: Utility-first styling
- **Tests**: Jest + Testing Library + Cypress

### Pre-commit Hooks
```bash
# Install git hooks
npm run prepare

# Manual lint check
npm run lint

# Manual format check
npm run format:check
```

## 🧪 Testing Strategy

### Unit Tests
```bash
# Run all unit tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Integration Tests
```bash
# API integration tests
npm run test:integration

# Database integration
npm run test:db
```

### End-to-End Tests
```bash
# Run Cypress tests
npm run test:e2e

# Open Cypress GUI
npm run test:e2e:open

# Headless mode
npm run test:e2e:headless
```

## 🚀 Build & Deployment

### Local Build
```bash
# Production build
npm run build

# Start production server
npm start

# Export static files
npm run export
```

### Docker Production Build
```bash
# Build production image
docker build -t riggerconnect-web .

# Run production container
docker run -p 3000:3000 riggerconnect-web
```

## 🔒 Security & Compliance

### Security Audits
```bash
# NPM audit
npm audit

# Security scan
npm run security:audit

# Dependency check
npm run deps:check
```

### ChaseWhiteRabbit NGO Compliance
- **Ethical AI**: No algorithmic bias in job matching
- **Data Privacy**: GDPR compliant data handling
- **Worker Empowerment**: User-centric feature design
- **Transparency**: Open-source development practices

## 📊 Monitoring & Analytics

### Development Monitoring
```bash
# Start Grafana dashboard
docker run -p 3001:3000 grafana/grafana

# View application metrics
open http://localhost:3001
```

### Performance Testing
```bash
# Lighthouse CI
npm run lighthouse

# Bundle analyzer
npm run analyze

# Performance benchmarks
npm run perf:test
```

## 🤝 Contributing Guidelines

### Code Review Process
1. **Create Pull Request** with descriptive title
2. **Pass CI/CD checks**: Tests, linting, security
3. **Code Review**: 2 approvals required
4. **NGO Impact Review**: ChaseWhiteRabbit alignment check
5. **Merge**: Squash and merge to main

### Issue Reporting
- Use GitHub issue templates
- Include reproduction steps
- Tag with appropriate labels
- Reference ChaseWhiteRabbit NGO impact if applicable

## 📞 Support & Communication

### Development Team
- **Technical Lead**: tiatheone@protonmail.com
- **Infrastructure**: garrett@sxc.codes  
- **Community**: garrett.dillman@gmail.com

### Resources
- **Documentation**: [docs/](../)
- **API Reference**: [docs/api/](../api/)
- **Architecture**: [docs/architecture/](../architecture/)
- **ChaseWhiteRabbit NGO**: [About Page](../../app/about/page.tsx)

---

**Built with ❤️ by ChaseWhiteRabbit NGO - Empowering blue-collar workers through ethical technology**
