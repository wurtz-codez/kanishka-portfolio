"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ExplorationSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: explorationTitleRef, transform: explorationTitleTransform, opacity: explorationTitleOpacity } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  const explorationThemes = [
    {
      icon: "🎨",
      title: "Visual Experimentation",
      description: "Pushing the boundaries of color, form, and composition",
    },
    {
      icon: "⚡",
      title: "Interactive Exploration",
      description: "Dynamic, engaging experiences that respond to user input",
    },
    {
      icon: "🔬",
      title: "Design Research",
      description: "Deep dives into design principles and methodologies",
    },
  ]

  return (
    <section className="min-h-screen pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Experimentation</span>
          <h2 
            ref={explorationTitleRef}
            className="text-5xl md:text-6xl font-bold mt-2 leading-tight transition-all duration-500 ease-out"
            style={{ transform: `translateY(${explorationTitleTransform}px)`, opacity: explorationTitleOpacity }}
          >
            Exploration &
            <br />
            <span className="text-accent">Personal Work</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            A collection of experimental projects, side projects, and research exploring the frontiers of design and
            creative technology.
          </p>
        </div>

        {/* Themes Grid */}
        <div
          className={`mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {explorationThemes.map((theme, index) => (
            <button
              key={theme.title}
              onClick={() => {
                // Add your click handler here
                console.log(`Clicked on ${theme.title}`)
              }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-lg p-6 border border-gray-800 hover:border-accent/50 hover:bg-gray-900/70 transition-all duration-300 text-left cursor-pointer w-full"
              style={{
                transitionDelay: isLoaded ? `${300 + index * 50}ms` : "0ms",
              }}
            >
              <div className="text-3xl mb-3">{theme.icon}</div>
              <h3 className="font-semibold text-white mb-2">{theme.title}</h3>
              <p className="text-gray-400 text-sm">{theme.description}</p>
            </button>
          ))}
        </div>

        {/* Research & Learning */}
        <div
          className={`mt-16 bg-gradient-to-r from-accent/5 to-transparent border border-gray-800 rounded-lg p-8 md:p-12 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-gray-400">
            I believe continuous learning and experimentation are essential to staying at the forefront of design. These
            explorations allow me to test new tools, methodologies, and ideas that directly influence my professional
            work.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Interested in collaborating on experimental projects?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300"
          >
            Let's Experiment Together
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
