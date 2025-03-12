"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About Me", href: "#about" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact Me", href: "#contact" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  /* const toggleMenu = () => setIsOpen(!isOpen) */
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better accuracy

      for (const item of navItems) {
        const element = document.querySelector(item.href)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(item.href.slice(1))
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      closeMenu()
    }
  }

  return (
    <div className="md:hidden">
     {/*  <button onClick={toggleMenu} className="fixed top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-full">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button> */}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-90 z-40 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="flex items-center text-white hover:text-blue-400"
              >
                <div className="bg-gray-800 p-3 rounded-full mr-3">
                  <item.icon size={24} />
                </div>
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 flex justify-around py-2 z-30">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            className={`text-white hover:text-blue-400 p-2 ${
              activeSection === item.href.slice(1) ? "text-blue-400" : ""
            }`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  )
}

