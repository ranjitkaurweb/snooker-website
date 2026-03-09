import { PageLayout } from '@/components/layout/PageLayout'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { getSiteContent, getLeadership } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Leadership',
  description: 'Meet the leadership team of Jalandhar District Cue Sports Association - Dedicated individuals guiding the growth and development of cue sports in our district.',
  openGraph: {
    title: 'Our Leadership | Jalandhar District Cue Sports Association',
    description: 'Meet the leadership team guiding the growth and development of cue sports in Jalandhar district.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function LeadershipPage() {
  try {
    const content = await getSiteContent()
    const leadership = await getLeadership()

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
          <LeadershipSection
            heading="Our Leadership"
            members={leadership.members}
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
