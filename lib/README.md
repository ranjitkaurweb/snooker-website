# Content Loading Utilities

This directory contains utility functions for loading and parsing content from JSON and Markdown files.

## Files

- `types.ts` - TypeScript type definitions for all data structures
- `content.ts` - Content loading utilities with error handling

## Functions

### `getSiteContent(): Promise<SiteContent>`

Loads the main site content from `data/content.json` including:
- Hero section (title, tagline, CTA)
- Vision section (heading, description, pillars)
- Mission section (heading, points)
- Footer content (about, galleries, contact, social)

**Error Handling:**
- Throws error if file is missing
- Throws error if JSON is invalid
- Validates required sections exist

### `getLeadership(): Promise<LeadershipData>`

Loads leadership team members from `data/leadership.json`.

**Error Handling:**
- Throws error if file is missing
- Throws error if JSON is invalid
- Validates members array exists

### `getExecutive(): Promise<ExecutiveData>`

Loads executive team members from `data/executive.json`.

**Error Handling:**
- Throws error if file is missing
- Throws error if JSON is invalid
- Validates members array exists

### `getAllNewsArticles(): Promise<NewsArticle[]>`

Loads all news articles from `data/news/index.json` and sorts them by date (newest first).

**Error Handling:**
- Throws error if file is missing
- Throws error if JSON is invalid
- Validates articles array exists
- Automatically sorts by date

### `getNewsArticle(slug: string): Promise<NewsArticle>`

Loads an individual news article markdown file from `data/news/{slug}.md` and parses the frontmatter.

**Parameters:**
- `slug` - Article slug (filename without .md extension)

**Error Handling:**
- Throws error if file is missing
- Validates required frontmatter fields (title, description, image, date)
- Parses markdown content using gray-matter

## Usage Example

```typescript
import {
  getSiteContent,
  getLeadership,
  getExecutive,
  getAllNewsArticles,
  getNewsArticle,
} from '@/lib/content'

// Load site content
const content = await getSiteContent()
console.log(content.hero.title)

// Load leadership
const leadership = await getLeadership()
console.log(leadership.members)

// Load all news articles
const articles = await getAllNewsArticles()
console.log(articles[0].title) // Latest article

// Load specific article
const article = await getNewsArticle('pankaj-advani-world-championship-2024')
console.log(article.content) // Markdown content
```

## Error Handling

All functions include comprehensive error handling:

1. **Missing Files**: Throws descriptive error with file path
2. **Invalid JSON**: Throws error with JSON parse details
3. **Invalid Structure**: Validates required fields and throws error if missing
4. **Type Safety**: Uses TypeScript types to ensure data structure correctness

## Requirements Validation

This implementation satisfies:
- **Requirement 13.1**: Content stored in structured data files
- **Requirement 13.3**: Content reflects changes after rebuild/revalidation
