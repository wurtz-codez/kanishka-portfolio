"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Mail, MapPin, Linkedin, Instagram, Send, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Behance Icon Component - Using PNG image
const Behance = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <img
    src="/behance-icon.png"
    alt="Behance"
    width={size}
    height={size}
    className={className}
    style={{ width: size, height: size, display: 'block' }}
  />
)

export function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { ref: contactTitleRef, transform: contactTitleTransform, opacity: contactTitleOpacity } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@kanishkapande.com",
      href: "mailto:hello@kanishkapande.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Based in New York, USA",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-500" },
    { icon: Behance, label: "Behance", href: "https://behance.net", color: "hover:text-blue-400" },
  ]

  return (
    <section id="contact" className="min-h-screen pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 
            ref={contactTitleRef}
            className="text-5xl md:text-6xl font-bold mt-2 leading-tight transition-all duration-500 ease-out"
            style={{ transform: `translateY(${contactTitleTransform}px)`, opacity: contactTitleOpacity }}
          >
            Let's Work
            <br />
            <span className="text-accent">Together</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hello, feel free to reach out!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={method.label}
                href={method.href}
                className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-lg p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300 group"
                style={{
                  transitionDelay: isLoaded ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{method.label}</p>
                    <p className="text-white font-semibold mt-1 group-hover:text-accent transition-colors">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div
          className={`bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-lg p-8 md:p-12 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>

          {submitted && (
            <div className="mb-8 p-4 bg-accent/10 border border-accent/30 rounded-lg flex items-start gap-3">
              <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-accent font-semibold">Message sent successfully!</p>
                <p className="text-gray-400 text-sm">I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project or ideas..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-400 mb-6">Or find me on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:bg-gray-800/50 hover:border-accent transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Closing Message */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-accent/5 to-transparent border border-gray-800 rounded-lg p-8">
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need a brand identity, website design, or simply want to discuss creative ideas, I'm here to
              help. Let's create something meaningful together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
