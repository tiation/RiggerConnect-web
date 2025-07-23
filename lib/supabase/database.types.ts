export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          role: 'rigger' | 'employer' | 'administrator'
          avatar: string | null
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          role: 'rigger' | 'employer' | 'administrator'
          avatar?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          role?: 'rigger' | 'employer' | 'administrator'
          avatar?: string | null
          phone?: string | null
          updated_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          company: string | null
          skills: string[] | null
          experience: number | null
          hourly_rate: number | null
          availability: 'available' | 'busy' | 'unavailable' | null
          verification_status: 'pending' | 'verified' | 'rejected'
          rating: number | null
          total_jobs: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          company?: string | null
          skills?: string[] | null
          experience?: number | null
          hourly_rate?: number | null
          availability?: 'available' | 'busy' | 'unavailable' | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          rating?: number | null
          total_jobs?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          skills?: string[] | null
          experience?: number | null
          hourly_rate?: number | null
          availability?: 'available' | 'busy' | 'unavailable' | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          rating?: number | null
          total_jobs?: number | null
          updated_at?: string
        }
      }
      jobs: {
        Row: {
          id: string
          title: string
          description: string
          location: string
          requirements: string[] | null
          hourly_rate: number
          duration: string | null
          status: 'draft' | 'published' | 'in_progress' | 'completed' | 'cancelled'
          employer_id: string
          assigned_rigger_id: string | null
          created_at: string
          updated_at: string
          deadline: string | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          location: string
          requirements?: string[] | null
          hourly_rate: number
          duration?: string | null
          status?: 'draft' | 'published' | 'in_progress' | 'completed' | 'cancelled'
          employer_id: string
          assigned_rigger_id?: string | null
          created_at?: string
          updated_at?: string
          deadline?: string | null
        }
        Update: {
          title?: string
          description?: string
          location?: string
          requirements?: string[] | null
          hourly_rate?: number
          duration?: string | null
          status?: 'draft' | 'published' | 'in_progress' | 'completed' | 'cancelled'
          assigned_rigger_id?: string | null
          updated_at?: string
          deadline?: string | null
        }
      }
      applications: {
        Row: {
          id: string
          job_id: string
          rigger_id: string
          status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
          proposed_rate: number | null
          message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          job_id: string
          rigger_id: string
          status?: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
          proposed_rate?: number | null
          message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          status?: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
          proposed_rate?: number | null
          message?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'rigger' | 'employer' | 'administrator'
      job_status: 'draft' | 'published' | 'in_progress' | 'completed' | 'cancelled'
      application_status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
      availability_status: 'available' | 'busy' | 'unavailable'
      verification_status: 'pending' | 'verified' | 'rejected'
    }
  }
}
