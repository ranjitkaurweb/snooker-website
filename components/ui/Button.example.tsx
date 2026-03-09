/**
 * Button Component Usage Examples
 * 
 * This file demonstrates all the variants and features of the Button component.
 * You can import this in a page to see the buttons in action.
 */

import { Button } from './Button'

export function ButtonExamples() {
  return (
    <div className="p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Button as Link</h2>
        <div className="flex flex-wrap gap-4">
          <Button href="#vision" variant="primary">
            Learn More
          </Button>
          <Button href="/news" variant="secondary">
            Read News
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled variant="primary">
            Disabled Primary
          </Button>
          <Button disabled variant="secondary">
            Disabled Secondary
          </Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">With Click Handler</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            onClick={() => alert('Primary button clicked!')}
          >
            Click Me
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log('Secondary clicked')}
          >
            Log to Console
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
        <div className="flex flex-wrap gap-4">
          <Button ariaLabel="Submit the contact form">
            Submit
          </Button>
          <Button ariaLabel="Navigate to home page" href="/">
            Home
          </Button>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          All buttons have minimum 44x44px touch targets, focus rings, and proper ARIA attributes
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Combined Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">
            Small Primary
          </Button>
          <Button variant="secondary" size="md">
            Medium Secondary
          </Button>
          <Button variant="outline" size="lg">
            Large Outline
          </Button>
        </div>
      </section>
    </div>
  )
}
