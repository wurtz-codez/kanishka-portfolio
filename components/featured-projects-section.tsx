"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeaturedProjectsSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: titleRef, transform: titleTransform, opacity: titleOpacity } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredProjects = [
    {
      id: 1,
      title: "TechFlow Brand Identity",
      category: "B2B SaaS",
      description: "Complete visual identity for a software startup including logo, color system, and brand guidelines",
      image: "/modern-tech-brand.png",
      year: 2023,
    },
    {
      id: 2,
      title: "Portfolio Platform Dashboard",
      category: "Web App",
      description: "User-friendly dashboard for creative professionals to showcase their work",
      image: "/dashboard-ui-design-interface.jpg",
      year: 2024,
    },
    {
      id: 3,
      title: "Luna Coffee Rebrand",
      category: "F&B",
      description: "Reimagined identity for a specialty coffee brand with premium aesthetic",
      image: "/luxury-coffee-brand-design.jpg",
      year: 2023,
    },
  ]

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

        {/* Projects Grid */}
        <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-lg border border-gray-800 hover:border-accent/50 transition-all duration-500 overflow-hidden"
                style={{
                  transitionDelay: isLoaded ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-accent text-xs font-bold uppercase">{project.category}</span>
                      <h3 className="text-lg font-bold text-white mt-2">{project.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm font-medium">{project.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest">
                    View Project
                    <ArrowUpRight
                      size={16}
                      className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

