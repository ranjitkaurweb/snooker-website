'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Member } from '@/lib/types'

interface LeadershipSectionProps {
  heading: string
  members: Member[]
}

export function LeadershipSection({ heading, members }: LeadershipSectionProps) {
  const cardColors = [
    { gradient: 'from-violet-500 to-purple-500', light: 'bg-violet-50', border: 'border-violet-200', ring: 'ring-violet-400' },
    { gradient: 'from-fuchsia-500 to-pink-500', light: 'bg-fuchsia-50', border: 'border-fuchsia-200', ring: 'ring-fuchsia-400' },
    { gradient: 'from-cyan-500 to-blue-500', light: 'bg-cyan-50', border: 'border-cyan-200', ring: 'ring-cyan-400' },
    { gradient: 'from-amber-500 to-yellow-500', light: 'bg-amber-50', border: 'border-amber-200', ring: 'ring-amber-400' }
  ]

  return (
    <section 
      id="leadership" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden" 
      aria-labelledby="leadership-heading"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${15 + (i % 3) * 30}%`,
              animation: `float ${18 + i * 4}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          >
            <div 
              className={`w-40 h-40 bg-gradient-to-br ${cardColors[i % cardColors.length].gradient} opacity-5 rounded-full blur-3xl`}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-purple-200 shadow-xl mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              </div>
              <span className="text-sm font-black text-purple-700 tracking-widest uppercase">Leadership Team</span>
            </div>
            
            {/* Heading */}
            <h2 
              id="leadership-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-8"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-purple-500 rounded-full" />
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full" />
              <div className="w-3 h-3 bg-pink-500 rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />
            </div>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Visionary leaders driving excellence and innovation in cue sports
            </p>
          </div>
        </ScrollReveal>
        
        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {members.map((member, index) => {
            const colorScheme = cardColors[index % cardColors.length]
            
            return (
              <ScrollReveal key={member.id} animation="slide-up" delay={index * 0.08}>
                <div className="group relative h-full">
                  {/* Animated Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${colorScheme.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden transform hover:-translate-y-2">
                    
                    {/* Top Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${colorScheme.gradient}`} />
                    
                    {/* Background Decoration */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorScheme.gradient} opacity-5 rounded-full blur-3xl transform translate-x-16 -translate-y-16`} />
                    
                    {/* Star Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <div className={`w-10 h-10 bg-gradient-to-br ${colorScheme.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Avatar Section */}
                    <div className="relative mb-6">
                      <div className="relative w-36 h-36 mx-auto">
                        {/* Double Rotating Ring */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.gradient} rounded-full`} style={{
                          animation: 'spin 20s linear infinite'
                        }} />
                        
                        <div className="absolute inset-1 bg-white rounded-full" />
                        
                        {/* Inner Rotating Ring (opposite direction) */}
                        <div className={`absolute inset-2 bg-gradient-to-l ${colorScheme.gradient} rounded-full`} style={{
                          animation: 'spinReverse 15s linear infinite'
                        }} />
                        
                        {/* Inner Container */}
                        <div className="absolute inset-3 bg-white rounded-full p-1">
                          <div className="relative w-full h-full rounded-full overflow-hidden">
                            <img
                              src={member.avatar || '/images/placeholders/avatar.svg'}
                              alt={`${member.name} - ${member.role}`}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/images/placeholders/avatar.svg';
                              }}
                            />
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${colorScheme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                          </div>
                        </div>
                        
                        {/* Pulse Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                      </div>
                      
                      {/* Position Badge */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`bg-gradient-to-r ${colorScheme.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-xl border-2 border-white whitespace-nowrap`}>
                          Leader
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="relative text-center pt-4">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-purple-600 transition-all duration-300">
                        {member.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 font-semibold mb-4">
                        {member.role}
                      </p>
                      
                      {/* Contact Info */}
                      {member.contact && (
                        <div className={`space-y-2 text-sm text-gray-600 ${colorScheme.light} rounded-xl p-4 ${colorScheme.border} border transition-all duration-300`}>
                          {member.contact.email && (
                            <div className="flex items-center justify-center gap-2 group/email">
                              <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="group-hover/email:text-purple-600 transition-colors truncate text-xs font-medium">
                                {member.contact.email}
                              </span>
                            </div>
                          )}
                          {member.contact.phone && (
                            <div className="flex items-center justify-center gap-2 group/phone">
                              <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="group-hover/phone:text-purple-600 transition-colors text-xs font-medium">
                                {member.contact.phone}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${colorScheme.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
                    
                    {/* Corner Decoration */}
                    <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${colorScheme.gradient} opacity-0 group-hover:opacity-10 rounded-br-3xl blur-2xl transition-opacity duration-500`} />
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  )
}
