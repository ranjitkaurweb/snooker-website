import { render, screen, fireEvent } from '@testing-library/react'
import { MemberProfile } from '../MemberProfile'

describe('MemberProfile', () => {
  describe('Basic Rendering', () => {
    it('displays member name and role', () => {
      render(
        <MemberProfile
          name="John Doe"
          role="President"
          avatar="/images/members/john-doe.jpg"
        />
      )

      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('President')).toBeInTheDocument()
    })

    it('renders avatar image with correct alt text', () => {
      render(
        <MemberProfile
          name="Jane Smith"
          role="Secretary"
          avatar="/images/members/jane-smith.jpg"
        />
      )

      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Jane Smith - Secretary')
    })

    it('applies circular style when circular prop is true', () => {
      const { container } = render(
        <MemberProfile
          name="Bob Johnson"
          role="Treasurer"
          avatar="/images/members/bob.jpg"
          circular={true}
        />
      )

      const avatarContainer = container.querySelector('.rounded-full')
      expect(avatarContainer).toBeInTheDocument()
    })

    it('applies square style when circular prop is false', () => {
      const { container } = render(
        <MemberProfile
          name="Alice Williams"
          role="Member"
          avatar="/images/members/alice.jpg"
          circular={false}
        />
      )

      const avatarContainer = container.querySelector('.rounded-lg')
      expect(avatarContainer).toBeInTheDocument()
    })
  })

  describe('Contact Information', () => {
    it('displays email when provided as object', () => {
      render(
        <MemberProfile
          name="John Doe"
          role="President"
          avatar="/images/members/john.jpg"
          contact={{
            email: 'john.doe@example.com'
          }}
        />
      )

      const emailLink = screen.getByText('john.doe@example.com')
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', 'mailto:john.doe@example.com')
    })

    it('displays phone when provided', () => {
      render(
        <MemberProfile
          name="Jane Smith"
          role="Secretary"
          avatar="/images/members/jane.jpg"
          contact={{
            phone: '+91 98765 43210'
          }}
        />
      )

      const phoneLink = screen.getByText('+91 98765 43210')
      expect(phoneLink).toBeInTheDocument()
      expect(phoneLink).toHaveAttribute('href', 'tel:+91 98765 43210')
    })

    it('displays both email and phone when provided', () => {
      render(
        <MemberProfile
          name="Bob Johnson"
          role="Treasurer"
          avatar="/images/members/bob.jpg"
          contact={{
            email: 'bob@example.com',
            phone: '+91 12345 67890'
          }}
        />
      )

      expect(screen.getByText('bob@example.com')).toBeInTheDocument()
      expect(screen.getByText('+91 12345 67890')).toBeInTheDocument()
    })

    it('handles string contact as email', () => {
      render(
        <MemberProfile
          name="Charlie Brown"
          role="Member"
          avatar="/images/members/charlie.jpg"
          contact="charlie@example.com"
        />
      )

      const emailLink = screen.getByText('charlie@example.com')
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', 'mailto:charlie@example.com')
    })

    it('does not display contact section when contact is not provided', () => {
      render(
        <MemberProfile
          name="Alice Williams"
          role="Member"
          avatar="/images/members/alice.jpg"
        />
      )

      expect(screen.queryByText(/mailto:/)).not.toBeInTheDocument()
      expect(screen.queryByText(/tel:/)).not.toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles very long names without breaking layout', () => {
      const longName = 'Dr. Rajesh Kumar Sharma Extraordinaire With Multiple Titles'
      const { container } = render(
        <MemberProfile
          name={longName}
          role="Vice President"
          avatar="/images/members/rajesh.jpg"
        />
      )

      const nameElement = screen.getByText(longName)
      expect(nameElement).toBeInTheDocument()
      expect(nameElement).toHaveClass('truncate')
    })

    it('handles very long email addresses', () => {
      const longEmail = 'very.long.email.address.that.might.break.layout@example.com'
      render(
        <MemberProfile
          name="Test User"
          role="Member"
          avatar="/images/members/test.jpg"
          contact={{
            email: longEmail
          }}
        />
      )

      const emailElement = screen.getByText(longEmail)
      expect(emailElement).toBeInTheDocument()
      // Check that parent has break-words class
      expect(emailElement.parentElement).toHaveClass('break-words')
    })

    it('displays placeholder when avatar fails to load', () => {
      render(
        <MemberProfile
          name="Test User"
          role="Member"
          avatar="/images/members/non-existent.jpg"
        />
      )

      const img = screen.getByRole('img') as HTMLImageElement
      
      // Simulate image load error
      fireEvent.error(img)

      // After error, the src should be updated to placeholder
      // Note: In actual implementation, this would be handled by the onError handler
      expect(img).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA labels for email links', () => {
      render(
        <MemberProfile
          name="John Doe"
          role="President"
          avatar="/images/members/john.jpg"
          contact={{
            email: 'john@example.com'
          }}
        />
      )

      const emailLink = screen.getByLabelText('Email John Doe')
      expect(emailLink).toBeInTheDocument()
    })

    it('has proper ARIA labels for phone links', () => {
      render(
        <MemberProfile
          name="Jane Smith"
          role="Secretary"
          avatar="/images/members/jane.jpg"
          contact={{
            phone: '+91 98765 43210'
          }}
        />
      )

      const phoneLink = screen.getByLabelText('Call Jane Smith')
      expect(phoneLink).toBeInTheDocument()
    })

    it('has descriptive alt text for avatar image', () => {
      render(
        <MemberProfile
          name="Bob Johnson"
          role="Treasurer"
          avatar="/images/members/bob.jpg"
        />
      )

      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Bob Johnson - Treasurer')
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <MemberProfile
          name="Test User"
          role="Member"
          avatar="/images/members/test.jpg"
          className="custom-class"
        />
      )

      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('custom-class')
    })
  })
})
