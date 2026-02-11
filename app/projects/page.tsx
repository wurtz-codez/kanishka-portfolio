"use client"

import { Navigation } from "@/components/navigation"
import { ProjectsGallery } from "@/components/projects-gallery"
import { Footer } from "@/components/footer"

export default function Projects() {
  return (
    <main>
      <Navigation />
      <ProjectsGallery />
      <Footer />
    </main>
  )
}
