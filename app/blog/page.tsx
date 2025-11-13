// =====================================================
// app/blog/page.tsx (Blog Listing Page)
// =====================================================

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Calendar, Clock } from 'lucide-react';
import { articles, type Article } from './data';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showAll, setShowAll] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' },
    { value: 'startup', label: 'Startup' },
    { value: 'seo', label: 'SEO' },
    { value: 'advertising', label: 'Advertising' },
    { value: 'career', label: 'Career' },
  ];

  const filteredArticles = useMemo(() => {
    let result: Article[] = articles;

    if (selectedCategory !== 'all') {
      result = result.filter((article: Article) => article.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((article: Article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }

    if (sortBy === 'newest') {
      result = [...result].sort((a: Article, b: Article) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === 'oldest') {
      result = [...result].sort((a: Article, b: Article) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredArticles = articles.filter((a: Article) => a.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="pt-20 pb-12 px-4 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
            <span className="text-white">Explore Our </span><span className="text-orange-500">Blogs</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover insights and strategies from industry experts designed to transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* FEATURED SECTION */}
      {featuredArticles.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12 lg:mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Insights & Strategies
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredArticles.map((article: Article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className="group h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 md:p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="mb-4 md:mb-6">
                      <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 line-clamp-3 group-hover:text-orange-400 transition-colors text-white leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 md:mb-6 line-clamp-2 text-sm md:text-base leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-1 md:gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <Clock className="w-4 h-4" />
                        {article.readTime} min
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEARCH & FILTER SECTION */}
      <section className="py-8 md:py-10 lg:py-12 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder:text-gray-600 text-base transition-all"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white cursor-pointer text-base"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value} className="bg-black text-white">
                    {cat.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 px-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white cursor-pointer text-base"
              >
                <option value="newest" className="bg-black text-white">Newest First</option>
                <option value="oldest" className="bg-black text-white">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ALL ARTICLES SECTION */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              All Articles 
              {filteredArticles.length > 0 && (
                <span className="text-orange-500">
                  {' '}({filteredArticles.length})
                </span>
              )}
            </h2>
          </div>

          {filteredArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredArticles.slice(0, isMobile && !showAll ? 3 : filteredArticles.length).map((article: Article) => (
                  <Link key={article.id} href={`/blog/${article.id}`}>
                    <div className="group h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 md:p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <span className="inline-block px-3 py-1 md:px-3 md:py-1.5 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                          {article.categoryLabel}
                        </span>
                        <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                      </div>

                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 line-clamp-2 group-hover:text-orange-400 transition-colors text-white leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 mb-4 md:mb-6 line-clamp-2 text-sm md:text-base leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
                        <div className="flex items-center gap-1 md:gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{article.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* VIEW MORE BUTTON - ONLY SHOW ON MOBILE IF MORE ARTICLES EXIST */}
              {filteredArticles.length > 3 && !showAll && (
                <div className="flex justify-center mt-8 md:mt-12 lg:hidden">
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors uppercase tracking-wider text-sm"
                  >
                    View More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 md:py-16 lg:py-20">
              <p className="text-gray-400 text-base md:text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
            Subscribe to receive weekly insights and strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder:text-gray-600 text-base"
            />
            <button className="px-6 md:px-8 py-3 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors whitespace-nowrap uppercase tracking-wider text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}