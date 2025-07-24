'use client'

import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  color?: 'orange' | 'white' | 'gray'
}

export function LoadingSpinner({ 
  size = 'md', 
  className,
  color = 'orange' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  const colorClasses = {
    orange: 'border-orange-600 border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-400 border-t-transparent'
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce"></div>
    </div>
  )
}

export function LoadingPulse({ className }: { className?: string }) {
  return (
    <div className={cn('flex space-x-2', className)}>
      <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
      <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse [animation-delay:0.2s]"></div>
      <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse [animation-delay:0.4s]"></div>
    </div>
  )
}
