import { createClient } from "@supabase/supabase-js"
import type { Project, ProjectModule, Client, Consultant, User, AIAssistant, PricingTier, Payment } from "./types"

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// Project functions
export async function getProjects() {
  const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })
  if (error) throw error
  return data as Project[]
}

export async function getProject(id: string) {
  const { data, error } = await supabase.from("projects").select("*").eq("id", id).single()
  if (error) throw error
  return data as Project
}

export async function getProjectWithModules(id: string) {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      modules:project_modules(*)
    `)
    .eq("id", id)
    .single()

  if (error) throw error
  return data as Project & { modules: ProjectModule[] }
}

export async function updateProjectStatus(id: string, status: Project["status"]) {
  const { error } = await supabase
    .from("projects")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) throw error
  return true
}

export async function updateProject(id: string, updates: Partial<Project>) {
  const { error } = await supabase
    .from("projects")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) throw error
  return true
}

// Project modules functions
export async function getProjectModules(projectId: string) {
  const { data, error } = await supabase
    .from("project_modules")
    .select("*")
    .eq("project_id", projectId)
    .order("order", { ascending: true })

  if (error) throw error
  return data as ProjectModule[]
}

export async function updateModuleStatus(id: string, status: ProjectModule["status"]) {
  const { error } = await supabase
    .from("project_modules")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) throw error
  return true
}

export async function updateModuleCheckpoint(id: string, checkpoint: string) {
  const { error } = await supabase
    .from("project_modules")
    .update({ checkpoint, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) throw error
  return true
}

// Client functions
export async function getClients() {
  const { data, error } = await supabase.from("clients").select("*")
  if (error) throw error
  return data as Client[]
}

export async function getClient(id: string) {
  const { data, error } = await supabase.from("clients").select("*").eq("id", id).single()
  if (error) throw error
  return data as Client
}

export async function getClientByUserId(userId: string) {
  const { data, error } = await supabase.from("clients").select("*").eq("user_id", userId).single()
  if (error) throw error
  return data as Client
}

// Consultant functions
export async function getConsultants() {
  const { data, error } = await supabase.from("consultants").select("*")
  if (error) throw error
  return data as Consultant[]
}

export async function getConsultant(id: string) {
  const { data, error } = await supabase.from("consultants").select("*").eq("id", id).single()
  if (error) throw error
  return data as Consultant
}

export async function getConsultantByUserId(userId: string) {
  const { data, error } = await supabase.from("consultants").select("*").eq("user_id", userId).single()
  if (error) throw error
  return data as Consultant
}

// User functions
export async function getCurrentUser() {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession()
  if (sessionError) throw sessionError
  if (!session) return null

  const { data, error } = await supabase.from("users").select("*").eq("id", session.user.id).single()

  if (error) throw error
  return data as User
}

// AI Assistant functions
export async function getAIAssistants() {
  const { data, error } = await supabase.from("ai_assistants").select("*")
  if (error) throw error
  return data as AIAssistant[]
}

// Pricing functions
export async function getPricingTiers() {
  const { data, error } = await supabase.from("pricing_tiers").select("*")
  if (error) throw error
  return data as PricingTier[]
}

export async function calculateProjectPrice(projectId: string, pricingTierId: string) {
  // This would typically be a server-side function, but we'll simulate it here
  const { data: project, error: projectError } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single()

  if (projectError) throw projectError

  const { data: pricingTier, error: pricingError } = await supabase
    .from("pricing_tiers")
    .select("*")
    .eq("id", pricingTierId)
    .single()

  if (pricingError) throw pricingError

  // Simple pricing calculation
  const basePrice = (pricingTier as PricingTier).base_price

  // Update project with price
  const { error } = await supabase
    .from("projects")
    .update({
      price: basePrice,
      updated_at: new Date().toISOString(),
    })
    .eq("id", projectId)

  if (error) throw error

  return basePrice
}

// Payment functions
export async function createPayment(payment: Omit<Payment, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from("payments")
    .insert([
      {
        ...payment,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) throw error
  return data[0] as Payment
}

export async function getProjectPayments(projectId: string) {
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("project_id", projectId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data as Payment[]
}
