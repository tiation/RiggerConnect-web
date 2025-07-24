<div align="center">

# 🏗️ RiggerConnect Web Application

### **A ChaseWhiteRabbit NGO Initiative**
*Ethical Technology for Blue-Collar Excellence*

[![Build Status](https://github.com/chasewhiterabbit/riggerconnect-web/workflows/CI/badge.svg)](https://github.com/chasewhiterabbit/riggerconnect-web/actions)
[![Security Rating](https://img.shields.io/badge/security-A+-brightgreen)](docs/security/)
[![Ethics Compliance](https://img.shields.io/badge/ethics-compliant-blue)](docs/ethics/)
[![WCAG 2.1](https://img.shields.io/badge/accessibility-AA-green)](docs/accessibility/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

```ascii
    🏗️ CONNECTING THE BACKBONE OF INDUSTRY 🏗️
    ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲
   ╔═══════════════════════════════════════════╗
   ║  RIGGERS • SAFETY • COMMUNITY • GROWTH   ║
   ╚═══════════════════════════════════════════╝
    ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼
```

</div>

## 📍 Repository Location & Structure

**Current Location**: `/Users/tiaastor/Github/tiation-repos/RiggerConnect-web/`

This repository is part of the **Tiation Enterprise Repository Structure**, specifically designed to house **ChaseWhiteRabbit NGO's** technology initiatives following enterprise-grade development practices. 

### 🏗️ Enterprise Ecosystem
- **Repository Collection**: [Enterprise Repository Index](../ENTERPRISE_REPOSITORY_INDEX.md)
- **Related Projects**: [RiggerHub-web](../RiggerHub-web/), [RiggerBackend](../RiggerBackend/), [RiggerShared](../RiggerShared/)
- **Mobile Apps**: [RiggerConnect-android](../RiggerConnect-android/), [RiggerConnect-ios](../RiggerConnect-ios/)
- **Infrastructure**: Hosted on Hostinger VPS cluster with Kubernetes orchestration

### 🌟 NGO Integration
As a **ChaseWhiteRabbit NGO Initiative**, this project adheres to:
- ✅ **Enterprise-grade development practices**
- ✅ **Ethical technology standards**
- ✅ **Open-source commitment (GPL v3)**
- ✅ **Worker empowerment focus**
- ✅ **DevOps best practices with CI/CD**

## 📸 Platform Preview

![RiggerConnect Platform Screenshot](screenshot.png)
*RiggerConnect web platform showing the main interface for rigging jobs and professional networking in Western Australia*

## 🎯 Mission Statement

RiggerConnect is a cutting-edge social networking and career development platform designed specifically for riggers in the construction, oil & gas, and industrial sectors. As part of **ChaseWhiteRabbit NGO's** mission to empower blue-collar workers with ethical technology and opportunity, we bridge the gap between traditional rigging work and modern digital networking.

### 🌟 Core Values
- 🤝 **Connect** - Industry professionals and peer networks
- 🎯 **Discover** - Career opportunities and skill development paths  
- 🛡️ **Share** - Knowledge, experiences, and safety best practices
- 📈 **Advance** - Careers through targeted networking and learning
- ⚖️ **Ethics** - Privacy-first, bias-free, worker-empowering technology

## 🔗 Related Repositories

### Core Platform Components

| Repository | Platform | Description | GitHub SSH URL |
|------------|----------|-------------|----------------|
| **RiggerBackend** | API | Core backend services and APIs | `git@github.com:tiation/RiggerBackend.git` |
| **RiggerConnect-android** | Android | Mobile networking app | `git@github.com:tiation/RiggerConnect-android.git` |
| **RiggerConnect-ios** | iOS | Mobile networking app | `git@github.com:tiation/RiggerConnect-ios.git` |
| **RiggerHub-web** | Web | Operations management hub | `git@github.com:tiation/RiggerHub-web.git` |
| **RiggerHub-android** | Android | Mobile operations hub | `git@github.com:tiation/RiggerHub-android.git` |
| **RiggerHub-ios** | iOS | Mobile operations hub | `git@github.com:tiation/RiggerHub-ios.git` |
| **RiggerShared** | Multi-platform | Shared libraries and components | `git@github.com:tiation/RiggerShared.git` |

### Enterprise Integration Architecture

```mermaid
graph TB
    RB[RiggerBackend<br/>Core API Services] --> RCW[RiggerConnect-web]
    RB --> RCA[RiggerConnect-android]
    RB --> RCI[RiggerConnect-ios]
    RB --> RHW[RiggerHub-web]
    RB --> RHA[RiggerHub-android]
    RB --> RHI[RiggerHub-ios]
    RS[RiggerShared<br/>Common Libraries] --> RCW
    RS --> RCA
    RS --> RCI
    RS --> RHW
    RS --> RHA
    RS --> RHI
    
    style RCW fill:#00FFFF,color:#000
    style RB fill:#FF00FF,color:#000
    style RS fill:#00FF00,color:#000
```

### ChaseWhiteRabbit NGO License Framework

All repositories in the Rigger ecosystem are licensed under **GPL v3**, ensuring:
- ✅ **Open Source Transparency**: Complete code visibility and community auditing
- ✅ **Ethical Technology Standards**: Algorithmic fairness and bias prevention
- ✅ **Worker Empowerment Focus**: Technology serving users, not corporate profits
- ✅ **Community Ownership**: Improvements benefit the entire rigger community
- ✅ **Corporate Responsibility**: Commercial use must remain open and accessible

## 🚀 Technology Stack

This is a [Next.js](https://nextjs.org) project built with the modern **App Router** architecture, featuring:

- **Next.js 15.4.2** - React framework with App Router (unified structure)
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern styling framework
- **Turbopack** - Ultra-fast bundler for development
- **Supabase** - Backend-as-a-Service with PostgreSQL

## 🚀 Local Development

Follow the steps below to set up the development environment for RiggerConnect-web:

1. **Clone the repository**:

   ```bash
   git clone git@github.com:chasewhiterabbit/riggerconnect-web.git
   cd riggerconnect-web
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment**:

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Run tests**:

   ```bash
   npm test
   ```

6. **Security audit**:

   ```bash
   npm run security:audit
   ```

## 🎯 DevOps Processes

RiggerConnect-web adheres to robust CI/CD best practices:

- **Automated Testing**: Utilizes GitHub Actions for continuous integration, automated testing, and static analysis.
- **Automated Deployment**: Deployments are managed through GitLab pipelines.
- **Infrastructure as Code**: Terraform setups ensure consistent and reproducible infrastructure across environments.
- **Monitoring 6 Logging**: Integrated with Grafana and ELK Stack for real-time monitoring 6 comprehensive log management.

## 🏗️ Project Structure
```
RiggerConnect-web/
├── app/                    # Next.js App Router (unified routing)
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── jobs/page.tsx      # Jobs listing
│   ├── post-job/page.tsx  # Job posting form
│   └── register/page.tsx  # User registration
├── lib/                   # Shared utilities and services
│   ├── auth/              # Authentication utilities
│   ├── services/          # API services
│   └── supabase/          # Database client configuration
├── public/                # Static assets
├── docs/                  # Project documentation
└── ci/                    # CI/CD configuration
```

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🏗️ Enterprise Architecture

### Cloud Infrastructure
- **Hosting**: Kubernetes on Hostinger VPS cluster
- **Database**: Supabase with PostgreSQL backend
- **CDN**: CloudFlare for global content delivery
- **Monitoring**: Grafana + ElasticSearch stack
- **CI/CD**: GitLab pipelines with automated testing

### DevOps Best Practices
- ✅ **Infrastructure as Code**: Terraform configurations
- ✅ **Container Security**: Regular vulnerability scanning
- ✅ **Blue-Green Deployments**: Zero-downtime releases
- ✅ **Health Monitoring**: 24/7 system monitoring with Grafana
- ✅ **Backup Strategy**: Multi-region data redundancy
- ✅ **CI/CD Pipeline**: GitLab CI/CD with automated testing and deployment
- ✅ **Docker Containerization**: Multi-stage builds with security hardening
- ✅ **Kubernetes Orchestration**: Helm charts for production deployment

### Deployment Infrastructure
- **Primary VPS**: docker.sxc.codes (145.223.22.7) - CI/CD runner and container build host
- **Helm Registry**: helm.sxc.codes (145.223.21.248) - Kubernetes deployment manager
- **Monitoring**: grafana.sxc.codes (153.92.214.1) - Observability and alerts
- **Database**: supabase.sxc.codes (93.127.167.157) - Backend as a Service
- **Notification Alerts**: Configured for tiatheone@protonmail.com, garrett@sxc.codes, garrett.dillman@gmail.com

## 📚 Documentation

| Resource | Description |
|----------|-------------|
| [📖 Full Documentation](docs/) | Complete project documentation |
| [🔒 Security Guidelines](docs/security/) | Security protocols and best practices |
| [🧪 Testing Strategy](docs/testing/) | Quality assurance and testing approach |
| [⚖️ Ethics Framework](docs/ethics/) | Responsible AI and ethical guidelines |
| [🏗️ Architecture](docs/architecture/) | System design and technical specs |
| [🚀 Deployment Guide](docs/deployment/) | Production deployment instructions |

## 🤝 Contributing

We welcome contributions from the rigger community and ethical technology advocates!

1. **Read our [Contributing Guidelines](CONTRIBUTING.md)**
2. **Check our [Code of Conduct](docs/ethics/)**
3. **Browse [Open Issues](https://github.com/chasewhiterabbit/riggerconnect-web/issues)**
4. **Submit Pull Requests** following our standards

### Development Setup
```bash
# Clone the repository
git clone git@github.com:chasewhiterabbit/riggerconnect-web.git
cd riggerconnect-web

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev

# Run tests
npm test

# Run security audit
npm run security:audit
```

## 🛡️ Security & Ethics

### Security Features
- 🔐 **End-to-End Encryption** for sensitive communications
- 🛡️ **Multi-Factor Authentication** for account protection
- 🔍 **Regular Security Audits** and penetration testing
- 📊 **Privacy-First Analytics** with user consent

### Ethical Commitments
- 🌟 **No Algorithmic Bias** in job matching or recommendations
- 🔒 **Data Sovereignty** - users own and control their data
- 🤝 **Worker Empowerment** - technology that serves users
- 🌍 **Social Impact** - measurable positive outcomes for communities

## 📊 Performance Metrics

- ⚡ **Page Load Time**: < 3 seconds (3G network)
- 🎯 **Lighthouse Score**: 95+ on all metrics
- 📱 **Mobile Responsive**: 100% feature parity
- ♿ **Accessibility**: WCAG 2.1 AA compliant
- 🔒 **Security Score**: A+ rating

## 🌍 Community Impact

### Current Metrics
- 👥 **Active Users**: Growing rigger community
- 💼 **Job Placements**: Career advancement tracking
- 🎓 **Skills Developed**: Learning outcome measurements
- 🛡️ **Safety Improvements**: Incident reduction reporting

### Goals for 2024
- 📈 **10,000+ Active Riggers** on the platform
- 🎯 **1,000+ Job Placements** through our network
- 🏆 **500+ Safety Certifications** earned
- 🤝 **100+ Employer Partnerships** established

## 🚀 Deployment

### Production Environment
```bash
# Build production version
npm run build

# Start production server
npm start

# Deploy to staging
npm run deploy:staging

# Deploy to production (requires approval)
npm run deploy:production
```

### Infrastructure
- **Production**: `https://riggerconnect.chasewhiterabbit.org`
- **Staging**: `https://staging.riggerconnect.chasewhiterabbit.org`
- **Development**: `http://localhost:3000`

## 📞 Support & Contact

### Community Support
- 💬 **Community Forum**: [community.riggerconnect.org](https://community.riggerconnect.org)
- 📧 **General Support**: support@chasewhiterabbit.org
- 🔒 **Security Issues**: security@chasewhiterabbit.org
- ⚖️ **Ethics Concerns**: ethics@chasewhiterabbit.org

### ChaseWhiteRabbit NGO
- 🌐 **Website**: [chasewhiterabbit.org](https://chasewhiterabbit.org)
- 📧 **Contact**: info@chasewhiterabbit.org
- 🐦 **Twitter**: [@ChaseWhiteRabbitNGO](https://twitter.com/ChaseWhiteRabbitNGO)
- 💼 **LinkedIn**: [ChaseWhiteRabbit NGO](https://linkedin.com/company/chasewhiterabbit-ngo)

## 📜 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

### Why GPL v3?
As an ethical NGO initiative, we believe in:
- **Open Source Transparency**: All code visible and auditable
- **Community Ownership**: Improvements benefit everyone
- **Corporate Responsibility**: Commercial use must remain open
- **Worker Protection**: Technology that can't be locked away from users

---

<div align="center">

### 🏗️ Built by Riggers, for Riggers 🏗️

**ChaseWhiteRabbit NGO** | *Transforming Lives Through Ethical Technology*

```ascii
🔧 SAFETY FIRST • COMMUNITY ALWAYS • ETHICS FOREVER 🔧
```

[![ChaseWhiteRabbit NGO](https://img.shields.io/badge/ChaseWhiteRabbit-NGO-orange)](https://chasewhiterabbit.org)
[![Ethical Technology](https://img.shields.io/badge/Technology-Ethical-green)](docs/ethics/)
[![Blue Collar Pride](https://img.shields.io/badge/Blue%20Collar-Pride-blue)](#)

*"Technology should lift up workers, not replace them."*

</div>
