import { PageLayout } from '@/components/layout/PageLayout'
import { NewsSection } from '@/components/sections/NewsSection'
import { getSiteContent, getAllNewsArticles } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Latest News',
  description: 'Stay updated with the latest news and updates from Jalandhar District Cue Sports Association - Tournament results, player achievements, and association activities.',
  openGraph: {
    title: 'Latest News | Jalandhar District Cue Sports Association',
    description: 'Stay updated with tournament results, player achievements, and association activities.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function NewsPage() {
  try {
    const content = await getSiteContent()
    const news = await getAllNewsArticles()

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
          <NewsSection
            heading="Indian Snooker News"
            articles={news}
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
