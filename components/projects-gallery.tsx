"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function ProjectsGallery() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState("branding")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = {
    branding: {
      title: "Branding & Identity",
      description: "Complete visual identity systems",
      items: [
        {
          id: 1,
          title: "TechFlow Brand Identity",
          category: "B2B SaaS",
          description:
            "Complete visual identity for a software startup including logo, color system, and brand guidelines",
          image: "/modern-tech-brand.png",
          year: 2023,
        },
        {
          id: 2,
          title: "Luna Coffee Rebrand",
          category: "F&B",
          description: "Reimagined identity for a specialty coffee brand with premium aesthetic",
          image: "/luxury-coffee-brand-design.jpg",
          year: 2023,
        },
        {
          id: 3,
          title: "Zenith Wellness Logo",
          category: "Health & Wellness",
          description: "Minimalist logo and brand system for a meditation and wellness app",
          image: "/wellness-health-brand-design.jpg",
          year: 2022,
        },
      ],
    },
    ui_ux: {
      title: "UI/UX Design",
      description: "Digital products and interfaces",
      items: [
        {
          id: 4,
          title: "Portfolio Platform Dashboard",
          category: "Web App",
          description: "User-friendly dashboard for creative professionals to showcase their work",
          image: "/dashboard-ui-design-interface.jpg",
          year: 2024,
        },
        {
          id: 5,
          title: "Mobile Banking App",
          category: "FinTech",
          description: "Intuitive mobile interface for financial management and transactions",
          image: "/mobile-app-banking-interface.jpg",
          year: 2023,
        },
        {
          id: 6,
          title: "E-commerce Product Page",
          category: "Retail",
          description: "High-converting product page design with focus on user experience",
          image: "/ecommerce-product-page.png",
          year: 2023,
        },
      ],
    },
    print: {
      title: "Print & Packaging",
      description: "Physical design and materials",
      items: [
        {
          id: 7,
          title: "Magazine Editorial Layout",
          category: "Publishing",
          description: "Modern editorial design for a contemporary design magazine",
          image: "/magazine-layout-design-editorial.jpg",
          year: 2023,
        },
        {
          id: 8,
          title: "Product Packaging Series",
          category: "Consumer Goods",
          description: "Cohesive packaging design for a premium cosmetics product line",
          image: "/product-packaging-design-luxury.jpg",
          year: 2022,
        },
        {
          id: 9,
          title: "Business Collateral",
          category: "Corporate",
          description: "Complete set of business cards, letterheads, and branded materials",
          image: "/business-stationery.png",
          year: 2023,
        },
      ],
    },
    illustration: {
      title: "Illustration & Art",
      description: "Original artwork and illustrations",
      items: [
        {
          id: 10,
          title: "Character Design Series",
          category: "Digital Art",
          description: "Custom character illustrations for a children's educational app",
          image: "/character-illustration-design-art.jpg",
          year: 2023,
        },
        {
          id: 11,
          title: "Editorial Illustrations",
          category: "Journalism",
          description: "Series of illustrations for digital articles and blog posts",
          image: "/editorial-illustration-concept-art.jpg",
          year: 2024,
        },
        {
          id: 12,
          title: "Icon System Design",
          category: "Design Systems",
          description: "Comprehensive icon set for UI applications and brand use",
          image: "/icon-design-system-vector.jpg",
          year: 2023,
        },
      ],
    },
    motion: {
      title: "Motion & Animation",
      description: "Dynamic and animated experiences",
      items: [
        {
          id: 13,
          title: "Brand Animation Reel",
          category: "Motion Graphics",
          description: "Animated brand presentation showcasing identity and values",
          image: "/motion-graphics-animation-design.jpg",
          year: 2024,
        },
        {
          id: 14,
          title: "UI Micro-interactions",
          category: "Interactive Design",
          description: "Smooth transitions and micro-interactions for web application",
          image: "/interface-animation-interaction.jpg",
          year: 2023,
        },
        {
          id: 15,
          title: "Loading State Animation",
          category: "Interactive Design",
          description: "Engaging loading screens and transition animations",
          image: "/loading-animation-interface.jpg",
          year: 2023,
        },
      ],
    },
  }

  const categories = Object.keys(projects).map((key) => ({
    id: key,
    title: projects[key as keyof typeof projects].title,
  }))

  const currentProjects = projects[activeCategory as keyof typeof projects]

  return (
    <section className="min-h-screen pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-2 leading-tight">
            Selected
            <br />
            <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            A curated selection of work spanning branding, UI/UX, print, illustration, and motion design.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-accent text-black"
                    : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-800"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.items.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  transitionDelay: isLoaded ? `${400 + index * 50}ms` : "0ms",
                }}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-accent/50 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-accent text-xs font-bold uppercase">{project.category}</span>
                        <h3 className="text-lg font-bold text-white mt-2">{project.title}</h3>
                      </div>
                      <span className="text-gray-500 text-sm font-medium">{project.year}</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>

                    {/* View Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs uppercase tracking-widest">View Project</span>
                      <ArrowUpRight
                        size={18}
                        className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 bg-gradient-to-r from-accent/5 to-transparent border border-gray-800 rounded-lg p-8 md:p-12 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Want to work together?</h3>
              <p className="text-gray-400">Let's discuss your next project and create something amazing.</p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
