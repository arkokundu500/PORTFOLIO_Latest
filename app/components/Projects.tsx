"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Section from "./Section"
const projects = [
  {
    id: 1,
    title: "Intervak - Remote Interview Platform",
    description: "A fully working platform which helps interviewers to meet with the candidates through Video Calling.",
    image: "/intervak.png",
    tags: ["React","Next.js", "Tailwind CSS", "Convex DB", "TypeScript", "Responsive Design", "Clerk", "Stream API", "Web Development"],
    liveLink: "https://intervak-arkokundu2025.vercel.app/",
    githubLink: "https://github.com/arkokundu500/Intervak",
  },
  {
    id: 2,
    title: "Educational Chatbot",
    description: "An interactive chatbot that helps users with educational queries and help the students to solve their problems.",
    image: "/chatbot.jpg",
    tags: ["Gemini 2.0 Flash", "Custom Database", "Machine Learning", "Streamlit"],
    liveLink: "https://edugenius-ai-powered-educational-assistant-8pksgk6hpmewf4tcph6.streamlit.app/",
    githubLink: "https://github.com/arkokundu500/EduGenius-AI-Powered-Educational-Assistant",
  },
  {
    id: 3,
    title: "Plant Disease Detection",
    description: "A machine learning model that detects plant diseases using images.",
    image: "/plant disease.jpg",
    tags: ["JavaScript", "Machine Learning", "Matplotlib","Pandas","Seaborn", "OpenCV"],
    liveLink: "#",
    githubLink: "https://github.com/arkokundu500/Plant_Disease_Prediction",
  },
  {
    id: 4,
    title: "Virtual Labs - Educational Platform",
    description: "A platform that provides virtual labs for the students to perform experiments. It is a group project done during Felicity Hackathon of IIIT Hyderabad.",
    image: "/V Labs.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript","Responsive Design", "Web Development"],
    liveLink: "https://vlabs-2025-sr.vercel.app/",
    githubLink: "https://github.com/arkokundu500/VirtualLabs",
  },
  {
    id: 9,
    title: "Course Display Platform",
    description: "A full-featured online website having display of courses with course selecting features and Authentication System using Firebase and custom Login.",
    image: "/coming.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS","JWT","Swiper JS","Headless UI", "Web Development"],
    liveLink: "#",
    githubLink: "https://github.com/arkokundu500/Mern-Project-1",
  },
  {
    id: 5,
    title: "Messaging Application",
    description: "A messaging application that allows users to send messages to each other on a serverless platform.",
    image: "/Message.png",
    tags: ["React", "Tailwind CSS", "Strapi","Headless CMS" ,"Responsive Design", "Web Development"],
    liveLink: "https://github.com/arkokundu500/Messaging-Application",
    githubLink: "https://github.com/arkokundu500/Messaging-Application",
  },
  {
    id: 6,
    title: "Text to SQL - Gemini Pro",
    description: "A machine learning model that converts natural language queries to SQL queries through Large Language Model.",
    image: "/text_sql.png",
    tags: ["Python", "Machine Learning", "Hugging Face","SQ Lite"],
    liveLink: "https://huggingface.co/spaces/arkokundu500/Text_to_SQL_GenAI",
    githubLink: "https://github.com/arkokundu500/LLM-Application-on-custom-dataset",
  },
  {
    id: 7,
    title: "Typing Speed Test",
    description: "A typing speed test application to measure how fast you can type and measure the accuracy.",
    image: "/type_test.png",
    tags: ["HTML/CSS", "Javascript","Responsive Design", "Web Development"],
    liveLink: "https://type-test-arko500.netlify.app/",
    githubLink: "https://type-test-arko500.netlify.app/",
  },
  {
    id: 8,
    title: "Virtual Assistant - Jarvis",
    description: "A virtual assistant application that helps users to provide information and perform tasks through voice commands.Try saying -> Open google, Open Instagram, Play Come and Get your Love, Isaac Newton Wikipedia",
    image: "/jarvis.png",
    tags: ["HTML/CSS","JavaScript","Voice command", "Web Development"],
    liveLink: "https://jarvis-va.netlify.app/",
    githubLink: "https://jarvis-va.netlify.app/",
  },
  
]

const categories = ["All", "Web Development","Machine Learning"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.tags.includes(activeCategory))

  return (
    <Section id="projects" title="Projects" className="bg-gray-800">
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 md:h-64">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Github size={16} className="mr-1" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

