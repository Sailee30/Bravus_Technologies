"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ShimmerButton } from "@/components/shimmer-button"
import logoImage from "@/assets/images/logo.png"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
      <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center overflow-hidden">
            <Image 
              src={logoImage} 
              alt="Bravus Logo" 
              width={48}
              height={48}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">Bravus</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors text-sm lg:text-base ${
              isActive(item.href) ? "text-orange-500" : "text-white/80 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <Link href="/contact">
        <ShimmerButton className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
          Get Quote
        </ShimmerButton>
      </Link>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-40">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href) ? "text-orange-500" : "text-white/80 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <ShimmerButton className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
                Get Quote
              </ShimmerButton>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}