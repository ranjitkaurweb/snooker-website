import { MissionSection } from './MissionSection'

/**
 * Example usage of MissionSection component
 * 
 * This component displays the organization's mission with four mission points
 * in a responsive grid layout. Each point includes a title and description.
 */

const exampleMissionData = {
  heading: "Our Mission",
  points: [
    {
      title: "Training & Development",
      description: "Providing comprehensive coaching programs and training facilities to develop players from beginners to advanced levels, with focus on technique, strategy, and sportsmanship."
    },
    {
      title: "Tournament Organization",
      description: "Organizing regular competitions and championships that provide competitive opportunities for players, promote the sport, and showcase local talent at district and state levels."
    },
    {
      title: "Community Building",
      description: "Creating an inclusive and supportive community of cue sports enthusiasts, fostering camaraderie, networking, and shared passion for snooker, billiards, and pool."
    },
    {
      title: "Talent Recognition",
      description: "Identifying and supporting promising players through recognition programs, sponsorships, and pathways to higher levels of competition, ensuring no talent goes unnoticed."
    }
  ]
}

export default function MissionSectionExample() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MissionSection
        heading={exampleMissionData.heading}
        points={exampleMissionData.points}
      />
    </div>
  )
}
