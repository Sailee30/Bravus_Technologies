'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Calendar, Clock } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const allArticles = [
    {
      id: 'eight-second-rule',
      title: 'The 8-Second Rule: Winning Marketing Strategies for Short Attention Spans',
      excerpt: 'Capture attention in 8 seconds with compelling visuals, storytelling, and optimized content that converts.',
      category: 'marketing',
      categoryLabel: 'Marketing',
      date: new Date('2024-11-15'),
      readTime: 5,
      featured: true,
      author: 'Marketing Team',
    },
    {
      id: 'ai-ethics-business',
      title: 'AI Ethics Isn\'t Optional Anymore—It\'s a Business Advantage',
      excerpt: 'How ethical AI practices build trust, enhance customer experience, and create competitive advantage.',
      category: 'business',
      categoryLabel: 'Business',
      date: new Date('2024-11-14'),
      readTime: 7,
      featured: true,
      author: 'Tech Strategist',
    },
    {
      id: 'customer-loyalty-trust',
      title: 'Customer Loyalty Isn\'t Built on Discounts, It\'s Built on Trust',
      excerpt: 'Why trust matters more than discounts and how to build lasting customer relationships.',
      category: 'business',
      categoryLabel: 'Business',
      date: new Date('2024-11-13'),
      readTime: 6,
      featured: true,
      author: 'Business Expert',
    },
    {
      id: 'networking-weak-ties',
      title: 'The Hidden Power of Networking: How Weak Ties Open Big Doors',
      excerpt: 'Discover how casual connections and acquaintances can lead to unexpected career opportunities.',
      category: 'career',
      categoryLabel: 'Career',
      date: new Date('2024-11-12'),
      readTime: 8,
      featured: false,
      author: 'Career Coach',
    },
    {
      id: 'simplicity-sells',
      title: 'Why Simplicity Sells: The Science Behind Less Being More',
      excerpt: 'Understand consumer psychology and how minimalism in design increases trust and conversions.',
      category: 'marketing',
      categoryLabel: 'Marketing',
      date: new Date('2024-11-11'),
      readTime: 6,
      featured: false,
      author: 'Design Strategist',
    },
    {
      id: 'influence-psychology',
      title: 'Unlocking Influence Strategies: Psychological Tricks Every Business Should Use',
      excerpt: 'Master reciprocity, social proof, authority, and emotional connections to influence buying decisions.',
      category: 'marketing',
      categoryLabel: 'Marketing',
      date: new Date('2024-11-10'),
      readTime: 7,
      featured: false,
      author: 'Psychology Expert',
    },
    {
      id: 'seven-tech-errors',
      title: '7 Key Tech Errors Every Startup Should Avoid',
      excerpt: 'Learn from common mistakes: inadequate research, poor design, founder issues, and scaling problems.',
      category: 'startup',
      categoryLabel: 'Startup',
      date: new Date('2024-11-09'),
      readTime: 8,
      featured: false,
      author: 'Startup Founder',
    },
    {
      id: 'predictive-analytics',
      title: 'Unlocking the Power of Predictive Analytics: Transform Data into Smarter Decisions',
      excerpt: 'Learn how to use data-driven insights to forecast trends and make informed business decisions.',
      category: 'technology',
      categoryLabel: 'Technology',
      date: new Date('2024-11-08'),
      readTime: 9,
      featured: false,
      author: 'Data Scientist',
    },
    {
      id: 'devops-delivery',
      title: 'The Role of DevOps in Faster, Smarter Product Delivery',
      excerpt: 'Discover how DevOps breaks silos and accelerates development cycles with automation and CI/CD.',
      category: 'technology',
      categoryLabel: 'Technology',
      date: new Date('2024-11-07'),
      readTime: 10,
      featured: false,
      author: 'DevOps Engineer',
    },
    {
      id: 'local-seo-strategies',
      title: 'Local SEO Strategies to Boost Small Business Growth',
      excerpt: 'Complete guide to Google Business Profile, local citations, and optimization for nearby searches.',
      category: 'seo',
      categoryLabel: 'SEO',
      date: new Date('2024-11-06'),
      readTime: 12,
      featured: false,
      author: 'SEO Specialist',
    },
    {
      id: 'linkedin-vs-facebook',
      title: 'LinkedIn Ads vs Facebook Ads: Which Works Better for B2B?',
      excerpt: 'Compare platform strengths, audience targeting, and ROI for B2B marketing campaigns.',
      category: 'advertising',
      categoryLabel: 'Advertising',
      date: new Date('2024-11-05'),
      readTime: 8,
      featured: false,
      author: 'Ad Manager',
    },
  ];

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
    let result = allArticles;

    if (selectedCategory !== 'all') {
      result = result.filter(article => article.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }

    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredArticles = allArticles.filter(a => a.featured);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION - Matches Services Page */}
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-garamond text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Blogs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Discover insights and strategies from industry experts designed to transform your business and drive growth.
          </p>
        </div>
      </section>

      {/* FEATURED SECTION - "Insights & Strategies" */}
      {featuredArticles.length > 0 && (
        <section className="py-20 px-4 md:px-8 lg:px-12 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="font-garamond text-5xl md:text-6xl font-bold text-white mb-6">
                Insights & Strategies
              </h2>
              <div className="w-24 h-1 bg-orange-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map(article => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className="group h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        Featured
                      </span>
                    </div>

                    <h3 className="font-garamond text-2xl md:text-3xl font-bold mb-4 line-clamp-3 group-hover:text-orange-400 transition-colors text-white leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-2 text-base leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-2">
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

      {/* SEARCH & FILTER */}
      <section className="py-12 px-4 md:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder:text-gray-600 text-base transition-all"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white cursor-pointer"
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
                className="flex-1 px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white cursor-pointer"
              >
                <option value="newest" className="bg-black text-white">Newest First</option>
                <option value="oldest" className="bg-black text-white">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ALL ARTICLES */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-garamond text-4xl md:text-5xl font-bold text-white">
              All Articles 
              {filteredArticles.length > 0 && (
                <span className="text-orange-500">
                  {' '}({filteredArticles.length})
                </span>
              )}
            </h2>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map(article => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <div className="group h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between mb-6">
                      <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                        {article.categoryLabel}
                      </span>
                      <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform" />
                    </div>

                    <h3 className="font-garamond text-2xl font-bold mb-4 line-clamp-2 group-hover:text-orange-400 transition-colors text-white leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 mb-6 line-clamp-2 text-base leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {article.readTime} min read
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-garamond text-4xl md:text-5xl font-bold mb-6 text-white">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Subscribe to receive weekly insights and strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder:text-gray-600 text-base"
            />
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors whitespace-nowrap uppercase tracking-wider text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}