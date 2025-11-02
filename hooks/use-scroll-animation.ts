"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(80) // Start with higher initial value
  const [opacity, setOpacity] = useState(0.3) // Start with low opacity

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how far into viewport the element is
      const elementTop = rect.top
      
      // Calculate scroll progress (0 to 1)
      // Start animation earlier and make it more prominent
      const startPoint = windowHeight * 1.2 // Start animation well before element enters view
      const endPoint = windowHeight * 0.3 // End when element is 30% from top
      
      let progress = 0
      if (elementTop < startPoint && elementTop > endPoint) {
        // Element is in the animation zone
        progress = (startPoint - elementTop) / (startPoint - endPoint)
        progress = Math.max(0, Math.min(1, progress)) // Clamp between 0 and 1
        // Use ease-out curve for smoother animation
        progress = 1 - Math.pow(1 - progress, 3)
      } else if (elementTop <= endPoint) {
        // Element has passed the end point
        progress = 1
      }

      // Apply transform: move from bottom (translateY(80px)) to top (translateY(0))
      // Increased from 30px to 80px for more noticeable effect
      const translateY = 80 - (progress * 80) // 80px to 0px
      setTransform(translateY)

      // Apply opacity: fade from 0.3 to 1.0
      const opacityValue = 0.3 + (progress * 0.7) // 0.3 to 1.0
      setOpacity(opacityValue)
    }

    // Initial check
    handleScroll()

    // Throttle scroll events for performance
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollHandler, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return { ref, transform, opacity }
}

