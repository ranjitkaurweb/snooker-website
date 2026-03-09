import { render, screen } from '@testing-library/react'
import { VisionSection } from '../VisionSection'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}))

describe('VisionSection', () => {
  const mockProps = {
    heading: 'Our Vision',
    description: 'Building a thriving cue sports community',
    pillars: [
      {
        title: 'Organic Growth',
        description: 'Fostering natural development of talent',
      },
      {
        title: 'Organic Development',
        description: 'Nurturing players through structured training',
      },
      {
        title: 'Sustainability',
        description: 'Building lasting infrastructure and partnerships',
      },
    ],
  }

  it('renders the vision heading', () => {
    render(<VisionSection {...mockProps} />)
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })

  it('renders the vision description', () => {
    render(<VisionSection {...mockProps} />)
    expect(screen.getByText('Building a thriving cue sports community')).toBeInTheDocument()
  })

  it('renders all three vision pillars', () => {
    render(<VisionSection {...mockProps} />)
    expect(screen.getByText('Organic Growth')).toBeInTheDocument()
    expect(screen.getByText('Organic Development')).toBeInTheDocument()
    expect(screen.getByText('Sustainability')).toBeInTheDocument()
  })

  it('renders pillar descriptions', () => {
    render(<VisionSection {...mockProps} />)
    expect(screen.getByText('Fostering natural development of talent')).toBeInTheDocument()
    expect(screen.getByText('Nurturing players through structured training')).toBeInTheDocument()
    expect(screen.getByText('Building lasting infrastructure and partnerships')).toBeInTheDocument()
  })

  it('renders with correct section id', () => {
    const { container } = render(<VisionSection {...mockProps} />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'vision')
  })

  it('renders with correct aria-label', () => {
    const { container } = render(<VisionSection {...mockProps} />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('aria-label', 'Vision')
  })

  it('renders numbered indicators for each pillar', () => {
    const { container } = render(<VisionSection {...mockProps} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
