import { render, screen } from '@testing-library/react'
import { getNewsArticle } from '@/lib/content'

// Mock the content loading function
jest.mock('@/lib/content', () => ({
  getNewsArticle: jest.fn(),
  getAllNewsArticles: jest.fn(),
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

// Mock ReactMarkdown
jest.mock('react-markdown', () => {
  return function ReactMarkdown({ children }: { children: string }) {
    return <div data-testid="markdown-content">{children}</div>
  }
})

// Mock remark-gfm
jest.mock('remark-gfm', () => ({}))

describe('News Article Page', () => {
  const mockArticle = {
    slug: 'test-article',
    title: 'Test Article Title',
    description: 'Test article description',
    content: '## Test Content\n\nThis is test content.',
    image: '/images/news/test.jpg',
    date: '2024-01-15T10:00:00Z',
    author: 'Test Author',
    category: 'Test Category',
    tags: ['test', 'article'],
    published: true,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('loads article content using getNewsArticle', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    // Import the page component dynamically
    const NewsArticlePage = (await import('../page')).default

    await NewsArticlePage({ params: { slug: 'test-article' } })

    expect(getNewsArticle).toHaveBeenCalledWith('test-article')
  })

  it('handles unpublished articles by calling notFound', async () => {
    const unpublishedArticle = { ...mockArticle, published: false }
    ;(getNewsArticle as jest.Mock).mockResolvedValue(unpublishedArticle)

    const { notFound } = await import('next/navigation')
    const NewsArticlePage = (await import('../page')).default

    await NewsArticlePage({ params: { slug: 'unpublished' } })

    expect(notFound).toHaveBeenCalled()
  })

  it('handles missing articles by calling notFound', async () => {
    ;(getNewsArticle as jest.Mock).mockRejectedValue(
      new Error('Article not found')
    )

    const { notFound } = await import('next/navigation')
    const NewsArticlePage = (await import('../page')).default

    await NewsArticlePage({ params: { slug: 'missing' } })

    expect(notFound).toHaveBeenCalled()
  })
})
