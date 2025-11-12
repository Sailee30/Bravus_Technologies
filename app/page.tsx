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
const [testimonialsPerSlide, setTestimonialsPerSlide] = useState(3)

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

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setTestimonialsPerSlide(1)
    } else {
      setTestimonialsPerSlide(3)
    }
  }

  handleResize()
  window.addEventListener("resize", handleResize)
  return () => window.removeEventListener("resize", handleResize)
}, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Elements */}
<div className="absolute inset-0">
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,1)" />
        <stop offset="30%" stopColor="rgba(251,146,60,1)" />
        <stop offset="70%" stopColor="rgba(249,115,22,0.8)" />
        <stop offset="100%" stopColor="rgba(249,115,22,0)" />
      </radialGradient>
      <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="25%" stopColor="rgba(251,146,60,0.9)" />
        <stop offset="60%" stopColor="rgba(234,88,12,0.7)" />
        <stop offset="100%" stopColor="rgba(234,88,12,0)" />
      </radialGradient>
      <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(255,255,255,1)" />
        <stop offset="35%" stopColor="rgba(251,146,60,1)" />
        <stop offset="75%" stopColor="rgba(234,88,12,0.6)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
        <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
        <stop offset="40%" stopColor="rgba(251,146,60,0.08)" />
        <stop offset="80%" stopColor="rgba(234,88,12,0.05)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
      <filter id="heroTextBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feTurbulence baseFrequency="0.7" numOctaves="4" result="noise" />
        <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
        <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
          <feFuncA type="discrete" tableValues="0.03 0.06 0.09 0.12" />
        </feComponentTransfer>
        <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
        <feMerge>
          <feMergeNode in="noisyBlur" />
        </feMerge>
      </filter>
      <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0,0,0,1)" />
        <stop offset="15%" stopColor="rgba(249,115,22,0.8)" />
        <stop offset="85%" stopColor="rgba(249,115,22,0.8)" />
        <stop offset="100%" stopColor="rgba(0,0,0,1)" />
      </linearGradient>
      <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0,0,0,1)" />
        <stop offset="12%" stopColor="rgba(251,146,60,0.7)" />
        <stop offset="88%" stopColor="rgba(251,146,60,0.7)" />
        <stop offset="100%" stopColor="rgba(0,0,0,1)" />
      </linearGradient>
      <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0,0,0,1)" />
        <stop offset="18%" stopColor="rgba(234,88,12,0.8)" />
        <stop offset="82%" stopColor="rgba(234,88,12,0.8)" />
        <stop offset="100%" stopColor="rgba(0,0,0,1)" />
      </linearGradient>
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g>
      <ellipse
        cx="300"
        cy="350"
        rx="400"
        ry="200"
        fill="url(#heroTextBg)"
        filter="url(#heroTextBlur)"
        opacity="0.6"
      />
      <ellipse
        cx="350"
        cy="320"
        rx="500"
        ry="250"
        fill="url(#heroTextBg)"
        filter="url(#heroTextBlur)"
        opacity="0.4"
      />
      <ellipse
        cx="400"
        cy="300"
        rx="600"
        ry="300"
        fill="url(#heroTextBg)"
        filter="url(#heroTextBlur)"
        opacity="0.2"
      />

      <path
        id="thread1"
        d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.8"
      />
      <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#thread1" />
        </animateMotion>
      </circle>

      <path
        id="thread2"
        d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370"
        stroke="url(#threadFade2)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath href="#thread2" />
        </animateMotion>
      </circle>

      <path
        id="thread3"
        d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330"
        stroke="url(#threadFade3)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.8"
      />
      <circle r="2.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.5s" repeatCount="indefinite">
          <mpath href="#thread3" />
        </animateMotion>
      </circle>

      <path
        id="thread4"
        d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390"
        stroke="url(#threadFade1)"
        strokeWidth="0.6"
        fill="none"
        opacity="0.6"
      />
      <circle r="1.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.5s" repeatCount="indefinite">
          <mpath href="#thread4" />
        </animateMotion>
      </circle>

      <path
        id="thread5"
        d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350"
        stroke="url(#threadFade2)"
        strokeWidth="1.0"
        fill="none"
        opacity="0.7"
      />
      <circle r="2.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.2s" repeatCount="indefinite">
          <mpath href="#thread5" />
        </animateMotion>
      </circle>

      <path
        id="thread6"
        d="M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410"
        stroke="url(#threadFade3)"
        strokeWidth="1.3"
        fill="none"
        opacity="0.6"
      />
      <circle r="2.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.2s" repeatCount="indefinite">
          <mpath href="#thread6" />
        </animateMotion>
      </circle>

      <path
        id="thread7"
        d="M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335"
        stroke="url(#threadFade1)"
        strokeWidth="0.9"
        fill="none"
        opacity="0.8"
      />
      <circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.8s" repeatCount="indefinite">
          <mpath href="#thread7" />
        </animateMotion>
      </circle>

      <path
        id="thread8"
        d="M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380"
        stroke="url(#threadFade2)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.7"
      />
      <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.8s" repeatCount="indefinite">
          <mpath href="#thread8" />
        </animateMotion>
      </circle>

      <path
        id="thread9"
        d="M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345"
        stroke="url(#threadFade3)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.6"
      />
      <circle r="1.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#thread9" />
        </animateMotion>
      </circle>

      <path
        id="thread10"
        d="M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375"
        stroke="url(#threadFade1)"
        strokeWidth="1.1"
        fill="none"
        opacity="0.8"
      />
      <circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.3s" repeatCount="indefinite">
          <mpath href="#thread10" />
        </animateMotion>
      </circle>

      <path
        id="thread11"
        d="M70 727 Q210 605 360 555 Q510 505 650 535 Q790 565 930 475 Q1070 385 1260 355"
        stroke="url(#threadFade2)"
        strokeWidth="0.4"
        fill="none"
        opacity="0.5"
      />
      <circle r="1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.7s" repeatCount="indefinite">
          <mpath href="#thread11" />
        </animateMotion>
      </circle>

      <path
        id="thread12"
        d="M110 738 Q270 645 430 595 Q590 545 730 575 Q870 605 1010 515 Q1150 425 1380 395"
        stroke="url(#threadFade3)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <circle r="3.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.7s" repeatCount="indefinite">
          <mpath href="#thread12" />
        </animateMotion>
      </circle>

      <path
        id="thread13"
        d="M45 718 Q185 588 325 538 Q465 488 605 518 Q745 548 885 458 Q1025 368 1220 338"
        stroke="url(#threadFade1)"
        strokeWidth="0.7"
        fill="none"
        opacity="0.6"
      />
      <circle r="1.8" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.3s" repeatCount="indefinite">
          <mpath href="#thread13" />
        </animateMotion>
      </circle>

      <path
        id="thread14"
        d="M130 721 Q290 630 460 580 Q630 530 770 560 Q910 590 1050 500 Q1190 410 1350 380"
        stroke="url(#threadFade2)"
        strokeWidth="1.0"
        fill="none"
        opacity="0.8"
      />
      <circle r="2.3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.9s" repeatCount="indefinite">
          <mpath href="#thread14" />
        </animateMotion>
      </circle>

      <path
        id="thread15"
        d="M25 713 Q165 583 305 533 Q445 483 585 513 Q725 543 865 453 Q1005 363 1200 333"
        stroke="url(#threadFade3)"
        strokeWidth="0.3"
        fill="none"
        opacity="0.4"
      />
      <circle r="0.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="6.2s" repeatCount="indefinite">
          <mpath href="#thread15" />
        </animateMotion>
      </circle>

      <path
        id="thread16"
        d="M85 719 Q235 605 385 555 Q535 505 675 535 Q815 565 955 475 Q1095 385 1320 355"
        stroke="url(#threadFade1)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
      <circle r="3.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.1s" repeatCount="indefinite">
          <mpath href="#thread16" />
        </animateMotion>
      </circle>

      <path
        id="thread17"
        d="M50 720 Q180 660 320 620 Q460 580 600 600 Q740 620 880 560 Q1020 500 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
      />
      <circle r="1.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.1s" repeatCount="indefinite">
          <mpath href="#thread17" />
        </animateMotion>
      </circle>

      <path
        id="thread18"
        d="M50 720 Q200 680 350 640 Q500 600 650 620 Q800 640 950 580 Q1100 520 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      <circle r="2.8" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.6s" repeatCount="indefinite">
          <mpath href="#thread18" />
        </animateMotion>
      </circle>

      <path
        id="thread19"
        d="M50 720 Q160 670 280 630 Q400 590 540 610 Q680 630 820 570 Q960 510 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.4s" repeatCount="indefinite">
          <mpath href="#thread19" />
        </animateMotion>
      </circle>

      <path
        id="thread20"
        d="M50 720 Q220 690 380 650 Q540 610 680 630 Q820 650 960 590 Q1100 530 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.8"
      />
      <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.4s" repeatCount="indefinite">
          <mpath href="#thread20" />
        </animateMotion>
      </circle>

      <path
        id="thread21"
        d="M50 720 Q170 675 300 635 Q430 595 570 615 Q710 635 850 575 Q990 515 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
      <circle r="1.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.9s" repeatCount="indefinite">
          <mpath href="#thread21" />
        </animateMotion>
      </circle>

      <path
        id="thread22"
        d="M50 720 Q190 745 340 705 Q490 665 630 685 Q770 705 910 645 Q1050 585 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="1.1"
        fill="none"
        opacity="0.7"
      />
      <circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.8s" repeatCount="indefinite">
          <mpath href="#thread22" />
        </animateMotion>
      </circle>

      <path
        id="thread23"
        d="M50 720 Q150 725 270 685 Q390 645 530 665 Q670 685 810 625 Q950 565 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="0.9"
        fill="none"
        opacity="0.6"
      />
      <circle r="2.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.2s" repeatCount="indefinite">
          <mpath href="#thread23" />
        </animateMotion>
      </circle>

      <path
        id="thread24"
        d="M50 720 Q210 755 370 715 Q530 675 670 695 Q810 715 950 655 Q1090 595 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="1.3"
        fill="none"
        opacity="0.8"
      />
      <circle r="2.9" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.2s" repeatCount="indefinite">
          <mpath href="#thread24" />
        </animateMotion>
      </circle>

      <path
        id="thread25"
        d="M50 720 Q165 730 290 690 Q415 650 555 670 Q695 690 835 630 Q975 570 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="0.7"
        fill="none"
        opacity="0.5"
      />
      <circle r="1.8" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.6s" repeatCount="indefinite">
          <mpath href="#thread25" />
        </animateMotion>
      </circle>

      <path
        id="thread26"
        d="M50 720 Q230 760 390 720 Q550 680 690 700 Q830 720 970 660 Q1110 600 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="1.0"
        fill="none"
        opacity="0.7"
      />
      <circle r="2.4" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.7s" repeatCount="indefinite">
          <mpath href="#thread26" />
        </animateMotion>
      </circle>

      <path
        id="thread27"
        d="M50 720 Q175 740 310 700 Q445 660 585 680 Q725 700 865 640 Q1005 580 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="0.4"
        fill="none"
        opacity="0.4"
      />
      <circle r="1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="6.1s" repeatCount="indefinite">
          <mpath href="#thread27" />
        </animateMotion>
      </circle>

      <path
        id="thread28"
        d="M50 720 Q195 750 350 710 Q505 670 645 690 Q785 710 925 650 Q1065 590 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
      <circle r="3.1" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.3s" repeatCount="indefinite">
          <mpath href="#thread28" />
        </animateMotion>
      </circle>

      <path
        id="thread29"
        d="M50 720 Q155 735 285 695 Q415 655 555 675 Q695 695 835 635 Q975 575 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />
      <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.3s" repeatCount="indefinite">
          <mpath href="#thread29" />
        </animateMotion>
      </circle>

      <path
        id="thread30"
        d="M50 720 Q215 765 375 725 Q535 685 675 705 Q815 725 955 665 Q1095 605 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.8"
      />
      <circle r="2.7" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.5s" repeatCount="indefinite">
          <mpath href="#thread30" />
        </animateMotion>
      </circle>

      <path
        id="thread31"
        d="M50 720 Q185 745 325 705 Q465 665 605 685 Q745 705 885 645 Q1025 585 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
      />
      <circle r="1.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.8s" repeatCount="indefinite">
          <mpath href="#thread31" />
        </animateMotion>
      </circle>

      <path
        id="thread32"
        d="M50 720 Q205 755 365 715 Q525 675 665 695 Q805 715 945 655 Q1085 595 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.8"
      />
      <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.1s" repeatCount="indefinite">
          <mpath href="#thread32" />
        </animateMotion>
      </circle>

      <path
        id="thread33"
        d="M50 720 Q160 730 295 690 Q430 650 570 670 Q710 690 850 630 Q990 570 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="0.9"
        fill="none"
        opacity="0.6"
      />
      <circle r="2.1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="5.1s" repeatCount="indefinite">
          <mpath href="#thread33" />
        </animateMotion>
      </circle>

      <path
        id="thread34"
        d="M50 720 Q225 770 385 730 Q545 690 685 710 Q825 730 965 670 Q1105 610 1200 340"
        stroke="url(#threadFade1)"
        strokeWidth="1.1"
        fill="none"
        opacity="0.7"
      />
      <circle r="2.6" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.9s" repeatCount="indefinite">
          <mpath href="#thread34" />
        </animateMotion>
      </circle>

      <path
        id="thread35"
        d="M50 720 Q170 740 305 700 Q440 660 580 680 Q720 700 860 640 Q1000 580 1200 340"
        stroke="url(#threadFade2)"
        strokeWidth="0.3"
        fill="none"
        opacity="0.4"
      />
      <circle r="0.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="6.3s" repeatCount="indefinite">
          <mpath href="#thread35" />
        </animateMotion>
      </circle>

      <path
        id="thread36"
        d="M50 720 Q240 715 400 675 Q560 635 700 655 Q840 675 980 615 Q1120 555 1200 340"
        stroke="url(#threadFade3)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
      <circle r="3.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
        <animateMotion dur="4.0s" repeatCount="indefinite">
          <mpath href="#thread36" />
        </animateMotion>
      </circle>
    </g>
  </svg>

  <style jsx>{`
  @keyframes pulse1 {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
  @keyframes pulse2 {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  @keyframes pulse3 {
    0%, 100% { opacity: 0.5; transform: scale(0.7); }
    50% { opacity: 1; transform: scale(1.3); }
  }
`}</style>
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

      <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12 max-w-6xl pt-8 sm:pt-6 lg:pt-12 pl-4 sm:pl-12 lg:pl-20">
        <div className="mt-12 sm:mt-16 mb-6 sm:mb-8 w-full">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-3 sm:px-4 py-2 whitespace-nowrap text-xs sm:text-xs">
            <span className="text-white font-medium">360° Business Support</span>
        </div>
      </div>
          <span>


            
          </span>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-balance mt-2 sm:mt-2 lg:mt-4">
            Bravus Technologies
            <br />
            <LineShadowText className="italic font-light" shadowColor="white">
              Engineered
            </LineShadowText>{" "}
            for Growth
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 max-w-4xl lg:max-w-5xl text-pretty leading-relaxed mt-6 sm:mt-8">
            From IT infrastructure and product engineering to growth marketing and campaign execution
            <br className="sm:hidden" />
            <br className="hidden sm:block" />
              — we're your integrated partner.
            
            <br className="sm:hidden" />
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span> Delivered with precision and speed.
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

      <section className="relative bg-gradient-to-b from-black to-gray-900 py-24 px-4 sm:px-6 lg:px-12">
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
        <div className="text-3xl font-bold text-white mb-2">40+</div>
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
        <div className="text-3xl font-bold text-white mb-2">3+</div>
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