'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface MissionPoint {
  title: string
  description: string
  icon?: string
}

interface MissionSectionProps {
  heading: string
  points: MissionPoint[]
}

export function MissionSection({ heading, points }: MissionSectionProps) {
  const icons = ['🎯', '🏆', '🤝', '⭐']
  const colors = [
    { from: 'from-blue-500', to: 'to-cyan-500', bg: 'bg-blue-50', border: 'border-blue-200' },
    { from: 'from-emerald-500', to: 'to-green-500', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { from: 'from-purple-500', to: 'to-pink-500', bg: 'bg-purple-50', border: 'border-purple-200' },
    { from: 'from-amber-500', to: 'to-orange-500', bg: 'bg-amber-50', border: 'border-amber-200' }
  ]
  
  return (
    <section 
      id="mission" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden"
      aria-label="Mission"
    >
      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'dotMove 30s linear infinite'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-300/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-accent-300/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-accent-200 shadow-lg mb-6">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-sm font-black text-accent-700 tracking-widest uppercase">Our Mission</span>
            </div>
            
            {/* Heading with Split Text Effect */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6">
              <span className="block bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
            
            {/* Animated Underline */}
            <div className="flex justify-center mb-8">
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission Points - Staggered Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {points.map((point, index) => (
            <ScrollReveal 
              key={point.title} 
              animation="slide-up" 
              delay={index * 0.1}
            >
              <div className={`group relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                {/* Connection Line */}
                {index < points.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary-300 to-transparent transform -translate-x-1/2" />
                )}
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-primary-200 transform group-hover:scale-[1.02]">
                  
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index].from} ${colors[index].to} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                  
                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                    
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Icon Container */}
                        <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${colors[index].from} ${colors[index].to} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                          <span className="text-4xl lg:text-5xl">{icons[index]}</span>
                        </div>
                        
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-lg shadow-xl border-4 border-white">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {point.title}
                      </h3>
                      
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="pt-2">
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${colors[index].from} ${colors[index].to} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="hidden lg:block flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors[index].from} ${colors[index].to} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-opacity duration-500`} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dotMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}
