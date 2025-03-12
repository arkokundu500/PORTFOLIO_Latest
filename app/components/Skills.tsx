"use client"

import { motion } from "framer-motion"
import Section from "./Section"

const skills = [
  { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "React.js", level: 80, color: "bg-blue-500" },
  { name: "Next.js", level: 75, color: "bg-white" },
  { name: "ML/AI", level: 85, color: "bg-red-500" },
  { name: "Python", level: 85, color: "bg-teal-500" },
  { name: "TypeScript", level: 80, color: "bg-blue-600" },
  { name: "Node.js", level: 65, color: "bg-green-600" },
  { name: "Mongo DB", level: 75, color: "bg-purple-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
  { name: "MY SQL", level: 85, color: "bg-orange-500" },
  { name: "Streamlit", level: 80, color: "bg-teal-500" }
]

const technologies = [
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "Numpy",
  "Pandas",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Matplotlib",
  "Firebase",
  "Tensorflow",
  "Keras",
  "Scikit-learn",
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills" className="bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                className="bg-gray-800 px-4 py-2 rounded-full shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {["Rapport Building", "People Management", "Teamwork", "Excellent Communication", "Time Management", "Adaptability", "Creativity"].map(
              (skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>{skill}</span>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

