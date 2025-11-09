"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"
import frontImage from "@/assets/images/front.jpeg"
import backImage from "@/assets/images/bakcendd.png"
import databaseImage from "@/assets/images/database.jpeg"
import aiImage from "@/assets/images/ai.jpeg"
const TechStackReveal = () => {
  const content = [
    {
      title: "Frontend Technologies",
      description:
        "We craft exceptional user experiences with industry-leading frontend technologies that deliver performance, scalability, and stunning visual design.\n\n• React & Next.js for lightning-fast, SEO-optimized applications\n• Tailwind CSS for responsive, mobile-first design systems\n• React Native for cross-platform mobile development\n• Progressive Web Apps (PWA) for enhanced user engagement",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white relative">
          <Image 
            src={frontImage} 
            alt="Frontend Technologies" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <span className="text-2xl font-bold text-white text-center px-4"></span>
          </div>
        </div>
      ),
    },
    {
      title: "Backend & Infrastructure",
      description:
        "Enterprise-grade backend architectures and cloud infrastructure solutions designed for high availability, security, and seamless scalability.\n\n• Node.js & Python for robust server-side development\n• AWS & Azure cloud services for enterprise deployment\n• Docker containerization for consistent environments\n• Kubernetes orchestration for production-grade scaling",
     content: (
        <div className="h-full w-full  flex items-center justify-center text-white relative">
          <Image 
            src={backImage} 
            alt="Backend & Infrastructure" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <span className="text-2xl font-bold text-white text-center px-4"></span>
          </div>
        </div>
      ),
    },
    {
      title: "AI & Machine Learning",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions that transform business operations through intelligent automation and predictive analytics.\n\n• Custom ML models with TensorFlow & PyTorch frameworks\n• OpenAI GPT integration for conversational AI solutions\n• Computer vision & NLP for intelligent data processing\n• MLOps pipelines for production-ready AI deployment",
     content: (
        <div className="h-full w-full  flex items-center justify-center text-white relative">
          <Image 
            src={aiImage} 
            alt="AI & Machine Learning" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <span className="text-2xl font-bold text-white text-center px-4"></span>
          </div>
        </div>
      ),
    },
    {
      title: "Database & Storage",
      description:
        "Strategic data architecture and storage solutions that ensure optimal performance, security, and reliability for mission-critical business applications.\n\n• PostgreSQL & MongoDB for flexible data modeling\n• Redis for high-performance caching and session management\n• Firebase for real-time applications and rapid development\n• Data warehousing and analytics with BigQuery & Snowflake",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white relative">
          <Image 
            src={databaseImage} 
            alt="Database & Storage" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <span className="text-2xl font-bold text-white text-center px-4"></span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="custom-scrollbar">
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #06b6d4, #10b981);
          border-radius: 3px;
          transition: all 0.3s ease;
          opacity: 0.7;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #0891b2, #059669);
          opacity: 1;
          transform: scaleY(1.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background: linear-gradient(45deg, #0e7490, #047857);
        }
      `}</style>
      <StickyScroll
        content={content.map(item => ({
          ...item,
          description: (
            <p className="whitespace-pre-line">{item.description}</p>
          ),
        }))}
      />
    </div>
  )
}

export default TechStackReveal