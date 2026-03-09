'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface VisionPillar {
  title: string
  description: string
  icon?: string
}

interface VisionSectionProps {
  heading: string
  description: string
  pillars: VisionPillar[]
}

export function VisionSection({ heading, description, pillars }: VisionSectionProps) {
  const icons = ['🎯', '🚀', '💎']
  
  return (
    <section 
      id="vision" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      aria-label="Vision"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgb(34, 197, 94) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgb(251, 191, 36) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '30s', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 border-4 border-primary-200/30 rounded-full animate-float" style={{ animationDuration: '20s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-100 via-accent-50 to-primary-100 border border-primary-200 mb-6">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-bold text-primary-700 tracking-wide uppercase">Our Vision</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-gray-900 mb-6 leading-tight">
              {heading}
            </h2>
            
            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary-500 rounded-full" />
              <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse" />
              <div className="h-1 w-32 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full" />
              <div className="h-2 w-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-transparent rounded-full" />
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        {/* Vision Pillars - Hexagonal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <ScrollReveal 
              key={pillar.title} 
              animation="slide-up" 
              delay={index * 0.15}
            >
              <div className="group relative h-full">
                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-xl" />
                
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-transparent transform group-hover:-translate-y-3">
                  
                  {/* Icon Container - Hexagon Shape */}
                  <div className="relative mb-8">
                    <div className="relative w-24 h-24 mx-auto">
                      {/* Hexagon Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 transform rotate-0 group-hover:rotate-180 transition-transform duration-700" style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }} />
                      
                      {/* Inner Circle */}
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl">{icons[index]}</span>
                      </div>
                      
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg border-4 border-white group-hover:scale-125 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="slide-up" delay={0.6}>
          <div className="text-center mt-16 sm:mt-20">
            <a
              href="/vision"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Learn More About Our Vision</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
