"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const { ref: nameRef, transform: nameTransform, opacity: nameOpacity } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        // Hide when contact section enters viewport
        setShowScrollIndicator(rect.top > window.innerHeight)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className="min-h-screen pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Greeting */}
          <div className={`mb-8 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <p className="text-sm text-gray-400 uppercase tracking-widest">Hey There!</p>
          </div>

          {/* Main Headline */}
          <div className={`mb-8 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <h1 
              ref={nameRef}
              className="text-7xl md:text-8xl font-bold leading-tight mb-4 transition-all duration-500 ease-out"
              style={{ transform: `translateY(${nameTransform}px)`, opacity: nameOpacity }}
            >
              Kanishka
              <br />
              <span className="text-accent">Pande</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
              A curious designer who loves discovering what makes a design truly unique
            </p>
          </div>

          {/* Description & CTA */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed">
              Designing is like storytelling. I find the essence of an idea and shape it visually through story, concept,
              form, color, and typography.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover-accent transition-all group hover:bg-accent-dark"
            >
              Let's Talk{" "}
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed Scroll Indicator */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isLoaded && showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </>
  )
}
