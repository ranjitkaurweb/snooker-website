'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
  transparent?: boolean
  footerProps: {
    aboutText: string
    galleries: Array<{ title: string; url: string }>
    contact: {
      email?: string
      phone?: string
      address?: string
    }
    socialMedia: Array<{
      platform: string
      url: string
      icon: string
    }>
  }
}

export function PageLayout({ children, transparent = false, footerProps }: PageLayoutProps) {
  const pathname = usePathname()
  
  return (
    <>
      <Header transparent={transparent} currentPath={pathname} />
      <main role="main" className="relative">
        {children}
      </main>
      <Footer
        aboutText={footerProps.aboutText}
        galleries={footerProps.galleries}
        contact={footerProps.contact}
        socialMedia={footerProps.socialMedia}
      />
    </>
  )
}
