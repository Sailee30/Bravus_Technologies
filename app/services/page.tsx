"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  Zap,
  Shield,
  Globe,
  Code,
  Brain,
  Smartphone,
  Cloud,
  Palette,
  TrendingUp,
} from "lucide-react"
import BentoGridDemo from "@/components/bento-grid-demo"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import Link from "next/link";
import { useState } from "react"

const services = [
  {
    title: "Custom Software Development",
    description:
      "Scalable, secure applications built with cutting-edge technologies. From enterprise solutions to startup MVPs, we deliver software that grows with your business.",
    link: "/services/custom-software",
    icon: <Code className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "AI/ML Solutions",
    description:
      "Predictive models, NLP & conversational AI, Computer vision, Recommendation engines, Model deployment & MLOps.",
    link: "/services/ai-ml",
    icon: <Brain className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Mobile & Web Development",
    description:
      "Responsive web applications and native mobile apps that deliver exceptional user experiences across all devices and platforms.",
    link: "/services/mobile-web",
    icon: <Smartphone className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Cloud Migration & Operations",
    description:
      "Cloud strategy (AWS / GCP / Azure), Lift-and-shift / re-architect, Infra as Code, Cost optimization, Managed cloud ops.",
    link: "/services/cloud-migration",
    icon: <Cloud className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "DevOps & CI/CD Automation",
    description:
      "CI/CD pipelines, Containerization (Docker / Kubernetes), Monitoring & observability, Automated deployments, IaC (Terraform/CloudFormation).",
    link: "/services/devops-cicd",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "ETL / data pipelines, Data lakes/warehouses, BI dashboards, Real-time streaming, Data governance.",
    link: "/services/data-engineering",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "API Design & Integrations",
    description:
      "REST / GraphQL APIs, Third-party integrations (payment, shipping, auth), API docs & SDKs, Webhooks.",
    link: "/services/api-design",
    icon: <Code className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "QA & Test Automation",
    description:
      "Manual QA, Automation frameworks (Selenium, Playwright), Performance & security testing, CI test integration.",
    link: "/services/qa-testing",
    icon: <Shield className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS solutions from concept to launch. Multi-tenant architecture, subscription management, and scalable infrastructure.",
    link: "/services/saas",
    icon: <Cloud className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that converts visitors into customers. Modern interfaces, intuitive workflows, and accessibility-first approach.",
    link: "/services/ui-ux",
    icon: <Palette className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Growth Marketing",
    description:
      "Data-driven marketing strategies, conversion optimization, and growth hacking techniques that accelerate customer acquisition.",
    link: "/services/growth-marketing",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "SEO & Technical SEO",
    description:
      "Audit, on-page, off-page, site architecture, schema, speed improvements.",
    link: "/services/seo",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "SEM & Paid Advertising",
    description:
      "Google Ads, Bing, Display, Shopping ads, performance campaigns.",
    link: "/services/sem-ads",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategy, community management, creatives, paid social.",
    link: "/services/social-media",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Email Marketing & Automation",
    description:
      "Campaigns, nurture flows, transactional emails, deliverability.",
    link: "/services/email-marketing",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Content Marketing",
    description:
      "Blogging, long-form content, video scripts, content calendars.",
    link: "/services/content-marketing",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "A/B testing, UX changes, funnels, heatmaps.",
    link: "/services/cro",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Analytics & Reporting",
    description:
      "GA4 setup, dashboards, event tracking, KPI reporting.",
    link: "/services/analytics",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Marketing Automation",
    description:
      "HubSpot/ActiveCampaign/other setups, lead scoring, workflows.",
    link: "/services/marketing-automation",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
]

export default function ServicesPage() {
  const [showAll, setShowAll] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
  const displayedServices = (showAll || !isMobile) ? services : services.slice(0, 6)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-garamond text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 text-pretty">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            journey.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-garamond text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology solutions that drive measurable business
              results
            </p>
          </div>

          <div className="relative">
            <HoverEffect items={displayedServices} className="grid-cols-1 md:grid-cols--2 lg:grid-cols-3 gap-6" />
          </div>
        </div>
        
        {/* View More Button - Mobile Only */}
        <div className="flex justify-center mt-12 lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less" : "View More"}
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-90" : ""}`} />
          </button>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-garamond text-3xl lg:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and long-term client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-orange-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Analysis</h3>
              <p className="text-white/70 text-sm">
                Deep dive into your business requirements, challenges, and objectives to create a comprehensive project
                roadmap.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-orange-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
              <p className="text-white/70 text-sm">
                Develop detailed project plans, technology architecture, and implementation strategies tailored to your
                needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-orange-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Agile Development</h3>
              <p className="text-white/70 text-sm">
                Iterative development process with regular feedback loops, ensuring transparency and alignment
                throughout.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
              <p className="text-white/70 text-sm">
                Seamless deployment with comprehensive testing, training, and ongoing support to ensure long-term
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-garamond text-3xl lg:text-4xl font-bold mb-4">Our Commitments</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              When you partner with Bravus Technologies, you can expect these guarantees on every project
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <Clock className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">On-Time Delivery</h3>
              <p className="text-white/70 mb-4">
                We respect your timelines and business deadlines. Our project management ensures deliverables are
                completed on schedule.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">95% on-time delivery rate</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <Shield className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-white/70 mb-4">
                Rigorous testing protocols and code reviews ensure every solution meets the highest quality standards.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">Comprehensive QA process</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <Users className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-white/70 mb-4">
                Ongoing support and maintenance to ensure your solutions continue to perform optimally long after
                launch.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">24/7 support available</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <Globe className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-white/70 mb-4">
                Future-proof architecture designed to grow with your business and adapt to changing requirements.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">Built for scale</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <Zap className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-white/70 mb-4">
                Every solution is optimized for speed, efficiency, and user experience to maximize business impact.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">Performance guaranteed</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 group">
              <Award className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-white/70 mb-4">
                Deep understanding of industry-specific challenges and regulations to deliver compliant, effective
                solutions.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-white/80">Certified professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-garamond text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and drive sustainable growth. Get started
            with a free consultation to explore the possibilities.
          </p>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">What You Get in Your Free Consultation:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Comprehensive business analysis</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Technology recommendations</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Project timeline and budget estimate</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Strategic roadmap for growth</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
  <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
    Request Free Consultation
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</Link>

            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
