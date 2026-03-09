'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface Objective {
  number: string
  title: string
  description: string
  icon: string
}

interface ObjectivesSectionProps {
  heading: string
  objectives: Objective[]
}

export function ObjectivesSection({ heading, objectives }: ObjectivesSectionProps) {
  const gradients = [
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-violet-500 via-purple-500 to-fuchsia-500',
    'from-orange-500 via-amber-500 to-yellow-500',
    'from-rose-500 via-pink-500 to-red-500',
    'from-blue-500 via-indigo-500 to-purple-500',
    'from-lime-500 via-green-500 to-emerald-500'
  ]

  return (
    <section 
      id="objectives" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden"
      aria-label="Our Objectives"
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridSlide 20s linear infinite'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div 
              className="w-16 h-16 border-2 border-primary-400/20 rounded-lg transform rotate-45"
              style={{
                animation: `spin ${20 + Math.random() * 10}s linear infinite`
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 backdrop-blur-xl border border-primary-400/30 mb-8">
              <div className="relative flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                <span className="text-sm font-black text-white tracking-widest uppercase">Strategic Goals</span>
              </div>
            </div>
            
            {/* Heading with Gradient */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary-500 to-primary-500 rounded-full" />
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              <div className="h-1 w-40 bg-gradient-to-r from-primary-500 via-accent-500 to-accent-500 rounded-full" />
              <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="h-1 w-20 bg-gradient-to-r from-accent-500 via-transparent to-transparent rounded-full" />
            </div>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Driving excellence through strategic initiatives and innovation
            </p>
          </div>
        </ScrollReveal>

        {/* Objectives Grid - Modern Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {objectives.map((objective, index) => (
            <ScrollReveal 
              key={objective.number} 
              animation="slide-up" 
              delay={index * 0.1}
            >
              <div className="group relative h-full">
                {/* Animated Glow Border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-2 overflow-hidden">
                  
                  {/* Top Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }} />
                  </div>

                  {/* Number Badge - Large and Prominent */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <span className="text-8xl font-black text-white">
                      {objective.number}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="relative inline-block">
                      {/* Rotating Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Icon Box */}
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                        <span className="text-4xl">{objective.icon}</span>
                      </div>
                      
                      {/* Small Number Badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-black text-gray-900">{objective.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                      {objective.title}
                    </h3>
                    
                    <p className="text-base text-gray-300 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Progress</span>
                      <span className="text-xs text-gray-400 font-bold">Active</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}
                      />
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full flex items-center justify-center shadow-lg`}>
                      <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="slide-up" delay={0.8}>
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-8">
              <p className="text-xl sm:text-2xl text-gray-300 font-medium max-w-2xl">
                Join us in achieving these ambitious goals and shaping the future of cue sports
              </p>
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative">Get Involved Today</span>
                <svg className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes gridSlide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        @keyframes spin {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
      `}</style>
    </section>
  )
}
