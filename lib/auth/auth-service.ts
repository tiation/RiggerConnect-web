import { createClientSupabase, createServiceSupabase } from '../supabase/client'
import { createServerSupabase } from '../supabase/server'
import { Database } from '../supabase/database.types'

export type UserRole = 'rigger' | 'employer' | 'administrator'

export interface SignUpData {
  email: string
  password: string
  firstName: string
  lastName: string
  role: UserRole
  phone?: string
}

export interface SignInData {
  email: string
  password: string
}

export interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  avatar?: string
  phone?: string
  createdAt: string
  updatedAt: string
}

// Client-side authentication methods
export class ClientAuthService {
  private supabase = createClientSupabase()

  async signUp(data: SignUpData) {
    try {
      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await this.supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
            role: data.role,
            phone: data.phone
          }
        }
      })

      if (authError) throw authError

      return { user: authData.user, error: null }
    } catch (error) {
      console.error('Sign up error:', error)
      return { user: null, error }
    }
  }

  async signIn(data: SignInData) {
    try {
      const { data: authData, error } = await this.supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      })

      if (error) throw error

      return { user: authData.user, session: authData.session, error: null }
    } catch (error) {
      console.error('Sign in error:', error)
      return { user: null, session: null, error }
    }
  }

  async signOut() {
    try {
      const { error } = await this.supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Sign out error:', error)
      return { error }
    }
  }

  async getCurrentUser() {
    try {
      const { data: { user }, error } = await this.supabase.auth.getUser()
      
      if (error) throw error
      
      return { user, error: null }
    } catch (error) {
      console.error('Get current user error:', error)
      return { user: null, error }
    }
  }

  async updateProfile(updates: Partial<UserProfile>) {
    try {
      const { data, error } = await this.supabase.auth.updateUser({
        data: {
          first_name: updates.firstName,
          last_name: updates.lastName,
          phone: updates.phone,
          avatar: updates.avatar
        }
      })

      if (error) throw error

      return { user: data.user, error: null }
    } catch (error) {
      console.error('Update profile error:', error)
      return { user: null, error }
    }
  }

  async resetPassword(email: string) {
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      })

      if (error) throw error

      return { error: null }
    } catch (error) {
      console.error('Reset password error:', error)
      return { error }
    }
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }
}

// Server-side authentication methods
export class ServerAuthService {
  static async getCurrentUser() {
    try {
      const supabase = await createServerSupabase()
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error) throw error
      
      return { user, error: null }
    } catch (error) {
      console.error('Server get current user error:', error)
      return { user: null, error }
    }
  }

  static async getCurrentSession() {
    try {
      const supabase = await createServerSupabase()
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) throw error
      
      return { session, error: null }
    } catch (error) {
      console.error('Server get current session error:', error)
      return { session: null, error }
    }
  }
}

// Admin service for user management
export class AdminAuthService {
  private supabase = createServiceSupabase()

  async createUser(userData: SignUpData) {
    try {
      const { data, error } = await this.supabase.auth.admin.createUser({
        email: userData.email,
        password: userData.password,
        user_metadata: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          role: userData.role,
          phone: userData.phone
        },
        email_confirm: true
      })

      if (error) throw error

      return { user: data.user, error: null }
    } catch (error) {
      console.error('Admin create user error:', error)
      return { user: null, error }
    }
  }

  async deleteUser(userId: string) {
    try {
      const { data, error } = await this.supabase.auth.admin.deleteUser(userId)

      if (error) throw error

      return { user: data.user, error: null }
    } catch (error) {
      console.error('Admin delete user error:', error)
      return { user: null, error }
    }
  }

  async listUsers(page = 1, perPage = 10) {
    try {
      const { data, error } = await this.supabase.auth.admin.listUsers({
        page,
        perPage
      })

      if (error) throw error

      return { users: data.users, error: null }
    } catch (error) {
      console.error('Admin list users error:', error)
      return { users: [], error }
    }
  }
}

// Export instances for easy usage
export const clientAuth = new ClientAuthService()
export const adminAuth = new AdminAuthService()
