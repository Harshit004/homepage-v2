'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[120px] pt-[30px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/df470715-8b49-4d9d-b83b-7249a328b100/public" 
              alt="WAE Logo" 
              width={144} 
              height={56}
              className="mb-[20px]"
            />
          </Link>

          {/* Center Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/company" className="nav-link">Company</Link>
            <Link href="/products" className="nav-link">Product & Solutions</Link>
            <Link href="/news" className="nav-link">News & Updates</Link>
          </nav>

          {/* Right Navigation */}
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </header>
  )
} 