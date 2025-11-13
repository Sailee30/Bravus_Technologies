import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ChevronRight, Calendar, Clock } from 'lucide-react'
import { articles, getRelatedArticles } from '../data'

export const dynamicParams = false
export const revalidate = 3600

export async function generateStaticParams() {
  return articles.map(article => ({
    id: article.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === params.id)
  
  return {
    title: article?.title || 'Article Not Found',
    description: article?.excerpt || 'Read more on our blog',
  }
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === params.id)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(params.id, 3)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
<div className="relative bg-gradient-to-b from-black to-gray-900 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 md:mb-6">
            <span className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-3 py-1 md:px-4 md:py-2 text-orange-400 text-xs md:text-sm font-semibold">
              {article.categoryLabel || article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 text-white/70 border-t border-white/10 pt-4 md:pt-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg">
                {article.author[0]}
              </div>
              <div>
                <p className="text-white font-medium text-sm md:text-base">{article.author}</p>
                <p className="text-xs md:text-sm text-white/60">{new Date(article.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-white/60 text-xs md:text-sm">
              {article.readTime} min read
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <article className="text-white/80 leading-relaxed space-y-4 md:space-y-6">
            <div 
              className="prose prose-invert max-w-none text-white/80"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm px-3 py-1 md:py-1.5 rounded-full hover:bg-white/10 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="relative bg-gradient-to-b from-black to-gray-900 py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12 lg:mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Related Articles
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.id}`}>
<div className="group h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 md:p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-4 md:mb-6">
                      <span className="inline-block px-3 py-1 md:px-3 md:py-1.5 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        {relatedArticle.categoryLabel}
                      </span>
                      <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                    </div>

                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 line-clamp-2 group-hover:text-orange-400 transition-colors text-white leading-tight">
                      {relatedArticle.title}
                    </h3>

                    <p className="text-gray-400 mb-4 md:mb-6 line-clamp-2 text-sm md:text-base leading-relaxed">
                      {relatedArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-1 md:gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(relatedArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {relatedArticle.readTime} min read
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

<section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Let's discuss how our enterprise-grade solutions can accelerate your growth and drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium transition-colors">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}