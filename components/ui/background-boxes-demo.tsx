"use client"
import { Boxes } from "@/components/ui/background-boxes"

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
    </div>
  )
}
