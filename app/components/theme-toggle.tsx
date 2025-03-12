"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-16 rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 32 : 0,
          backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {theme === "dark" ? (
          <Moon size={14} className="text-yellow-300" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  )
}

