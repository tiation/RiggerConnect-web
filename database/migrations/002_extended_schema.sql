-- RiggerConnect Database Schema Migration 002
-- Extended schema for skills, certifications, equipment, and reviews
-- Created: 2025-01-24
-- Compatible with Supabase Postgres

-- Additional enum types for extended functionality
CREATE TYPE skill_category AS ENUM ('rigging', 'audio', 'lighting', 'video', 'staging', 'safety');
CREATE TYPE equipment_category AS ENUM ('hoists', 'rigging_hardware', 'safety_equipment', 'tools', 'lighting', 'audio', 'other');
CREATE TYPE proficiency_level AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');
CREATE TYPE review_type AS ENUM ('rigger_review', 'client_review');
CREATE TYPE booking_status AS ENUM ('confirmed', 'in_progress', 'completed', 'cancelled', 'disputed');

-- Skills master table
CREATE TABLE skills (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    category skill_category NOT NULL,
    description TEXT,
    requires_certification BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Equipment master table
CREATE TABLE equipment (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    category equipment_category NOT NULL,
    description TEXT,
    requires_certification BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Certifications master table
CREATE TABLE certifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    issuing_organization VARCHAR(255) NOT NULL,
    description TEXT,
    validity_period_months INTEGER CHECK (validity_period_months > 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Bookings table for confirmed job assignments
CREATE TABLE bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE NOT NULL,
    client_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    rigger_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    start_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
    end_datetime TIMESTAMP WITH TIME ZONE,
    agreed_rate DECIMAL(10,2) NOT NULL CHECK (agreed_rate >= 0),
    total_amount DECIMAL(10,2) GENERATED ALWAYS AS (
        CASE 
            WHEN end_datetime IS NOT NULL 
            THEN agreed_rate * EXTRACT(EPOCH FROM (end_datetime - start_datetime)) / 3600
            ELSE agreed_rate * 8 -- Default 8 hours if no end time
        END
    ) STORED,
    status booking_status DEFAULT 'confirmed' NOT NULL,
    special_instructions TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Reviews and ratings table
CREATE TABLE reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE NOT NULL,
    reviewer_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    reviewee_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    review_type review_type NOT NULL,
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(booking_id, reviewer_id)
);

-- Junction tables for many-to-many relationships

-- Rigger skills junction table
CREATE TABLE rigger_skills (
    rigger_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE NOT NULL,
    proficiency_level proficiency_level NOT NULL DEFAULT 'beginner',
    years_experience INTEGER CHECK (years_experience >= 0),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    PRIMARY KEY (rigger_id, skill_id)
);

-- Rigger certifications junction table
CREATE TABLE rigger_certifications (
    rigger_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    certification_id UUID REFERENCES certifications(id) ON DELETE CASCADE NOT NULL,
    obtained_date DATE NOT NULL,
    expiry_date DATE,
    certificate_number VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    PRIMARY KEY (rigger_id, certification_id),
    CHECK (expiry_date IS NULL OR expiry_date > obtained_date)
);

-- Rigger equipment junction table
CREATE TABLE rigger_equipment (
    rigger_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    equipment_id UUID REFERENCES equipment(id) ON DELETE CASCADE NOT NULL,
    owns_equipment BOOLEAN DEFAULT false,
    proficiency_level proficiency_level NOT NULL DEFAULT 'beginner',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    PRIMARY KEY (rigger_id, equipment_id)
);

-- Job skill requirements junction table
CREATE TABLE job_skill_requirements (
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE NOT NULL,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE NOT NULL,
    required_level proficiency_level NOT NULL DEFAULT 'intermediate',
    is_mandatory BOOLEAN DEFAULT true,
    PRIMARY KEY (job_id, skill_id)
);

-- Job equipment requirements junction table
CREATE TABLE job_equipment_requirements (
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE NOT NULL,
    equipment_id UUID REFERENCES equipment(id) ON DELETE CASCADE NOT NULL,
    is_provided BOOLEAN DEFAULT false,
    is_mandatory BOOLEAN DEFAULT true,
    PRIMARY KEY (job_id, equipment_id)
);

-- Create indexes for performance optimization
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_name ON skills(name);

CREATE INDEX idx_equipment_category ON equipment(category);
CREATE INDEX idx_equipment_name ON equipment(name);

CREATE INDEX idx_certifications_name ON certifications(name);
CREATE INDEX idx_certifications_organization ON certifications(issuing_organization);

CREATE INDEX idx_bookings_job_id ON bookings(job_id);
CREATE INDEX idx_bookings_client_id ON bookings(client_id);
CREATE INDEX idx_bookings_rigger_id ON bookings(rigger_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_start_datetime ON bookings(start_datetime);

CREATE INDEX idx_reviews_booking_id ON reviews(booking_id);
CREATE INDEX idx_reviews_reviewer_id ON reviews(reviewer_id);
CREATE INDEX idx_reviews_reviewee_id ON reviews(reviewee_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_review_type ON reviews(review_type);

CREATE INDEX idx_rigger_skills_rigger_id ON rigger_skills(rigger_id);
CREATE INDEX idx_rigger_skills_skill_id ON rigger_skills(skill_id);
CREATE INDEX idx_rigger_skills_proficiency ON rigger_skills(proficiency_level);

CREATE INDEX idx_rigger_certifications_rigger_id ON rigger_certifications(rigger_id);
CREATE INDEX idx_rigger_certifications_expiry ON rigger_certifications(expiry_date);

CREATE INDEX idx_rigger_equipment_rigger_id ON rigger_equipment(rigger_id);
CREATE INDEX idx_rigger_equipment_owns ON rigger_equipment(owns_equipment);

-- Apply updated_at triggers to new tables
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE rigger_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE rigger_certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE rigger_equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_skill_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_equipment_requirements ENABLE ROW LEVEL SECURITY;

-- RLS policies for master tables (readable by all authenticated users)
CREATE POLICY "Authenticated users can view skills" ON skills
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view equipment" ON equipment
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can view certifications" ON certifications
    FOR SELECT USING (auth.role() = 'authenticated');

-- RLS policies for bookings
CREATE POLICY "Booking participants can view bookings" ON bookings
    FOR SELECT USING (
        auth.uid() = client_id OR 
        auth.uid() = rigger_id
    );

CREATE POLICY "Clients can create bookings" ON bookings
    FOR INSERT WITH CHECK (auth.uid() = client_id);

CREATE POLICY "Booking participants can update bookings" ON bookings
    FOR UPDATE USING (
        auth.uid() = client_id OR 
        auth.uid() = rigger_id
    );

-- RLS policies for reviews
CREATE POLICY "Reviews are publicly viewable if marked public" ON reviews
    FOR SELECT USING (
        is_public = true OR 
        auth.uid() = reviewer_id OR 
        auth.uid() = reviewee_id
    );

CREATE POLICY "Booking participants can create reviews" ON reviews
    FOR INSERT WITH CHECK (auth.uid() = reviewer_id);

CREATE POLICY "Reviewers can update their own reviews" ON reviews
    FOR UPDATE USING (auth.uid() = reviewer_id);

-- RLS policies for rigger junction tables
CREATE POLICY "Riggers can manage their own skills" ON rigger_skills
    FOR ALL USING (auth.uid() = rigger_id);

CREATE POLICY "Riggers can manage their own certifications" ON rigger_certifications
    FOR ALL USING (auth.uid() = rigger_id);

CREATE POLICY "Riggers can manage their own equipment" ON rigger_equipment
    FOR ALL USING (auth.uid() = rigger_id);

-- RLS policies for job requirement junction tables
CREATE POLICY "Anyone can view job skill requirements" ON job_skill_requirements
    FOR SELECT USING (true);

CREATE POLICY "Job owners can manage skill requirements" ON job_skill_requirements
    FOR ALL USING (
        auth.uid() = (SELECT employer_id FROM jobs WHERE id = job_id)
    );

CREATE POLICY "Anyone can view job equipment requirements" ON job_equipment_requirements
    FOR SELECT USING (true);

CREATE POLICY "Job owners can manage equipment requirements" ON job_equipment_requirements
    FOR ALL USING (
        auth.uid() = (SELECT employer_id FROM jobs WHERE id = job_id)
    );

-- Insert seed data for skills
INSERT INTO skills (name, category, description, requires_certification) VALUES
    ('Rigging', 'rigging', 'General rigging skills and knowledge', false),
    ('Tower Crane Operation', 'rigging', 'Operation of tower cranes', true),
    ('Mobile Crane Operation', 'rigging', 'Operation of mobile cranes', true),
    ('Dogging', 'rigging', 'Directing crane operations and load handling', true),
    ('Fall Protection', 'safety', 'Working at height safety systems', true),
    ('Confined Space Entry', 'safety', 'Safe entry and work in confined spaces', true),
    ('Audio Systems', 'audio', 'Setup and operation of audio equipment', false),
    ('Lighting Systems', 'lighting', 'Setup and operation of lighting equipment', false),
    ('Video Production', 'video', 'Video equipment setup and operation', false),
    ('Stage Construction', 'staging', 'Building and dismantling stages', false)
ON CONFLICT (name) DO NOTHING;

-- Insert seed data for equipment
INSERT INTO equipment (name, category, description, requires_certification) VALUES
    ('Tower Crane', 'hoists', 'Fixed tower crane for construction', true),
    ('Mobile Crane', 'hoists', 'Mobile hydraulic crane', true),
    ('Chain Hoist', 'hoists', 'Manual or electric chain hoist', false),
    ('Shackles', 'rigging_hardware', 'Various rigging shackles', false),
    ('Wire Rope Slings', 'rigging_hardware', 'Steel wire rope slings', false),
    ('Synthetic Slings', 'rigging_hardware', 'Synthetic web and round slings', false),
    ('Safety Harness', 'safety_equipment', 'Personal fall protection harness', false),
    ('Hard Hat', 'safety_equipment', 'Protective helmet', false),
    ('Steel Toe Boots', 'safety_equipment', 'Safety footwear', false),
    ('Rigging Tools', 'tools', 'General rigging hand tools', false)
ON CONFLICT (name) DO NOTHING;

-- Insert seed data for certifications
INSERT INTO certifications (name, issuing_organization, description, validity_period_months) VALUES
    ('High Risk Work Licence - Dogging', 'SafeWork WA', 'Western Australia dogging licence', 60),
    ('High Risk Work Licence - Rigging', 'SafeWork WA', 'Western Australia rigging licence', 60),
    ('High Risk Work Licence - Crane Operation', 'SafeWork WA', 'Western Australia crane operation licence', 60),
    ('Working at Height', 'RTO Provider', 'Working at height competency', 36),
    ('Confined Space Entry', 'RTO Provider', 'Confined space entry competency', 36),
    ('First Aid Certificate', 'St John Ambulance', 'Basic first aid certification', 36),
    ('White Card', 'SafeWork WA', 'Construction induction training', 0)
ON CONFLICT (name) DO NOTHING;
