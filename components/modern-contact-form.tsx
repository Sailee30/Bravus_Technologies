"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModernContactFormProps {
  title?: string
  subtitle?: string
  className?: string
}

const ModernContactForm = ({
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  className = "",
}: ModernContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    marketing: "", 
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className={cn("bg-white/5 border border-white/10 rounded-2xl p-8", className)}>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-white/70 text-xs sm:text-sm">{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-0">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-white">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-white">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-white">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-white">
              Company
            </Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
  <Label htmlFor="service" className="text-sm font-medium text-white">
    Service Interested In *
  </Label>
  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
  <SelectTrigger className="bg-white/10 border-white/20 text-white h-10 sm:h-12 text-sm sm:text-base hover:bg-white/20 focus:ring-2 focus:ring-orange-500">
    <SelectValue placeholder="Select a service" />
  </SelectTrigger>
  <SelectContent className="bg-gray-900 border border-white/30 z-[9999] w-screen sm:w-auto min-w-[250px] max-h-80 overflow-y-auto rounded-md shadow-lg">
    <SelectItem value="custom-software" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Custom Software Development</SelectItem>
    <SelectItem value="ai-ml" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">AI/ML Solutions</SelectItem>
    <SelectItem value="mobile-web" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Mobile & Web Development</SelectItem>
    <SelectItem value="cloud-migration" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Cloud Migration & Operations</SelectItem>
    <SelectItem value="devops" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">DevOps & CI/CD Automation</SelectItem>
    <SelectItem value="data-engineering" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Data Engineering & Analytics</SelectItem>
    <SelectItem value="api-design" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">API Design & Integrations</SelectItem>
    <SelectItem value="qa-testing" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">QA & Test Automation</SelectItem>
    <SelectItem value="saas" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">SaaS Product Development</SelectItem>
    <SelectItem value="ui-ux" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">UI/UX Design</SelectItem>
  </SelectContent>
</Select>
</div>

        <div className="space-y-2">
          <Label htmlFor="marketing" className="text-sm font-medium text-white">
            Marketing Service *
          </Label>
          <Select value={formData.marketing} onValueChange={(value) => handleInputChange("marketing", value)}>
  <SelectTrigger className="bg-white/10 border-white/20 text-white h-10 sm:h-12 text-sm sm:text-base hover:bg-white/20 focus:ring-2 focus:ring-orange-500">
    <SelectValue placeholder="Select marketing service" />
  </SelectTrigger>
  <SelectContent className="bg-gray-900 border border-white/30 z-[9999] w-screen sm:w-auto min-w-[250px] max-h-80 overflow-y-auto rounded-md shadow-lg">
    <SelectItem value="growth-marketing" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Growth Marketing</SelectItem>
    <SelectItem value="seo" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">SEO & Technical SEO</SelectItem>
    <SelectItem value="sem" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">SEM & Paid Advertising</SelectItem>
    <SelectItem value="social-media" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Social Media Marketing</SelectItem>
    <SelectItem value="email-marketing" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Email Marketing & Automation</SelectItem>
    <SelectItem value="content-marketing" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Content Marketing</SelectItem>
    <SelectItem value="cro" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Conversion Rate Optimization (CRO)</SelectItem>
    <SelectItem value="analytics" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Analytics & Reporting</SelectItem>
    <SelectItem value="marketing-automation" className="cursor-pointer hover:bg-orange-500/20 focus:bg-orange-500/20 text-white text-sm py-2 px-3">Marketing Automation</SelectItem>
  </SelectContent>
</Select>
         </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-white">
            Message *
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us about your project, goals, and requirements..."
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px] resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
        >
          Send Message
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </form>
    </div>
  )
}

export default ModernContactForm
