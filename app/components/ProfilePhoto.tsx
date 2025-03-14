"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"


export default function ProfilePhoto() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setYOffset((prev) => (prev === 0 ? 20 : 0))
    }, 2000)

    return () => clearInterval(interval)
  }, [])



  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
      <motion.div 
      animate={{ y: yOffset }} 
      transition={{ duration: 2, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}>
        <Image
          src="/profile-pic-3.png?height=384&width=384"
          alt="Profile"
          width={384}
          height={384}
          className="rounded-full w-full h-full object-cover"
        />
      </motion.div>
      {/* {ripples.map((ripple, index) => (
        <motion.div
          key={index}
          className="absolute border-2 border-blue-500 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: `translate(-50%, -50%)`,
          }}
          initial={{ opacity: 0.7, scale: 0 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))} */}
    </div>
  )
}

