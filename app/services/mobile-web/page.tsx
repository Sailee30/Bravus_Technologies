"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Smartphone, Monitor, Zap, Globe, Code, Layers } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import Link from "next/link"

export default function MobileWebPage() {
  const processSteps = [
    {
      step: "01",
      title: "Platform Strategy",
      description:
        "Analyze requirements and choose optimal development approach: native, hybrid, or progressive web app.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Create responsive designs and scalable architecture that works seamlessly across all devices.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build with modern frameworks, conduct thorough testing on multiple devices and platforms.",
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Deploy to app stores and web, optimize performance, and provide ongoing maintenance support.",
    },
  ]

  const services = [
    {
      icon: Smartphone,
      title: "Native Mobile Apps",
      description:
        "High-performance iOS and Android applications built with platform-specific technologies for optimal user experience.",
    },
    {
      icon: Globe,
      title: "Progressive Web Apps",
      description:
        "Web applications that work like native apps, offering offline functionality and app-like experiences.",
    },
    {
      icon: Monitor,
      title: "Responsive Web Development",
      description: "Websites that adapt perfectly to any screen size, from mobile phones to desktop computers.",
    },
    {
      icon: Layers,
      title: "Cross-Platform Solutions",
      description: "React Native and Flutter apps that run on both iOS and Android with shared codebase.",
    },
  ]

  const techStack = [
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift/Kotlin", category: "Native" },
    { name: "React/Next.js", category: "Web" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Optimal Performance",
      description: "Fast loading times and smooth interactions across all devices and platforms",
    },
    {
      icon: Globe,
      title: "Wider Reach",
      description: "Reach users on any device - mobile, tablet, desktop, or web browser",
    },
    {
      icon: Code,
      title: "Code Efficiency",
      description: "Shared codebase for multiple platforms reduces development time and costs",
    },
    {
      icon: Smartphone,
      title: "Native Experience",
      description: "Platform-specific optimizations for the best possible user experience",
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
            <span className="text-orange-500">Mobile & Web Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Mobile & Web <span className="text-orange-500">Development</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 text-pretty">
                Responsive web applications and native mobile apps that deliver exceptional performance across all
                devices and platforms.
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
                <h3 className="text-2xl font-bold mb-6">Development Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Native iOS & Android apps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Progressive web applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Cross-platform solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Responsive web design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Performance optimization</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Development Services</h2>
            <p className="text-lg text-white/70">Comprehensive mobile and web development solutions</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-lg text-white/70">From concept to deployment across all platforms</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Tech Stack */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-lg text-white/70">Modern frameworks and tools for mobile and web development</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Benefits */}
      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-white/70">Why choose our mobile and web development services</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Build Your Mobile & Web Solution?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let's create applications that work seamlessly across all devices and deliver exceptional user experiences.
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
