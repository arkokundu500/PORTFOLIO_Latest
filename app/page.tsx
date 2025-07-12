"use client"

import { useState } from "react";
import ProfilePhoto from "./components/ProfilePhoto"; // Assuming these component paths are correct
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import TextScramble from "./components/TextScramble";
import WaveAnimation from "./components/WaveAnimation";
import MusicPlayer from "./components/MusicPlayer";
import SplashScreen from "./components/SplashScreen";
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const developerRoles = ["Web Dev", "ML/AI Dev", "Backend Dev", "Python Dev", "Cloud Dev"];

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // --- Define your social links here ---
  // --- IMPORTANT: Replace these placeholder URLs with your actual profile links ---
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/arkokundu5000/',
    github: 'https://github.com/arkokundu500',
    instagram: 'https://www.instagram.com/itss__arko/',
    x: 'https://x.com/ArkoKundu10' // Formerly Twitter
  };
  // --- End of social links ---

  return (
    <>
      {/* Show splash screen initially */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Render main content only after splash screen is complete */}
      
        <div className="bg-gray-900 text-white">
          {/* Home Section */}
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
                  href="https://drive.google.com/file/d/1drCRDMg3eUXmW1DLUL9cEMNRAQDrasap/view?usp=drive_linkt" // Ensure this link is correct
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full inline-block transition duration-300" // Added transition
                >
                  My Resume
                </a>
              </div>
            </div>
          </section>

          {/* Other Sections */}
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />

          {/* Visual Elements */}
          <WaveAnimation />

          {/* Footer Section */}
<footer className="bg-black text-white py-8 text-center relative z-10">
  <div className="max-w-6xl mx-auto px-4">

    {/* Flex Container for Images + Content */}
    <div className="flex items-center justify-between flex-wrap gap-4 relative">
      
      {/* Left Image */}
      <div className="flex-shrink-0">
        <img
          src="bat-l.png" // Replace with your left image path
          alt="Left Decorative"
          className="w-45 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Centered Content */}
      <div className="text-center flex-grow min-w-full md:min-w-0">
        
        {/* Social Icons Container */}
        <div className="flex justify-center space-x-5 mb-6">
          <SocialIcon
            url={socialLinks.linkedin}
            network="linkedin"
            style={{ height: 35, width: 35 }}
            fgColor="white"
            bgColor="transparent"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url={socialLinks.github}
            network="github"
            style={{ height: 35, width: 35 }}
            fgColor="white"
            bgColor="transparent"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url={socialLinks.instagram}
            network="instagram"
            style={{ height: 35, width: 35 }}
            fgColor="white"
            bgColor="transparent"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url={socialLinks.x}
            network="x"
            style={{ height: 35, width: 35 }}
            fgColor="white"
            bgColor="transparent"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        {/* End Social Icons Container */}

        {/* Copyright Text */}
        <p>© {new Date().getFullYear()} Arko Kundu. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Made with ❤️ using Next.js and Tailwind CSS.</p>
        <p className="mt-2 text-gray-400 italic">There are things you cannot change, but you can change your perspective.</p>
        <p className="mt-2 text-gray-400">Do not forget to play the music button at the horizon.</p>
        {/* End Footer Text */}
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img
          src="/bat-r.png" // Replace with your right image path
          alt="Right Decorative"
          className="w-45 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
    {/* End Flex Container */}

  </div>
</footer>
          {/* End Footer Section */}

          {/* Music Player */}
          <MusicPlayer />

        </div>
      {/* End conditional rendering block */}
    </>
  );
}
