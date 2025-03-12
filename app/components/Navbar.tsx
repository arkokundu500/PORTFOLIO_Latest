"use client"

import { Home, User, Code, Briefcase, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About Me", href: "#about" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact Me", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100 // Offset for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= scrollPosition && bottom > scrollPosition) {
            setActiveSection(section)
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
    }
  }

  return (
    <nav className="fixed left-0 top-0 h-full w-24 bg-gray-950 hidden md:flex flex-col items-center justify-center space-y-8 z-50">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleClick(item.href)}
          className={`flex flex-col items-center text-white hover:text-blue-400 ${
            activeSection === item.href.slice(1) ? "text-blue-400" : ""
          }`}
        >
          <div
            className={`bg-gray-800 p-3 rounded-full hover:bg-gray-700 ${
              activeSection === item.href.slice(1) ? "bg-blue-600 hover:bg-blue-700" : ""
            }`}
          >
            <item.icon size={24} />
          </div>
          <span className="text-xs mt-2">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

