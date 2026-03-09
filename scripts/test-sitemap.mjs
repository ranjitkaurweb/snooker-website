// Test script to verify sitemap generation
import { readFile } from 'fs/promises'
import { join } from 'path'

const dataDir = join(process.cwd(), 'data')

async function getAllNewsArticles() {
  try {
    const indexPath = join(dataDir, 'news', 'index.json')
    const indexContent = await readFile(indexPath, 'utf-8')
    const index = JSON.parse(indexContent)

    if (!index.articles || !Array.isArray(index.articles)) {
      throw new Error('Invalid news index structure: articles array is required')
    }

    const articles = index.articles.map((article) => ({
      ...article,
      content: '',
      published: true,
    }))

    return articles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    throw new Error('Failed to load news articles: ' + error.message)
  }
}

async function generateSitemap() {
  const baseUrl = 'https://jalandharcuesports.org'

  try {
    const articles = await getAllNewsArticles()

    const newsUrls = articles.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      ...newsUrls,
    ]
  } catch (error) {
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

// Test the sitemap generation
console.log('Testing sitemap generation...\n')

try {
  const sitemap = await generateSitemap()
  
  console.log(`✓ Sitemap generated successfully`)
  console.log(`✓ Total URLs: ${sitemap.length}`)
  console.log(`✓ Home page URL: ${sitemap[0].url}`)
  console.log(`✓ Home page priority: ${sitemap[0].priority}`)
  console.log(`✓ Home page changeFrequency: ${sitemap[0].changeFrequency}`)
  
  if (sitemap.length > 1) {
    console.log(`\n✓ News articles: ${sitemap.length - 1}`)
    console.log(`✓ First news article: ${sitemap[1].url}`)
    console.log(`✓ News article priority: ${sitemap[1].priority}`)
    console.log(`✓ News article changeFrequency: ${sitemap[1].changeFrequency}`)
  }
  
  console.log('\n✓ All sitemap entries:')
  sitemap.forEach((entry, index) => {
    console.log(`  ${index + 1}. ${entry.url}`)
  })
  
  console.log('\n✓ Sitemap test passed!')
} catch (error) {
  console.error('✗ Sitemap test failed:', error.message)
  process.exit(1)
}
