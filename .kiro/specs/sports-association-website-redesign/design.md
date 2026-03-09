# Design Document: Sports Association Website Redesign

## Overview

This design document specifies the technical architecture and implementation approach for rebuilding the Jalandhar District Cue Sports Association website using Next.js 14 with the App Router. The redesign focuses on modern UI/UX, performance optimization, accessibility, and maintainability while preserving the existing content structure.

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Animation**: Framer Motion for smooth transitions and scroll animations
- **Image Optimization**: Next.js Image component with WebP format
- **Content Management**: JSON/Markdown files with TypeScript interfaces
- **Deployment**: Vercel (recommended) or any Node.js hosting platform

### Design Principles

1. **Performance First**: Leverage Next.js static generation and image optimization
2. **Mobile-First Responsive**: Design for mobile devices first, then scale up
3. **Accessibility**: WCAG 2.1 AA compliance for inclusive design
4. **Component Reusability**: Build modular, reusable React components
5. **Type Safety**: Use TypeScript throughout for better developer experience
6. **SEO Optimized**: Implement proper metadata and semantic HTML

## Architecture

### Project Structure

```
sports-association-website/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Home page
│   ├── news/
│   │   └── [slug]/
│   │       └── page.tsx           # Individual news article pages
│   └── globals.css                # Global styles and Tailwind imports
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Navigation header
│   │   ├── Footer.tsx             # Footer component
│   │   └── Navigation.tsx         # Navigation menu
│   ├── sections/
│   │   ├── HeroSection.tsx        # Hero landing section
│   │   ├── VisionSection.tsx      # Vision content section
│   │   ├── MissionSection.tsx     # Mission content section
│   │   ├── LeadershipSection.tsx  # Leadership team section
│   │   ├── ExecutiveSection.tsx   # Executive members section
│   │   └── NewsSection.tsx        # News articles section
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Card.tsx               # Card component for news/members
│   │   ├── MemberProfile.tsx      # Member profile card
│   │   ├── NewsCard.tsx           # News article card
│   │   └── SectionContainer.tsx   # Section wrapper with animations
│   └── animations/
│       └── ScrollReveal.tsx       # Scroll-triggered animation wrapper
├── data/
│   ├── content.json               # Static content (vision, mission, etc.)
│   ├── leadership.json            # Leadership team data
│   ├── executive.json             # Executive members data
│   └── news/
│       ├── index.json             # News articles metadata
│       └── [slug].md              # Individual news articles in Markdown
├── lib/
│   ├── content.ts                 # Content loading utilities
│   ├── metadata.ts                # SEO metadata generators
│   └── types.ts                   # TypeScript type definitions
├── public/
│   ├── images/
│   │   ├── hero/                  # Hero section images
│   │   ├── members/               # Member avatars
│   │   ├── news/                  # News article images
│   │   └── placeholders/          # Fallback images
│   └── favicon.ico
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── next.config.js                 # Next.js configuration
```

### Rendering Strategy

- **Static Generation (SSG)**: Home page and all content sections for optimal performance
- **Incremental Static Regeneration (ISR)**: News articles with revalidation for content updates
- **Client-Side Interactivity**: Navigation, animations, and interactive elements using React hooks

### Routing Architecture

- `/` - Home page with all main sections (Hero, Vision, Mission, Leadership, Executive, News)
- `/news/[slug]` - Individual news article pages with dynamic routing
- All sections accessible via anchor links with smooth scrolling

## Components and Interfaces

### Layout Components

#### Header Component
```typescript
interface HeaderProps {
  transparent?: boolean;  // For hero overlay
}
```

**Responsibilities**:
- Render navigation menu with links to sections
- Implement sticky/fixed positioning on scroll
- Handle mobile hamburger menu toggle
- Highlight active section based on scroll position

#### Footer Component
```typescript
interface FooterProps {
  aboutText: string;
  galleries: GalleryLink[];
  contact: ContactInfo;
  socialMedia: SocialLink[];
}
```

**Responsibilities**:
- Display multi-column footer layout
- Render About, Galleries, Contact, and Follow sections
- Provide social media links with icons
- Maintain responsive grid layout

### Section Components

#### HeroSection Component
```typescript
interface HeroSectionProps {
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}
```

**Responsibilities**:
- Display full-viewport hero section
- Render gradient background or background image
- Implement call-to-action button
- Ensure above-the-fold visibility

#### VisionSection Component
```typescript
interface VisionPillar {
  title: string;
  description: string;
  icon?: string;
}

interface VisionSectionProps {
  heading: string;
  description: string;
  pillars: VisionPillar[];
}
```

**Responsibilities**:
- Display vision heading and description
- Render three vision pillars in a grid layout
- Implement scroll-triggered animations
- Maintain responsive card layout

#### MissionSection Component
```typescript
interface MissionPoint {
  title: string;
  description: string;
  icon?: string;
}

interface MissionSectionProps {
  heading: string;
  points: MissionPoint[];
}
```

**Responsibilities**:
- Display mission heading
- Render four mission points in a grid
- Implement icon or visual indicators
- Animate on scroll into view

#### LeadershipSection Component
```typescript
interface LeaderMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

interface LeadershipSectionProps {
  heading: string;
  members: LeaderMember[];
}
```

**Responsibilities**:
- Display leadership heading
- Render member profiles with circular avatars
- Implement responsive grid layout (1-2-3 columns)
- Handle missing avatar with placeholder

#### ExecutiveSection Component
```typescript
interface ExecutiveMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  contact?: string;
}

interface ExecutiveSectionProps {
  heading: string;
  members: ExecutiveMember[];
}
```

**Responsibilities**:
- Display executive members heading
- Render member profiles in grid layout
- Show optional contact information
- Implement hover effects for interactivity

#### NewsSection Component
```typescript
interface NewsArticle {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category?: string;
}

interface NewsSectionProps {
  heading: string;
  articles: NewsArticle[];
  maxDisplay?: number;  // Limit displayed articles
}
```

**Responsibilities**:
- Display news section heading
- Render news cards in responsive grid
- Implement "Read More" links to article pages
- Handle image loading and optimization

### UI Components

#### MemberProfile Component
```typescript
interface MemberProfileProps {
  name: string;
  role: string;
  avatar: string;
  contact?: string;
  circular?: boolean;  // For leadership vs executive styling
}
```

**Responsibilities**:
- Display member avatar with Next.js Image
- Render name and role with proper typography
- Show optional contact information
- Support circular or square avatar styles

#### NewsCard Component
```typescript
interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}
```

**Responsibilities**:
- Display article image with optimization
- Render title and description preview
- Provide "Read More" link to full article
- Implement hover effects and transitions

#### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
```

**Responsibilities**:
- Render styled button with variants
- Support both button and link functionality
- Implement hover and active states
- Ensure accessibility with proper ARIA attributes

#### ScrollReveal Component
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}
```

**Responsibilities**:
- Wrap content with Framer Motion animations
- Trigger animations on scroll into viewport
- Respect prefers-reduced-motion user preference
- Provide configurable animation types

## Data Models

### Content Data Model

```typescript
// lib/types.ts

export interface SiteContent {
  hero: HeroContent;
  vision: VisionContent;
  mission: MissionContent;
  footer: FooterContent;
}

export interface HeroContent {
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface VisionContent {
  heading: string;
  description: string;
  pillars: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface MissionContent {
  heading: string;
  points: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface FooterContent {
  about: {
    heading: string;
    text: string;
  };
  galleries: Array<{
    title: string;
    url: string;
  }>;
  contact: {
    heading: string;
    email?: string;
    phone?: string;
    address?: string;
  };
  social: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}
```

### Member Data Model

```typescript
export interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  order: number;  // For display ordering
}

export interface LeadershipData {
  members: Member[];
}

export interface ExecutiveData {
  members: Member[];
}
```

### News Data Model

```typescript
export interface NewsArticle {
  slug: string;
  title: string;
  description: string;
  content: string;  // Markdown content
  image: string;
  date: string;  // ISO 8601 format
  author?: string;
  category?: string;
  tags?: string[];
  published: boolean;
}

export interface NewsIndex {
  articles: Array<{
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category?: string;
  }>;
}
```

### Metadata Model

```typescript
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
}
```

### Data File Structure

**data/content.json**:
```json
{
  "hero": {
    "title": "Jalandhar District Cue Sports Association",
    "tagline": "Promoting Excellence in Cue Sports",
    "ctaText": "Learn More",
    "ctaLink": "#vision"
  },
  "vision": {
    "heading": "Our Vision",
    "description": "Building a thriving cue sports community...",
    "pillars": [
      {
        "title": "Organic Growth",
        "description": "Fostering natural development..."
      }
    ]
  }
}
```

**data/leadership.json**:
```json
{
  "members": [
    {
      "id": "leader-1",
      "name": "John Doe",
      "role": "President",
      "avatar": "/images/members/john-doe.jpg",
      "order": 1
    }
  ]
}
```

**data/news/index.json**:
```json
{
  "articles": [
    {
      "slug": "championship-2024",
      "title": "2024 Championship Announced",
      "description": "Exciting news about upcoming tournament...",
      "image": "/images/news/championship-2024.jpg",
      "date": "2024-01-15T10:00:00Z",
      "category": "Tournaments"
    }
  ]
}
```


### Styling Approach

#### Tailwind CSS Configuration

**tailwind.config.ts**:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

#### Design Tokens

- **Primary Color**: Blue (#0ea5e9) - Represents trust and professionalism
- **Accent Color**: Amber (#f59e0b) - For CTAs and highlights
- **Typography**: 
  - Headings: Poppins (bold, modern)
  - Body: Inter (readable, clean)
- **Spacing Scale**: Tailwind's default scale with custom additions
- **Border Radius**: Consistent rounded corners (md: 0.375rem, lg: 0.5rem)

#### Component Styling Patterns

1. **Cards**: White background, subtle shadow, rounded corners, hover lift effect
2. **Buttons**: Solid primary color, white text, hover darken, smooth transitions
3. **Sections**: Alternating background colors (white/gray-50) for visual separation
4. **Images**: Rounded corners, object-cover for consistent aspect ratios
5. **Animations**: Subtle fade-in and slide-up on scroll

### Image Optimization Strategy

#### Next.js Image Component Usage

```typescript
import Image from 'next/image'

// Example usage in components
<Image
  src="/images/members/avatar.jpg"
  alt="Member name"
  width={200}
  height={200}
  quality={85}
  placeholder="blur"
  blurDataURL="/images/placeholders/avatar-blur.jpg"
  className="rounded-full"
/>
```

#### Image Specifications

- **Hero Images**: 1920x1080px, WebP format, quality 85
- **Member Avatars**: 400x400px, WebP format, quality 90
- **News Images**: 800x600px, WebP format, quality 85
- **Thumbnails**: 200x200px, WebP format, quality 80

#### Optimization Techniques

1. **Automatic Format Conversion**: Next.js converts to WebP with JPEG fallback
2. **Responsive Images**: Multiple sizes generated for different viewports
3. **Lazy Loading**: Images below fold load only when scrolled into view
4. **Priority Loading**: Hero images marked with `priority` prop
5. **Blur Placeholders**: Low-quality placeholders for smooth loading experience

#### Fallback Strategy

```typescript
// lib/image-utils.ts
export const getImageWithFallback = (src: string, fallback: string) => {
  return {
    src,
    onError: (e: any) => {
      e.target.src = fallback;
    }
  };
};

// Default placeholders
export const PLACEHOLDER_AVATAR = '/images/placeholders/avatar.png';
export const PLACEHOLDER_NEWS = '/images/placeholders/news.png';
```

### Animation and Transition Implementation

#### Framer Motion Integration

```typescript
// components/animations/ScrollReveal.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right'
  delay?: number
}

export function ScrollReveal({ 
  children, 
  animation = 'fade', 
  delay = 0 
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'slide-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-left': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[animation]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

#### Animation Patterns

1. **Section Entrance**: Fade and slide-up when scrolling into view
2. **Card Hover**: Subtle lift (translateY) and shadow increase
3. **Button Hover**: Background color darken and scale slightly
4. **Navigation**: Smooth scroll to sections with offset for fixed header
5. **Mobile Menu**: Slide-in from right with backdrop fade

#### Reduced Motion Support

```typescript
// Respect user preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Conditional animation
<ScrollReveal animation={prefersReducedMotion ? 'fade' : 'slide-up'}>
  {content}
</ScrollReveal>
```

### SEO and Metadata Handling

#### Root Layout Metadata

```typescript
// app/layout.tsx
import type { Metadata } from 'next'

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
```

#### Dynamic Metadata for News Pages

```typescript
// app/news/[slug]/page.tsx
import { getNewsArticle } from '@/lib/content'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getNewsArticle(params.slug)
  
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      images: [article.image],
    },
  }
}
```

#### Structured Data

```typescript
// lib/structured-data.ts
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: 'Jalandhar District Cue Sports Association',
    url: 'https://jalandharcuesports.org',
    logo: 'https://jalandharcuesports.org/images/logo.png',
    description: 'Promoting excellence in cue sports',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jalandhar',
      addressRegion: 'Punjab',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://facebook.com/jalandharcuesports',
      'https://twitter.com/jalandharcuesports'
    ]
  }
}

// Usage in layout
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
/>
```

#### Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllNewsArticles } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllNewsArticles()
  
  const newsUrls = articles.map((article) => ({
    url: `https://jalandharcuesports.org/news/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://jalandharcuesports.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...newsUrls,
  ]
}
```

### Responsive Design Breakpoints

#### Tailwind Breakpoint System

```typescript
// Tailwind default breakpoints (used throughout)
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape / Small desktop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
}
```

#### Responsive Layout Patterns

**Mobile (< 768px)**:
- Single column layouts
- Stacked sections
- Hamburger navigation menu
- Full-width cards
- Larger touch targets (min 44x44px)

**Tablet (768px - 1024px)**:
- Two-column grids for cards
- Expanded navigation menu
- Optimized image sizes
- Adjusted typography scale

**Desktop (> 1024px)**:
- Three-column grids for cards
- Full horizontal navigation
- Maximum content width (1280px)
- Larger hero sections
- Enhanced hover effects

#### Component Responsive Examples

```typescript
// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// Typography
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  {title}
</h1>

// Spacing
<section className="py-12 md:py-16 lg:py-24">
  {content}
</section>

// Navigation
<nav className="hidden md:flex space-x-6">
  {/* Desktop menu */}
</nav>
<button className="md:hidden">
  {/* Mobile hamburger */}
</button>
```

### Content Management Approach

#### File-Based Content System

**Advantages**:
- Version control with Git
- No database required
- Type-safe with TypeScript interfaces
- Easy to edit and review
- Fast build times with static generation

**Content Loading Utilities**:

```typescript
// lib/content.ts
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const dataDir = path.join(process.cwd(), 'data')

export async function getSiteContent(): Promise<SiteContent> {
  const filePath = path.join(dataDir, 'content.json')
  const fileContent = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContent)
}

export async function getLeadership(): Promise<LeadershipData> {
  const filePath = path.join(dataDir, 'leadership.json')
  const fileContent = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContent)
}

export async function getExecutive(): Promise<ExecutiveData> {
  const filePath = path.join(dataDir, 'executive.json')
  const fileContent = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(fileContent)
}

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  const indexPath = path.join(dataDir, 'news', 'index.json')
  const indexContent = await fs.readFile(indexPath, 'utf-8')
  const index: NewsIndex = JSON.parse(indexContent)
  
  return index.articles
    .filter(article => article.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getNewsArticle(slug: string): Promise<NewsArticle> {
  const filePath = path.join(dataDir, 'news', `${slug}.md`)
  const fileContent = await fs.readFile(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    title: data.title,
    description: data.description,
    content,
    image: data.image,
    date: data.date,
    author: data.author,
    category: data.category,
    tags: data.tags,
    published: data.published !== false,
  }
}
```

#### Content Validation

```typescript
// lib/validation.ts
import { z } from 'zod'

const MemberSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  role: z.string().min(1),
  avatar: z.string().url(),
  bio: z.string().optional(),
  contact: z.object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
  }).optional(),
  order: z.number().int().positive(),
})

const NewsArticleSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string(),
  date: z.string().datetime(),
  category: z.string().optional(),
  published: z.boolean().default(true),
})

export function validateMember(data: unknown) {
  return MemberSchema.parse(data)
}

export function validateNewsArticle(data: unknown) {
  return NewsArticleSchema.parse(data)
}
```

#### Content Update Workflow

1. **Edit Content Files**: Update JSON or Markdown files in `data/` directory
2. **Validate**: Run validation script to check data structure
3. **Commit**: Version control changes with Git
4. **Deploy**: Push to repository triggers automatic rebuild
5. **Revalidation**: ISR ensures updates appear without full rebuild


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Content Items Have Descriptions

*For any* content item (vision pillar or mission point), when it is displayed, the rendered output should include both a title and a non-empty description text.

**Validates: Requirements 2.4, 3.3**

### Property 2: Member Profiles Display Required Fields

*For any* member (leadership or executive), when rendered as a Member_Profile component, the output should display the member's name and role, and optionally display contact information if provided.

**Validates: Requirements 4.3, 5.3**

### Property 3: All Members Are Rendered

*For any* list of members (leadership or executive), when the section is rendered, the number of displayed Member_Profile components should equal the number of members in the data.

**Validates: Requirements 4.2, 5.2**

### Property 4: News Cards Display Required Elements

*For any* news article, when rendered as a News_Card component, the output should display an image, title, description, and a "Read More" link.

**Validates: Requirements 6.2, 6.3, 6.4**

### Property 5: News Card Navigation Links

*For any* news article, when rendered as a News_Card, the "Read More" link href should point to the correct article URL path `/news/[slug]`.

**Validates: Requirements 6.5**

### Property 6: Interactive Elements Have Minimum Touch Target Size

*For any* interactive element (button, link, input), the rendered element should have a minimum touch target size of 44x44 pixels for accessibility on touch devices.

**Validates: Requirements 8.5**

### Property 7: Navigation Links Point to Correct Targets

*For any* navigation link in the Navigation_System, the href attribute should point to the correct section anchor or page path.

**Validates: Requirements 9.2**

### Property 8: All Images Use Optimized Image Component

*For any* image displayed on the website, it should be rendered using the Next.js Image component (or equivalent optimized component) to ensure automatic optimization, responsive sizing, and modern format delivery.

**Validates: Requirements 10.2, 10.3, 14.1, 14.2, 14.3**

### Property 9: All Pages Have SEO Metadata

*For any* page in the website, the page should have defined metadata including title, description, and Open Graph tags.

**Validates: Requirements 11.1**

### Property 10: Semantic HTML Usage

*For any* component rendering content sections, the component should use semantic HTML elements (header, nav, main, section, article, footer) rather than generic div elements for structural markup.

**Validates: Requirements 11.5**

### Property 11: All Images Have Alternative Text

*For any* image rendered on the website, the image element should have a non-empty alt attribute providing alternative text for screen readers.

**Validates: Requirements 12.1**

### Property 12: Color Contrast Meets WCAG Standards

*For any* text element with a background color, the color combination should maintain a minimum contrast ratio of 4.5:1 for normal text or 3:1 for large text to meet WCAG AA standards.

**Validates: Requirements 12.2**

### Property 13: Interactive Elements Are Keyboard Accessible

*For any* interactive element (button, link, input, custom control), the element should be keyboard focusable and operable using standard keyboard navigation (Tab, Enter, Space).

**Validates: Requirements 12.3**

### Property 14: Screen Reader Labels Present

*For any* interactive element without visible text content (icon buttons, image links), the element should have an aria-label or aria-labelledby attribute for screen reader accessibility.

**Validates: Requirements 12.4**

### Property 15: Form Inputs Have Associated Labels

*For any* form input element, the input should have an associated label element (via htmlFor/id relationship) or an aria-label attribute.

**Validates: Requirements 12.5**

### Property 16: Markdown Content Renders as HTML

*For any* news article with markdown content, when the content is processed and rendered, markdown syntax should be converted to appropriate HTML elements (headings, paragraphs, lists, links, etc.).

**Validates: Requirements 13.4**

### Property 17: Content Validation Rejects Invalid Data

*For any* content data structure (member, news article, content section), when passed to validation functions, invalid data (missing required fields, incorrect types, invalid formats) should be rejected with appropriate error messages.

**Validates: Requirements 13.5**

### Property 18: Image Error Handling

*For any* image that fails to load, the Image component should display a fallback placeholder image or handle the error gracefully without breaking the layout.

**Validates: Requirements 14.4**

### Property 19: Content Sections Animate on Scroll

*For any* content section (Vision, Mission, Leadership, Executive, News), when the section scrolls into the viewport, the section should trigger an entrance animation (fade-in, slide-up, or similar).

**Validates: Requirements 15.1**

### Property 20: Interactive Elements Have Smooth Transitions

*For any* interactive element (button, card, link), the element should have CSS transition properties applied for smooth visual feedback on hover, focus, and active states.

**Validates: Requirements 15.2**

### Property 21: Reduced Motion Preference Respected

*For any* animated element, when the user's system has prefers-reduced-motion enabled, animations should be disabled or reduced to simple fades without motion.

**Validates: Requirements 15.3**

### Property 22: Performant Animation Properties

*For any* CSS animation or transition, the animation should use only transform and opacity properties (not layout-triggering properties like width, height, top, left) for optimal performance.

**Validates: Requirements 15.5**


## Error Handling

### Image Loading Errors

**Strategy**: Graceful degradation with fallback images

```typescript
// components/ui/OptimizedImage.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  fallback: string
  width: number
  height: number
  className?: string
}

export function OptimizedImage({ 
  src, 
  alt, 
  fallback, 
  width, 
  height, 
  className 
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (!error) {
          setImgSrc(fallback)
          setError(true)
        }
      }}
    />
  )
}
```

**Error Scenarios**:
- Missing image file → Display placeholder image
- Network failure → Display cached or placeholder image
- Invalid image format → Display fallback image
- Broken image URL → Log error and display placeholder

### Content Loading Errors

**Strategy**: Fail gracefully with user-friendly messages

```typescript
// app/page.tsx
export default async function HomePage() {
  try {
    const content = await getSiteContent()
    const leadership = await getLeadership()
    const executive = await getExecutive()
    const news = await getAllNewsArticles()

    return <HomePageContent {...{ content, leadership, executive, news }} />
  } catch (error) {
    console.error('Failed to load content:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to Load Content</h1>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    )
  }
}
```

**Error Scenarios**:
- Missing content file → Display error message with retry option
- Invalid JSON format → Log error and use default content
- Missing required fields → Validate and skip invalid items
- File system errors → Display maintenance message

### Navigation Errors

**Strategy**: Validate routes and handle 404s

```typescript
// app/news/[slug]/page.tsx
export default async function NewsArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  try {
    const article = await getNewsArticle(params.slug)
    
    if (!article || !article.published) {
      notFound()
    }

    return <ArticleContent article={article} />
  } catch (error) {
    console.error('Failed to load article:', error)
    notFound()
  }
}

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
```

**Error Scenarios**:
- Invalid article slug → Display 404 page
- Unpublished article → Display 404 page
- Broken internal links → Log warning and display 404
- Missing route → Next.js default 404 handling

### Validation Errors

**Strategy**: Validate data at build time and runtime

```typescript
// lib/content.ts
export async function getSiteContent(): Promise<SiteContent> {
  try {
    const filePath = path.join(dataDir, 'content.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    
    // Validate structure
    if (!data.hero || !data.vision || !data.mission) {
      throw new Error('Invalid content structure: missing required sections')
    }
    
    return data as SiteContent
  } catch (error) {
    console.error('Content validation failed:', error)
    throw new Error('Failed to load site content')
  }
}
```

**Error Scenarios**:
- Missing required fields → Throw validation error at build time
- Invalid data types → Throw type error with details
- Malformed JSON → Throw parse error with line number
- Schema violations → Throw validation error with field details

### Client-Side Errors

**Strategy**: Error boundaries for React component errors

```typescript
// components/ErrorBoundary.tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800">Something went wrong. Please refresh the page.</p>
        </div>
      )
    }

    return this.props.children
  }
}
```

**Error Scenarios**:
- Component render errors → Display error boundary fallback
- Event handler errors → Log error and prevent crash
- Animation errors → Disable animations and continue
- State update errors → Reset to safe state

### Accessibility Errors

**Strategy**: Provide fallbacks and alternatives

**Error Scenarios**:
- Missing alt text → Log warning in development, use filename as fallback
- Insufficient contrast → Log warning in development with color values
- Missing ARIA labels → Log warning in development
- Keyboard navigation issues → Ensure all elements have tabIndex or native focusability

### Performance Degradation

**Strategy**: Monitor and optimize

```typescript
// lib/performance.ts
export function reportWebVitals(metric: any) {
  // Log Core Web Vitals
  if (metric.label === 'web-vital') {
    console.log(metric.name, metric.value)
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  }
}
```

**Error Scenarios**:
- Slow image loading → Use blur placeholders and lazy loading
- Large bundle size → Implement code splitting and dynamic imports
- Slow API responses → Implement loading states and timeouts
- Memory leaks → Clean up event listeners and subscriptions

## Testing Strategy

### Overview

The testing strategy employs a dual approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness properties. This ensures comprehensive coverage while maintaining test maintainability.

### Testing Tools

- **Unit Testing**: Jest + React Testing Library
- **Property-Based Testing**: fast-check (JavaScript/TypeScript PBT library)
- **E2E Testing**: Playwright (for integration and user flow testing)
- **Accessibility Testing**: jest-axe + manual testing with screen readers
- **Visual Regression**: Percy or Chromatic (optional)

### Unit Testing Approach

Unit tests focus on specific examples, edge cases, and component behavior verification.

**Component Testing Examples**:

```typescript
// __tests__/components/HeroSection.test.tsx
import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/sections/HeroSection'

describe('HeroSection', () => {
  it('displays the organization title', () => {
    render(
      <HeroSection
        title="Jalandhar District Cue Sports Association"
        tagline="Promoting Excellence"
        ctaText="Learn More"
        ctaLink="#vision"
      />
    )
    
    expect(screen.getByText('Jalandhar District Cue Sports Association')).toBeInTheDocument()
  })

  it('renders call-to-action button with correct link', () => {
    render(
      <HeroSection
        title="Test Title"
        tagline="Test Tagline"
        ctaText="Get Started"
        ctaLink="#mission"
      />
    )
    
    const button = screen.getByRole('link', { name: 'Get Started' })
    expect(button).toHaveAttribute('href', '#mission')
  })

  it('displays tagline text', () => {
    render(
      <HeroSection
        title="Test"
        tagline="This is a test tagline"
        ctaText="Click"
        ctaLink="#"
      />
    )
    
    expect(screen.getByText('This is a test tagline')).toBeInTheDocument()
  })
})
```

**Edge Case Testing**:

```typescript
// __tests__/components/MemberProfile.test.tsx
describe('MemberProfile Edge Cases', () => {
  it('displays placeholder when avatar fails to load', () => {
    render(
      <MemberProfile
        name="John Doe"
        role="President"
        avatar="/invalid-image.jpg"
      />
    )
    
    const img = screen.getByRole('img')
    fireEvent.error(img)
    
    expect(img).toHaveAttribute('src', expect.stringContaining('placeholder'))
  })

  it('handles missing contact information gracefully', () => {
    render(
      <MemberProfile
        name="Jane Smith"
        role="Secretary"
        avatar="/avatar.jpg"
      />
    )
    
    expect(screen.queryByText(/contact/i)).not.toBeInTheDocument()
  })

  it('renders with very long names without breaking layout', () => {
    const longName = 'A'.repeat(100)
    render(
      <MemberProfile
        name={longName}
        role="Member"
        avatar="/avatar.jpg"
      />
    )
    
    const nameElement = screen.getByText(longName)
    expect(nameElement).toHaveClass('truncate') // or similar overflow handling
  })
})
```

### Property-Based Testing Approach

Property-based tests verify universal properties across randomly generated inputs. Each test runs a minimum of 100 iterations to ensure comprehensive coverage.

**Configuration**:

```typescript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// jest.setup.js
import '@testing-library/jest-dom'

// Set minimum iterations for property tests
global.PROPERTY_TEST_ITERATIONS = 100
```

**Property Test Examples**:

```typescript
// __tests__/properties/content.property.test.tsx
import { fc } from 'fast-check'
import { render, screen } from '@testing-library/react'
import { VisionSection } from '@/components/sections/VisionSection'
import { MissionSection } from '@/components/sections/MissionSection'

/**
 * Feature: sports-association-website-redesign
 * Property 1: Content Items Have Descriptions
 * 
 * For any content item (vision pillar or mission point), when it is displayed,
 * the rendered output should include both a title and a non-empty description text.
 */
describe('Property 1: Content Items Have Descriptions', () => {
  it('vision pillars display title and description', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
          }),
          { minLength: 1, maxLength: 5 }
        ),
        (pillars) => {
          const { container } = render(
            <VisionSection
              heading="Our Vision"
              description="Test description"
              pillars={pillars}
            />
          )

          pillars.forEach((pillar) => {
            expect(screen.getByText(pillar.title)).toBeInTheDocument()
            expect(screen.getByText(pillar.description)).toBeInTheDocument()
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  it('mission points display title and description', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            title: fc.string({ minLength: 1 }),
            description: fc.string({ minLength: 1 }),
          }),
          { minLength: 1, maxLength: 5 }
        ),
        (points) => {
          render(
            <MissionSection
              heading="Our Mission"
              points={points}
            />
          )

          points.forEach((point) => {
            expect(screen.getByText(point.title)).toBeInTheDocument()
            expect(screen.getByText(point.description)).toBeInTheDocument()
          })
        }
      ),
      { numRuns: 100 }
    )
  })
})

/**
 * Feature: sports-association-website-redesign
 * Property 2: Member Profiles Display Required Fields
 * 
 * For any member (leadership or executive), when rendered as a Member_Profile component,
 * the output should display the member's name and role, and optionally display contact
 * information if provided.
 */
describe('Property 2: Member Profiles Display Required Fields', () => {
  it('displays name and role for all members', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }),
          role: fc.string({ minLength: 1 }),
          avatar: fc.webUrl(),
          contact: fc.option(
            fc.record({
              email: fc.emailAddress(),
              phone: fc.string(),
            })
          ),
        }),
        (member) => {
          render(
            <MemberProfile
              name={member.name}
              role={member.role}
              avatar={member.avatar}
              contact={member.contact || undefined}
            />
          )

          expect(screen.getByText(member.name)).toBeInTheDocument()
          expect(screen.getByText(member.role)).toBeInTheDocument()

          if (member.contact) {
            expect(
              screen.getByText(member.contact.email) ||
              screen.getByText(member.contact.phone)
            ).toBeInTheDocument()
          }
        }
      ),
      { numRuns: 100 }
    )
  })
})

/**
 * Feature: sports-association-website-redesign
 * Property 4: News Cards Display Required Elements
 * 
 * For any news article, when rendered as a News_Card component,
 * the output should display an image, title, description, and a "Read More" link.
 */
describe('Property 4: News Cards Display Required Elements', () => {
  it('displays all required elements for any news article', () => {
    fc.assert(
      fc.property(
        fc.record({
          slug: fc.stringOf(fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz0123456789-'.split('')), { minLength: 1 }),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          image: fc.webUrl(),
          date: fc.date().map(d => d.toISOString()),
        }),
        (article) => {
          render(<NewsCard {...article} />)

          expect(screen.getByText(article.title)).toBeInTheDocument()
          expect(screen.getByText(article.description)).toBeInTheDocument()
          expect(screen.getByRole('img')).toHaveAttribute('alt')
          expect(screen.getByText(/read more/i)).toBeInTheDocument()
        }
      ),
      { numRuns: 100 }
    )
  })
})

/**
 * Feature: sports-association-website-redesign
 * Property 5: News Card Navigation Links
 * 
 * For any news article, when rendered as a News_Card,
 * the "Read More" link href should point to the correct article URL path /news/[slug].
 */
describe('Property 5: News Card Navigation Links', () => {
  it('generates correct article URLs for all slugs', () => {
    fc.assert(
      fc.property(
        fc.record({
          slug: fc.stringOf(fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz0123456789-'.split('')), { minLength: 1 }),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          image: fc.webUrl(),
          date: fc.date().map(d => d.toISOString()),
        }),
        (article) => {
          render(<NewsCard {...article} />)

          const link = screen.getByText(/read more/i).closest('a')
          expect(link).toHaveAttribute('href', `/news/${article.slug}`)
        }
      ),
      { numRuns: 100 }
    )
  })
})

/**
 * Feature: sports-association-website-redesign
 * Property 11: All Images Have Alternative Text
 * 
 * For any image rendered on the website, the image element should have
 * a non-empty alt attribute providing alternative text for screen readers.
 */
describe('Property 11: All Images Have Alternative Text', () => {
  it('all member avatars have alt text', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ minLength: 1 }),
          role: fc.string({ minLength: 1 }),
          avatar: fc.webUrl(),
        }),
        (member) => {
          render(
            <MemberProfile
              name={member.name}
              role={member.role}
              avatar={member.avatar}
            />
          )

          const img = screen.getByRole('img')
          const altText = img.getAttribute('alt')
          expect(altText).toBeTruthy()
          expect(altText?.length).toBeGreaterThan(0)
        }
      ),
      { numRuns: 100 }
    )
  })

  it('all news images have alt text', () => {
    fc.assert(
      fc.property(
        fc.record({
          slug: fc.string({ minLength: 1 }),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          image: fc.webUrl(),
          date: fc.date().map(d => d.toISOString()),
        }),
        (article) => {
          render(<NewsCard {...article} />)

          const img = screen.getByRole('img')
          const altText = img.getAttribute('alt')
          expect(altText).toBeTruthy()
          expect(altText?.length).toBeGreaterThan(0)
        }
      ),
      { numRuns: 100 }
    )
  })
})

/**
 * Feature: sports-association-website-redesign
 * Property 17: Content Validation Rejects Invalid Data
 * 
 * For any content data structure (member, news article, content section),
 * when passed to validation functions, invalid data should be rejected
 * with appropriate error messages.
 */
describe('Property 17: Content Validation Rejects Invalid Data', () => {
  it('rejects members with missing required fields', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.option(fc.string()),
          role: fc.option(fc.string()),
          avatar: fc.option(fc.webUrl()),
        }),
        (invalidMember) => {
          // At least one required field should be missing
          if (!invalidMember.name || !invalidMember.role || !invalidMember.avatar) {
            expect(() => validateMember(invalidMember)).toThrow()
          }
        }
      ),
      { numRuns: 100 }
    )
  })

  it('rejects news articles with invalid slugs', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !/^[a-z0-9-]+$/.test(s)),
        (invalidSlug) => {
          const article = {
            slug: invalidSlug,
            title: 'Test',
            description: 'Test',
            image: 'https://example.com/image.jpg',
            date: new Date().toISOString(),
          }
          
          expect(() => validateNewsArticle(article)).toThrow()
        }
      ),
      { numRuns: 100 }
    )
  })
})
```

### Accessibility Testing

```typescript
// __tests__/accessibility/a11y.test.tsx
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Accessibility Compliance', () => {
  it('HeroSection has no accessibility violations', async () => {
    const { container } = render(
      <HeroSection
        title="Test Title"
        tagline="Test Tagline"
        ctaText="Learn More"
        ctaLink="#vision"
      />
    )
    
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Navigation has no accessibility violations', async () => {
    const { container } = render(<Navigation />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Footer has no accessibility violations', async () => {
    const { container } = render(
      <Footer
        aboutText="Test"
        galleries={[]}
        contact={{}}
        socialMedia={[]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

### Integration Testing

```typescript
// __tests__/integration/home-page.test.tsx
describe('Home Page Integration', () => {
  it('renders all sections in correct order', async () => {
    const content = await getSiteContent()
    const leadership = await getLeadership()
    const executive = await getExecutive()
    const news = await getAllNewsArticles()

    render(
      <HomePage
        content={content}
        leadership={leadership}
        executive={executive}
        news={news}
      />
    )

    const sections = screen.getAllByRole('region')
    expect(sections[0]).toHaveAttribute('aria-label', 'Hero')
    expect(sections[1]).toHaveAttribute('aria-label', 'Vision')
    expect(sections[2]).toHaveAttribute('aria-label', 'Mission')
    expect(sections[3]).toHaveAttribute('aria-label', 'Leadership')
    expect(sections[4]).toHaveAttribute('aria-label', 'Executive Members')
    expect(sections[5]).toHaveAttribute('aria-label', 'News')
  })

  it('navigation links scroll to correct sections', async () => {
    render(<HomePage {...mockData} />)

    const visionLink = screen.getByRole('link', { name: /vision/i })
    fireEvent.click(visionLink)

    await waitFor(() => {
      const visionSection = screen.getByRole('region', { name: 'Vision' })
      expect(visionSection).toBeVisible()
    })
  })
})
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage for components and utilities
- **Property Test Coverage**: All 22 correctness properties implemented as property-based tests
- **Accessibility Coverage**: All interactive components tested with jest-axe
- **Integration Coverage**: Critical user flows tested end-to-end

### Continuous Integration

```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:property
      - run: npm run test:a11y
      - run: npm run build
```

### Testing Best Practices

1. **Test Behavior, Not Implementation**: Focus on user-facing behavior rather than internal implementation details
2. **Use Semantic Queries**: Prefer getByRole, getByLabelText over getByTestId
3. **Property Test Generators**: Create reusable generators for common data types
4. **Accessibility First**: Run axe tests on all components with user interaction
5. **Mock External Dependencies**: Mock image loading, API calls, and file system operations
6. **Test Error States**: Verify error handling and fallback behavior
7. **Performance Testing**: Monitor bundle size and Core Web Vitals in CI
8. **Visual Regression**: Use snapshot testing for critical UI components (optional)

