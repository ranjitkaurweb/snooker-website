import React from 'react'
import Link from 'next/link'
import { OptimizedImage } from './OptimizedImage'

export interface NewsCardProps {
  title: string
  description: string
  image: string
  slug: string
  date: string
  category?: string
}

export function NewsCard({
  title,
  description,
  image,
  slug,
  date,
  category,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          fallbackSrc="/images/placeholders/news.png"
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <time dateTime={date} className="text-xs sm:text-sm text-gray-500 mb-2 block">
          {formattedDate}
        </time>
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full mb-2">
            {category}
          </span>
        )}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          href={`/news/${slug}`}
          aria-label={`Read more about ${title}`}
          className="group inline-flex items-center text-sm sm:text-base text-primary-600 hover:text-primary-700 font-medium transition-colors min-h-[44px] min-w-[44px]"
        >
          Read More
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}
