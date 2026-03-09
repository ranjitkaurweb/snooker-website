/**
 * Tests for root layout configuration
 * Validates metadata and structured data setup
 */

import { describe, it, expect } from '@jest/globals'
import { getOrganizationSchema } from '@/lib/metadata'
import { metadata } from '../layout'

describe('Root Layout Configuration', () => {
  describe('Metadata', () => {
    it('has correct default title', () => {
      expect(metadata.title).toHaveProperty('default', 'Jalandhar District Cue Sports Association')
    })

    it('has title template for sub-pages', () => {
      expect(metadata.title).toHaveProperty('template', '%s | Jalandhar District Cue Sports Association')
    })

    it('has description', () => {
      expect(metadata.description).toContain('Jalandhar District Cue Sports Association')
      expect(metadata.description).toContain('cue sports')
    })

    it('has keywords array', () => {
      expect(Array.isArray(metadata.keywords)).toBe(true)
      expect(metadata.keywords).toContain('cue sports')
      expect(metadata.keywords).toContain('snooker')
      expect(metadata.keywords).toContain('billiards')
    })

    it('has authors', () => {
      expect(Array.isArray(metadata.authors)).toBe(true)
      expect(metadata.authors?.[0]).toHaveProperty('name', 'Jalandhar District Cue Sports Association')
    })
  })

  describe('Open Graph Metadata', () => {
    it('has Open Graph configuration', () => {
      expect(metadata.openGraph).toBeDefined()
      expect(metadata.openGraph?.type).toBe('website')
      expect(metadata.openGraph?.locale).toBe('en_IN')
      expect(metadata.openGraph?.url).toBe('https://jalandharcuesports.org')
      expect(metadata.openGraph?.siteName).toBe('Jalandhar District Cue Sports Association')
    })

    it('has Open Graph images', () => {
      expect(Array.isArray(metadata.openGraph?.images)).toBe(true)
      const image = metadata.openGraph?.images?.[0]
      expect(image).toHaveProperty('url', '/images/og-image.jpg')
      expect(image).toHaveProperty('width', 1200)
      expect(image).toHaveProperty('height', 630)
      expect(image).toHaveProperty('alt', 'Jalandhar District Cue Sports Association')
    })
  })

  describe('Twitter Card Metadata', () => {
    it('has Twitter card configuration', () => {
      expect(metadata.twitter).toBeDefined()
      expect(metadata.twitter?.card).toBe('summary_large_image')
      expect(metadata.twitter?.title).toBe('Jalandhar District Cue Sports Association')
      expect(metadata.twitter?.description).toContain('cue sports')
    })

    it('has Twitter card images', () => {
      expect(Array.isArray(metadata.twitter?.images)).toBe(true)
      expect(metadata.twitter?.images?.[0]).toBe('/images/twitter-image.jpg')
    })
  })

  describe('Robots Metadata', () => {
    it('has robots configuration', () => {
      expect(metadata.robots).toBeDefined()
      expect(metadata.robots?.index).toBe(true)
      expect(metadata.robots?.follow).toBe(true)
    })

    it('has Google Bot specific configuration', () => {
      expect(metadata.robots?.googleBot).toBeDefined()
      expect(metadata.robots?.googleBot?.index).toBe(true)
      expect(metadata.robots?.googleBot?.follow).toBe(true)
      expect(metadata.robots?.googleBot?.['max-video-preview']).toBe(-1)
      expect(metadata.robots?.googleBot?.['max-image-preview']).toBe('large')
      expect(metadata.robots?.googleBot?.['max-snippet']).toBe(-1)
    })
  })

  describe('Structured Data', () => {
    it('generates organization schema', () => {
      const schema = getOrganizationSchema()
      
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('SportsOrganization')
      expect(schema.name).toBe('Jalandhar District Cue Sports Association')
      expect(schema.url).toBe('https://jalandharcuesports.org')
    })

    it('includes address information', () => {
      const schema = getOrganizationSchema()
      
      expect(schema.address).toBeDefined()
      expect(schema.address['@type']).toBe('PostalAddress')
      expect(schema.address.addressLocality).toBe('Jalandhar')
      expect(schema.address.addressRegion).toBe('Punjab')
      expect(schema.address.addressCountry).toBe('IN')
    })

    it('includes social media links', () => {
      const schema = getOrganizationSchema()
      
      expect(Array.isArray(schema.sameAs)).toBe(true)
      expect(schema.sameAs.length).toBeGreaterThan(0)
    })

    it('generates valid JSON-LD', () => {
      const schema = getOrganizationSchema()
      const jsonString = JSON.stringify(schema)
      
      // Should be valid JSON
      expect(() => JSON.parse(jsonString)).not.toThrow()
      
      // Should contain required schema.org properties
      expect(jsonString).toContain('schema.org')
      expect(jsonString).toContain('SportsOrganization')
    })
  })
})
