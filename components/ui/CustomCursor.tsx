'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsPointer(isClickable)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updateCursor, { passive: true })
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Snooker Ball Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${
            isPointer ? 'scale-125' : 'scale-100'
          }`}
        >
          {/* 3D Snooker Ball */}
          <div className="relative w-6 h-6">
            {/* Ball with gradient */}
            <div 
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isPointer
                  ? 'bg-gradient-to-br from-green-300 via-green-500 to-green-700'
                  : 'bg-gradient-to-br from-red-300 via-red-500 to-red-700'
              }`}
              style={{
                boxShadow: isPointer
                  ? 'inset -1px -1px 4px rgba(0, 0, 0, 0.3), inset 1px 1px 4px rgba(255, 255, 255, 0.5)'
                  : 'inset -1px -1px 4px rgba(0, 0, 0, 0.3), inset 1px 1px 4px rgba(255, 255, 255, 0.5)',
              }}
            />
            
            {/* Glossy shine */}
            <div className="absolute top-0.5 left-1 w-2 h-2 rounded-full bg-white/80 blur-[1px]" />
            
            {/* Number circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-inner flex items-center justify-center">
                <span className={`font-bold text-[8px] transition-colors duration-300 ${
                  isPointer ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isPointer ? '8' : '1'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trailing Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          className={`rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isPointer
              ? 'w-12 h-12 bg-green-500/10 border border-green-500/30'
              : 'w-10 h-10 bg-red-500/10 border border-red-500/20'
          }`}
        />
      </div>
    </>
  )
}
