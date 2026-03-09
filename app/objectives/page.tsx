import { PageLayout } from '@/components/layout/PageLayout'
import { ObjectivesSection } from '@/components/sections/ObjectivesSection'
import { getSiteContent } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Objectives',
  description: 'Explore the objectives of Jalandhar District Cue Sports Association - Promoting snooker, supporting players, organizing tournaments, and building a thriving community.',
  openGraph: {
    title: 'Our Objectives | Jalandhar District Cue Sports Association',
    description: 'Promoting snooker, supporting players, organizing tournaments, and building a thriving community.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function ObjectivesPage() {
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
          <ObjectivesSection
            heading="Our Objectives"
            objectives={[
              {
                number: "1",
                title: "Promote the Sport of Snooker",
                description: "To actively promote snooker at district, state, and national levels by increasing awareness, visibility, and participation in the sport.",
                icon: "🎯"
              },
              {
                number: "2",
                title: "Support & Develop Players",
                description: "To provide players with tournament information, ranking updates, training resources, and performance highlights. Helping them grow from beginners to professional-level competitors.",
                icon: "🏆"
              },
              {
                number: "3",
                title: "Organize & Showcase Tournaments",
                description: "To publish schedules, results, fixtures, and photo galleries of local championships, district-level tournaments, and special snooker events ensuring transparency and engagement.",
                icon: "📅"
              },
              {
                number: "4",
                title: "Digital Hub for Members",
                description: "To create a centralized platform where members can register for events, access updates and notices, view official announcements, and stay connected with the association.",
                icon: "💻"
              },
              {
                number: "5",
                title: "Build a Snooker Community",
                description: "To connect players, coaches, referees, sponsors, and fans under one digital platform and encourage sportsmanship and collaboration.",
                icon: "🤝"
              },
              {
                number: "6",
                title: "Provide News & Updates",
                description: "To keep visitors informed about upcoming matches, player achievements, association activities, and national & international snooker highlights.",
                icon: "📰"
              },
              {
                number: "7",
                title: "Encourage Youth Participation",
                description: "To inspire young talent by promoting training programs, academies, and development initiatives.",
                icon: "⭐"
              }
            ]}
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
