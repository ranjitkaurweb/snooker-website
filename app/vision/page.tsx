import { PageLayout } from '@/components/layout/PageLayout'
import { VisionSection } from '@/components/sections/VisionSection'
import { getSiteContent } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Vision',
  description: 'Discover the vision of Jalandhar District Cue Sports Association - Building a thriving cue sports community through excellence, inclusivity, and sustainable growth.',
  openGraph: {
    title: 'Our Vision | Jalandhar District Cue Sports Association',
    description: 'Building a thriving cue sports community through excellence, inclusivity, and sustainable growth.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function VisionPage() {
  try {
    const content = await getSiteContent()

    return (
      <PageLayout 
        transparent={false}
        footerProps={{
          aboutText: content.footer.about.text,
          galleries: content.footer.galleries,
          contact: content.footer.contact,
          socialMedia: content.footer.social,
        }}
      >
        <div className="pt-24">
          <VisionSection
            heading={content.vision.heading}
            description={content.vision.description}
            pillars={content.vision.pillars}
          />
        </div>
      </PageLayout>
    )
  } catch (error) {
    console.error('Failed to load content:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Unable to Load Content</h1>
          <p className="text-gray-600 mb-4">Please try refreshing the page.</p>
        </div>
      </div>
    )
  }
}
