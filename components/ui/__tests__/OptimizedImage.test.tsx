import { render, screen, fireEvent } from '@testing-library/react'
import { OptimizedImage } from '../OptimizedImage'

describe('OptimizedImage', () => {
  const defaultProps = {
    src: '/images/test-image.jpg',
    alt: 'Test image',
    fallback: '/images/placeholders/fallback.png',
    width: 400,
    height: 300,
  }

  it('renders with the primary image source', () => {
    render(<OptimizedImage {...defaultProps} />)
    
    const img = screen.getByRole('img', { name: 'Test image' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'Test image')
  })

  it('displays fallback image when primary image fails to load', () => {
    render(<OptimizedImage {...defaultProps} />)
    
    const img = screen.getByRole('img', { name: 'Test image' })
    
    // Simulate image load error
    fireEvent.error(img)
    
    // The component should switch to fallback source
    expect(img).toHaveAttribute('src', expect.stringContaining('fallback'))
  })

  it('does not switch to fallback multiple times', () => {
    render(<OptimizedImage {...defaultProps} />)
    
    const img = screen.getByRole('img', { name: 'Test image' })
    
    // Simulate first error
    fireEvent.error(img)
    
    // Simulate second error (should not change again)
    fireEvent.error(img)
    
    // Should still be using fallback
    expect(img).toHaveAttribute('src', expect.stringContaining('fallback'))
  })

  it('applies custom className', () => {
    render(<OptimizedImage {...defaultProps} className="rounded-full" />)
    
    const img = screen.getByRole('img', { name: 'Test image' })
    expect(img).toHaveClass('rounded-full')
  })

  it('passes through additional Next.js Image props', () => {
    render(
      <OptimizedImage 
        {...defaultProps} 
        priority
        quality={90}
      />
    )
    
    const img = screen.getByRole('img', { name: 'Test image' })
    expect(img).toBeInTheDocument()
  })

  it('maintains alt text for accessibility', () => {
    render(<OptimizedImage {...defaultProps} alt="Member avatar" />)
    
    const img = screen.getByRole('img', { name: 'Member avatar' })
    expect(img).toHaveAttribute('alt', 'Member avatar')
  })

  it('handles empty alt text for decorative images', () => {
    render(<OptimizedImage {...defaultProps} alt="" />)
    
    const img = screen.getByRole('img', { name: '' })
    expect(img).toHaveAttribute('alt', '')
  })
})
