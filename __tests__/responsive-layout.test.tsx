/**
 * Responsive Layout Tests
 * Tests layouts at required breakpoints: 640px, 768px, 1024px, 1280px
 * Requirements: 8.1, 8.2, 8.3, 8.4
 */

import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/sections/HeroSection'
import { VisionSection } from '@/components/sections/VisionSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { ExecutiveSection } from '@/components/sections/ExecutiveSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'

// Mock data
const mockVisionPillars = [
  { title: 'Pillar 1', description: 'Description 1' },
  { title: 'Pillar 2', description: 'Description 2' },
  { title: 'Pillar 3', description: 'Description 3' },
]

const mockMissionPoints = [
  { title: 'Point 1', description: 'Description 1' },
  { title: 'Point 2', description: 'Description 2' },
  { title: 'Point 3', description: 'Description 3' },
  { title: 'Point 4', description: 'Description 4' },
]

const mockMembers = [
  { id: '1', name: 'John Doe', role: 'President', avatar: '/test.jpg', order: 1 },
  { id: '2', name: 'Jane Smith', role: 'Secretary', avatar: '/test.jpg', order: 2 },
  { id: '3', name: 'Bob Johnson', role: 'Treasurer', avatar: '/test.jpg', order: 3 },
]

const mockArticles = [
  { slug: 'article-1', title: 'Article 1', description: 'Description 1', image: '/test.jpg', date: '2024-01-01' },
  { slug: 'article-2', title: 'Article 2', description: 'Description 2', image: '/test.jpg', date: '2024-01-02' },
  { slug: 'article-3', title: 'Article 3', description: 'Description 3', image: '/test.jpg', date: '2024-01-03' },
]

describe('Responsive Layout Tests', () => {
  describe('Mobile (640px)', () => {
    beforeEach(() => {
      global.innerWidth = 640
      global.innerHeight = 1136
    })

    it('HeroSection uses mobile-first typography', () => {
      const { container } = render(
        <HeroSection
          title="Test Title"
          tagline="Test Tagline"
          ctaText="Learn More"
          ctaLink="#test"
        />
      )
      
      const title = container.querySelector('h1')
      expect(title).toHaveClass('text-3xl')
      expect(title).toHaveClass('sm:text-4xl')
    })

    it('VisionSection uses single column grid on mobile', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('grid-cols-1')
    })

    it('Navigation shows mobile menu button', () => {
      render(<Navigation />)
      const menuButton = screen.getByLabelText('Toggle menu')
      expect(menuButton).toBeInTheDocument()
      expect(menuButton).toHaveClass('md:hidden')
    })
  })

  describe('Tablet (768px)', () => {
    beforeEach(() => {
      global.innerWidth = 768
      global.innerHeight = 1024
    })

    it('VisionSection uses 2-column grid on tablet', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('sm:grid-cols-2')
    })

    it('MissionSection uses 2-column grid on tablet', () => {
      const { container } = render(
        <MissionSection
          heading="Our Mission"
          points={mockMissionPoints}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('sm:grid-cols-2')
    })

    it('Footer uses 2-column grid on tablet', () => {
      const { container } = render(
        <Footer
          aboutText="Test"
          galleries={[]}
          contact={{}}
          socialMedia={[]}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('sm:grid-cols-2')
    })
  })

  describe('Desktop (1024px)', () => {
    beforeEach(() => {
      global.innerWidth = 1024
      global.innerHeight = 768
    })

    it('VisionSection uses 3-column grid on desktop', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('lg:grid-cols-3')
    })

    it('MissionSection uses 4-column grid on desktop', () => {
      const { container } = render(
        <MissionSection
          heading="Our Mission"
          points={mockMissionPoints}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('lg:grid-cols-4')
    })

    it('LeadershipSection uses 3-column grid on desktop', () => {
      const { container } = render(
        <LeadershipSection
          heading="Our Leadership"
          members={mockMembers}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('lg:grid-cols-3')
    })

    it('NewsSection uses 3-column grid on desktop', () => {
      const { container } = render(
        <NewsSection
          heading="News"
          articles={mockArticles}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('lg:grid-cols-3')
    })

    it('Navigation shows desktop menu', () => {
      const { container } = render(<Navigation />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })
  })

  describe('Large Desktop (1280px)', () => {
    beforeEach(() => {
      global.innerWidth = 1280
      global.innerHeight = 720
    })

    it('HeroSection uses largest typography on xl screens', () => {
      const { container } = render(
        <HeroSection
          title="Test Title"
          tagline="Test Tagline"
          ctaText="Learn More"
          ctaLink="#test"
        />
      )
      
      const title = container.querySelector('h1')
      expect(title).toHaveClass('xl:text-7xl')
    })

    it('Container has proper max-width constraints', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const containerDiv = container.querySelector('.container')
      expect(containerDiv).toHaveClass('mx-auto')
    })
  })

  describe('Responsive Spacing', () => {
    it('Sections have responsive padding', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const section = container.querySelector('section')
      expect(section).toHaveClass('py-12')
      expect(section).toHaveClass('sm:py-16')
      expect(section).toHaveClass('md:py-20')
      expect(section).toHaveClass('lg:py-24')
    })

    it('Container has responsive horizontal padding', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const containerDiv = container.querySelector('.container')
      expect(containerDiv).toHaveClass('px-4')
      expect(containerDiv).toHaveClass('sm:px-6')
      expect(containerDiv).toHaveClass('lg:px-8')
    })
  })

  describe('Responsive Typography', () => {
    it('Headings scale responsively', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const heading = container.querySelector('h2')
      expect(heading).toHaveClass('text-2xl')
      expect(heading).toHaveClass('sm:text-3xl')
      expect(heading).toHaveClass('md:text-4xl')
      expect(heading).toHaveClass('lg:text-5xl')
    })

    it('Body text scales responsively', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const description = container.querySelector('p')
      expect(description).toHaveClass('text-base')
      expect(description).toHaveClass('sm:text-lg')
    })
  })

  describe('Grid Gaps', () => {
    it('Grids have responsive gaps', () => {
      const { container } = render(
        <VisionSection
          heading="Our Vision"
          description="Test description"
          pillars={mockVisionPillars}
        />
      )
      
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('gap-4')
      expect(grid).toHaveClass('sm:gap-6')
      expect(grid).toHaveClass('md:gap-8')
    })
  })
})
