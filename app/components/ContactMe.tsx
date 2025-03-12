"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Section from "./Section"

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <Section id="contact" title="Contact Me" className="bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="mb-8 text-lg text-gray-300">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a question or
            just want to say hello!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-900 p-3 rounded-full mr-4">
                <Mail className="text-blue-300" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:arkokundu500@gmail.com" className="text-blue-400 hover:underline">
                  arkokundu500@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-900 p-3 rounded-full mr-4">
                <Phone className="text-blue-300" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+91 7439817750" className="text-blue-400 hover:underline">
                  +91 7439817750
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-900 p-3 rounded-full mr-4">
                <MapPin className="text-blue-300" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-300">Kolkata,West Bengal,India</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-800 border-gray-600 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send size={16} className="mr-2" />
                  Send Message
                </span>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div
                className="bg-green-900 border border-green-700 text-green-300 px-4 py-3 rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                There was an error sending your message. Please try again later.
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </Section>
  )
}

