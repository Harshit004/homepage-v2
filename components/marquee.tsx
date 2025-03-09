"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
}

export default function Marquee({ children, speed = 30 }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return

    const marqueeWidth = marqueeRef.current.offsetWidth
    const contentWidth = contentRef.current.offsetWidth

    // Only animate if content is wider than container
    //if (contentWidth <= marqueeWidth) return

    let position = 0
    const pixelsPerFrame = speed / 60 // pixels per frame at 60fps

    const animate = () => {
      position -= pixelsPerFrame

      // Reset position when content has scrolled completely
      if (Math.abs(position) >= contentWidth) {
        position = 0
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translateX(${position}px)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed])

  return (
    <div className="overflow-hidden" ref={marqueeRef}>
      <div ref={contentRef} className="inline-block">
        {children}
      </div>
    </div>
  )
}

