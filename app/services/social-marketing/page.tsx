"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // Import cn utility
import {
  ArrowRight,
  CheckCircle,
  Share2,
  TrendingUp,
  Users,
  BarChart3,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Linkedin,
  Youtube,
} from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import Link from "next/link"

export default function SocialMarketingPage() {
  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Analyze your brand, audience, and competitors to create a comprehensive social media strategy.",
    },
    {
      step: "02",
      title: "Content Creation",
      description:
        "Develop engaging, brand-aligned content across all platforms with consistent messaging and visuals.",
    },
    {
      step: "03",
      title: "Campaign Execution",
      description: "Launch targeted campaigns with optimized posting schedules and audience-specific messaging.",
    },
    {
      step: "04",
      title: "Analytics & Optimization",
      description: "Monitor performance, analyze metrics, and continuously optimize for better engagement and ROI.",
    },
  ]

  const platforms = [
    {
      name: "WhatsApp Business",
      icon: MessageCircle,
      color: "text-green-500",
      description: "Direct customer communication, automated responses, and business catalog management",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      color: "text-blue-400",
      description: "Real-time engagement, thought leadership, and trending topic participation",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-500",
      description: "Visual storytelling, Stories, Reels, and influencer collaboration campaigns",
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-600",
      description: "Community building, targeted advertising, and comprehensive audience insights",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-700",
      description: "B2B networking, professional content, and industry thought leadership",
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "text-red-500",
      description: "Video marketing, educational content, and long-form brand storytelling",
    },
  ]

  const services = [
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "Complete management of your social media presence across all platforms with consistent branding and messaging.",
    },
    {
      icon: TrendingUp,
      title: "Paid Social Advertising",
      description:
        "Strategic paid campaigns on Facebook, Instagram, LinkedIn, and other platforms to maximize reach and conversions.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Comprehensive performance tracking with detailed reports on engagement, reach, conversions, and ROI.",
    },
    {
      icon: Share2,
      title: "Content Strategy",
      description:
        "Data-driven content planning with audience research, competitor analysis, and trending topic integration.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12 border-b border-white/10">
        <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
         
        </div>

       

        <ShimmerButton className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
          Get Quote
        </ShimmerButton>
      </header>

      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-orange-500">Social Media & Marketing</span>
          </div>
        </div>
      </div>

      {/* Featured Service Badge */}
      <div className="px-4 sm:px-6 lg:px-12 py-4 bg-orange-500/10 border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            ⭐ Featured Service - Complete Digital Marketing Solution
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Social Media & <span className="text-orange-500">Marketing</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 text-pretty">
                Comprehensive digital marketing strategies to boost your online presence and drive customer engagement
                across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Marketing Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Social media management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Content creation & strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Paid advertising campaigns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Analytics & reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Influencer partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Supported Platforms</h2>
            <p className="text-lg text-white/70">We manage your presence across all major social media platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className={cn("w-8 h-8", platform.color)} />
                    <h3 className="text-lg font-semibold">{platform.name}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{platform.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-lg text-white/70">Complete digital marketing solutions for modern businesses</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-xs sm:text-xs sm:text-sm text-white/70 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Marketing Process</h2>
            <p className="text-lg text-white/70">Strategic approach to social media marketing success</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Boost Your Social Presence?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let's create a comprehensive social media strategy that drives engagement and grows your business.
          </p>

          <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 mx-auto backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
            Get Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </div>
  )
}
