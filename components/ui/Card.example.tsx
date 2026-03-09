import { Card } from './Card'

/**
 * Card Component Examples
 * 
 * The Card component provides a reusable container with:
 * - White background
 * - Subtle shadow (shadow-md)
 * - Rounded corners (rounded-lg)
 * - Hover lift effect with transform and shadow transition
 */

// Example 1: Basic Card
export function BasicCardExample() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p className="text-gray-600">
          This is a basic card with default hover effects.
        </p>
      </div>
    </Card>
  )
}

// Example 2: Card without hover effect
export function StaticCardExample() {
  return (
    <Card hover={false}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Static Card</h3>
        <p className="text-gray-600">
          This card has no hover effect.
        </p>
      </div>
    </Card>
  )
}

// Example 3: Interactive Card with onClick
export function InteractiveCardExample() {
  const handleClick = () => {
    console.log('Card clicked!')
  }
  
  return (
    <Card onClick={handleClick}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
        <p className="text-gray-600">
          Click this card to trigger an action. It&apos;s keyboard accessible!
        </p>
      </div>
    </Card>
  )
}

// Example 4: Card with custom styling
export function CustomStyledCardExample() {
  return (
    <Card className="border-2 border-primary-500">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary-600">
          Custom Styled Card
        </h3>
        <p className="text-gray-600">
          This card has additional custom styling applied.
        </p>
      </div>
    </Card>
  )
}

// Example 5: Card Grid Layout
export function CardGridExample() {
  const items = [
    { id: 1, title: 'Card 1', description: 'First card' },
    { id: 2, title: 'Card 2', description: 'Second card' },
    { id: 3, title: 'Card 3', description: 'Third card' },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id}>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

// Example 6: Card with Image
export function CardWithImageExample() {
  return (
    <Card>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/placeholder.jpg"
        alt="Card image"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Card with Image</h3>
        <p className="text-gray-600">
          Cards work great with images at the top.
        </p>
      </div>
    </Card>
  )
}
