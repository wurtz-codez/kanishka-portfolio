"use client"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ArrowLeft } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const router = useRouter()
  
  // Check if we're on the home page (single page sections) or a separate page
  const isHomePage = pathname === "/"

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const links = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "exploration", label: "EXPLORATION" },
    { id: "contact", label: "CONTACT" },
  ]

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      // If no history, go to home
      router.push("/")
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {!isHomePage && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </button>
          )}
        <button
            onClick={() => isHomePage ? handleNavClick("home") : router.push("/")}
          className="text-2xl font-bold text-accent hover-accent transition-colors cursor-pointer"
        >
          KP.
        </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id ? "text-accent" : "text-gray-300 hover:text-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-accent hover-accent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-900">
          <div className="flex flex-col gap-4 px-6 py-4">
            {!isHomePage && (
              <button
                onClick={() => {
                  handleBack()
                  setIsOpen(false)
                }}
                className="flex items-center gap-2 text-sm font-medium text-left text-gray-300 hover:text-accent transition-colors duration-300"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            )}
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => isHomePage ? handleNavClick(link.id) : router.push(`/#${link.id}`)}
                className={`text-sm font-medium text-left transition-colors duration-300 ${
                  activeSection === link.id ? "text-accent" : "text-gray-300 hover:text-accent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
