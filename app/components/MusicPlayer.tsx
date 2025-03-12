"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio on component mount
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    // Add event listeners to sync state with actual audio state
    const audio = audioRef.current

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("ended", handleEnded)

    // Cleanup function
    return () => {
      if (audio) {
        audio.pause()
        audio.removeEventListener("play", handlePlay)
        audio.removeEventListener("pause", handlePause)
        audio.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  // Toggle play/pause
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      // Pause the audio
      audioRef.current.pause()
    } else {
      // Play the audio with error handling
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error)
        setIsPlaying(false)
      })
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
      <button
        onClick={togglePlay}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  )
}

