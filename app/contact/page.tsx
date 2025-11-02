"use client"

import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <main className="bg-black">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
