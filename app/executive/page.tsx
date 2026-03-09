import { PageLayout } from '@/components/layout/PageLayout'
import { ExecutiveSection } from '@/components/sections/ExecutiveSection'
import { getSiteContent, getExecutive } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Committee',
  description: 'Meet the Executive Committee of Jalandhar District Cue Sports Association - Committed members working together to advance cue sports excellence.',
  openGraph: {
    title: 'Executive Committee | Jalandhar District Cue Sports Association',
    description: 'Meet the Executive Committee working together to advance cue sports excellence in Jalandhar district.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function ExecutivePage() {
  try {
    const content = await getSiteContent()
    const executive = await getExecutive()

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
          <ExecutiveSection
            heading="Executive Members"
            members={executive.members}
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
