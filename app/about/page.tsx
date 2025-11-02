"use client"

import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="bg-black">
      <Navigation />
      <AboutSection />
      <Footer />
    </main>
  )
}
