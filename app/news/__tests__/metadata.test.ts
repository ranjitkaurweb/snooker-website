import { generateMetadata } from '../[slug]/page'
import { getNewsArticle } from '@/lib/content'

// Mock the content module
jest.mock('@/lib/content', () => ({
  getNewsArticle: jest.fn(),
}))

describe('News Article Metadata Generation', () => {
  const mockArticle = {
    slug: 'test-article',
    title: 'Test Article Title',
    description: 'Test article description for SEO',
    content: '# Test Content',
    image: '/images/news/test.jpg',
    date: '2024-01-15T10:00:00Z',
    category: 'Test Category',
    author: 'Test Author',
    tags: ['test', 'article'],
    published: true,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('generates metadata with article title', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.title).toBe('Test Article Title')
  })

  it('generates metadata with article description', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.description).toBe('Test article description for SEO')
  })

  it('generates Open Graph tags', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph?.title).toBe('Test Article Title')
    expect(metadata.openGraph?.description).toBe('Test article description for SEO')
    expect(metadata.openGraph?.type).toBe('article')
  })

  it('includes published time in Open Graph tags', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.openGraph?.publishedTime).toBe('2024-01-15T10:00:00Z')
  })

  it('includes article image in Open Graph tags', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.openGraph?.images).toBeDefined()
    expect(metadata.openGraph?.images).toHaveLength(1)
    expect(metadata.openGraph?.images?.[0]).toEqual({
      url: '/images/news/test.jpg',
      alt: 'Test Article Title',
    })
  })

  it('generates Twitter card metadata', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue(mockArticle)

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.twitter).toBeDefined()
    expect(metadata.twitter?.card).toBe('summary_large_image')
    expect(metadata.twitter?.title).toBe('Test Article Title')
    expect(metadata.twitter?.description).toBe('Test article description for SEO')
    expect(metadata.twitter?.images).toEqual(['/images/news/test.jpg'])
  })

  it('returns 404 metadata for unpublished articles', async () => {
    ;(getNewsArticle as jest.Mock).mockResolvedValue({
      ...mockArticle,
      published: false,
    })

    const metadata = await generateMetadata({ params: { slug: 'test-article' } })

    expect(metadata.title).toBe('Article Not Found')
  })

  it('handles errors gracefully', async () => {
    ;(getNewsArticle as jest.Mock).mockRejectedValue(new Error('Article not found'))

    const metadata = await generateMetadata({ params: { slug: 'invalid-slug' } })

    expect(metadata.title).toBe('Article Not Found')
  })
})
