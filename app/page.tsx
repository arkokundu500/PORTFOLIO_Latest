"use client"

import { useState } from "react"
import ProfilePhoto from "./components/ProfilePhoto"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
import TextScramble from "./components/TextScramble"
import WaveAnimation from "./components/WaveAnimation"
import MusicPlayer from "./components/MusicPlayer"
import SplashScreen from "./components/SplashScreen"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const developerRoles = ["Web Dev", "ML/AI Dev", "Backend Dev", "Python Dev", "Cloud Dev"]

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div className="bg-gray-900 text-white">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I am <span className="text-blue-400">Arko Kundu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 flex flex-wrap justify-center items-center gap-2">
              <span>Call me a - </span>
              <TextScramble texts={developerRoles} className="text-blue-400 font-semibold" />
            </p>
            <ProfilePhoto />
            <div className="mt-12">
              <a
                href="https://drive.google.com/file/d/16D-wli2J50cufAgx3tDFzH2OnO--D6mJ/view?usp=drive_linkt"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full inline-block"
              >
                My Resume
              </a>
            </div>
          </div>
        </section>

        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />

        <WaveAnimation />

        <footer className="bg-black text-white py-8 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Arko Kundu. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Made with ❤️ using Next.js and Tailwind CSS.</p>
            <p className="mt-2 text-gray-400 italic">There are things you cannot change, but you can change your perspective.</p>
            <p className="mt-2 text-gray-400">Do not forget to play the music button at the horizon.</p>
          </div>
        </footer>

        <MusicPlayer />
      </div>
    </>
  )
}

