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
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage("")

    try {
      // Create form data object
      const formDataToSend = new FormData()

      // Add the access key
      formDataToSend.append("access_key", "a9b4a022-c646-4b74-956d-f846800e5f2a")

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      // Convert to JSON
      const jsonData = JSON.stringify(Object.fromEntries(formDataToSend))

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonData,
      })

      const result = await response.json()

      if (result.success) {
        // Success
        setSubmitStatus("success")

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        // API returned an error
        setSubmitStatus("error")
        setErrorMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      // Network or other error
      setSubmitStatus("error")
      setErrorMessage("Failed to submit the form. Please check your connection and try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" title="Contact Me" className="bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="mb-8 text-lg text-gray-300">
            I am always open to new opportunities and collaborations. Feel free to reach out if you have to ask me anything or
            just want to watch a movie with me !
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
                <a href="tel:+1234567890" className="text-blue-400 hover:underline">
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
                <p className="text-gray-300">Kalyani, West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Google Maps Integration */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <div className="relative w-full h-0 pb-[75%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8813546574465!2d88.44620641117855!3d22.991389979108828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8952d71094a7f%3A0x8f1c6d3ff467d96b!2sKalyani%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742324385877!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kalyani Government Engineering College Map"
              />
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
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
                Thanks for contacting Arko Kundu. Will get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errorMessage || "There was an error sending your message. Please try again later."}
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </Section>
  )
}

