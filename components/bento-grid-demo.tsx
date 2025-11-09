import { cn } from "@/lib/utils"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Code, Brain, Smartphone, Palette, Globe, Share2 } from "lucide-react"
import Link from "next/link"

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <Link key={item.id} href={`/services/${item.id}`}>
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={cn(
              i === 3 || i === 5 ? "md:col-span-2" : "",
              "cursor-pointer hover:scale-105 transition-all duration-300",
              item.highlight ? "ring-2 ring-orange-500/50" : "",
            )}
          />
        </Link>
      ))}
    </BentoGrid>
  )
}

const ServiceSkeleton = ({ color }: { color: string }) => (
  <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br opacity-20", color)}></div>
)

const items = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Tailored software solutions built from the ground up to meet your unique business requirements and scale with your growth.",
    header: <ServiceSkeleton color="from-blue-500 to-blue-600" />,
    icon: <Code className="h-4 w-4 text-orange-500" />,
  },
  {
    id: "ai-ml",
    title: "AI/ML Model Development",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
    header: <ServiceSkeleton color="from-purple-500 to-purple-600" />,
    icon: <Brain className="h-4 w-4 text-orange-500" />,
  },
  {
    id: "saas",
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS platform development with scalable architecture, user management, and subscription billing.",
    header: <ServiceSkeleton color="from-green-500 to-green-600" />,
    icon: <Globe className="h-4 w-4 text-orange-500" />,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences that drive conversions and enhance customer satisfaction.",
    header: <ServiceSkeleton color="from-pink-500 to-pink-600" />,
    icon: <Palette className="h-4 w-4 text-orange-500" />,
  },
  {
    id: "mobile-web",
    title: "Mobile & Web Development",
    description:
      "Responsive web applications and native mobile apps that deliver exceptional performance across all devices.",
    header: <ServiceSkeleton color="from-indigo-500 to-indigo-600" />,
    icon: <Smartphone className="h-4 w-4 text-orange-500" />,
  },
  {
    id: "social-marketing",
    title: "Social Media & Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and drive customer engagement across all platforms.",
    header: <ServiceSkeleton color="from-orange-500 to-orange-600" />,
    icon: <Share2 className="h-4 w-4 text-orange-500" />,
    highlight: true,
  },
]
