import React from 'react'
import { render, screen } from '@testing-library/react'
import { NewsCard } from '../NewsCard'

describe('NewsCard Component', () => {
  const mockArticle = {
    title: 'Test Article Title',
    description: 'This is a test article description that provides a preview of the content.',
    image: '/images/news/test-article.jpg',
    slug: 'test-article',
    date: '2024-01-15T10:00:00Z',
    category: 'Tournaments',
  }

  it('renders article title', () => {
    render(<NewsCard {...mockArticle} />)
    expect(screen.getByText('Test Article Title')).toBeInTheDocument()
  })

  it('renders article description', () => {
    render(<NewsCard {...mockArticle} />)
    expect(screen.getByText(/This is a test article description/)).toBeInTheDocument()
  })

  it('renders article image with alt text', () => {
    render(<NewsCard {...mockArticle} />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Test Article Title')
  })

  it('renders formatted date', () => {
    render(<NewsCard {...mockArticle} />)
    const dateElement = screen.getByText('January 15, 2024')
    expect(dateElement).toBeInTheDocument()
    expect(dateElement.tagName).toBe('TIME')
    expect(dateElement).toHaveAttribute('datetime', '2024-01-15T10:00:00Z')
  })

  it('renders category badge when category is provided', () => {
    render(<NewsCard {...mockArticle} />)
    expect(screen.getByText('Tournaments')).toBeInTheDocument()
  })

  it('does not render category badge when category is not provided', () => {
    const articleWithoutCategory = { ...mockArticle, category: undefined }
    render(<NewsCard {...articleWithoutCategory} />)
    expect(screen.queryByText('Tournaments')).not.toBeInTheDocument()
  })

  it('renders "Read More" link with correct href', () => {
    render(<NewsCard {...mockArticle} />)
    const link = screen.getByRole('link', { name: /read more about test article title/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/news/test-article')
  })

  it('generates correct article URL for any slug', () => {
    const customSlug = 'championship-2024-results'
    render(<NewsCard {...mockArticle} slug={customSlug} />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toHaveAttribute('href', `/news/${customSlug}`)
  })

  it('includes hover effects classes', () => {
    const { container } = render(<NewsCard {...mockArticle} />)
    const article = container.querySelector('article')
    expect(article).toHaveClass('hover:shadow-xl', 'hover:-translate-y-1')
  })

  it('includes smooth transition classes', () => {
    const { container } = render(<NewsCard {...mockArticle} />)
    const article = container.querySelector('article')
    expect(article).toHaveClass('transition-all', 'duration-300', 'ease-in-out')
  })

  it('includes image hover scale effect', () => {
    const { container } = render(<NewsCard {...mockArticle} />)
    const image = container.querySelector('img')
    expect(image).toHaveClass('group-hover:scale-105')
  })

  it('ensures "Read More" link meets minimum touch target size', () => {
    render(<NewsCard {...mockArticle} />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toHaveClass('min-h-[44px]', 'min-w-[44px]')
  })

  it('includes accessible ARIA label for "Read More" link', () => {
    render(<NewsCard {...mockArticle} />)
    const link = screen.getByRole('link', { name: 'Read more about Test Article Title' })
    expect(link).toBeInTheDocument()
  })

  it('renders as semantic article element', () => {
    const { container } = render(<NewsCard {...mockArticle} />)
    const article = container.querySelector('article')
    expect(article).toBeInTheDocument()
  })

  it('truncates long titles with line-clamp', () => {
    const longTitle = 'This is a very long article title that should be truncated after two lines to maintain consistent card heights'
    render(<NewsCard {...mockArticle} title={longTitle} />)
    const titleElement = screen.getByText(longTitle)
    expect(titleElement).toHaveClass('line-clamp-2')
  })

  it('truncates long descriptions with line-clamp', () => {
    const longDescription = 'This is a very long description that should be truncated after three lines to maintain consistent card heights and provide a clean preview of the article content without overwhelming the user with too much text.'
    render(<NewsCard {...mockArticle} description={longDescription} />)
    const descriptionElement = screen.getByText(longDescription)
    expect(descriptionElement).toHaveClass('line-clamp-3')
  })

  it('includes arrow icon in "Read More" link', () => {
    const { container } = render(<NewsCard {...mockArticle} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('includes hover animation for arrow icon', () => {
    const { container } = render(<NewsCard {...mockArticle} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('group-hover:translate-x-1')
  })
})
