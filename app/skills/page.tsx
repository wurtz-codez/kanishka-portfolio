"use client"

import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"

export default function Skills() {
  return (
    <main className="bg-black">
      <Navigation />
      <SkillsSection />
      <Footer />
    </main>
  )
}
