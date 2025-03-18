"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  // Colors from the website
  const darkBg = "#111827" // bg-gray-900
  const darkerBg = "#0A0F1A" // bg-gray-950
  const blueAccent = "#2563EB" // bg-blue-600

  // Create a grid of 10x6 for the checkboard
  const gridSize = { x: 10, y: 6 }
  const cells = []

  for (let y = 0; y < gridSize.y; y++) {
    for (let x = 0; x < gridSize.x; x++) {
      cells.push({ x, y })
    }
  }

  // Calculate delay for each cell based on its position
  const getDelay = (x: number, y: number) => {
    // This creates a wave effect from left to right with slight variation by row
    return x * 0.05 + y * 0.01
  }

  // Automatically trigger completion after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 4000) // Total animation duration

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: darkBg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      {/* Checkboard grid */}
      <div
        className="absolute inset-0 grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${gridSize.x}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.y}, 1fr)`,
        }}
      >
        {cells.map((cell, index) => (
          <motion.div
            key={index}
            className="w-full h-full"
            style={{
              backgroundColor: (cell.x + cell.y) % 2 === 0 ? darkerBg : blueAccent,
              originX: 0,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: getDelay(cell.x, cell.y),
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Animated circle background */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle, ${blueAccent}40 0%, ${darkBg}00 70%)`,
            width: "150vw",
            height: "150vw",
            maxWidth: "1000px",
            maxHeight: "1000px",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        />

        {/* Name with color changing animation */}
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter"
            animate={{
              color: [
                "#FFFFFF", // white
                "#60A5FA", // blue-400
                "#3B82F6", // blue-500
                "#2563EB", // blue-600
                "#FFFFFF", // back to white
              ],
            }}
            transition={{
              duration: 2.5,
              delay: 1.5,
              ease: "easeInOut",
              repeat: 0,
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            Welcome to my Portfolio
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="h-1.5 bg-blue-600 mx-auto mt-3"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 2, duration: 0.8 }}
          />

          {/* Subtitle with fade in effect */}
          <motion.p
            className="mt-6 text-gray-300 text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          >
            Let me show you around
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 180 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <div className="w-full h-full border-t-4 border-r-4 border-blue-400 rounded-tr-3xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 md:w-32 md:h-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 180 }}
        transition={{ delay: 2.2, duration: 1.5 }}
      >
        <div className="w-full h-full border-b-4 border-l-4 border-blue-400 rounded-bl-3xl" />
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <div className="text-gray-400 text-sm mr-2">Loading</div>
        <div className="flex space-x-1">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: dot * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

