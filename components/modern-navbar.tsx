"use client"
import { useState } from "react"
import {
  ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar"

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
    name: "Blogs",
    link: "/blog",
   },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  return (
    <ResizableNavbar 
      className="px-4 py-2 bg-transparent border-0"
      onVisibleChange={setVisible}
    >
      <NavBody className="justify-between" visible={visible}>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="/contact" className="hidden lg:block" variant="primary">
          Get Started
        </NavbarButton>
      </NavBody>

      <MobileNav visible={visible}>
        <MobileNavHeader className="flex justify-between items-center w-full">
          <div></div>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} visible={visible} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="px-4">
          <div className="flex flex-col space-y-4 w-full">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-4 text-lg font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <NavbarButton href="/contact" className="w-full" variant="primary">
                Get Started
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  )
}

export default ModernNavbar