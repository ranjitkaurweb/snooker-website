import { render, screen } from '@testing-library/react'
import { NewsSection } from '../NewsSection'

// Mock the ScrollReveal component
jest.mock('@/components/animations/ScrollReveal', () => ({
  ScrollReveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

// Mock the NewsCard component
jest.mock('@/components/ui/NewsCard', () => ({
  NewsCard: ({ title, slug }: { title: string; slug: string }) => (
    <div data-testid={`news-card-${slug}`}>{title}</div>
  ),
}))

describe('NewsSection', () => {
  const mockArticles = [
    {
      slug: 'article-1',
      title: 'Test Article 1',
      description: 'Description 1',
      image: '/images/test1.jpg',
      date: '2024-01-15T10:00:00Z',
      category: 'Test',
    },
    {
      slug: 'article-2',
      title: 'Test Article 2',
      description: 'Description 2',
      image: '/images/test2.jpg',
      date: '2024-01-14T10:00:00Z',
      category: 'Test',
    },
    {
      slug: 'article-3',
      title: 'Test Article 3',
      description: 'Description 3',
      image: '/images/test3.jpg',
      date: '2024-01-13T10:00:00Z',
      category: 'Test',
    },
  ]

  it('renders the section heading', () => {
    render(<NewsSection heading="Latest News" articles={mockArticles} />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all news cards when maxDisplay is not specified', () => {
    render(<NewsSection heading="Latest News" articles={mockArticles} />)
    expect(screen.getByTestId('news-card-article-1')).toBeInTheDocument()
    expect(screen.getByTestId('news-card-article-2')).toBeInTheDocument()
    expect(screen.getByTestId('news-card-article-3')).toBeInTheDocument()
  })

  it('limits displayed articles when maxDisplay is specified', () => {
    render(<NewsSection heading="Latest News" articles={mockArticles} maxDisplay={2} />)
    expect(screen.getByTestId('news-card-article-1')).toBeInTheDocument()
    expect(screen.getByTestId('news-card-article-2')).toBeInTheDocument()
    expect(screen.queryByTestId('news-card-article-3')).not.toBeInTheDocument()
  })

  it('renders with proper semantic HTML structure', () => {
    const { container } = render(<NewsSection heading="Latest News" articles={mockArticles} />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'news')
    expect(section).toHaveAttribute('aria-label', 'News')
  })

  it('handles empty articles array', () => {
    render(<NewsSection heading="Latest News" articles={[]} />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.queryByTestId(/news-card-/)).not.toBeInTheDocument()
  })

  it('applies responsive grid classes', () => {
    const { container } = render(<NewsSection heading="Latest News" articles={mockArticles} />)
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3')
  })
})
