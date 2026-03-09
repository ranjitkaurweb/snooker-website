import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { getOrganizationSchema } from '@/lib/metadata'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { PageLoader } from '@/components/ui/PageLoader'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jalandhar District Cue Sports Association',
    template: '%s | Jalandhar District Cue Sports Association'
  },
  description: 'Official website of Jalandhar District Cue Sports Association - Promoting excellence in snooker, billiards, and cue sports.',
  keywords: ['cue sports', 'snooker', 'billiards', 'Jalandhar', 'sports association'],
  authors: [{ name: 'Jalandhar District Cue Sports Association' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jalandharcuesports.org',
    siteName: 'Jalandhar District Cue Sports Association',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jalandhar District Cue Sports Association'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalandhar District Cue Sports Association',
    description: 'Promoting excellence in cue sports',
    images: ['/images/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = getOrganizationSchema()

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} cursor-none`}>
        <PageLoader />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
