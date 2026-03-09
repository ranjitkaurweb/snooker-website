import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import Link from 'next/link'
import { getNewsArticle, getAllNewsArticles } from '@/lib/content'

// Generate static params for all news articles
export async function generateStaticParams() {
  try {
    const articles = await getAllNewsArticles()
    return articles.map((article) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const article = await getNewsArticle(params.slug)

    // Return 404 for unpublished articles
    if (!article.published) {
      return {
        title: 'Article Not Found',
      }
    }

    return {
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: 'article',
        publishedTime: article.date,
        images: [
          {
            url: article.image,
            alt: article.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.description,
        images: [article.image],
      },
    }
  } catch (error) {
    console.error('Failed to generate metadata:', error)
    return {
      title: 'Article Not Found',
    }
  }
}

// News article page component
export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const article = await getNewsArticle(params.slug)

    // Handle unpublished articles - return 404
    if (!article.published) {
      notFound()
    }

    // Format date for display
    const formattedDate = new Date(article.date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    return (
      <article className="min-h-screen bg-gray-50">
        {/* Back to news link */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/#news"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors min-h-[44px] py-2"
              aria-label="Back to news section"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to News
            </Link>
          </div>
        </div>

        {/* Article header */}
        <header className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Category badge */}
            {article.category && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-50 rounded-full">
                  {article.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <time dateTime={article.date} className="text-sm sm:text-base">
                {formattedDate}
              </time>
              {article.author && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm sm:text-base">By {article.author}</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              {article.description}
            </p>
          </div>
        </header>

        {/* Featured image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-primary-500 prose-blockquote:text-gray-700 prose-code:text-primary-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to news footer */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center">
            <Link
              href="/#news"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-sm hover:shadow-md"
              aria-label="View all news articles"
            >
              View All News Articles
            </Link>
          </div>
        </div>
      </article>
    )
  } catch (error) {
    // Handle missing articles or other errors
    console.error('Failed to load article:', error)
    notFound()
  }
}
