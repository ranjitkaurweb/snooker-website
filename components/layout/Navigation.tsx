'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/vision', label: 'Vision' },
  { href: '/mission', label: 'Mission' },
  { href: '/objectives', label: 'Objectives' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/executive', label: 'Executive' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

interface NavigationProps {
  isScrolled?: boolean
  transparent?: boolean
  currentPath?: string
}

export function Navigation({ isScrolled = false, transparent = false, currentPath = '/' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const textColor = transparent && !isScrolled ? 'text-white' : 'text-gray-900'
  const hoverColor = transparent && !isScrolled ? 'hover:text-white/80' : 'hover:text-primary-600'
  const activeColor = transparent && !isScrolled ? 'text-white border-white' : 'text-primary-600 border-primary-600'
  const mobileMenuBg = transparent && !isScrolled ? 'bg-primary-600' : 'bg-white shadow-lg'

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/'
    }
    return currentPath === href
  }

  return (
    <>
      {/* Desktop Navigation - Only show on extra large screens */}
      <nav className="hidden xl:flex space-x-4 lg:space-x-6" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors font-medium text-sm lg:text-base min-h-[44px] flex items-center ${
              isActive(link.href)
                ? activeColor
                : `${textColor} ${hoverColor}`
            } ${isActive(link.href) ? 'border-b-2' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Toggle Menu Button - Show on mobile, tablet, and laptop */}
      <button
        className={`xl:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${textColor}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Toggle Menu - Show on mobile, tablet, and laptop with slide-in animation */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 ${mobileMenuBg} overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 transition-colors text-base min-h-[44px] flex items-center ${
                isActive(link.href)
                  ? `${transparent && !isScrolled ? 'text-white bg-primary-700 border-l-4 border-white' : 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'}`
                  : `${transparent && !isScrolled ? 'text-white/80 hover:bg-primary-700 hover:text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
