import type React from "react"
import type { Metadata, Viewport } from "next"
import { EB_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ModernNavbar from "@/components/modern-navbar"
import Footer from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { Suspense } from "react"
import "./globals.css"
import { cn } from "@/lib/utils"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bravus Technologies - Enterprise IT Solutions & Marketing",
  description:
    "Custom software, AI/ML, SaaS & growth marketing delivered with precision and speed. Transform your business with Bravus Technologies.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans cursor-none", ebGaramond.variable)}>
        <Suspense fallback={null}>
          <CustomCursor />
          <ModernNavbar />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
