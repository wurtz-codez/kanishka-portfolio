import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Kanishka's Portfolio",
  description: "Exploring the essence of design through storytelling, concept, form, color, and typography",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
