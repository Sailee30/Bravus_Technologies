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
      <div className="relative bg-gradient-to-b from-black to-gray-900 py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-orange-400 text-sm font-semibold">
              {article.categoryLabel || article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/70 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {article.author[0]}
              </div>
              <div>
                <p className="text-white font-medium">{article.author}</p>
                <p className="text-sm text-white/60">{new Date(article.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-white/60 text-sm">
              {article.readTime} min read
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <article className="text-white/80 leading-relaxed space-y-6">
            <div 
              className="prose prose-invert max-w-none text-white/80"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block bg-white/5 border border-white/10 text-white/70 text-sm px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors duration-300"
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
        <div className="relative bg-gradient-to-b from-black to-gray-900 py-24 px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="font-garamond text-5xl md:text-6xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="w-24 h-1 bg-orange-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/blog/${relatedArticle.id}`}>
                  <div className="group h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-6">
                      <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        {relatedArticle.categoryLabel}
                      </span>
                      <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
                    </div>

                    <h3 className="font-garamond text-2xl font-bold mb-4 line-clamp-2 group-hover:text-orange-400 transition-colors text-white leading-tight">
                      {relatedArticle.title}
                    </h3>

                    <p className="text-gray-400 mb-6 line-clamp-2 text-base leading-relaxed">
                      {relatedArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
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

      <section className="py-20 px-4 md:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-garamond text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Let's discuss how our enterprise-grade solutions can accelerate your growth and drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg text-base font-medium transition-colors">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}