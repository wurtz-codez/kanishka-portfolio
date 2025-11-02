"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="bg-black">
      <Navigation />
      <section className="min-h-screen pt-40 pb-20 px-6 relative overflow-hidden flex items-center">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <div className="text-center">
            <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent-dark transition-all group"
              >
                Back to Home
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900/50 text-gray-300 border border-gray-800 font-semibold rounded-lg hover:bg-gray-800/50 hover:border-accent transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
