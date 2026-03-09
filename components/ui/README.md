# UI Components

This directory contains reusable UI components for the Sports Association Website.

## Button Component

The Button component is a versatile, accessible button that supports multiple variants, sizes, and can function as both a button and a link.

### Features

- **Three Variants**: primary, secondary, outline
- **Three Sizes**: sm, md, lg (all with minimum 44x44px touch targets)
- **Dual Functionality**: Can render as `<button>` or `<Link>` based on props
- **Accessibility**: 
  - Proper ARIA attributes
  - Keyboard navigation support
  - Focus ring indicators
  - Minimum touch target sizes for mobile
- **Smooth Transitions**: Hover and active states with CSS transitions
- **Disabled State**: Visual and functional disabled state

### Usage

```tsx
import { Button } from '@/components/ui/Button'

// Basic button
<Button>Click me</Button>

// Primary variant (default)
<Button variant="primary">Primary Action</Button>

// Secondary variant
<Button variant="secondary">Secondary Action</Button>

// Outline variant
<Button variant="outline">Outline Action</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// As a link
<Button href="/about">Go to About</Button>

// With click handler
<Button onClick={() => console.log('Clicked!')}>
  Click Me
</Button>

// Disabled
<Button disabled>Disabled Button</Button>

// With ARIA label
<Button ariaLabel="Submit form">Submit</Button>

// Custom className
<Button className="mt-4">Custom Styled</Button>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `children` | `React.ReactNode` | - | Button content |
| `onClick` | `() => void` | - | Click handler function |
| `href` | `string` | - | If provided, renders as Next.js Link |
| `className` | `string` | `''` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |
| `ariaLabel` | `string` | - | ARIA label for accessibility |

### Accessibility

The Button component follows WCAG 2.1 AA guidelines:

- Minimum 44x44px touch target size on all sizes
- Focus ring indicators for keyboard navigation
- Proper ARIA attributes
- Disabled state properly communicated to screen readers
- Color contrast ratios meet WCAG standards

### Requirements Satisfied

- **Requirement 8.5**: Responsive design with proper touch targets
- **Requirement 12.3**: Keyboard accessibility
- **Requirement 15.2**: Smooth transitions and hover states

### Examples

See `Button.example.tsx` for comprehensive usage examples.

---

## Card Component

The Card component is a reusable container with a clean, modern design featuring white background, subtle shadow, rounded corners, and an optional hover lift effect.

### Features

- **Clean Design**: White background with subtle shadow and rounded corners
- **Hover Effect**: Smooth lift animation with enhanced shadow on hover
- **Interactive Mode**: Optional onClick handler with keyboard accessibility
- **Customizable**: Support for custom className and hover behavior control
- **Accessible**: Keyboard navigation support when interactive
- **Smooth Transitions**: CSS transitions for all hover and focus states

### Usage

```tsx
import { Card } from '@/components/ui/Card'

// Basic card
<Card>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-gray-600">Card content goes here.</p>
  </div>
</Card>

// Card without hover effect
<Card hover={false}>
  <div className="p-6">
    <p>This card has no hover animation.</p>
  </div>
</Card>

// Interactive card with onClick
<Card onClick={() => console.log('Clicked!')}>
  <div className="p-6">
    <p>Click this card to trigger an action.</p>
  </div>
</Card>

// Card with custom styling
<Card className="border-2 border-primary-500">
  <div className="p-6">
    <p>Custom styled card with border.</p>
  </div>
</Card>

// Card grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id}>
      <div className="p-6">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Card>
  ))}
</div>

// Card with image
<Card>
  <img src="/image.jpg" alt="Description" className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3>Card with Image</h3>
    <p>Image at the top, content below.</p>
  </div>
</Card>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Card content |
| `className` | `string` | `''` | Additional CSS classes |
| `hover` | `boolean` | `true` | Enable/disable hover lift effect |
| `onClick` | `() => void` | - | Click handler (makes card interactive) |

### Styling

The Card component uses the following Tailwind CSS classes:

- **Base**: `bg-white rounded-lg shadow-md overflow-hidden`
- **Hover** (when enabled): `transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1`
- **Interactive** (when onClick provided): `cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`

### Hover Effect

The default hover effect includes:
- **Transform**: Lifts the card up by 4px (`-translate-y-1`)
- **Shadow**: Increases shadow from `shadow-md` to `shadow-xl`
- **Transition**: Smooth 300ms transition with ease-in-out timing
- **Duration**: All properties animate together for cohesive effect

### Accessibility

When used as an interactive element (with `onClick`):
- **Keyboard Navigation**: Focusable with Tab key
- **Keyboard Activation**: Responds to Enter and Space keys
- **Focus Indicator**: Visible focus ring for keyboard users
- **Role**: Properly identified as button for screen readers
- **Tab Index**: Set to 0 for natural tab order

### Requirements Satisfied

- **Requirement 15.2**: Smooth transitions for hover states on interactive elements
- **Requirement 12.3**: Keyboard accessibility for interactive elements (when onClick provided)

### Examples

See `Card.example.tsx` for comprehensive usage examples including:
- Basic card with default hover
- Static card without hover effect
- Interactive card with onClick handler
- Custom styled cards
- Card grid layouts
- Cards with images

---

## OptimizedImage Component

The OptimizedImage component wraps Next.js Image with automatic error handling and fallback support for graceful image loading failures.

### Features

- **Automatic Fallback**: Displays placeholder image when primary image fails to load
- **Next.js Optimization**: Maintains all Next.js Image optimization benefits (WebP, responsive sizes, lazy loading)
- **Error Handling**: Gracefully handles image loading errors without breaking layout
- **Accessibility**: Requires alt text for all images
- **Type Safety**: Full TypeScript support with proper prop types

### Usage

```tsx
import { OptimizedImage } from '@/components/ui/OptimizedImage'

// Member avatar with circular styling
<OptimizedImage
  src="/images/members/john-doe.jpg"
  alt="John Doe - President"
  fallback="/images/placeholders/avatar.png"
  width={200}
  height={200}
  className="rounded-full"
/>

// News article image
<OptimizedImage
  src="/images/news/championship-2024.jpg"
  alt="2024 Championship Tournament"
  fallback="/images/placeholders/news.png"
  width={800}
  height={600}
  className="rounded-lg"
  quality={85}
/>

// Hero image with priority loading
<OptimizedImage
  src="/images/hero/main-banner.jpg"
  alt="Jalandhar District Cue Sports Association"
  fallback="/images/placeholders/hero.png"
  width={1920}
  height={1080}
  priority
  quality={90}
/>

// Lazy loaded thumbnail
<OptimizedImage
  src="/images/gallery/event-01.jpg"
  alt="Community event"
  fallback="/images/placeholders/thumbnail.png"
  width={200}
  height={200}
  loading="lazy"
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `src` | `string` | Yes | Primary image source URL |
| `alt` | `string` | Yes | Alternative text for accessibility |
| `fallback` | `string` | Yes | Fallback image URL to display on error |
| `width` | `number` | Yes | Image width in pixels |
| `height` | `number` | Yes | Image height in pixels |
| `className` | `string` | No | Additional CSS classes |
| `priority` | `boolean` | No | Load image with high priority (for above-fold images) |
| `quality` | `number` | No | Image quality (1-100) |
| `loading` | `'lazy' \| 'eager'` | No | Loading strategy |
| ...props | `ImageProps` | No | All other Next.js Image props |

### Error Handling

The component handles image loading errors gracefully:

1. **Primary Image Fails**: Automatically switches to fallback image
2. **Fallback Image Fails**: Prevents infinite error loops by only switching once
3. **Layout Preservation**: Maintains specified dimensions even when fallback is displayed
4. **No Console Spam**: Error state is managed internally without excessive logging

### Accessibility

- **Required Alt Text**: Component enforces alt text for all images
- **Screen Reader Support**: Alt text is preserved even when fallback is displayed
- **Semantic HTML**: Uses proper img element with ARIA attributes

### Requirements Satisfied

- **Requirement 14.1**: Uses Next.js Image component for automatic optimization
- **Requirement 14.2**: Serves images in modern formats (WebP) with fallbacks
- **Requirement 14.4**: Displays placeholder on image load error
- **Requirement 12.1**: All images have alternative text

### Examples

See `OptimizedImage.example.tsx` for comprehensive usage examples including:
- Member avatars with circular styling
- News article images
- Hero images with priority loading
- Lazy loaded thumbnails
- Error handling demonstrations
