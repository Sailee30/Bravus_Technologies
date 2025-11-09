"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, CheckCircle, ArrowUpRight } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState, useEffect } from "react"
import { CompareDemo } from "@/components/ui/compare-demo"
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo"
import { Cover } from "@/components/ui/cover"
import { ServicesHoverCards } from "@/components/services-hover-cards"
import CoverDemo from "@/components/ui/cover-demo" // Import CoverDemo
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import Link from "next/link";
export default function HomePage() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [currentSlide, setCurrentSlide] = useState(0)
const [showAll, setShowAll] = useState(false)

  const testimonials = [
    {
      text: "The professionalism and expertise they brought to the table made all the difference. Every deadline was met, and the results exceeded our expectations.",
      name: "Hira Pehere",
      position: "CEO, Founder, Hira Enterprises",
      initials: "HP"
    },
    {
      text: "Communication was smooth throughout the entire process. They kept us updated at every step and delivered exactly what we envisioned.",
      name: "Rakesh Varma",
      position: "CEO, Founder, Atharva Enterprises",
      initials: "RV"
    },
    {
      text: "Hemant and his team showed genuine care for our business. They didn't just deliver a product, they delivered real value that's helping us grow.",
      name: "Pranav Gurav",
      position: "CEO, Co-founder, Aurenium Capital",
      initials: "PG"
    },
    {
      text: "We were impressed with their problem-solving approach. Even when challenges came up, they always found innovative and effective solutions.",
      name: "Atharva Varane",
      position: "CEO, Founder, Aeindustrialsolutions",
      initials: "AV"
    },
    {
      text: "The quality of their work is unmatched. From design to deployment, every detail was thoughtfully executed with precision.",
      name: "Barthlomeo Paul",
      position: "CEO, Ukay Aerodynamics",
      initials: "BP"
    },
    {
      text: "What stood out most was their commitment to customer satisfaction. They went the extra mile to make sure we were completely happy with the outcome.",
      name: "Omkar Pehare",
      position: "CEO, Omkar Realestate",
      initials: "OP"
    },
    {
      text: "Working with them felt like a true partnership. Their expertise, responsiveness, and dedication made this one of the smoothest projects we've ever done.",
      name: "Aryan Gupta",
      position: "CEO, Founder, Andes",
      initials: "AG"
    },
     {
      text: "We at Astraeus Next Gen had an amazing experience working with Hemant and his team. They are incredibly co-operative and highly invested in customer success.",
      name: "Anush Dhavale",
      position: "co-founder, Astreaus Next Gen",
      initials: "AG"
    },
     {
      text: "We truly appreciate their dedication and attention to detail. Hemant and his team went above and beyond to ensure our project was a success.",
      name: "Asit Sonawane",
      position: "founder, Propera Web solutions ",
      initials: "AG"
    }
  ]

  const testimonialsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentTestimonials = () => {
    const start = currentSlide * testimonialsPerSlide
    return testimonials.slice(start, start + testimonialsPerSlide)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-advance carousel - Simplified continuous running
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => {
        return (prevSlide + 1) % totalSlides
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full" />
        </div>

       

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-20">
            <nav className="flex flex-col space-y-4 px-6 py-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <ShimmerButton className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
                Get Quote
              </ShimmerButton>
            </nav>
          </div>
        )}

        <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12 max-w-6xl pt-4 sm:-mt-12 lg:-mt-24 pl-6 sm:pl-12 lg:pl-20">
          <div className="mb-4 sm:mb-8">
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-3 sm:px-4 py-2">
              <span className="text-white text-xs md:text-xs font-medium">360° Business Support</span>
            </div>
          </div>
          <span>


            
          </span>

          <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance mt-16 sm:mt-24 lg:mt-32">
            Bravus Technologies
            <br />
            <LineShadowText className="italic font-light" shadowColor="white">
              Engineered
            </LineShadowText>{" "}
            for Growth
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-sm lg:text-2xl mb-6 sm:mb-8 max-w-2xl text-pretty">
            From IT infrastructure and product engineering to growth marketing and campaign execution — we're your
            integrated partner.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Delivered with precision and speed.
          </p>

          <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-xs lg:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
            Request Consultation
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </main>
      </div>

      <section className="relative bg-gradient-to-b from-black to-gray-900 py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              We build and operate reliable systems, <br /> and we grow businesses — <Cover>end-to-end</Cover>
            </h1>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <CoverDemo />
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-gray-900 to-gray-900 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Enhance your UI, Enhance your Website.
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-3xl mx-auto text-pretty">
            Upgrade your applications with our modern, aesthetic UI designs.
          </p>

          <div className="flex justify-center mb-8">
            <CompareDemo />
          </div>

          <p className="text-white/60 text-sm md:text-base">See the difference our UI design can make.</p>
        </div>
      </section>

      <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <BackgroundBoxesDemo />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto">
  <div className="space-y-16">
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
        Innovation at our core.
      </h2>
      <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto text-pretty leading-relaxed">
        We harness the power of technology to deliver forward-thinking<br /> solutions that transform how businesses
        operate.
      </p>
    </div>

    <div className="text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
        Simplifying complexity.
      </h2>
      <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto text-pretty leading-relaxed">
        We break down complex challenges into simple, effective solutions <br />that empower your business to succeed.
      </p>
    </div>

    <div className="text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
        Empowering growth.
      </h2>
      <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto text-pretty leading-relaxed">
        Our mission is to provide the tools and technology that<br /> enable businesses to thrive in an ever-evolving
        digital landscape.
      </p>
    </div>
  </div>
</div>
      </section>

      <section className="relative bg-black py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Our Core Services</h2>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              Trusted by technical platforms, web3 teams, social-first brands, and hospitality clients — we bring
              technical depth and marketing muscle.
            </p>
          </div>

          <ServicesHoverCards showAll={showAll} />

          <div className="text-center mt-16 lg:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 mx-auto"
            >
              {showAll ? "Show Less" : "View More"}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-90" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-gradient-to-b from-black to-gray-900 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Discovery</h3>
              <p className="text-white/70 text-sm">Understanding your business goals and technical requirements</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Strategy</h3>
              <p className="text-white/70 text-sm">Crafting a comprehensive roadmap for success</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Development</h3>
              <p className="text-white/70 text-sm">Building with agile methodology and continuous feedback</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Launch</h3>
              <p className="text-white/70 text-sm">Deployment, optimization, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section with Carousel */}
      <section className="relative bg-gray-900 py-24 px-4 sm:px-6 lg:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Trusted by Industry Leaders
      </h2>
      <p className="text-white/70 text-lg max-w-2xl mx-auto">
        We've helped companies across industries achieve their digital transformation goals
      </p>
    </div>

    {/* Carousel Container */}
    <div className="relative mb-16">
      {/* Carousel Navigation */}
      <div className="flex justify-between items-center mb-8 gap-3 sm:gap-8">
        <button onClick={prevSlide} className="group p-2 sm:p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 rounded-full transition-all duration-300 flex-shrink-0">
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-orange-400 transition-colors" />
        </button>

        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-orange-500 w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="group p-2 sm:p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 rounded-full transition-all duration-300 flex-shrink-0">
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-orange-400 transition-colors" />
        </button>
      </div>

      {/* Carousel Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-3 gap-8 px-4">
                {testimonials
                  .slice(
                    slideIndex * testimonialsPerSlide,
                    (slideIndex + 1) * testimonialsPerSlide
                  )
                  .map((testimonial, index) => (
                    <div
                      key={`${slideIndex}-${index}`}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-400/20 transition-all duration-300 group"
                    >
                      <p className="text-white/80 mb-6 italic group-hover:text-white transition-colors duration-300">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-semibold text-sm">
                            {testimonial.initials}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-white/60 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-2">150+</div>
        <div className="text-white/70 text-sm">Projects Delivered</div>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-2">98%</div>
        <div className="text-white/70 text-sm">Client Satisfaction</div>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-2">24/7</div>
        <div className="text-white/70 text-sm">Support Available</div>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-2">5+</div>
        <div className="text-white/70 text-sm">Years Experience</div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss how our enterprise-grade solutions can accelerate your growth and drive measurable results.
          </p>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
  <Link href="/contact" className="w-full sm:w-auto">
    <Button className="group w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105">
      Start Your Project
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
    </Button>
  </Link>

  <Link href="/contact" className="w-full sm:w-auto">
    <Button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium">
      Schedule Consultation
    </Button>
  </Link>
</div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-500" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-500" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-orange-500" />
              <span>24/7 support included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}