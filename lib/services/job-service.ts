import { createClientSupabase } from '../supabase/client'
import { createServerSupabase } from '../supabase/server'
import { Database } from '../supabase/database.types'

type Job = Database['public']['Tables']['jobs']['Row']
type JobInsert = Database['public']['Tables']['jobs']['Insert']
type JobUpdate = Database['public']['Tables']['jobs']['Update']

type Application = Database['public']['Tables']['applications']['Row']
type ApplicationInsert = Database['public']['Tables']['applications']['Insert']
type ApplicationUpdate = Database['public']['Tables']['applications']['Update']

export interface CreateJobData {
  title: string
  description: string
  location: string
  requirements?: string[]
  hourlyRate: number
  duration?: string
  deadline?: string
}

export interface JobApplication {
  jobId: string
  proposedRate?: number
  message?: string
}

// Client-side job service
export class ClientJobService {
  private supabase = createClientSupabase()

  async createJob(data: CreateJobData, employerId: string) {
    try {
      const jobData: JobInsert = {
        title: data.title,
        description: data.description,
        location: data.location,
        requirements: data.requirements || null,
        hourly_rate: data.hourlyRate,
        duration: data.duration || null,
        deadline: data.deadline || null,
        employer_id: employerId,
        status: 'draft'
      }

      const { data: job, error } = await this.supabase
        .from('jobs')
        .insert(jobData)
        .select()
        .single()

      if (error) throw error

      return { job, error: null }
    } catch (error) {
      console.error('Create job error:', error)
      return { job: null, error }
    }
  }

  async updateJob(jobId: string, updates: Partial<CreateJobData>) {
    try {
      const jobUpdate: JobUpdate = {
        title: updates.title,
        description: updates.description,
        location: updates.location,
        requirements: updates.requirements || null,
        hourly_rate: updates.hourlyRate,
        duration: updates.duration || null,
        deadline: updates.deadline || null,
        updated_at: new Date().toISOString()
      }

      const { data: job, error } = await this.supabase
        .from('jobs')
        .update(jobUpdate)
        .eq('id', jobId)
        .select()
        .single()

      if (error) throw error

      return { job, error: null }
    } catch (error) {
      console.error('Update job error:', error)
      return { job: null, error }
    }
  }

  async publishJob(jobId: string) {
    try {
      const { data: job, error } = await this.supabase
        .from('jobs')
        .update({ status: 'published', updated_at: new Date().toISOString() })
        .eq('id', jobId)
        .select()
        .single()

      if (error) throw error

      return { job, error: null }
    } catch (error) {
      console.error('Publish job error:', error)
      return { job: null, error }
    }
  }

  async getJobsByEmployer(employerId: string) {
    try {
      const { data: jobs, error } = await this.supabase
        .from('jobs')
        .select('*')
        .eq('employer_id', employerId)
        .order('created_at', { ascending: false })

      if (error) throw error

      return { jobs: jobs || [], error: null }
    } catch (error) {
      console.error('Get jobs by employer error:', error)
      return { jobs: [], error }
    }
  }

  async getPublishedJobs(limit = 20, offset = 0) {
    try {
      const { data: jobs, error } = await this.supabase
        .from('jobs')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) throw error

      return { jobs: jobs || [], error: null }
    } catch (error) {
      console.error('Get published jobs error:', error)
      return { jobs: [], error }
    }
  }

  async getJobById(jobId: string) {
    try {
      const { data: job, error } = await this.supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single()

      if (error) throw error

      return { job, error: null }
    } catch (error) {
      console.error('Get job by ID error:', error)
      return { job: null, error }
    }
  }

  async searchJobs(query: string, location?: string) {
    try {
      let queryBuilder = this.supabase
        .from('jobs')
        .select('*')
        .eq('status', 'published')
        .or(`title.ilike.%${query}%,description.ilike.%${query}%`)

      if (location) {
        queryBuilder = queryBuilder.ilike('location', `%${location}%`)
      }

      const { data: jobs, error } = await queryBuilder
        .order('created_at', { ascending: false })

      if (error) throw error

      return { jobs: jobs || [], error: null }
    } catch (error) {
      console.error('Search jobs error:', error)
      return { jobs: [], error }
    }
  }

  async applyToJob(data: JobApplication, riggerId: string) {
    try {
      const applicationData: ApplicationInsert = {
        job_id: data.jobId,
        rigger_id: riggerId,
        proposed_rate: data.proposedRate || null,
        message: data.message || null,
        status: 'pending'
      }

      const { data: application, error } = await this.supabase
        .from('applications')
        .insert(applicationData)
        .select()
        .single()

      if (error) throw error

      return { application, error: null }
    } catch (error) {
      console.error('Apply to job error:', error)
      return { application: null, error }
    }
  }

  async getApplicationsByJob(jobId: string) {
    try {
      const { data: applications, error } = await this.supabase
        .from('applications')
        .select(`
          *,
          users:rigger_id (
            id,
            first_name,
            last_name,
            email
          )
        `)
        .eq('job_id', jobId)
        .order('created_at', { ascending: false })

      if (error) throw error

      return { applications: applications || [], error: null }
    } catch (error) {
      console.error('Get applications by job error:', error)
      return { applications: [], error }
    }
  }

  async getApplicationsByRigger(riggerId: string) {
    try {
      const { data: applications, error } = await this.supabase
        .from('applications')
        .select(`
          *,
          jobs:job_id (
            id,
            title,
            description,
            location,
            hourly_rate,
            status
          )
        `)
        .eq('rigger_id', riggerId)
        .order('created_at', { ascending: false })

      if (error) throw error

      return { applications: applications || [], error: null }
    } catch (error) {
      console.error('Get applications by rigger error:', error)
      return { applications: [], error }
    }
  }

  async updateApplicationStatus(applicationId: string, status: Application['status']) {
    try {
      const { data: application, error } = await this.supabase
        .from('applications')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', applicationId)
        .select()
        .single()

      if (error) throw error

      return { application, error: null }
    } catch (error) {
      console.error('Update application status error:', error)
      return { application: null, error }
    }
  }

  async assignJobToRigger(jobId: string, riggerId: string) {
    try {
      const { data: job, error } = await this.supabase
        .from('jobs')
        .update({ 
          assigned_rigger_id: riggerId, 
          status: 'in_progress',
          updated_at: new Date().toISOString() 
        })
        .eq('id', jobId)
        .select()
        .single()

      if (error) throw error

      // Also update the accepted application
      await this.supabase
        .from('applications')
        .update({ status: 'accepted', updated_at: new Date().toISOString() })
        .eq('job_id', jobId)
        .eq('rigger_id', riggerId)

      // Reject other applications
      await this.supabase
        .from('applications')
        .update({ status: 'rejected', updated_at: new Date().toISOString() })
        .eq('job_id', jobId)
        .neq('rigger_id', riggerId)

      return { job, error: null }
    } catch (error) {
      console.error('Assign job to rigger error:', error)
      return { job: null, error }
    }
  }

  async completeJob(jobId: string) {
    try {
      const { data: job, error } = await this.supabase
        .from('jobs')
        .update({ status: 'completed', updated_at: new Date().toISOString() })
        .eq('id', jobId)
        .select()
        .single()

      if (error) throw error

      return { job, error: null }
    } catch (error) {
      console.error('Complete job error:', error)
      return { job: null, error }
    }
  }
}

// Server-side job service
export class ServerJobService {
  static async getJobById(jobId: string) {
    try {
      const supabase = await createServerSupabase()
      const { data: job, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single()

      if (error) throw error

      return { job, error: null }
    } catch (error) {
      console.error('Server get job by ID error:', error)
      return { job: null, error }
    }
  }

  static async getPublishedJobs(limit = 20, offset = 0) {
    try {
      const supabase = await createServerSupabase()
      const { data: jobs, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) throw error

      return { jobs: jobs || [], error: null }
    } catch (error) {
      console.error('Server get published jobs error:', error)
      return { jobs: [], error }
    }
  }
}

// Export service instance
export const jobService = new ClientJobService()
