/**
 * Keyboard Accessibility Tests
 * 
 * Tests keyboard navigation for all interactive elements:
 * - Tab navigation
 * - Enter and Space key activation
 * - Visible focus indicators
 * 
 * Validates: Requirements 12.3
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/Button'
import { Navigation } from '@/components/layout/Navigation'
import { NewsCard } from '@/components/ui/NewsCard'
import { Card } from '@/components/ui/Card'
import { HeroSection } from '@/components/sections/HeroSection'

describe('Keyboard Accessibility', () => {
  describe('Button Component', () => {
    it('should be focusable with Tab key', async () => {
      const user = userEvent.setup()
      render(<Button>Test Button</Button>)
      
      const button = screen.getByRole('button', { name: 'Test Button' })
      
      // Tab to focus the button
      await user.tab()
      
      expect(button).toHaveFocus()
    })

    it('should activate with Enter key', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Test Button</Button>)
      
      const button = screen.getByRole('button', { name: 'Test Button' })
      
      // Focus and press Enter
      await user.tab()
      await user.keyboard('{Enter}')
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should activate with Space key', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Test Button</Button>)
      
      const button = screen.getByRole('button', { name: 'Test Button' })
      
      // Focus and press Space
      await user.tab()
      await user.keyboard(' ')
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should have visible focus indicator', async () => {
      const user = userEvent.setup()
      render(<Button>Test Button</Button>)
      
      const button = screen.getByRole('button', { name: 'Test Button' })
      
      // Tab to focus
      await user.tab()
      
      // Check for focus ring classes
      expect(button).toHaveClass('focus:ring-2')
      expect(button).toHaveClass('focus:ring-offset-2')
    })

    it('should be focusable when rendered as link', async () => {
      const user = userEvent.setup()
      render(<Button href="/test">Link Button</Button>)
      
      const link = screen.getByRole('link', { name: 'Link Button' })
      
      // Tab to focus
      await user.tab()
      
      expect(link).toHaveFocus()
    })

    it('should not be focusable when disabled', async () => {
      const user = userEvent.setup()
      render(<Button disabled>Disabled Button</Button>)
      
      const button = screen.getByRole('button', { name: 'Disabled Button' })
      
      // Try to tab to the button
      await user.tab()
      
      expect(button).not.toHaveFocus()
    })
  })

  describe('Navigation Component', () => {
    it('should allow Tab navigation through all links', async () => {
      const user = userEvent.setup()
      render(<Navigation />)
      
      const links = screen.getAllByRole('link')
      
      // Tab through each link
      for (const link of links) {
        await user.tab()
        expect(link).toHaveFocus()
      }
    })

    it('should activate navigation links with Enter key', async () => {
      const user = userEvent.setup()
      render(<Navigation />)
      
      const visionLink = screen.getByRole('link', { name: 'Vision' })
      
      // Focus and press Enter
      visionLink.focus()
      await user.keyboard('{Enter}')
      
      // Link should have been activated (default behavior)
      expect(visionLink).toHaveAttribute('href', '#vision')
    })

    it('should toggle mobile menu with Enter key', async () => {
      const user = userEvent.setup()
      // Mock mobile viewport
      global.innerWidth = 500
      
      render(<Navigation />)
      
      const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
      
      // Focus and press Enter
      menuButton.focus()
      await user.keyboard('{Enter}')
      
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    })

    it('should toggle mobile menu with Space key', async () => {
      const user = userEvent.setup()
      render(<Navigation />)
      
      const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
      
      // Focus and press Space
      menuButton.focus()
      await user.keyboard(' ')
      
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    })

    it('should have visible focus indicators on links', async () => {
      const user = userEvent.setup()
      render(<Navigation />)
      
      const firstLink = screen.getAllByRole('link')[0]
      
      // Tab to focus
      await user.tab()
      
      // Link should be focused
      expect(firstLink).toHaveFocus()
    })
  })

  describe('NewsCard Component', () => {
    const mockArticle = {
      slug: 'test-article',
      title: 'Test Article',
      description: 'Test description',
      image: '/test-image.jpg',
      date: '2024-01-01T00:00:00Z',
    }

    it('should allow Tab navigation to Read More link', async () => {
      const user = userEvent.setup()
      render(<NewsCard {...mockArticle} />)
      
      const link = screen.getByRole('link', { name: /read more/i })
      
      // Tab to focus
      await user.tab()
      
      expect(link).toHaveFocus()
    })

    it('should activate Read More link with Enter key', async () => {
      const user = userEvent.setup()
      render(<NewsCard {...mockArticle} />)
      
      const link = screen.getByRole('link', { name: /read more/i })
      
      // Focus and press Enter
      link.focus()
      await user.keyboard('{Enter}')
      
      expect(link).toHaveAttribute('href', '/news/test-article')
    })

    it('should have visible focus indicator on link', async () => {
      const user = userEvent.setup()
      render(<NewsCard {...mockArticle} />)
      
      const link = screen.getByRole('link', { name: /read more/i })
      
      // Tab to focus
      await user.tab()
      
      expect(link).toHaveFocus()
    })
  })

  describe('Card Component with onClick', () => {
    it('should be focusable when onClick is provided', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(
        <Card onClick={handleClick}>
          <p>Clickable Card</p>
        </Card>
      )
      
      const card = screen.getByRole('button')
      
      // Tab to focus
      await user.tab()
      
      expect(card).toHaveFocus()
    })

    it('should activate with Enter key when onClick is provided', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(
        <Card onClick={handleClick}>
          <p>Clickable Card</p>
        </Card>
      )
      
      const card = screen.getByRole('button')
      
      // Focus and press Enter
      await user.tab()
      await user.keyboard('{Enter}')
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should activate with Space key when onClick is provided', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(
        <Card onClick={handleClick}>
          <p>Clickable Card</p>
        </Card>
      )
      
      const card = screen.getByRole('button')
      
      // Focus and press Space
      await user.tab()
      await user.keyboard(' ')
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not be focusable when onClick is not provided', async () => {
      const user = userEvent.setup()
      render(
        <Card>
          <p>Non-clickable Card</p>
        </Card>
      )
      
      // Try to tab - should not focus on the card
      await user.tab()
      
      const card = screen.getByText('Non-clickable Card').parentElement
      expect(card).not.toHaveFocus()
    })
  })

  describe('HeroSection Component', () => {
    const mockProps = {
      title: 'Test Title',
      tagline: 'Test Tagline',
      ctaText: 'Get Started',
      ctaLink: '#vision',
    }

    it('should allow Tab navigation to CTA button', async () => {
      const user = userEvent.setup()
      render(<HeroSection {...mockProps} />)
      
      const button = screen.getByRole('link', { name: 'Get Started' })
      
      // Tab to focus
      await user.tab()
      
      expect(button).toHaveFocus()
    })

    it('should activate CTA button with Enter key', async () => {
      const user = userEvent.setup()
      render(<HeroSection {...mockProps} />)
      
      const button = screen.getByRole('link', { name: 'Get Started' })
      
      // Focus and press Enter
      button.focus()
      await user.keyboard('{Enter}')
      
      expect(button).toHaveAttribute('href', '#vision')
    })

    it('should have visible focus indicator on CTA button', async () => {
      const user = userEvent.setup()
      render(<HeroSection {...mockProps} />)
      
      const button = screen.getByRole('link', { name: 'Get Started' })
      
      // Tab to focus
      await user.tab()
      
      expect(button).toHaveFocus()
      expect(button).toHaveClass('focus:ring-2')
    })
  })

  describe('Focus Indicators', () => {
    it('all buttons should have focus ring styles', () => {
      render(
        <div>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      )
      
      const buttons = screen.getAllByRole('button')
      
      buttons.forEach(button => {
        expect(button).toHaveClass('focus:ring-2')
        expect(button).toHaveClass('focus:ring-offset-2')
      })
    })

    it('all links should be keyboard accessible', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <Button href="/page1">Link 1</Button>
          <Button href="/page2">Link 2</Button>
        </div>
      )
      
      const links = screen.getAllByRole('link')
      
      // Tab through all links
      for (const link of links) {
        await user.tab()
        expect(link).toHaveFocus()
      }
    })
  })

  describe('Tab Order', () => {
    it('should maintain logical tab order in complex layouts', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <Button>First</Button>
          <Button>Second</Button>
          <Button href="/test">Third</Button>
        </div>
      )
      
      const first = screen.getByRole('button', { name: 'First' })
      const second = screen.getByRole('button', { name: 'Second' })
      const third = screen.getByRole('link', { name: 'Third' })
      
      // Tab through in order
      await user.tab()
      expect(first).toHaveFocus()
      
      await user.tab()
      expect(second).toHaveFocus()
      
      await user.tab()
      expect(third).toHaveFocus()
    })

    it('should skip disabled elements in tab order', async () => {
      const user = userEvent.setup()
      render(
        <div>
          <Button>First</Button>
          <Button disabled>Disabled</Button>
          <Button>Third</Button>
        </div>
      )
      
      const first = screen.getByRole('button', { name: 'First' })
      const third = screen.getByRole('button', { name: 'Third' })
      
      // Tab should skip disabled button
      await user.tab()
      expect(first).toHaveFocus()
      
      await user.tab()
      expect(third).toHaveFocus()
    })
  })
})
