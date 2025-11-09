import { Compare } from "@/components/ui/compare"
// import firstImage from "../assets/images/befor.jpeg"; // Replace with your actual image name
// import secondImage from "../assets/images/after.png";
import firstImage from "@/assets/images/befor.jpeg";  // Using @ alias
import secondImage from "@/assets/images/after.png";
export function CompareDemo() {
  return (
    <Compare
      firstImage={firstImage.src}
      secondImage={secondImage.src}
      firstImageClassName="object-cover object-left-top"
      secondImageClassname="object-cover object-left-top"
      className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
      slideMode="hover"
    />
  )
}
// Keep default export for compatibility
export default CompareDemo
