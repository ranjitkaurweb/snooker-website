import { OptimizedImage } from './OptimizedImage'

/**
 * Example usage of OptimizedImage component
 * 
 * This component demonstrates how to use OptimizedImage with error handling
 */

// Example 1: Member avatar with fallback
export function MemberAvatarExample() {
  return (
    <OptimizedImage
      src="/images/members/john-doe.jpg"
      alt="John Doe - President"
      fallbackSrc="/images/placeholders/avatar.png"
      width={200}
      height={200}
      className="rounded-full"
    />
  )
}

// Example 2: News article image with fallback
export function NewsImageExample() {
  return (
    <OptimizedImage
      src="/images/news/championship-2024.jpg"
      alt="2024 Championship Tournament"
      fallbackSrc="/images/placeholders/news.png"
      width={800}
      height={600}
      className="rounded-lg"
      quality={85}
    />
  )
}

// Example 3: Hero image with priority loading
export function HeroImageExample() {
  return (
    <OptimizedImage
      src="/images/hero/main-banner.jpg"
      alt="Jalandhar District Cue Sports Association"
      fallbackSrc="/images/placeholders/hero.png"
      width={1920}
      height={1080}
      className="w-full h-full object-cover"
      priority
      quality={90}
    />
  )
}

// Example 4: Thumbnail with lazy loading
export function ThumbnailExample() {
  return (
    <OptimizedImage
      src="/images/gallery/event-01.jpg"
      alt="Community event"
      fallbackSrc="/images/placeholders/thumbnail.png"
      width={200}
      height={200}
      className="rounded"
      loading="lazy"
    />
  )
}

// Example 5: Handling missing images gracefully
export function MissingImageExample() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Image Error Handling Demo</h3>
      <p className="text-sm text-gray-600">
        This image will fail to load and automatically display the fallback:
      </p>
      <OptimizedImage
        src="/images/non-existent-image.jpg"
        alt="This image does not exist"
        fallbackSrc="/images/placeholders/default.png"
        width={400}
        height={300}
        className="border-2 border-gray-300 rounded"
      />
    </div>
  )
}
