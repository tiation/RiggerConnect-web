-- RiggerConnect Database Schema Migration 001
-- Initial schema setup for users, jobs, and applications
-- Created: 2025-01-24
-- Compatible with Supabase Postgres

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom enum types
CREATE TYPE user_role AS ENUM ('rigger', 'employer', 'administrator');
CREATE TYPE job_status AS ENUM ('draft', 'published', 'in_progress', 'completed', 'cancelled');
CREATE TYPE application_status AS ENUM ('pending', 'accepted', 'rejected', 'withdrawn');
CREATE TYPE availability_status AS ENUM ('available', 'busy', 'unavailable');
CREATE TYPE verification_status AS ENUM ('pending', 'verified', 'rejected');

-- Users table - Core user authentication and basic profile
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role user_role NOT NULL DEFAULT 'rigger',
    avatar TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- User profiles table - Extended profile information
CREATE TABLE user_profiles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    company VARCHAR(255),
    skills TEXT[],
    experience INTEGER CHECK (experience >= 0),
    hourly_rate DECIMAL(10,2) CHECK (hourly_rate >= 0),
    availability availability_status DEFAULT 'available',
    verification_status verification_status DEFAULT 'pending' NOT NULL,
    rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5),
    total_jobs INTEGER DEFAULT 0 CHECK (total_jobs >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(user_id)
);

-- Jobs table - Job postings by employers
CREATE TABLE jobs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    requirements TEXT[],
    hourly_rate DECIMAL(10,2) NOT NULL CHECK (hourly_rate >= 0),
    duration VARCHAR(100),
    status job_status DEFAULT 'draft' NOT NULL,
    employer_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    assigned_rigger_id UUID REFERENCES users(id) ON DELETE SET NULL,
    deadline TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Applications table - Job applications by riggers
CREATE TABLE applications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE NOT NULL,
    rigger_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    status application_status DEFAULT 'pending' NOT NULL,
    proposed_rate DECIMAL(10,2) CHECK (proposed_rate >= 0),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(job_id, rigger_id)
);

-- Create indexes for performance optimization
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_created_at ON users(created_at);

CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_availability ON user_profiles(availability);
CREATE INDEX idx_user_profiles_verification_status ON user_profiles(verification_status);
CREATE INDEX idx_user_profiles_rating ON user_profiles(rating DESC);

CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_employer_id ON jobs(employer_id);
CREATE INDEX idx_jobs_assigned_rigger_id ON jobs(assigned_rigger_id);
CREATE INDEX idx_jobs_location ON jobs(location);
CREATE INDEX idx_jobs_hourly_rate ON jobs(hourly_rate);
CREATE INDEX idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX idx_jobs_deadline ON jobs(deadline);

CREATE INDEX idx_applications_job_id ON applications(job_id);
CREATE INDEX idx_applications_rigger_id ON applications(rigger_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to all tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies for users
CREATE POLICY "Users can view their own profile" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Basic RLS policies for user_profiles
CREATE POLICY "Users can view their own user profile" ON user_profiles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own user profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own user profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Basic RLS policies for jobs
CREATE POLICY "Anyone can view published jobs" ON jobs
    FOR SELECT USING (status = 'published' OR auth.uid() = employer_id);

CREATE POLICY "Employers can manage their own jobs" ON jobs
    FOR ALL USING (auth.uid() = employer_id);

-- Basic RLS policies for applications
CREATE POLICY "Applications are viewable by job employer and applicant" ON applications
    FOR SELECT USING (
        auth.uid() = rigger_id OR 
        auth.uid() = (SELECT employer_id FROM jobs WHERE id = job_id)
    );

CREATE POLICY "Riggers can create applications" ON applications
    FOR INSERT WITH CHECK (auth.uid() = rigger_id);

CREATE POLICY "Riggers can update their own applications" ON applications
    FOR UPDATE USING (auth.uid() = rigger_id);

-- Insert seed data for development
INSERT INTO users (id, email, first_name, last_name, role) VALUES
    ('550e8400-e29b-41d4-a716-446655440000', 'admin@riggerconnect.com', 'System', 'Administrator', 'administrator'),
    ('550e8400-e29b-41d4-a716-446655440001', 'employer@example.com', 'John', 'Employer', 'employer'),
    ('550e8400-e29b-41d4-a716-446655440002', 'rigger@example.com', 'Jane', 'Rigger', 'rigger')
ON CONFLICT (email) DO NOTHING;

-- Add corresponding user profiles
INSERT INTO user_profiles (user_id, verification_status) VALUES
    ('550e8400-e29b-41d4-a716-446655440000', 'verified'),
    ('550e8400-e29b-41d4-a716-446655440001', 'verified'),
    ('550e8400-e29b-41d4-a716-446655440002', 'pending')
ON CONFLICT (user_id) DO NOTHING;
