-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'client', 'consultant')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clients table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  company_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(50),
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Consultants table
CREATE TABLE consultants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  bio TEXT,
  location VARCHAR(255),
  rate DECIMAL(10, 2) NOT NULL,
  availability VARCHAR(255),
  specialties TEXT[],
  image_url TEXT,
  languages TEXT[],
  sector_expertise TEXT[],
  linkedin_url TEXT,
  rating DECIMAL(3, 2),
  case_studies_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL CHECK (status IN (
    'uploaded', 'parsing', 'schema_generated', 'database_deployed', 
    'github_pushed', 'vercel_deployed', 'completed'
  )),
  github_url TEXT,
  vercel_url TEXT,
  schema TEXT,
  client_id UUID REFERENCES clients(id),
  consultant_id UUID REFERENCES consultants(id),
  requirements TEXT,
  price DECIMAL(10, 2),
  payment_status VARCHAR(20) CHECK (payment_status IN ('unpaid', 'partial', 'paid')),
  approved_by_client BOOLEAN DEFAULT FALSE,
  approved_by_consultant BOOLEAN DEFAULT FALSE,
  feedback TEXT,
  is_open_source BOOLEAN DEFAULT FALSE,
  addons TEXT[],
  estimated_hours INTEGER,
  actual_hours INTEGER,
  strategy_session_scheduled BOOLEAN DEFAULT FALSE,
  strategy_session_completed BOOLEAN DEFAULT FALSE,
  innovation_challenge_id UUID,
  time_to_deploy INTEGER,
  estimated_market_impact TEXT,
  snapshot JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project Modules table
CREATE TABLE project_modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed', 'failed')),
  order INTEGER NOT NULL,
  checkpoint TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Assistants table
CREATE TABLE ai_assistants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  capabilities TEXT[],
  icon VARCHAR(255),
  type VARCHAR(50) NOT NULL CHECK (type IN ('executive', 'client_service', 'finance', 'marketing')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Pricing Tiers table
CREATE TABLE pricing_tiers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  base_price DECIMAL(10, 2) NOT NULL,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'completed', 'failed')),
  payment_method VARCHAR(50) NOT NULL,
  transaction_id VARCHAR(255),
  invoice_url TEXT,
  receipt_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Addons table
CREATE TABLE addons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  integration_type VARCHAR(50) NOT NULL CHECK (integration_type IN (
    'sms', 'email', 'whatsapp', 'payment', 'blockchain', 'verification', 'other'
  )),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Strategy Sessions table
CREATE TABLE strategy_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  consultant_id UUID NOT NULL REFERENCES consultants(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('scheduled', 'completed', 'cancelled')),
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  zoom_link TEXT,
  recording_url TEXT,
  meeting_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Innovation Programs table
CREATE TABLE innovation_programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  organization_name VARCHAR(255) NOT NULL,
  focus_areas TEXT[],
  description TEXT NOT NULL,
  grant_amount DECIMAL(10, 2) NOT NULL,
  timeline_start TIMESTAMP WITH TIME ZONE NOT NULL,
  timeline_end TIMESTAMP WITH TIME ZONE NOT NULL,
  logo_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Innovation Applications table
CREATE TABLE innovation_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  program_id UUID NOT NULL REFERENCES innovation_programs(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  idea TEXT NOT NULL,
  community_partner VARCHAR(255) NOT NULL,
  expected_impact TEXT NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('submitted', 'under_review', 'accepted', 'rejected')),
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Case Studies table
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  problem TEXT NOT NULL,
  solution TEXT NOT NULL,
  tech_features TEXT[],
  time_to_deploy INTEGER NOT NULL,
  screenshot_url TEXT NOT NULL,
  live_url TEXT NOT NULL,
  consultant_quote TEXT,
  market_impact TEXT NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_projects_client_id ON projects(client_id);
CREATE INDEX idx_projects_consultant_id ON projects(consultant_id);
CREATE INDEX idx_project_modules_project_id ON project_modules(project_id);
CREATE INDEX idx_payments_project_id ON payments(project_id);
CREATE INDEX idx_payments_client_id ON payments(client_id);
CREATE INDEX idx_strategy_sessions_client_id ON strategy_sessions(client_id);
CREATE INDEX idx_strategy_sessions_consultant_id ON strategy_sessions(consultant_id);
CREATE INDEX idx_innovation_applications_program_id ON innovation_applications(program_id);
CREATE INDEX idx_innovation_applications_client_id ON innovation_applications(client_id);
CREATE INDEX idx_case_studies_project_id ON case_studies(project_id);

-- Insert demo data for testing
INSERT INTO users (id, email, role, created_at, updated_at) VALUES
  ('11111111-1111-1111-1111-111111111111', 'admin@v0flow.studio', 'admin', NOW(), NOW()),
  ('22222222-2222-2222-2222-222222222222', 'client@v0flow.studio', 'client', NOW(), NOW()),
  ('33333333-3333-3333-3333-333333333333', 'consultant@v0flow.studio', 'consultant', NOW(), NOW());

-- Add demo client
INSERT INTO clients (id, user_id, company_name, industry, contact_name, contact_email, contact_phone, created_at, updated_at) VALUES
  ('44444444-4444-4444-4444-444444444444', '22222222-2222-2222-2222-222222222222', 'Demo Company', 'Technology', 'Demo Client', 'client@v0flow.studio', '+1234567890', NOW(), NOW());

-- Add demo consultant
INSERT INTO consultants (id, user_id, name, title, bio, location, rate, availability, specialties, created_at, updated_at) VALUES
  ('55555555-5555-5555-5555-555555555555', '33333333-3333-3333-3333-333333333333', 'Demo Consultant', 'Senior Strategy Consultant', 'Experienced consultant with expertise in digital transformation', 'Remote', 300.00, 'Available', ARRAY['Digital Transformation', 'NGO Solutions', 'Data Strategy'], NOW(), NOW());
