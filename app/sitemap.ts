import { MetadataRoute } from 'next'
import { getAllNewsArticles } from '@/lib/content'

/**
 * Generate sitemap for the website
 * Includes home page and all published news articles
 * 
 * @returns Promise<MetadataRoute.Sitemap> - Sitemap entries
 * 
 * Validates: Requirements 11.3
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://jalandharcuesports.org'

  try {
    // Load all news articles
    const articles = await getAllNewsArticles()

    // Generate news article URLs
    const newsUrls: MetadataRoute.Sitemap = articles.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    // Return sitemap with all pages and news articles
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${baseUrl}/vision`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/mission`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/objectives`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/leadership`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/executive`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/news`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
      },
      ...newsUrls,
    ]
  } catch (error) {
    // If news loading fails, return at least the home page
    console.error('Error generating sitemap:', error)
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
    ]
  }
}
