import React from 'react'
import Link from 'next/link'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500',
    secondary: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 focus:ring-accent-500',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500',
  }
  
  // Size styles - ensuring minimum 44x44px touch target
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[44px] min-w-[44px]',
    md: 'px-6 py-3 text-base min-h-[44px] min-w-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[44px] min-w-[44px]',
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {children}
      </Link>
    )
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
