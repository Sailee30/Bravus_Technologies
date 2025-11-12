"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Award, Globe, Shield, Zap, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import TechStackReveal from "@/components/tech-stack-reveal"
import TimelineDemo from "@/components/timeline-demo"
import Link from "next/link";
export default function AboutPage() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  })

  // Animated counter effect
  useEffect(() => {
    const targets = { projects: 40, clients: 40, years: 3, satisfaction: 98 }
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepTime)
      return interval
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "MongoDB", icon: "🍃" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-garamond text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                About <span className="text-orange-500">Bravus</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto text-pretty">
                We're a team of passionate technologists dedicated to transforming businesses through innovative
                software solutions and strategic growth marketing.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{counters.projects}+</div>
                <div className="text-white/70 text-sm sm:text-base">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{counters.clients}+</div>
                <div className="text-white/70 text-sm sm:text-base">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{counters.years}+</div>
                <div className="text-white/70 text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{counters.satisfaction}%</div>
                <div className="text-white/70 text-sm sm:text-base">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-orange-500" />
                  <h2 className="font-garamond text-2xl sm:text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and
                  innovation. We believe in creating software that not only meets today's needs but anticipates
                  tomorrow's challenges.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-white/80 text-sm sm:text-base">Client-first approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-white/80 text-sm sm:text-base">Innovation-driven solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-white/80 text-sm sm:text-base">Scalable & sustainable technology</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-orange-500" />
                  <h2 className="font-garamond text-2xl sm:text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  To be the global leader in enterprise technology solutions, recognized for our expertise in AI/ML,
                  custom software development, and growth marketing strategies that transform businesses worldwide.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-white/80 text-sm sm:text-base">Global technology leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-white/80 text-sm sm:text-base">AI-powered business transformation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-white/80 text-sm sm:text-base">Sustainable digital ecosystems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-garamond text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto">
                These principles guide every decision we make and every solution we deliver
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Globe className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Innovation First</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                  We constantly push boundaries, exploring emerging technologies to deliver cutting-edge solutions that
                  give our clients competitive advantages.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Shield className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Trust & Transparency</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                  Open communication, honest timelines, and transparent processes build lasting partnerships with our
                  clients and team members.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Zap className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Excellence Driven</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                  We set high standards for ourselves and our work, continuously improving our skills and processes to
                  deliver exceptional results.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300">
                <Heart className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">People Centered</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                  Our success is built on strong relationships, empowering our team, and genuinely caring about our
                  clients' success and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-garamond text-2xl sm:text-3xl lg:text-4xl font-bold">Our Story</h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Founded in 2024 by a team of seasoned technologists and business strategists, Bravus Technologies
                  emerged from a simple yet powerful vision: to bridge the gap between cutting-edge technology and
                  real-world business impact.
                </p>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  What started as a small consultancy focused on custom software development has evolved into a
                  comprehensive technology partner, serving enterprises across industries from startups to Fortune 500
                  companies.
                </p>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Today, we're proud to be at the forefront of AI/ML innovation, cloud transformation, and digital
                  marketing excellence, helping businesses navigate the complexities of modern technology landscape.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orange-400">Why Choose Bravus?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">Proven Track Record</h4>
                        <p className="text-white/70 text-sm">150+ successful projects across diverse industries</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">Expert Team</h4>
                        <p className="text-white/70 text-sm">Certified professionals in latest technologies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">End-to-End Solutions</h4>
                        <p className="text-white/70 text-sm">From concept to deployment and beyond</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">Agile Methodology</h4>
                        <p className="text-white/70 text-sm">Flexible, iterative approach to project delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack - Replacing static grid with sticky scroll reveal */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-garamond text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-base sm:text-lg text-white/70">
                Explore our comprehensive technology ecosystem through interactive showcase
              </p>
            </div>
          </div>
          <TechStackReveal />
        </section>

        <section className="py-8 lg:py-12" id="full-timeline">
          <TimelineDemo />
        </section>

        {/* Client Success */}
        <section className="px-4 sm:px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-orange-500" />
              <h2 className="font-garamond text-2xl sm:text-3xl lg:text-4xl font-bold">Client Success is Our Success</h2>
            </div>

            <p className="text-base sm:text-lg text-white/70 mb-8 max-w-3xl mx-auto">
              We measure our success by the growth and achievements of our clients. Every project is an opportunity to
              create lasting value and drive meaningful business transformation.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
                <Users className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Dedicated Teams</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                  Assigned project teams ensure consistent communication and quality delivery
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
                <Target className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Goal-Oriented</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">
                  Every solution is designed with your specific business objectives in mind
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6">
                <CheckCircle className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-white/70 text-xs sm:text-sm lg:text-base">Track record of delivering projects on time and exceeding expectations</p>
              </div>
            </div>

            <Link href="/contact">
    <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
      Start Your Project
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </Button>
  </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
