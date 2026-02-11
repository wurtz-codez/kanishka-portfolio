"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { ProjectsGallery } from "@/components/projects-gallery"
import { ExplorationSection } from "@/components/exploration-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <section id="home" data-section>
        <HeroSection />
      </section>
      <section id="about" data-section>
        <AboutSection />
      </section>
      <section id="skills" data-section>
        <SkillsSection />
      </section>
      <section id="projects" data-section>
        <FeaturedProjectsSection />
      </section>
      <section id="exploration" data-section>
        <ExplorationSection />
      </section>
      <section id="contact" data-section>
        <ContactSection />
      </section>
    </main>
  )
}
