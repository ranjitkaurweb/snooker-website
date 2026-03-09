import { MemberProfile } from './MemberProfile'

export default function MemberProfileExample() {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">MemberProfile Component Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Circular avatar with contact */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Circular Avatar (Leadership)</h3>
          <MemberProfile
            name="John Doe"
            role="President"
            avatar="/images/members/john-doe.jpg"
            contact={{
              email: "john.doe@example.com",
              phone: "+91 98765 43210"
            }}
            circular={true}
          />
        </div>

        {/* Square avatar without contact */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Square Avatar (Executive)</h3>
          <MemberProfile
            name="Jane Smith"
            role="Secretary"
            avatar="/images/members/jane-smith.jpg"
            circular={false}
          />
        </div>

        {/* With fallback placeholder */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Fallback Placeholder</h3>
          <MemberProfile
            name="Bob Johnson"
            role="Treasurer"
            avatar="/images/members/non-existent.jpg"
            contact={{
              email: "bob.johnson@example.com"
            }}
            circular={true}
          />
        </div>

        {/* Long name handling */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Long Name</h3>
          <MemberProfile
            name="Dr. Rajesh Kumar Sharma Extraordinaire"
            role="Vice President & Technical Advisor"
            avatar="/images/placeholders/avatar.svg"
            circular={false}
          />
        </div>

        {/* Email only contact */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Email Only</h3>
          <MemberProfile
            name="Alice Williams"
            role="Member"
            avatar="/images/placeholders/avatar.svg"
            contact={{
              email: "alice.williams@example.com"
            }}
            circular={true}
          />
        </div>

        {/* Phone only contact */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Phone Only</h3>
          <MemberProfile
            name="Charlie Brown"
            role="Coordinator"
            avatar="/images/placeholders/avatar.svg"
            contact={{
              phone: "+91 98765 12345"
            }}
            circular={false}
          />
        </div>
      </div>
    </div>
  )
}
