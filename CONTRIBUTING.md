# Contributing to RiggerConnect Web

## Welcome

Thank you for your interest in contributing to RiggerConnect Web, part of the ChaseWhiteRabbit NGO's Rigger ecosystem. We welcome contributions that align with our mission of ethical development and community empowerment.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git configured with SSH for tiation-repos
- Docker for containerized development
- Basic understanding of React/Next.js

### Development Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:tiaastor/RiggerConnect-web.git
   cd RiggerConnect-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Strategy

- `main` - Production-ready code, protected branch
- `develop` - Integration branch for features
- `feature/feature-name` - Feature development branches
- `hotfix/issue-description` - Emergency fixes

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow existing code style and patterns
   - Write/update tests for new functionality
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm run test
   npm run build
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   
   Use conventional commit messages:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Test additions/modifications
   - `chore:` - Maintenance tasks

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Maintain 80%+ test coverage
- Document complex functions with JSDoc

### React/Next.js

- Use functional components with hooks
- Implement proper error boundaries
- Follow accessibility (a11y) best practices
- Use CSS modules or styled-components

### Testing

- Write unit tests for utilities and components
- Include integration tests for critical paths
- Use Jest and React Testing Library
- Mock external dependencies appropriately

## CI/CD Integration

Our CI/CD pipeline runs on:
- **Primary**: GitLab CI (gitlab.sxc.codes)
- **Secondary**: GitHub Actions
- **Deployment**: Docker containers via docker.sxc.codes

### Pipeline Stages

1. **Lint & Format** - Code quality checks
2. **Test** - Unit and integration tests
3. **Build** - Production build verification
4. **Security** - Vulnerability scanning
5. **Deploy** - Automated deployment to staging/production

## Documentation

- Update README.md for user-facing changes
- Add/update JSDoc for new functions
- Include examples in documentation
- Update CHANGELOG.md with release notes

## Security

- Never commit secrets or API keys
- Use environment variables for configuration
- Follow OWASP security guidelines
- Report security issues privately via [SECURITY.md](SECURITY.md)

## ChaseWhiteRabbit NGO Values

All contributions should align with our NGO's values:

- **Ethical Development**: Code that benefits society
- **Transparency**: Open and documented processes
- **Inclusivity**: Welcoming to all skill levels and backgrounds
- **Quality**: Enterprise-grade, maintainable solutions

## Getting Help

- **Documentation**: Check the `docs/` directory
- **Issues**: Search existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions
- **Contact**: Reach out to maintainers for urgent matters

## Recognition

Contributors are recognized in:
- CHANGELOG.md for significant contributions
- GitHub contributor graphs
- Annual NGO reports (with permission)

Thank you for contributing to the Rigger ecosystem and supporting ChaseWhiteRabbit NGO's mission!

---
*ChaseWhiteRabbit NGO - RiggerConnect Web Team*
