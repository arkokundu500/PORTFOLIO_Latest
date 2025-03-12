"use client"

import { useEffect, useRef } from "react"

export default function WaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = 150
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Wave properties
    const waves = [
      {
        color: "rgba(32, 107, 162, 0.4)",
        amplitude: 20,
        frequency: 0.02,
        speed: 0.04,
        offset: 0,
      },
      {
        color: "rgba(59, 130, 246, 0.3)",
        amplitude: 15,
        frequency: 0.03,
        speed: 0.03,
        offset: 0,
      },
      {
        color: "rgba(96, 165, 250, 0.2)",
        amplitude: 25,
        frequency: 0.01,
        speed: 0.02,
        offset: 0,
      },
    ]

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        // Update wave offset for animation
        wave.offset += wave.speed

        // Draw wave
        ctx.fillStyle = wave.color
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * wave.frequency + wave.offset) * wave.amplitude + canvas.height / 2
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-[150px]" aria-hidden="true" />
    </div>
  )
}

