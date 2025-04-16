export type Project = {
  id: string
  name: string
  description: string
  file_path: string
  status:
    | "uploaded"
    | "parsing"
    | "schema_generated"
    | "database_deployed"
    | "github_pushed"
    | "vercel_deployed"
    | "completed"
  created_at: string
  updated_at: string
  github_url?: string
  vercel_url?: string
  schema?: string
  client_id?: string
  consultant_id?: string
  requirements?: string
  price?: number
  payment_status?: "unpaid" | "partial" | "paid"
  approved_by_client?: boolean
  approved_by_consultant?: boolean
  feedback?: string
  modules?: ProjectModule[]
  is_open_source?: boolean
  addons?: string[]
  estimated_hours?: number
  actual_hours?: number
  strategy_session_scheduled?: boolean
  strategy_session_completed?: boolean
  innovation_challenge_id?: string
  time_to_deploy?: number // in hours
  estimated_market_impact?: string
  snapshot?: string // JSON snapshot for recovery
}

export type ProjectModule = {
  id: string
  project_id: string
  name: string
  description: string
  status: "pending" | "in_progress" | "completed" | "failed"
  created_at: string
  updated_at: string
  order: number
  checkpoint?: string
}

export type Client = {
  id: string
  user_id: string
  company_name: string
  industry: string
  contact_name: string
  contact_email: string
  contact_phone?: string
  created_at: string
  updated_at: string
  logo_url?: string
}

export type Consultant = {
  id: string
  user_id: string
  name: string
  title: string
  bio: string
  location: string
  rate: number
  availability: string
  specialties: string[]
  image_url?: string
  created_at: string
  updated_at: string
  languages: string[]
  sector_expertise: string[]
  linkedin_url?: string
  rating?: number
  case_studies_count?: number
}

export type User = {
  id: string
  email: string
  role: "admin" | "client" | "consultant"
  created_at: string
  updated_at: string
}

export type AIAssistant = {
  id: string
  name: string
  description: string
  capabilities: string[]
  icon: string
  created_at: string
  updated_at: string
  type: "executive" | "client_service" | "finance" | "marketing"
}

export type PricingTier = {
  id: string
  name: string
  description: string
  base_price: number
  features: string[]
  created_at: string
  updated_at: string
}

export type Payment = {
  id: string
  project_id: string
  client_id: string
  amount: number
  status: "pending" | "completed" | "failed"
  payment_method: string
  transaction_id?: string
  created_at: string
  updated_at: string
  invoice_url?: string
  receipt_url?: string
}

export type Addon = {
  id: string
  name: string
  description: string
  price: number
  integration_type: "sms" | "email" | "whatsapp" | "payment" | "blockchain" | "verification" | "other"
  created_at: string
  updated_at: string
}

export type StrategySession = {
  id: string
  client_id: string
  consultant_id: string
  project_id?: string
  status: "scheduled" | "completed" | "cancelled"
  scheduled_at: string
  zoom_link?: string
  recording_url?: string
  meeting_notes?: string
  created_at: string
  updated_at: string
}

export type InnovationProgram = {
  id: string
  name: string
  organization_name: string
  focus_areas: string[]
  description: string
  grant_amount: number
  timeline_start: string
  timeline_end: string
  created_at: string
  updated_at: string
  logo_url?: string
}

export type InnovationApplication = {
  id: string
  program_id: string
  client_id: string
  idea: string
  community_partner: string
  expected_impact: string
  status: "submitted" | "under_review" | "accepted" | "rejected"
  created_at: string
  updated_at: string
  project_id?: string
}

export type CaseStudy = {
  id: string
  project_id: string
  problem: string
  solution: string
  tech_features: string[]
  time_to_deploy: number
  screenshot_url: string
  live_url: string
  consultant_quote?: string
  market_impact: string
  created_at: string
  updated_at: string
  published: boolean
}

export type PricingItem = {
  name: string
  description?: string
  price: number
  type: "base" | "hourly" | "addon"
}

export type PricingCalculation = {
  items: PricingItem[]
  subtotal: number
  tax: number
  total: number
}
