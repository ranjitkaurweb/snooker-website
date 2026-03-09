'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { NewsCard } from '@/components/ui/NewsCard'

interface NewsArticle {
  slug: string
  title: string
  description: string
  image: string
  date: string
  category?: string
}

interface NewsSectionProps {
  heading: string
  articles: NewsArticle[]
  maxDisplay?: number
}

export function NewsSection({ heading, articles, maxDisplay }: NewsSectionProps) {
  const displayedArticles = maxDisplay ? articles.slice(0, maxDisplay) : articles

  return (
    <section 
      id="news" 
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
      aria-label="News"
    >
      {/* Wavy Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '25s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-primary-200 shadow-lg mb-6">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span className="text-sm font-black text-primary-700 tracking-widest uppercase">Latest Updates</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 bg-clip-text text-transparent">
                {heading}
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest news, achievements, and events
            </p>
          </div>
        </ScrollReveal>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mb-12">
          {displayedArticles.map((article, index) => (
            <ScrollReveal 
              key={article.slug} 
              animation="slide-up" 
              delay={index * 0.1}
            >
              <div className="group relative h-full">
                {/* Hover Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {/* Card Container */}
                <div className="relative h-full transform group-hover:-translate-y-2 transition-transform duration-500">
                  <NewsCard
                    title={article.title}
                    description={article.description}
                    image={article.image}
                    slug={article.slug}
                    date={article.date}
                    category={article.category}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        {maxDisplay && articles.length > maxDisplay && (
          <ScrollReveal animation="slide-up" delay={0.3}>
            <div className="text-center">
              <a
                href="/news"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative">View All News</span>
                <svg className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
