'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export interface ScrollRevealProps {
  children: React.ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right'
  delay?: number
}

export function ScrollReveal({
  children,
  animation = 'fade',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px -50px 0px" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show content immediately during SSR and initial mount to prevent flash
  if (!mounted) {
    return <div ref={ref}>{children}</div>
  }

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-up': {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    'slide-left': {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="visible"
      animate={isInView ? 'visible' : 'visible'}
      variants={variants[animation]}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
