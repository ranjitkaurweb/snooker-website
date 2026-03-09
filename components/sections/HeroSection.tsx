'use client'

import { Button } from '@/components/ui/Button'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  title: string
  tagline: string
  ctaText: string
  ctaLink: string
}

export function HeroSection({ 
  title, 
  tagline, 
  ctaText, 
  ctaLink
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-slate-800"
      aria-label="Hero"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Diagonal Stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content - Centered */}
          <div className="text-center space-y-8 mb-16">
            
            {/* Animated Badge */}
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-xl border border-primary-400/30 text-white"
              style={{
                animation: 'slideDown 0.8s ease-out'
              }}
            >
              <div className="relative flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold tracking-wider uppercase">Official Cue Sports Association</span>
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-tight"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}
            >
              <span className="block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {title}
              </span>
            </h1>
            
            {/* Tagline */}
            <p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-light"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}
            >
              {tagline}
            </p>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
              style={{
                animation: 'fadeInUp 1s ease-out 0.6s both'
              }}
            >
              <Button 
                href={ctaLink} 
                variant="primary" 
                size="lg"
                className="group relative min-h-[56px] bg-gradient-to-r from-emerald-500 via-primary-500 to-emerald-600 hover:from-emerald-600 hover:via-primary-600 hover:to-emerald-700 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl shadow-emerald-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3">
                  {ctaText}
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              
              <Button 
                href="/vision" 
                variant="secondary"
                size="lg"
                className="group min-h-[56px] bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-bold text-lg px-12 py-4 rounded-2xl hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Explore More
                  <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>

          {/* Stats Grid - Modern Cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            style={{
              animation: 'fadeInUp 1s ease-out 0.8s both'
            }}
          >
            {[
              { number: '500+', label: 'Active Members', icon: '👥' },
              { number: '50+', label: 'Tournaments', icon: '🏆' },
              { number: '15+', label: 'Years Legacy', icon: '⭐' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-center space-y-2">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl sm:text-5xl font-black text-white">{stat.number}</div>
                  <div className="text-sm sm:text-base text-blue-200 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
