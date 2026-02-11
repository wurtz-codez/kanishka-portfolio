"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: titleRef, transform: titleTransform, opacity: titleOpacity } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const expertise = [
    "Graphic Design",
    "Visual Identity",
    "Branding & Concept Design",
    "Typography",
    "Color Theory",
    "UI/UX Design",
    "Print & Digital",
    "Storytelling",
  ]

  return (
     <section className="min-h-screen pt-16 pb-8 px-6 relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
         <div className={`mb-8 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

          <span className="text-accent text-sm font-semibold uppercase tracking-widest">About</span>
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mt-2 leading-tight transition-all duration-500 ease-out"
            style={{ transform: `translateY(${titleTransform}px)`, opacity: titleOpacity }}
          >
            Designing with
            <br />
            Purpose & <span className="text-accent">Passion</span>
          </h2>
        </div>

        {/* Main Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-8">

          {/* Left Column - Bio */}
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-lg p-8 border border-gray-800 backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a third-year graphic design student who enjoys figuring things out through design. I like starting with an idea, questioning it, breaking it down, and slowly shaping it into something that feels clear and meaningful.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Most of my learning has come from experimenting, making mistakes, and refining my work through feedback. I'm especially interested in how design can communicate stories, emotions, and ideas in a simple but thoughtful way.
              </p>

              <p className="text-gray-400 text-base leading-relaxed">
                Right now, I'm building my portfolio and looking for internship opportunities where I can learn from real projects, collaborate with others, and grow as a designer while contributing my skills.
              </p>
            </div>
          </div>

          {/* Right Column - Expertise & CTA */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {expertise.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-800 hover:border-accent transition-colors duration-300"
                >
                  <p className="text-gray-200 text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>

            {/* Download Resume CTA */}
            <div className="space-y-4">
              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 group">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div
          className={`bg-gradient-to-r from-accent/5 to-transparent border border-gray-800 rounded-lg p-8 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">Design Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-accent font-semibold mb-2">Essence First</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I start by understanding the core idea, then shape it through visual elements that tell a compelling
                story.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-2">Form & Function</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Beauty and usability go hand in hand. Every design choice serves a purpose and enhances the user
                experience.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-2">Timeless Design</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                I aim to create work that transcends trends, remaining relevant and impactful for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
