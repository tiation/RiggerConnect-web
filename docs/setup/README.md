# Setup Guide - RiggerConnect Web

## Development Environment Setup

### Prerequisites
- Node.js 18+ LTS
- npm or yarn package manager
- Git for version control
- Docker (optional, for containerized development)

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:chasewhiterabbit/riggerconnect-web.git
   cd riggerconnect-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Database Setup** (if using local database):
   ```bash
   # Start local Supabase
   npx supabase start
   
   # Run migrations
   npx supabase db reset
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

### RiggerShared Integration

RiggerConnect-web integrates with shared components from the RiggerShared library:

```bash
# Install RiggerShared dependencies
npm install @rigger/shared-components @rigger/shared-utils

# Import shared components
import { Header, Footer, JobCard } from '@rigger/shared-components';
import { apiUtils, authUtils, validationUtils } from '@rigger/shared-utils';
```

### Environment Variables

Required environment variables:

```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# API Configuration
API_BASE_URL=http://localhost:8000
```

### Docker Setup

For containerized development:

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f web
```

### Testing Setup

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run end-to-end tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

### Development Tools

Recommended VS Code extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- TypeScript Importer

## Troubleshooting

Common setup issues and solutions can be found in the [troubleshooting guide](../troubleshooting/).
