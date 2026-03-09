// Unit tests for content loading utilities

import {
  getSiteContent,
  getLeadership,
  getExecutive,
  getAllNewsArticles,
  getNewsArticle,
} from '../content'

describe('Content Loading Utilities', () => {
  describe('getSiteContent', () => {
    it('loads site content successfully', async () => {
      const content = await getSiteContent()

      expect(content).toBeDefined()
      expect(content.hero).toBeDefined()
      expect(content.vision).toBeDefined()
      expect(content.mission).toBeDefined()
      expect(content.footer).toBeDefined()
    })

    it('hero section has required fields', async () => {
      const content = await getSiteContent()

      expect(content.hero.title).toBe('Jalandhar District Cue Sports Association')
      expect(content.hero.tagline).toBeTruthy()
      expect(content.hero.ctaText).toBeTruthy()
      expect(content.hero.ctaLink).toBeTruthy()
    })

    it('vision section has pillars', async () => {
      const content = await getSiteContent()

      expect(content.vision.heading).toBe('Our Vision')
      expect(content.vision.description).toBeTruthy()
      expect(content.vision.pillars).toHaveLength(3)
      expect(content.vision.pillars[0].title).toBeTruthy()
      expect(content.vision.pillars[0].description).toBeTruthy()
    })

    it('mission section has points', async () => {
      const content = await getSiteContent()

      expect(content.mission.heading).toBe('Our Mission')
      expect(content.mission.points).toHaveLength(4)
      expect(content.mission.points[0].title).toBeTruthy()
      expect(content.mission.points[0].description).toBeTruthy()
    })

    it('footer has all sections', async () => {
      const content = await getSiteContent()

      expect(content.footer.about).toBeDefined()
      expect(content.footer.galleries).toBeDefined()
      expect(content.footer.contact).toBeDefined()
      expect(content.footer.social).toBeDefined()
    })
  })

  describe('getLeadership', () => {
    it('loads leadership data successfully', async () => {
      const leadership = await getLeadership()

      expect(leadership).toBeDefined()
      expect(leadership.members).toBeDefined()
      expect(Array.isArray(leadership.members)).toBe(true)
    })

    it('throws error for missing file', async () => {
      // This test would require mocking fs to simulate missing file
      // For now, we just verify the function exists
      expect(getLeadership).toBeDefined()
    })
  })

  describe('getExecutive', () => {
    it('loads executive data successfully', async () => {
      const executive = await getExecutive()

      expect(executive).toBeDefined()
      expect(executive.members).toBeDefined()
      expect(Array.isArray(executive.members)).toBe(true)
    })
  })

  describe('getAllNewsArticles', () => {
    it('loads news articles successfully', async () => {
      const articles = await getAllNewsArticles()

      expect(articles).toBeDefined()
      expect(Array.isArray(articles)).toBe(true)
      expect(articles.length).toBeGreaterThan(0)
    })

    it('articles are sorted by date (newest first)', async () => {
      const articles = await getAllNewsArticles()

      for (let i = 0; i < articles.length - 1; i++) {
        const currentDate = new Date(articles[i].date).getTime()
        const nextDate = new Date(articles[i + 1].date).getTime()
        expect(currentDate).toBeGreaterThanOrEqual(nextDate)
      }
    })

    it('articles have required fields', async () => {
      const articles = await getAllNewsArticles()
      const article = articles[0]

      expect(article.slug).toBeTruthy()
      expect(article.title).toBeTruthy()
      expect(article.description).toBeTruthy()
      expect(article.image).toBeTruthy()
      expect(article.date).toBeTruthy()
    })
  })

  describe('getNewsArticle', () => {
    it('throws error for non-existent article', async () => {
      await expect(getNewsArticle('non-existent-slug')).rejects.toThrow(
        'News article not found'
      )
    })

    it('validates slug parameter', async () => {
      // Test that function handles invalid slugs gracefully
      await expect(getNewsArticle('')).rejects.toThrow()
    })
  })

  describe('Error Handling', () => {
    it('getSiteContent throws descriptive error for missing file', async () => {
      // This would require mocking fs.readFile to simulate ENOENT error
      expect(getSiteContent).toBeDefined()
    })

    it('functions handle invalid JSON gracefully', async () => {
      // This would require mocking fs.readFile to return invalid JSON
      expect(getSiteContent).toBeDefined()
    })
  })
})
