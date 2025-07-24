'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/components/auth/auth-provider'
import { AnimatedButton } from '@/components/ui/animated-button'
import { motion } from 'framer-motion'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const { signIn } = useAuth() // We'll add resetPassword method later

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!email) {
      setError('Please enter your email address')
      setLoading(false)
      return
    }

    // TODO: Implement password reset with Supabase
    // For now, simulate the request
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSuccess(true)
    } catch (err) {
      setError('Failed to send reset email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className=\"min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8\">
        <motion.div 
          className=\"sm:mx-auto sm:w-full sm:max-w-md\"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className=\"bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10\">
            <div className=\"text-center\">
              <div className=\"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900\">
                <svg className=\"h-6 w-6 text-green-600 dark:text-green-400\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M5 13l4 4L19 7\" />
                </svg>
              </div>
              <h2 className=\"mt-4 text-xl font-semibold text-gray-900 dark:text-white\">
                Check your email
              </h2>
              <p className=\"mt-2 text-sm text-gray-600 dark:text-gray-400\">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className=\"mt-4 text-xs text-gray-500 dark:text-gray-400\">
                Didn't receive the email? Check your spam folder or{' '}
                <button 
                  onClick={() => setSuccess(false)}
                  className=\"text-orange-600 hover:text-orange-500 font-medium\"
                >
                  try again
                </button>
              </p>
            </div>
            
            <div className=\"mt-6\">
              <Link
                href=\"/auth/login\"
                className=\"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 transition-colors\"
              >
                Back to sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className=\"min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8\">
      {/* Header */}
      <motion.div 
        className=\"sm:mx-auto sm:w-full sm:max-w-md\"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href=\"/\" className=\"flex justify-center items-center mb-6\">
          <h1 className=\"text-3xl font-bold text-orange-600 dark:text-orange-400\">
            RiggerConnect
          </h1>
          <span className=\"ml-2 text-lg text-gray-600 dark:text-gray-400\">WA</span>
        </Link>
        <h2 className=\"text-center text-3xl font-extrabold text-gray-900 dark:text-white\">
          Reset your password
        </h2>
        <p className=\"mt-2 text-center text-sm text-gray-600 dark:text-gray-400\">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div 
        className=\"mt-8 sm:mx-auto sm:w-full sm:max-w-md\"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className=\"bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10\">
          <form className=\"space-y-6\" onSubmit={handleSubmit}>
            {error && (
              <motion.div 
                className=\"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded relative\"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className=\"block sm:inline\">{error}</span>
              </motion.div>
            )}

            <div>
              <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 dark:text-gray-300\">
                Email address
              </label>
              <div className=\"mt-1\">
                <input
                  id=\"email\"
                  name=\"email\"
                  type=\"email\"
                  autoComplete=\"email\"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=\"appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white sm:text-sm transition-all duration-200\"
                  placeholder=\"your.email@example.com\"
                />
              </div>
            </div>

            <div>
              <AnimatedButton
                type=\"submit\"
                loading={loading}
                className=\"w-full\"
                size=\"lg\"
              >
                Send reset link
              </AnimatedButton>
            </div>
          </form>

          <div className=\"mt-6\">
            <div className=\"relative\">
              <div className=\"absolute inset-0 flex items-center\">
                <div className=\"w-full border-t border-gray-300 dark:border-gray-600\" />
              </div>
              <div className=\"relative flex justify-center text-sm\">
                <span className=\"px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400\">
                  Remember your password?
                </span>
              </div>
            </div>

            <div className=\"mt-6\">
              <Link
                href=\"/auth/login\"
                className=\"w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-offset-gray-800 transition-colors\"
              >
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        className=\"mt-8 text-center text-sm text-gray-600 dark:text-gray-400\"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          Supporting{' '}
          <span className=\"font-medium text-gray-900 dark:text-white\">
            ChaseWhiteRabbit NGO
          </span>
        </p>
      </motion.div>
    </div>
  )
}
