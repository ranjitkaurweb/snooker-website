import { PageLayout } from '@/components/layout/PageLayout'
import { HeroSection } from '@/components/sections/HeroSection'
import { VisionSection } from '@/components/sections/VisionSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { ObjectivesSection } from '@/components/sections/ObjectivesSection'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { ExecutiveSection } from '@/components/sections/ExecutiveSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { getSiteContent } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Jalandhar District Cue Sports Association - Promoting excellence in snooker, billiards, and cue sports in Jalandhar district.',
  openGraph: {
    title: 'Jalandhar District Cue Sports Association',
    description: 'Promoting excellence in snooker, billiards, and cue sports in Jalandhar district.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function HomePage() {
  try {
    const content = await getSiteContent()

    return (
      <PageLayout 
        transparent={true}
        footerProps={{
          aboutText: content.footer.about.text,
          galleries: content.footer.galleries,
          contact: content.footer.contact,
          socialMedia: content.footer.social,
        }}
      >
        <HeroSection
          title={content.hero.title}
          tagline={content.hero.tagline}
          ctaText={content.hero.ctaText}
          ctaLink={content.hero.ctaLink}
        />
        <VisionSection
          heading={content.vision.heading}
          description={content.vision.description}
          pillars={content.vision.pillars}
        />
        <MissionSection
          heading={content.mission.heading}
          points={content.mission.points}
        />
        <ObjectivesSection
          heading={content.objectives.heading}
          objectives={content.objectives.items}
        />
        <LeadershipSection
          heading={content.leadership.heading}
          members={content.leadership.members}
        />
        <ExecutiveSection
          heading={content.executive.heading}
          members={content.executive.members}
        />
        <NewsSection
          heading={content.news.heading}
          articles={content.news.items}
          maxDisplay={3}
        />
        <ContactSection />
      </PageLayout>
    )
  } catch (error) {
    console.error('Failed to load content:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Unable to Load Content</h1>
          <p className="text-gray-600 mb-4">Please try refreshing the page.</p>
          <pre className="text-left text-xs bg-white p-4 rounded border overflow-auto max-w-2xl">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
      </div>
    )
  }
}
