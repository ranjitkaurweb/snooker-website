'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from './Navigation'

interface HeaderProps {
  transparent?: boolean
  currentPath?: string
}

export function Header({ transparent = false, currentPath }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = transparent && !isScrolled
    ? 'bg-transparent text-white'
    : 'bg-white shadow-lg text-gray-900'

  const logoClass = transparent && !isScrolled
    ? 'text-white'
    : 'text-primary-600'

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Text */}
        <Link 
          href="/" 
          className="flex items-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity group"
          aria-label="Jalandhar District Cue Sports Association - Go to home"
        >
          {/* Logo Image - No background, no border */}
          <div className="relative w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 border-0">
            <Image
              src="/images/hero/snooker-logo-final.png"
              alt="JDCSA Logo"
              width={64}
              height={64}
              className="object-contain transform group-hover:scale-110 transition-transform duration-300"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              priority
            />
          </div>
          
          {/* Text */}
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-base sm:text-lg md:text-xl leading-tight ${logoClass}`}>
              Jalandhar District
            </span>
            <span className={`font-heading font-semibold text-sm sm:text-base md:text-lg leading-tight ${
              transparent && !isScrolled ? 'text-emerald-300' : 'text-emerald-600'
            }`}>
              Cue Sports Association
            </span>
          </div>
        </Link>
        
        <Navigation isScrolled={isScrolled} transparent={transparent} currentPath={currentPath} />
      </div>
    </header>
  )
}
