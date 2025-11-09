"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Brain, BarChart3, Eye, MessageSquare, Cpu } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import Link from "next/link"

export default function AIMLPage() {
  const processSteps = [
    {
      step: "01",
      title: "Data Assessment",
      description:
        "Analyze your data quality, volume, and structure to determine the best AI/ML approach for your use case.",
    },
    {
      step: "02",
      title: "Model Design",
      description:
        "Design and select appropriate algorithms, create data pipelines, and establish training methodologies.",
    },
    {
      step: "03",
      title: "Training & Validation",
      description:
        "Train models with your data, validate performance, and fine-tune for optimal accuracy and efficiency.",
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description:
        "Deploy models to production with monitoring systems for performance tracking and continuous improvement.",
    },
  ]

  const aiServices = [
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description:
        "Forecast trends, customer behavior, and business outcomes using advanced statistical models and machine learning algorithms.",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description:
        "Extract insights from text data, build chatbots, sentiment analysis, and automated content generation systems.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Image recognition, object detection, quality control automation, and visual inspection systems for various industries.",
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description:
        "Complex neural networks for advanced pattern recognition, recommendation systems, and autonomous decision making.",
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
            <span className="text-orange-500">AI/ML Model Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                AI/ML Model <span className="text-orange-500">Development</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 text-pretty">
                Harness the power of artificial intelligence and machine learning to automate processes, gain insights,
                and make data-driven decisions.
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
                <h3 className="text-2xl font-bold mb-6">AI/ML Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Custom model development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Data preprocessing & cleaning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Model training & optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Production deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span>Performance monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI/ML Services</h2>
            <p className="text-lg text-white/70">
              Comprehensive artificial intelligence solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI/ML Process</h2>
            <p className="text-lg text-white/70">
              From data to deployment - a systematic approach to AI implementation
            </p>
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

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Leverage AI for Your Business?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights with our custom AI/ML solutions.
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
