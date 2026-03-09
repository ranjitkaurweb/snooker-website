'use client'

import { useEffect, useState } from 'react'

const snookerBalls = [
  { color: 'from-red-400 via-red-500 to-red-600', shadow: 'rgba(239, 68, 68, 0.5)' },
  { color: 'from-red-400 via-red-500 to-red-600', shadow: 'rgba(239, 68, 68, 0.5)' },
  { color: 'from-red-400 via-red-500 to-red-600', shadow: 'rgba(239, 68, 68, 0.5)' },
  { color: 'from-yellow-300 via-yellow-400 to-yellow-500', shadow: 'rgba(234, 179, 8, 0.5)' },
  { color: 'from-green-400 via-green-500 to-green-600', shadow: 'rgba(34, 197, 94, 0.5)' },
  { color: 'from-amber-600 via-amber-700 to-amber-800', shadow: 'rgba(180, 83, 9, 0.5)' },
  { color: 'from-blue-400 via-blue-500 to-blue-600', shadow: 'rgba(59, 130, 246, 0.5)' },
  { color: 'from-pink-400 via-pink-500 to-pink-600', shadow: 'rgba(236, 72, 153, 0.5)' },
  { color: 'from-gray-700 via-gray-800 to-gray-900', shadow: 'rgba(31, 41, 55, 0.5)' },
  { color: 'from-white via-gray-100 to-gray-200', shadow: 'rgba(156, 163, 175, 0.5)' },
]

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Reduced to 800ms for faster loading

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[10000] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 animate-gradient-shift" />
      
      {/* Animated Mesh Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)
          `,
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%),
              linear-gradient(150deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl top-10 -left-20 animate-float-slow" />
        <div className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl bottom-20 -right-20 animate-float-slower" />
        <div className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '3s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo and Title */}
        <div className="mb-12 flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-4 shadow-2xl">
              <img
                src="/images/hero/snooker-logo-final.png"
                alt="JDCSA Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Green dot indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-900 shadow-lg animate-pulse" />
          </div>

          {/* Association Name */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-2">
              Jalandhar District
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-3">
              <span className="text-gray-200">Cue Sports </span>
              <span className="text-emerald-400">Association</span>
            </h2>
            <p className="text-sm sm:text-base text-blue-200 tracking-wider uppercase font-semibold">
              Think Ahead
            </p>
          </div>
        </div>

        {/* Snooker Balls Animation */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-3 mb-8">
          {/* Glow effect behind balls */}
          <div className="absolute inset-0 blur-2xl opacity-50">
            {snookerBalls.map((ball, index) => (
              <div
                key={`glow-${index}`}
                className={`absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${ball.color}`}
                style={{
                  left: `${index * 10}%`,
                  animation: `bounce 1.2s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Actual balls */}
          {snookerBalls.map((ball, index) => (
            <div
              key={index}
              className="relative"
              style={{
                animation: `bounce 1.2s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div 
                className={`w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br ${ball.color} relative`}
                style={{
                  boxShadow: `0 4px 15px ${ball.shadow}, inset -2px -2px 6px rgba(0, 0, 0, 0.3), inset 2px 2px 6px rgba(255, 255, 255, 0.4)`,
                }}
              >
                <div className="absolute top-1 left-1.5 sm:top-1.5 sm:left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/70 blur-[1px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-8 text-white/40 text-xs sm:text-sm font-semibold tracking-widest text-center px-4">
          JALANDHAR DISTRICT CUE SPORTS ASSOCIATION
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float 15s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
