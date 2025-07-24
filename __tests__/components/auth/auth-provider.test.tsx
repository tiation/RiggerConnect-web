import { render, screen, waitFor, act } from '@testing-library/react'
import { AuthProvider, useAuth } from '@/components/auth/auth-provider'
import { createClientSupabase } from '@/lib/supabase/client'

// Mock the Supabase client
jest.mock('@/lib/supabase/client', () => ({
  createClientSupabase: jest.fn(),
}))

const mockSupabaseClient = {
  auth: {
    getSession: jest.fn(),
    onAuthStateChange: jest.fn(),
    signInWithPassword: jest.fn(),
    signUp: jest.fn(),
    signOut: jest.fn(),
  },
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      eq: jest.fn(() => ({
        single: jest.fn(),
      })),
    })),
    upsert: jest.fn(),
  })),
}

const mockSubscription = {
  unsubscribe: jest.fn(),
}

// Test component that uses the auth context
const TestComponent = () => {
  const { user, loading, signIn, signUp, signOut } = useAuth()
  
  return (
    <div>
      <div data-testid=\"loading\">{loading ? 'Loading...' : 'Ready'}</div>
      <div data-testid=\"user\">{user ? user.email : 'No user'}</div>
      <button onClick={() => signIn('test@example.com', 'password')}>
        Sign In
      </button>
      <button onClick={() => signUp('test@example.com', 'password')}>
        Sign Up
      </button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

describe('AuthProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(createClientSupabase as jest.Mock).mockReturnValue(mockSupabaseClient)
    
    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: null },
      error: null,
    })
    
    mockSupabaseClient.auth.onAuthStateChange.mockReturnValue({
      data: { subscription: mockSubscription },
    })
  })

  it('renders children and provides auth context', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    expect(screen.getByTestId('loading')).toHaveTextContent('Loading...')
    
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready')
    })
    
    expect(screen.getByTestId('user')).toHaveTextContent('No user')
  })

  it('handles user session correctly', async () => {
    const mockUser = {
      id: '123',
      email: 'test@example.com',
      email_confirmed_at: '2023-01-01',
    }
    
    const mockSession = {
      user: mockUser,
      access_token: 'token',
    }

    mockSupabaseClient.auth.getSession.mockResolvedValue({
      data: { session: mockSession },
      error: null,
    })

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('user')).toHaveTextContent('test@example.com')
    })
  })

  it('handles sign in correctly', async () => {
    mockSupabaseClient.auth.signInWithPassword.mockResolvedValue({
      data: { user: { email: 'test@example.com' } },
      error: null,
    })

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready')
    })

    act(() => {
      screen.getByText('Sign In').click()
    })

    await waitFor(() => {
      expect(mockSupabaseClient.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
      })
    })
  })

  it('handles sign up correctly', async () => {
    mockSupabaseClient.auth.signUp.mockResolvedValue({
      data: { user: { email: 'test@example.com' } },
      error: null,
    })

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready')
    })

    act(() => {
      screen.getByText('Sign Up').click()
    })

    await waitFor(() => {
      expect(mockSupabaseClient.auth.signUp).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
        options: {
          data: undefined,
        },
      })
    })
  })

  it('handles sign out correctly', async () => {
    mockSupabaseClient.auth.signOut.mockResolvedValue({
      error: null,
    })

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready')
    })

    act(() => {
      screen.getByText('Sign Out').click()
    })

    await waitFor(() => {
      expect(mockSupabaseClient.auth.signOut).toHaveBeenCalled()
    })
  })

  it('throws error when useAuth is used outside AuthProvider', () => {
    // Mock console.error to prevent error output in tests
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      render(<TestComponent />)
    }).toThrow('useAuth must be used within an AuthProvider')
    
    consoleSpy.mockRestore()
  })

  it('cleans up subscription on unmount', async () => {
    const { unmount } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready')
    })

    unmount()

    expect(mockSubscription.unsubscribe).toHaveBeenCalled()
  })
})
