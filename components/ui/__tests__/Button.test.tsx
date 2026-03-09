import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('renders primary variant by default', () => {
    render(<Button>Primary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary-600')
  })

  it('renders secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-accent-500')
  })

  it('renders outline variant', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-2', 'border-primary-600')
  })

  it('renders small size', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm')
  })

  it('renders medium size by default', () => {
    render(<Button>Medium</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-6', 'py-3', 'text-base')
  })

  it('renders large size', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-8', 'py-4', 'text-lg')
  })

  it('ensures minimum touch target size for all sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('min-h-[44px]')

    rerender(<Button size="md">Medium</Button>)
    expect(screen.getByRole('button')).toHaveClass('min-h-[44px]')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('min-h-[44px]')
  })

  it('renders as link when href is provided', () => {
    render(<Button href="/about">Go to About</Button>)
    const link = screen.getByRole('link', { name: /go to about/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('handles onClick callback', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('includes ARIA label when provided', () => {
    render(<Button ariaLabel="Submit form">Submit</Button>)
    expect(screen.getByRole('button', { name: 'Submit form' })).toBeInTheDocument()
  })

  it('includes focus ring styles for accessibility', () => {
    render(<Button>Focus me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2')
  })

  it('includes smooth transition styles', () => {
    render(<Button>Transition</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('transition-all', 'duration-200', 'ease-in-out')
  })
})
