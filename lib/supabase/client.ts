import { createBrowserClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

// Environment variables validation with detailed error reporting
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validate required environment variables
if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required. Please check your environment variables.')
}

if (!supabaseAnonKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is required. Please check your environment variables.')
}

// URL format validation (skip for placeholder values in development)
if (!supabaseUrl.startsWith('https://')) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL must be a valid HTTPS URL')
}

// Only validate .supabase.co format for non-placeholder URLs
if (!supabaseUrl.includes('placeholder') && !supabaseUrl.includes('.supabase.co')) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL must be a valid Supabase URL (https://your-project.supabase.co)')
}

// Key format validation (basic check)
if (supabaseAnonKey.length < 100) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY appears to be invalid (too short)')
}

// Client-side Supabase client (for use in components)
export const createClientSupabase = () => createBrowserClient<Database>(
  supabaseUrl,
  supabaseAnonKey
)

// Anonymous client for public operations
export const createAnonSupabase = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

// Export database types
export type { Database } from './database.types'
