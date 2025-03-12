"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null
    const root = document.documentElement

    if (storedTheme) {
      setTheme(storedTheme)
      root.classList.add(storedTheme)
    } else {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemPreference)
      root.classList.add(systemPreference)
    }

    // Add transition class after initial render
    setTimeout(() => {
      root.classList.add("transition-colors")
    }, 100)
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light"
      const root = document.documentElement
      
      root.classList.remove("light", "dark")
      root.classList.add(newTheme)
      localStorage.setItem("theme", newTheme)

      return newTheme
    })
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}