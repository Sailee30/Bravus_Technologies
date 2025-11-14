"use client"

import { Button } from "@/components/ui/button"
import ModernContactForm from "@/components/modern-contact-form"
import { cn } from "@/lib/utils"
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  MessageCircle,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState("")
  const [selectedMarketing, setSelectedMarketing] = useState("")

  const faqs = [
   {
  question: "What is your typical project timeline?",
  answer:
    "Timelines vary depending on the scope and complexity of the project. A simple website may take 2–4 weeks, while more complex applications can take 3–6 months. We provide a detailed project timeline during our initial consultation.",
},
{
  question: "Do you offer ongoing support and maintenance?",
  answer:
    "Yes. We provide comprehensive support and maintenance services, including regular updates, security patches, performance monitoring, and technical assistance to keep your solution running smoothly.",
},
{
  question: "What technologies do you work with?",
  answer:
    "We specialize in modern web and mobile technologies such as React, Next.js, Node.js, and Python, along with cloud platforms like AWS and Azure. For mobile development, we use React Native, Flutter, and native iOS/Android technologies.",
},
{
  question: "Can you collaborate with our in-house team?",
  answer:
    "Absolutely. We’re experienced in working alongside internal teams and can integrate seamlessly into your workflows. We can act as an extension of your team or lead the technical development, depending on your needs.",
},
{
  question: "What is your pricing model?",
  answer:
    "Our pricing is based on project scope, complexity, and timelines. After discussing your requirements, we provide a detailed, transparent quote. We also offer flexible payment terms and milestone-based billing.",
},
{
  question: "Do you sign NDAs and ensure data security?",
  answer:
    "Yes. We take confidentiality and data security very seriously. We’re happy to sign NDAs and follow strict security protocols to safeguard your sensitive information and intellectual property.",
},
{
  question: "Do you offer ongoing support and maintenance?",
  answer:
    "Yes. We provide comprehensive support and maintenance services, including regular updates, security patches, performance monitoring, and technical assistance to keep your solution running smoothly.",
},

  ]

const services = [
  "Custom Software Development",
  "AI/ML Solutions",
  "Mobile & Web Development",
  "Cloud Migration & Operations",
  "DevOps & CI/CD Automation",
  "Data Engineering & Analytics",
  "API Design & Integrations",
  "QA & Test Automation",
  "SaaS Product Development",
  "UI/UX Design",
]

const marketingServices = [
  "Growth Marketing",
  "SEO & Technical SEO",
  "SEM & Paid Advertising",
  "Social Media Marketing",
  "Email Marketing & Automation",
  "Content Marketing",
  "Conversion Rate Optimization (CRO)",
  "Analytics & Reporting",
  "Marketing Automation",
]

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/917385663619",
      color: "text-green-500 hover:text-green-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/bravustech",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/bravustechnologies_?igsh=eTBqeTVzNXkweTJr",
      color: "text-pink-500 hover:text-pink-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/bravustech",
      color: "text-blue-600 hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/bravustech",
      color: "text-blue-700 hover:text-blue-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 text-pretty">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create
            something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 sm:px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ModernContactForm
              title="Send us a message"
              subtitle="Tell us about your project and we'll get back to you within 24 hours."
            />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1">Email</h4>
                      <p className="text-xs sm:text-sm text-white/70">hemant@bravustechnologies.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1">Phone</h4>
                      <p className="text-xs sm:text-sm text-white/70">+91-7385663619</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold mb-1">Location</h4>
                      <p className="text-xs sm:text-sm text-white/70">India (Remote Services Worldwide)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Meeting */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl sm:text-2xl font-bold">Schedule a Meeting</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Prefer a direct conversation? Schedule a free consultation call to discuss your project in detail.
                </p>
                
                <a 
                  href="https://calendly.com/saileechavan04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full group relative bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 border border-white/20 transition-all duration-300">
                    Schedule Call
                    <Calendar className="w-5 h-5" />
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                          social.color,
                        )}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-white/70">Get answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-semibold text-base sm:text-lg">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}
