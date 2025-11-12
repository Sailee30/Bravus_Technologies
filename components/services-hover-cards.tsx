"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect"
import {
  Code,
  Zap,
  Users,
  Cloud,
  Shield,
  Database,
  Search,
  Mail,
  TrendingUp,
  Target,
  BarChart3,
  Smartphone,
  Settings,
  Palette,
  Globe,
} from "lucide-react"

// Technical Services Data
export const technicalServices = [
  {
    title: "Custom Software Development",
    description:
      "Scalable applications built with modern tech stacks including React, Node.js, Python, and cloud-native architectures.",
    link: "/services/custom-software",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "AI/ML Solutions",
    description:
      "Intelligent automation, predictive analytics, and machine learning models to transform your business operations.",
    link: "/services/ai-ml",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Cloud Migration & Operations",
    description:
      "Seamless migration to AWS, Azure, or GCP with ongoing cloud infrastructure management and optimization.",
    link: "/services/cloud-operations",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "DevOps & CI/CD Automation",
    description: "Streamlined deployment pipelines, infrastructure as code, and automated testing for faster delivery.",
    link: "/services/devops",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "ETL pipelines, data warehousing, and business intelligence solutions for data-driven decision making.",
    link: "/services/data-engineering",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security audits, penetration testing, and compliance frameworks (SOC2, GDPR, HIPAA).",
    link: "/services/cybersecurity",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "QA & Test Automation",
    description: "Automated testing frameworks, performance testing, and quality assurance processes.",
    link: "/services/qa-automation",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "IoT & Edge Solutions",
    description: "Connected device development, edge computing, and IoT platform integration.",
    link: "/services/iot-edge",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "API Design & Integrations",
    description: "RESTful APIs, GraphQL, microservices architecture, and third-party system integrations.",
    link: "/services/api-integrations",
    icon: <Globe className="w-6 h-6" />,
  },
]

// Marketing Services Data
export const marketingServices = [
  {
    title: "SEO & Technical SEO",
    description:
      "Comprehensive search optimization including technical audits, on-page optimization, and local SEO strategies.",
    link: "/services/seo",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "SEM & Paid Advertising",
    description: "Google Ads, Facebook Ads, LinkedIn campaigns with advanced targeting and conversion optimization.",
    link: "/services/paid-ads",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media management, content creation, and community building across all platforms.",
    link: "/services/social-media",
    icon: <Users className="w-6 h-6" />,
  },
  
]

// Combined Services for Main Services Page
export const allServices = [...technicalServices.slice(0, 6), ...marketingServices.slice(0, 6)]

export function ServicesHoverCards({
  showAll = false,
  className = "",
}: {
  showAll?: boolean
  className?: string
}) {
  // Show all services on desktop (lg and above), or if showAll is true
  // Show first 6 on mobile by default
  const displayedServices = showAll ? allServices : allServices.slice(0, 6)

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <HoverEffect
        items={displayedServices.map((service) => ({
          title: service.title,
          description: service.description,
          link: service.link,
          icon: service.icon,
        }))}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      />
    </div>
  )
}

export function TechnicalServicesCards({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <HoverEffect
        items={technicalServices.map((service) => ({
          title: service.title,
          description: service.description,
          link: service.link,
        }))}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      />
    </div>
  )
}

export function MarketingServicesCards({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <HoverEffect
        items={marketingServices.map((service) => ({
          title: service.title,
          description: service.description,
          link: service.link,
        }))}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      />
    </div>
  )
}
