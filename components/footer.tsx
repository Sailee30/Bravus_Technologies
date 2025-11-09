import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info (wider column) */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-start">
              <Image
                src={logo}
                alt="Bravus Logo"
                className="object-contain filter brightness-125"
                width={100}
                height={80}
                priority
              />
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Transforming businesses through innovative technology solutions
              and strategic growth marketing.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-orange-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-orange-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/custom-software"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                Custom Software
              </Link>
              <Link
                href="/services/ai-ml"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                AI/ML Solutions
              </Link>
              <Link
                href="/services/saas"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                SaaS Development
              </Link>
              <Link
                href="/services/mobile-web"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                Mobile & Web Apps
              </Link>
              <Link
                href="/services/ui-ux"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                UI/UX Design
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="block text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hemant@bravustechnologies.com"
                className="flex items-center space-x-3 text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hemant@bravustechnologies.com</span>
              </a>
              <a
                href="tel:+917385663619"
                className="flex items-center space-x-3 text-white/70 hover:text-orange-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 7385663619</span>
              </a>
              <div className="flex items-start space-x-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>India (Remote Services Worldwide)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Bravus Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-orange-500 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-orange-500 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
