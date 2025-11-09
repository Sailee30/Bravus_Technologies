"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Palette, Users, Eye, Smartphone, Monitor } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import Link from "next/link"

export default function UIUXPage() {
  const processSteps = [
    {
      step: "01",
      title: "User Research",
      description:
        "Understand your users through interviews, surveys, and behavioral analysis to inform design decisions.",
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Create low-fidelity wireframes to establish information architecture and user flow patterns.",
    },
    {
      step: "03",
      title: "Prototyping",
      description: "Build interactive prototypes to test concepts and validate design solutions before development.",
    },
    {
      step: "04",
      title: "Design Systems",
      description: "Develop comprehensive design systems with reusable components for consistent user experiences.",
    },
  ]

  const services = [
    {
      icon: Users,
      title: "User Experience (UX) Design",
      description:
        "Research-driven UX design that focuses on user needs, behaviors, and creating intuitive digital experiences.",
    },
    {
      icon: Palette,
      title: "User Interface (UI) Design",
      description:
        "Beautiful, modern interfaces that align with your brand and provide exceptional visual experiences.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native iOS and Android app designs optimized for touch interactions and mobile user patterns.",
    },
    {
      icon: Monitor,
      title: "Web Application Design",
      description: "Responsive web designs that work seamlessly across all devices and screen sizes.",
    },
  ]

  const designTools = [
    { name: "Figma", category: "Design" },
    { name: "Adobe XD", category: "Prototyping" },
    { name: "Sketch", category: "UI Design" },
    { name: "InVision", category: "Collaboration" },
    { name: "Principle", category: "Animation" },
    { name: "Miro", category: "Ideation" },
  ]

  const benefits = [
    {
      icon: Eye,
      title: "Improved User Engagement",
      description: "Well-designed interfaces increase user engagement and time spent on your platform by up to 200%",
    },
    {
      icon: Users,
      title: "Higher Conversion Rates",
      description: "Optimized user experiences can improve conversion rates by 25-50% through better user flows",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Consistency",
      description: "Unified design systems ensure consistent experiences across web, mobile, and tablet platforms",
    },
    {
      icon: Palette,
      title: "Brand Differentiation",
      description: "Unique, memorable designs that set your product apart from competitors in the market",
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
            <span className="text-orange-500">UI/UX Design</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                UI/UX <span className="text-orange-500">Design</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 text-pretty">
                Create intuitive and engaging user experiences that drive conversions, enhance customer satisfaction,
                and build lasting brand loyalty.
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
                <h3 className="text-2xl font-bold mb-6">Design Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>User research & analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Wireframing & prototyping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Visual design & branding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Design system creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Usability testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Design Services</h2>
            <p className="text-lg text-white/70">Comprehensive design solutions for digital products</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Design Process</h2>
            <p className="text-lg text-white/70">User-centered design methodology for optimal results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Design Tools</h2>
            <p className="text-lg text-white/70">Industry-standard tools for professional design work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-sm text-orange-500 font-medium mb-2">{tool.category}</div>
                <div className="font-semibold text-lg">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Design Benefits</h2>
            <p className="text-lg text-white/70">How great design transforms your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let's create designs that not only look beautiful but also drive real business results.
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
