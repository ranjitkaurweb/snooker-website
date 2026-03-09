'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Member } from '@/lib/types'

interface ExecutiveSectionProps {
  heading: string
  members: Member[]
}

export function ExecutiveSection({ heading, members }: ExecutiveSectionProps) {
  const cardColors = [
    { gradient: 'from-blue-500 to-cyan-500', light: 'bg-blue-50', border: 'border-blue-200' },
    { gradient: 'from-purple-500 to-pink-500', light: 'bg-purple-50', border: 'border-purple-200' },
    { gradient: 'from-emerald-500 to-teal-500', light: 'bg-emerald-50', border: 'border-emerald-200' },
    { gradient: 'from-orange-500 to-amber-500', light: 'bg-orange-50', border: 'border-orange-200' },
    { gradient: 'from-rose-500 to-pink-500', light: 'bg-rose-50', border: 'border-rose-200' },
    { gradient: 'from-indigo-500 to-purple-500', light: 'bg-indigo-50', border: 'border-indigo-200' }
  ]

  return (
    <section 
      id="executive" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden" 
      aria-label="Executive Members"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-transparent to-accent-100/50" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${20 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          >
            <div 
              className={`w-32 h-32 bg-gradient-to-br ${cardColors[i % cardColors.length].gradient} opacity-5 rounded-full blur-2xl`}
            />
          </div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-primary-200 shadow-xl mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
              <span className="text-sm font-black text-primary-700 tracking-widest uppercase">Executive Team</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-primary-500 rounded-full" />
              <div className="w-3 h-3 bg-primary-500 rounded-full" />
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full" />
              <div className="w-3 h-3 bg-accent-500 rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-transparent rounded-full" />
            </div>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals driving our mission forward with passion and expertise
            </p>
          </div>
        </ScrollReveal>
        
        {/* Executive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
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
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorScheme.gradient}`} />
                    
                    {/* Background Decoration */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorScheme.gradient} opacity-5 rounded-full blur-3xl transform translate-x-10 -translate-y-10`} />
                    
                    {/* Avatar Section */}
                    <div className="relative mb-6">
                      <div className="relative w-32 h-32 mx-auto">
                        {/* Outer Rotating Ring */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.gradient} rounded-full`} style={{
                          animation: 'spin 15s linear infinite'
                        }} />
                        
                        {/* Middle Ring */}
                        <div className="absolute inset-1 bg-white rounded-full" />
                        
                        {/* Inner Container */}
                        <div className={`absolute inset-2 bg-gradient-to-br ${colorScheme.gradient} rounded-full p-0.5`}>
                          <div className="w-full h-full bg-white rounded-full p-1">
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
                        </div>
                        
                        {/* Pulse Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                      </div>
                      
                      {/* Role Badge */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`bg-gradient-to-r ${colorScheme.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-xl border-2 border-white whitespace-nowrap`}>
                          {member.role.split(' ').slice(0, 2).join(' ')}
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="relative text-center pt-4">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-primary-600 transition-all duration-300">
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
                              <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="group-hover/email:text-primary-600 transition-colors truncate text-xs font-medium">
                                {member.contact.email}
                              </span>
                            </div>
                          )}
                          {member.contact.phone && (
                            <div className="flex items-center justify-center gap-2 group/phone">
                              <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="group-hover/phone:text-primary-600 transition-colors text-xs font-medium">
                                {member.contact.phone}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorScheme.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
                    
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
      `}</style>
    </section>
  )
}
