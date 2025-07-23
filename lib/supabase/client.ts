import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { Database } from './database.types'

// Environment variables validation
const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Client-side Supabase client (for use in components)
export const createClientSupabase = () => createClientComponentClient<Database>()

// Server-side Supabase client (for use in server components and API routes)
export const createServerSupabase = async () => {
  const cookieStore = await cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}

// Service role client for admin operations (server-side only)
export const createServiceSupabase = () => {
  if (!supabaseServiceKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable')
  }
  
  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// Anonymous client for public operations
export const createAnonSupabase = () => {
  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

// Export database types
export type { Database } from './database.types'
