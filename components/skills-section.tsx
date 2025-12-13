"use client"

import { useEffect, useState } from "react"
import { Figma, Palette, Zap, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SkillsSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState("design-tools")
  const { ref: skillsTitleRef, transform: skillsTitleTransform, opacity: skillsTitleOpacity } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const skillCategories = {
    "design-tools": {
      title: "Design Tools",
      icon: Figma,
      description: "Professional software and platforms I use daily",
      skills: [
        { name: "Figma", description: "UI/UX design & prototyping" },
        { name: "Adobe Illustrator", description: "Vector graphics & illustration" },
        { name: "Photoshop", description: "Image editing & manipulation" },
        { name: "InDesign", description: "Page layout & publishing" },
        { name: "Premier Pro", description: "Video editing & post-production" },
        { name: "Canva", description: "Quick design & templates" },
      ],
    },
    "design-skills": {
      title: "Design Skills",
      icon: Palette,
      description: "Core competencies in visual design",
      skills: [
        { name: "Visual Identity", level: "Expert", description: "Logo, brand guidelines, assets" },
        { name: "Typography", level: "Expert", description: "Font pairing, hierarchy, spacing" },
        { name: "Color Theory", level: "Expert", description: "Psychology, harmony, accessibility" },
        { name: "Branding", level: "Advanced", description: "Strategy, positioning, messaging" },
        { name: "UI Design", level: "Advanced", description: "Interfaces, components, systems" },
        { name: "Illustration", level: "Intermediate", description: "Digital & vector art" },
      ],
    },
    technical: {
      title: "Technical Skills",
      icon: Zap,
      description: "Technology and development knowledge",
      skills: [
        { name: "Web Design", description: "Responsive & interactive design" },
        { name: "Prototyping", description: "Interactive prototypes & animations" },
        { name: "Design Systems", description: "Component libraries & design tokens" },
        { name: "User Research", description: "Testing & feedback analysis" },
        { name: "Accessibility", description: "WCAG standards & inclusive design" },
      ],
    },
    "soft-skills": {
      title: "Soft Skills",
      icon: BookOpen,
      description: "Professional and interpersonal abilities",
      skills: [
        { name: "Communication", level: "Expert", description: "Clear briefings & presentations" },
        { name: "Collaboration", level: "Expert", description: "Team projects & client work" },
        { name: "Problem Solving", level: "Advanced", description: "Creative solutions & optimization" },
        { name: "Project Management", level: "Advanced", description: "Timeline, scope, deliverables" },
        { name: "Mentoring", level: "Intermediate", description: "Teaching & guidance" },
        { name: "Presentation", level: "Advanced", description: "Pitching & storytelling" },
      ],
    },
  }

  const categories = Object.entries(skillCategories).map(([key, value]) => ({
    id: key,
    title: value.title,
    icon: value.icon,
  }))

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories]
  const CurrentIcon = currentCategory.icon

  return (
    <section className="min-h-screen pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Skills & Tools</span>
          <h2 
            ref={skillsTitleRef}
            className="text-5xl md:text-6xl font-bold mt-2 leading-tight transition-all duration-500 ease-out"
            style={{ transform: `translateY(${skillsTitleTransform}px)`, opacity: skillsTitleOpacity }}
          >
            My Toolkit &
            <br />
            <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            A comprehensive overview of the tools, technologies, and skills I've developed over the years to bring
            designs to life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-accent text-black"
                      : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-800"
                  }`}
                >
                  <Icon size={18} />
                  {cat.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Category Content */}
        <div className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <CurrentIcon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
                <p className="text-gray-400 text-sm">{currentCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-lg p-6 border border-gray-800 hover:border-accent/50 transition-all duration-500 group cursor-default`}
                style={{
                  transitionDelay: isLoaded ? `${400 + index * 50}ms` : "0ms",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                </div>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
