"use client"

import { useState, useEffect, useRef } from "react"

interface TextScrambleProps {
  texts: string[]
  className?: string
}

export default function TextScramble({ texts, className = "" }: TextScrambleProps) {
  const [currentText, setCurrentText] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const currentIndexRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Characters to use for scrambling effect
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    const next = () => {
      currentIndexRef.current = (currentIndexRef.current + 1) % texts.length
      setIsScrambling(true)
      scrambleText(texts[currentIndexRef.current])
    }

    // Start the animation
    if (!isScrambling) {
      timeoutRef.current = setTimeout(next, 3000) // Wait 3 seconds before changing text
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [texts, isScrambling])

  const scrambleText = (nextText: string) => {
    let iteration = 0
    const maxIterations = 15 // Number of iterations for the scrambling effect

    const scramble = () => {
      // Calculate how many characters should be scrambled vs. revealed
      const progress = iteration / maxIterations
      const scrambleLength = Math.floor((1 - progress) * nextText.length)
      const revealLength = nextText.length - scrambleLength

      // Build the output text
      let output = ""

      // Add revealed characters (from the target text)
      for (let i = 0; i < revealLength; i++) {
        output += nextText[i]
      }

      // Add scrambled characters
      for (let i = revealLength; i < nextText.length; i++) {
        output += chars[Math.floor(Math.random() * chars.length)]
      }

      // Update the displayed text
      setCurrentText(output)

      // Continue scrambling or finish
      if (iteration < maxIterations) {
        iteration++
        setTimeout(scramble, 50)
      } else {
        setCurrentText(nextText)
        setIsScrambling(false)
      }
    }

    scramble()
  }

  return <span className={className}>{currentText}</span>
}

