// TypeScript type definitions for Sports Association Website

// ============================================================================
// Site Content Types
// ============================================================================

export interface SiteContent {
  hero: HeroContent
  vision: VisionContent
  mission: MissionContent
  objectives: ObjectivesContent
  leadership: LeadershipContent
  executive: ExecutiveContent
  news: NewsContent
  contact: ContactContent
  footer: FooterContent
}

export interface HeroContent {
  title: string
  tagline: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
}

export interface VisionContent {
  heading: string
  description: string
  pillars: Array<{
    title: string
    description: string
    icon?: string
  }>
}

export interface MissionContent {
  heading: string
  points: Array<{
    title: string
    description: string
    icon?: string
  }>
}

export interface ObjectivesContent {
  heading: string
  items: Array<{
    number: string
    title: string
    description: string
    icon: string
  }>
}

export interface LeadershipContent {
  heading: string
  description: string
  members: Array<{
    id: string
    name: string
    role: string
    avatar: string
    bio?: string
    order?: number
  }>
}

export interface ExecutiveContent {
  heading: string
  description: string
  members: Array<{
    id: string
    name: string
    role: string
    avatar: string
    order?: number
  }>
}

export interface NewsContent {
  heading: string
  description: string
  items: Array<{
    id: string
    title: string
    slug: string
    excerpt: string
    description: string
    date: string
    image: string
    category: string
  }>
}

export interface ContactContent {
  heading: string
  email: string
  phone: string
  address: string
}

export interface FooterContent {
  about: {
    heading: string
    text: string
  }
  galleries: Array<{
    title: string
    url: string
  }>
  contact: {
    heading: string
    email?: string
    phone?: string
    address?: string
  }
  social: Array<{
    platform: string
    url: string
    icon: string
  }>
}

// ============================================================================
// Member Types
// ============================================================================

export interface Member {
  id: string
  name: string
  role: string
  avatar: string
  bio?: string
  contact?: {
    email?: string
    phone?: string
  }
  order?: number
}

export interface LeadershipData {
  members: Member[]
}

export interface ExecutiveData {
  members: Member[]
}

// ============================================================================
// News Article Types
// ============================================================================

export interface NewsArticle {
  slug: string
  title: string
  description?: string
  excerpt?: string
  content?: string
  image: string
  date: string
  author?: string
  category?: string
  tags?: string[]
  published?: boolean
}

export interface NewsIndex {
  articles: Array<{
    slug: string
    title: string
    description: string
    image: string
    date: string
    category?: string
  }>
}

// ============================================================================
// Metadata Types
// ============================================================================

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title: string
    description: string
    image: string
    url: string
  }
  twitter?: {
    card: 'summary' | 'summary_large_image'
    title: string
    description: string
    image: string
  }
}
