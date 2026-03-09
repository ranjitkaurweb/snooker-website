// Content loading utilities for Sports Association Website
// Provides functions to load and parse content from JSON and Markdown files

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import type {
  SiteContent,
  LeadershipData,
  ExecutiveData,
  NewsArticle,
  NewsIndex,
} from './types'

const dataDir = path.join(process.cwd(), 'data')

/**
 * Load site content from content.json
 * @returns Promise<SiteContent> - Site content including hero, vision, mission, and footer
 * @throws Error if file is missing or contains invalid JSON
 */
export async function getSiteContent(): Promise<SiteContent> {
  try {
    const filePath = path.join(dataDir, 'content.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    // Validate structure
    if (!data.hero || !data.vision || !data.mission || !data.footer) {
      throw new Error('Invalid content structure: missing required sections')
    }

    return data as SiteContent
  } catch (error) {
    if (error instanceof Error) {
      if ('code' in error && error.code === 'ENOENT') {
        throw new Error('Content file not found: data/content.json')
      }
      if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON in content.json: ' + error.message)
      }
      throw error
    }
    throw new Error('Failed to load site content')
  }
}

/**
 * Load leadership members from leadership.json
 * @returns Promise<LeadershipData> - Leadership team data
 * @throws Error if file is missing or contains invalid JSON
 */
export async function getLeadership(): Promise<LeadershipData> {
  try {
    const filePath = path.join(dataDir, 'leadership.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    // Validate structure
    if (!data.members || !Array.isArray(data.members)) {
      throw new Error('Invalid leadership structure: members array is required')
    }

    return data as LeadershipData
  } catch (error) {
    if (error instanceof Error) {
      if ('code' in error && error.code === 'ENOENT') {
        throw new Error('Leadership file not found: data/leadership.json')
      }
      if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON in leadership.json: ' + error.message)
      }
      throw error
    }
    throw new Error('Failed to load leadership data')
  }
}

/**
 * Load executive members from executive.json
 * @returns Promise<ExecutiveData> - Executive team data
 * @throws Error if file is missing or contains invalid JSON
 */
export async function getExecutive(): Promise<ExecutiveData> {
  try {
    const filePath = path.join(dataDir, 'executive.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    // Validate structure
    if (!data.members || !Array.isArray(data.members)) {
      throw new Error('Invalid executive structure: members array is required')
    }

    return data as ExecutiveData
  } catch (error) {
    if (error instanceof Error) {
      if ('code' in error && error.code === 'ENOENT') {
        throw new Error('Executive file not found: data/executive.json')
      }
      if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON in executive.json: ' + error.message)
      }
      throw error
    }
    throw new Error('Failed to load executive data')
  }
}

/**
 * Load and sort all news articles from news/index.json
 * @returns Promise<NewsArticle[]> - Array of news articles sorted by date (newest first)
 * @throws Error if file is missing or contains invalid JSON
 */
export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  try {
    const indexPath = path.join(dataDir, 'news', 'index.json')
    const indexContent = await fs.readFile(indexPath, 'utf-8')
    const index: NewsIndex = JSON.parse(indexContent)

    // Validate structure
    if (!index.articles || !Array.isArray(index.articles)) {
      throw new Error('Invalid news index structure: articles array is required')
    }

    // Convert index articles to full NewsArticle format
    // Note: content field will be empty for index listings
    const articles: NewsArticle[] = index.articles.map((article) => ({
      ...article,
      content: '',
      published: true,
    }))

    // Sort by date (newest first)
    return articles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    if (error instanceof Error) {
      if ('code' in error && error.code === 'ENOENT') {
        throw new Error('News index file not found: data/news/index.json')
      }
      if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON in news/index.json: ' + error.message)
      }
      throw error
    }
    throw new Error('Failed to load news articles')
  }
}

/**
 * Load individual news article markdown file
 * @param slug - Article slug (filename without .md extension)
 * @returns Promise<NewsArticle> - Full news article with markdown content
 * @throws Error if file is missing or contains invalid frontmatter
 */
export async function getNewsArticle(slug: string): Promise<NewsArticle> {
  try {
    const filePath = path.join(dataDir, 'news', `${slug}.md`)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    // Validate required frontmatter fields
    if (!data.title || !data.description || !data.image || !data.date) {
      throw new Error(
        `Invalid article frontmatter in ${slug}.md: missing required fields (title, description, image, date)`
      )
    }

    return {
      slug,
      title: data.title,
      description: data.description,
      content,
      image: data.image,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags,
      published: data.published !== false,
    }
  } catch (error) {
    if (error instanceof Error) {
      if ('code' in error && error.code === 'ENOENT') {
        throw new Error(`News article not found: data/news/${slug}.md`)
      }
      throw error
    }
    throw new Error(`Failed to load news article: ${slug}`)
  }
}
