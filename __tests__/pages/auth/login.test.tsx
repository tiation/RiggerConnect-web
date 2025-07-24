import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter, useSearchParams } from 'next/navigation'
import LoginPage from '@/app/auth/login/page'
import { useAuth } from '@/components/auth/auth-provider'

// Mock Next.js router and search params
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

// Mock the auth provider
jest.mock('@/components/auth/auth-provider', () => ({
  useAuth: jest.fn(),
}))

const mockRouter = {
  push: jest.fn(),
  refresh: jest.fn(),
}

const mockSearchParams = {
  get: jest.fn(),
}

const mockAuth = {
  signIn: jest.fn(),
}

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)
    ;(useAuth as jest.Mock).mockReturnValue(mockAuth)
    
    mockSearchParams.get.mockReturnValue('/dashboard')
  })

  it('renders login form correctly', () => {
    render(<LoginPage />)
    
    expect(screen.getByRole('heading', { name: /sign in to your account/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('shows validation error for empty fields', async () => {
    render(<LoginPage />)
    
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter both email and password/i)).toBeInTheDocument()
    })
  })

  it('handles successful login', async () => {
    mockAuth.signIn.mockResolvedValue({ error: null })
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText(/email address/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockAuth.signIn).toHaveBeenCalledWith('test@example.com', 'password123')
      expect(mockRouter.push).toHaveBeenCalledWith('/dashboard')
      expect(mockRouter.refresh).toHaveBeenCalled()
    })
  })

  it('handles login error', async () => {
    const errorMessage = 'Invalid credentials'
    mockAuth.signIn.mockResolvedValue({ error: { message: errorMessage } })
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText(/email address/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })
  })

  it('shows loading state during authentication', async () => {
    mockAuth.signIn.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ error: null }), 100)))
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText(/email address/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    expect(screen.getByText(/signing in.../i)).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
    
    await waitFor(() => {
      expect(screen.queryByText(/signing in.../i)).not.toBeInTheDocument()
    })
  })

  it('uses custom redirect URL from search params', async () => {
    mockSearchParams.get.mockReturnValue('/profile')
    mockAuth.signIn.mockResolvedValue({ error: null })
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText(/email address/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith('/profile')
    })
  })

  it('contains ChaseWhiteRabbit NGO branding', () => {
    render(<LoginPage />)
    
    expect(screen.getByText(/chasewhiterabbit ngo/i)).toBeInTheDocument()
    expect(screen.getByText(/riggerconnect/i)).toBeInTheDocument()
  })
})
