# RiggerConnect Database Migrations

This directory contains the database schema migrations and management tools for the RiggerConnect platform using Supabase Postgres.

## Overview

The migration system is designed to:
- Maintain incremental database schema changes
- Support both development and production environments
- Integrate with GitLab CI/CD pipelines
- Validate environment configurations
- Generate TypeScript types automatically
- Provide database backup capabilities

## Directory Structure

```
database/
├── migrations/           # SQL migration files
│   ├── 001_initial_schema.sql
│   └── 002_extended_schema.sql
├── migrate.sh           # Main migration script
├── Dockerfile.migrations # Docker image for CI/CD
└── README.md            # This documentation
```

## Migration Files

### 001_initial_schema.sql
- Core tables: `users`, `user_profiles`, `jobs`, `applications`
- Basic enum types and indexes
- Row Level Security (RLS) policies
- Seed data for development

### 002_extended_schema.sql
- Extended tables: `skills`, `equipment`, `certifications`, `bookings`, `reviews`
- Junction tables for many-to-many relationships
- Additional indexes and RLS policies
- Comprehensive seed data

## Environment Variables

### Required for All Environments
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Required for Server-Side Operations
```bash
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### Required for Production
```bash
SUPABASE_DB_PASSWORD=your-database-password-here
NODE_ENV=production
```

## Usage

### Development

1. **Initialize Supabase project:**
   ```bash
   npm run db:init
   ```

2. **Run migrations:**
   ```bash
   npm run db:migrate
   ```

3. **Generate TypeScript types:**
   ```bash
   npm run db:types
   ```

4. **Validate environment:**
   ```bash
   npm run db:validate
   ```

### Production

1. **Create database backup:**
   ```bash
   NODE_ENV=production npm run db:backup
   ```

2. **Run production migrations:**
   ```bash
   NODE_ENV=production npm run db:migrate
   ```

### CI/CD Integration

The GitLab CI pipeline includes automated migration stages:

1. **validate-environment** - Validates required environment variables
2. **migrate-database** - Runs migrations and generates types
3. **build** - Uses updated types for application build

## Docker Usage

Build migration container:
```bash
docker build -f database/Dockerfile.migrations -t riggerconnect-migrations .
```

Run migrations:
```bash
docker run --rm \
  -e NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY \
  -e SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE_ROLE_KEY \
  riggerconnect-migrations
```

## Database Schema

### Core Tables

#### users
- Primary user authentication and basic profile information
- Supports three user roles: `rigger`, `employer`, `administrator`
- Includes avatar, contact information, and timestamps

#### user_profiles
- Extended profile information for all users
- Skills, experience, hourly rates, availability status
- Verification status and rating system
- One-to-one relationship with users table

#### jobs
- Job postings created by employers
- Status tracking from draft to completion
- Location, requirements, and compensation details
- Foreign key relationships to users for employer and assigned rigger

#### applications
- Job applications submitted by riggers
- Status tracking and proposed rates
- Unique constraint prevents duplicate applications
- Links jobs and riggers through foreign keys

### Extended Tables

#### skills
- Master list of rigging and related skills
- Categorized by type (rigging, audio, lighting, etc.)
- Tracks certification requirements

#### equipment
- Master list of equipment and tools
- Categorized by type (hoists, safety equipment, etc.)
- Tracks ownership and certification requirements

#### certifications
- Professional certifications and licenses
- Validity periods and issuing organizations
- Links to rigger profiles through junction table

#### bookings
- Confirmed job assignments
- Automatic total amount calculation
- Status tracking and special instructions
- Links to reviews and ratings

#### reviews
- Bidirectional review system
- 5-star rating system with optional text
- Public/private visibility controls
- Prevents duplicate reviews per booking

### Junction Tables

- **rigger_skills** - Links riggers to their skills with proficiency levels
- **rigger_certifications** - Tracks rigger certifications with expiry dates
- **rigger_equipment** - Links riggers to equipment they own or can operate
- **job_skill_requirements** - Defines required skills for job postings
- **job_equipment_requirements** - Defines required equipment for jobs

## Row Level Security (RLS)

All tables implement RLS policies to ensure data security:

### User Data Protection
- Users can only view and modify their own profiles
- User profiles are protected with user-specific policies

### Job Access Control
- Published jobs are publicly viewable
- Draft jobs are only visible to their creators
- Employers can manage their own job postings

### Application Privacy
- Applications are visible only to the applicant and job owner
- Riggers can create and update their own applications

### Review System
- Public reviews are visible to all users
- Private reviews are only visible to participants
- Only booking participants can create reviews

## Performance Optimization

### Indexes
- Primary key indexes on all tables
- Foreign key indexes for relationship queries
- Composite indexes for common query patterns
- Specialized indexes for filtering and sorting

### Query Optimization
- Efficient RLS policies to minimize database load
- Proper use of foreign key constraints
- Generated columns for calculated values (e.g., total_amount)

## Backup and Recovery

### Development Backups
- Local backups stored in `backups/` directory
- Timestamped SQL dump files
- Automated through migration script

### Production Backups
- Automated backups before migrations
- Integration with Supabase backup systems
- Configurable retention policies

## Troubleshooting

### Common Issues

1. **Environment Variables Not Set**
   ```bash
   Error: Required environment variable NEXT_PUBLIC_SUPABASE_URL is not set
   ```
   Solution: Ensure all required environment variables are properly configured.

2. **Supabase CLI Not Found**
   ```bash
   Supabase CLI not found. Installing...
   ```
   Solution: The script will automatically install the CLI or follow manual installation instructions.

3. **Migration Conflicts**
   ```bash
   Error: Migration already exists
   ```
   Solution: Check existing migrations and ensure unique timestamps.

4. **Permission Errors**
   ```bash
   Permission denied: ./database/migrate.sh
   ```
   Solution: Make the script executable with `chmod +x database/migrate.sh`.

### Database Connection Issues
- Verify Supabase project URL format
- Check network connectivity to Supabase
- Ensure service role key has necessary permissions

### Migration Rollback
Currently, the system doesn't support automatic rollbacks. To rollback:
1. Create database backup before migrations
2. Manually restore from backup if needed
3. Create compensating migrations for schema changes

## Development Workflow

1. **Schema Changes**
   - Create new migration file with timestamp prefix
   - Include both DDL and seed data as needed
   - Test migration on development database

2. **Type Generation**
   - Run `npm run db:types` after schema changes
   - Commit generated types with migration files
   - Update application code to use new types

3. **Testing**
   - Validate migration on clean database
   - Test RLS policies with different user roles
   - Verify performance with sample data

4. **Deployment**
   - Migrations run automatically in CI/CD
   - Manual approval required for production
   - Automatic backup before production migrations

## Contributing

When adding new migrations:
1. Follow naming convention: `###_descriptive_name.sql`
2. Include comprehensive comments
3. Add appropriate indexes and RLS policies
4. Update this README if adding new tables or concepts
5. Test thoroughly in development environment

## Security Considerations

- Never commit production environment variables
- Use service role keys only for admin operations
- Implement proper RLS policies for all tables
- Regular security audits of database permissions
- Monitor for suspicious database activities

## Support and Monitoring

### Health Checks
- Database connectivity validation
- Migration status monitoring
- Performance metrics tracking

### Alerting
- Failed migration notifications
- Environment variable validation alerts
- Database performance warnings

### Logging
- Migration execution logs
- Error tracking and reporting
- Audit logs for sensitive operations

## Related Documentation

- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [RiggerConnect API Documentation](../docs/api/README.md)
- [Deployment Guide](../docs/deployment/README.md)
