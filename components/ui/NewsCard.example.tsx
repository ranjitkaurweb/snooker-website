import React from 'react'
import { NewsCard } from './NewsCard'

/**
 * NewsCard Component Examples
 * 
 * Demonstrates various use cases of the NewsCard component
 */

export function NewsCardExamples() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">NewsCard Component Examples</h1>

      {/* Example 1: Basic News Card */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Basic News Card</h2>
        <div className="max-w-sm">
          <NewsCard
            title="2024 Championship Announced"
            description="Exciting news about the upcoming snooker championship tournament scheduled for next month."
            image="/images/news/championship-2024.jpg"
            slug="championship-2024"
            date="2024-01-15T10:00:00Z"
          />
        </div>
      </section>

      {/* Example 2: News Card without Category */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">News Card without Category</h2>
        <div className="max-w-sm">
          <NewsCard
            title="New Training Program Launched"
            description="We are excited to announce a new training program for aspiring snooker players."
            image="/images/news/training-program.jpg"
            slug="training-program-launch"
            date="2024-01-20T14:30:00Z"
          />
        </div>
      </section>

      {/* Example 3: Grid of News Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">News Grid Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            title="Local Player Wins National Championship"
            description="Congratulations to our local player who secured first place in the national championship."
            image="/images/news/winner-2024.jpg"
            slug="national-championship-winner"
            date="2024-01-10T09:00:00Z"
          />
          <NewsCard
            title="Upcoming Workshop for Beginners"
            description="Join us for a comprehensive workshop designed for beginners interested in learning snooker."
            image="/images/news/workshop.jpg"
            slug="beginners-workshop"
            date="2024-01-18T11:00:00Z"
          />
          <NewsCard
            title="New Facility Opening Soon"
            description="We are thrilled to announce the opening of our new state-of-the-art training facility."
            image="/images/news/new-facility.jpg"
            slug="new-facility-opening"
            date="2024-01-25T16:00:00Z"
          />
        </div>
      </section>

      {/* Example 4: Long Title and Description */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Long Content (Truncated)</h2>
        <div className="max-w-sm">
          <NewsCard
            title="International Snooker Federation Announces Major Changes to Tournament Rules and Regulations for the Upcoming Season"
            description="The International Snooker Federation has released a comprehensive update to the tournament rules and regulations that will affect all professional and amateur competitions starting from the next season. These changes include modifications to scoring systems, time limits, and player conduct guidelines that aim to improve the overall quality and fairness of the sport."
            image="/images/news/rule-changes.jpg"
            slug="tournament-rule-changes"
            date="2024-01-22T13:45:00Z"
          />
        </div>
      </section>
    </div>
  )
}

export default NewsCardExamples
