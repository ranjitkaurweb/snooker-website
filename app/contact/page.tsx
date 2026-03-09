import { PageLayout } from '@/components/layout/PageLayout'
import { ContactSection } from '@/components/sections/ContactSection'
import { getSiteContent } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Jalandhar District Cue Sports Association - Contact us for inquiries, membership information, or tournament details.',
  openGraph: {
    title: 'Contact Us | Jalandhar District Cue Sports Association',
    description: 'Get in touch with us for inquiries, membership information, or tournament details.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function ContactPage() {
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
          <ContactSection />
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
