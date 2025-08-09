/* import { GraduationCap, Briefcase } from "lucide-react"
import Section from "./Section"

export default function AboutMe() {
  return (
    <Section id="about" title="About Me ">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed ">
            Hello! I am a passionate developer with a strong foundation in web development and a keen interest in Machine Learning and Artificial Intelligence.
            I also solve DSA problems and compete in coding competitions on platforms like GeeksforGeeks and LeetCode.
            I also participate in Kaggle competitions and have a good understanding of the ML/AI concepts.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in tech began with a curiosity about how websites work, which led me to explore various
            programming languages and frameworks. I am constantly learning and expanding my skill set to stay current
            with the latest technologies and best practices, along with advancements in the ML/AI domain.
          </p>
          <p className="text-lg leading-relaxed">
            When I am not coding, you can find me exploring nature, reading tech blogs, or experimenting with new recipes
            in the kitchen.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Experience</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1">
                <Briefcase className="text-blue-600 " size={20} />
              </div>
              <div>
                <h4 className="font-semibold">AI Intern</h4>
                <p className="text-gray-400 ">LanguifyAI | November 24 - December 24</p>
                <p className="text-gray-300 ">Developed a robust Automatic Speech Recognition (ASR) model capable of transcribing audio to text with accuracy of 
                98%.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <Briefcase className="text-blue-600 " size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Campus Ambassador</h4>
                <p className="text-gray-400 ">GeeksforGeeks | 2024 - Present</p>
                <p className="text-gray-300 ">Facilitated 2 + coding events in Data Structures and Algorithms and Postman Application Programming Interface where more 
                than 150 people attended and obtained 80% success on it. </p>
              </div>
            </div>
            <img
            src="/dev-space.png" // Replace with the actual path to the image
            alt="Developer Workspace"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <GraduationCap className="text-blue-600 " size={20} />
              </div>
              <div>
                <h4 className="font-semibold">B.Tech in Electronics and Communication Engineering</h4>
                <p className="text-gray-400 ">Kalyani Government Engineering College | 2023 - 2026</p>
                <p className="text-gray-300 ">Pursuing this course with a strong attention in electronics field and robotics.</p>
                <p className="text-black-200 font-light">CGPA:7.05</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Diploma in Computer and Science Technology</h4>
                <p className="text-gray-400">Calcutta Technical School | 2020 - 2023</p>
                <p className="text-gray-300 dark:text-gray-300">Graduated with diploma, focus on computer science with a good grade.</p>
                <p className="text-black-200 font-light">CGPA:8.75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

 */

import { GraduationCap, Briefcase } from "lucide-react";
import Section from "./Section";

export default function AboutMe() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-4">
        
          <img
            src="/dev-space.png" // Replace with the actual path to the image
            alt="Developer Workspace"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <p className="text-lg leading-relaxed">
            Hello! I am a passionate developer with a strong foundation in web development and a keen interest in Machine Learning and Artificial Intelligence.
            I also solve DSA problems and compete in coding competitions on platforms like GeeksforGeeks and LeetCode.
            I also participate in Kaggle competitions and have a good understanding of the ML/AI concepts.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in tech began with a curiosity about how websites work, which led me to explore various
            programming languages and frameworks. I am constantly learning and expanding my skill set to stay current
            with the latest technologies and best practices, along with advancements in the ML/AI domain.
          </p>
          <p className="text-lg leading-relaxed">
            When I am not coding, you can find me exploring nature, reading tech blogs, or experimenting with new recipes
            in the kitchen.
          </p>
        </div>

        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Experience</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Summer Intern</h4>
                <p className="text-gray-400">Airports Authority of India | July 25</p>
                <p className="text-gray-300">
                  Gained comprehensive knowledge of Communication, Navigation, and Surveillance (CNS) systems critical to airport operations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">AI Intern</h4>
                <p className="text-gray-400">LanguifyAI | November 24 - December 24</p>
                <p className="text-gray-300">
                  Developed a robust Automatic Speech Recognition (ASR) model capable of transcribing audio to text with accuracy of 
                  98%.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Campus Ambassador</h4>
                <p className="text-gray-400">GeeksforGeeks | 2024 - Present</p>
                <p className="text-gray-300">
                  Facilitated 2 + coding events in Data Structures and Algorithms and Postman Application Programming Interface where more 
                  than 150 people attended and obtained 80% success on it.
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">B.Tech in Electronics and Communication Engineering</h4>
                <p className="text-gray-400">Kalyani Government Engineering College | 2023 - 2026</p>
                <p className="text-gray-300">Pursuing this course with a strong attention in electronics field and robotics.</p>
                <p className="text-black-200 font-light">CGPA: 7.05</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4 mt-1">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Diploma in Computer and Science Technology</h4>
                <p className="text-gray-400">Calcutta Technical School | 2020 - 2023</p>
                <p className="text-gray-300 dark:text-gray-300">Graduated with diploma, focus on computer science with a good grade.</p>
                <p className="text-black-200 font-light">CGPA: 8.75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}