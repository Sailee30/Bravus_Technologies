"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Globe, CreditCard, Users, BarChart3, Shield } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import Link from "next/link"

export default function SaaSPage() {
  const processSteps = [
    {
      step: "01",
      title: "Market Research",
      description:
        "Analyze market needs, competitor landscape, and define your SaaS product's unique value proposition.",
    },
    {
      step: "02",
      title: "Architecture Planning",
      description: "Design scalable multi-tenant architecture with security, performance, and growth considerations.",
    },
    {
      step: "03",
      title: "MVP Development",
      description: "Build and launch minimum viable product with core features to validate market fit quickly.",
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description: "Iterate based on user feedback, add advanced features, and optimize for performance and growth.",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Multi-Tenant Architecture",
      description:
        "Secure, scalable architecture that efficiently serves multiple customers from a single application instance.",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Complete billing system with subscription management, invoicing, and support for multiple payment gateways.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools to track user behavior, revenue, and business metrics.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced security features including SSO, role-based access control, and compliance certifications.",
    },
  ]

  const techStack = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js/Python", category: "Backend" },
    { name: "PostgreSQL/MongoDB", category: "Database" },
    { name: "Stripe/PayPal", category: "Payments" },
    { name: "AWS/Azure", category: "Cloud" },
    { name: "Redis", category: "Caching" },
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
            <span className="text-orange-500">SaaS Product Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                SaaS Product <span className="text-orange-500">Development</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 text-pretty">
                End-to-end SaaS platform development with scalable architecture, user management, subscription billing,
                and enterprise-grade features.
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
                <h3 className="text-2xl font-bold mb-6">SaaS Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Multi-tenant architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Subscription billing system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>User management & roles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>API management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Analytics & reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core SaaS Features</h2>
            <p className="text-lg text-white/70">Essential components for a successful SaaS platform</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">SaaS Development Process</h2>
            <p className="text-lg text-white/70">From concept to market-ready SaaS platform</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-lg text-white/70">Modern technologies for scalable SaaS platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-sm text-orange-500 font-medium mb-2">{tech.category}</div>
                <div className="font-semibold text-lg">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build Your SaaS Platform?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your idea into a scalable SaaS business with our comprehensive development services.
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
