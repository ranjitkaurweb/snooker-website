import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    )
    
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
  
  it('applies white background and rounded corners', () => {
    const { container } = render(
      <Card>
        <p>Content</p>
      </Card>
    )
    
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('bg-white')
    expect(card).toHaveClass('rounded-lg')
    expect(card).toHaveClass('shadow-md')
  })
  
  it('applies hover lift effect by default', () => {
    const { container } = render(
      <Card>
        <p>Content</p>
      </Card>
    )
    
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('hover:shadow-xl')
    expect(card).toHaveClass('hover:-translate-y-1')
    expect(card).toHaveClass('transition-all')
  })
  
  it('disables hover effect when hover prop is false', () => {
    const { container } = render(
      <Card hover={false}>
        <p>Content</p>
      </Card>
    )
    
    const card = container.firstChild as HTMLElement
    expect(card).not.toHaveClass('hover:shadow-xl')
    expect(card).not.toHaveClass('hover:-translate-y-1')
  })
  
  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <p>Content</p>
      </Card>
    )
    
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('custom-class')
  })
  
  it('handles onClick when provided', () => {
    const handleClick = jest.fn()
    
    render(
      <Card onClick={handleClick}>
        <p>Clickable content</p>
      </Card>
    )
    
    const card = screen.getByRole('button')
    fireEvent.click(card)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it('is keyboard accessible when onClick is provided', () => {
    const handleClick = jest.fn()
    
    render(
      <Card onClick={handleClick}>
        <p>Clickable content</p>
      </Card>
    )
    
    const card = screen.getByRole('button')
    
    // Test Enter key
    fireEvent.keyDown(card, { key: 'Enter' })
    expect(handleClick).toHaveBeenCalledTimes(1)
    
    // Test Space key
    fireEvent.keyDown(card, { key: ' ' })
    expect(handleClick).toHaveBeenCalledTimes(2)
  })
  
  it('has proper focus styles when interactive', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Card onClick={handleClick}>
        <p>Content</p>
      </Card>
    )
    
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('focus:outline-none')
    expect(card).toHaveClass('focus:ring-2')
    expect(card).toHaveClass('focus:ring-primary-500')
  })
  
  it('is not interactive when onClick is not provided', () => {
    const { container } = render(
      <Card>
        <p>Content</p>
      </Card>
    )
    
    const card = container.firstChild as HTMLElement
    expect(card).not.toHaveAttribute('role', 'button')
    expect(card).not.toHaveAttribute('tabIndex')
  })
})
