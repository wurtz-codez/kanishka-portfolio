"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeaturedProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: titleRef, transform: titleTransform, opacity: titleOpacity } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const project = {
    title: "Navjivan Press",
    subtitle: "Brand identity redesign",
    description:
      "A comprehensive identity refresh for Navjivan Press, a printing and publication house. The case study covers research, typography exploration, layout systems, and a modernized visual language tailored for print-driven storytelling.",
    pdf: "/project-1.pdf",
    meta: ["2024", "Brand Identity", "PDF"],
  }

  return (
    <section className="min-h-screen pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
         <div className={`mb-8 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mt-2 leading-tight transition-all duration-500 ease-out"
            style={{ transform: `translateY(${titleTransform}px)`, opacity: titleOpacity }}
          >
            Featured
            <br />
            <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            See how these skills come to life in real-world projects and designs.
          </p>
        </div>

        {/* Featured PDF */}
        <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-900/30 p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {project.meta.map((item) => (
                  <span
                    key={item}
                    className="text-xs uppercase tracking-[0.25em] text-gray-400 border border-gray-800 rounded-full px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{project.title}</h3>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mt-3">{project.subtitle}</p>
              <p className="text-gray-400 text-base mt-6 max-w-xl">{project.description}</p>
              <div className="mt-10 flex items-center gap-4">
                <span className="text-gray-500 text-xs uppercase tracking-[0.4em]">Scroll to explore</span>
                <div className="h-px flex-1 bg-gradient-to-r from-accent/80 to-transparent"></div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950/70 overflow-hidden">
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-500">
                  <span>Embedded PDF</span>
                  <span>Scrollable</span>
                </div>
              </div>
              <div className="mt-4 px-4 pb-6">
                <div className="rounded-xl border border-gray-800 bg-black/40 overflow-hidden">
                  <div className="max-h-[70vh] md:max-h-[680px] overflow-y-auto">
                    <iframe
                      src={project.pdf}
                      title="Project PDF"
                      className="w-full h-[70vh] md:h-[680px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
