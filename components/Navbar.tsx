'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import _ from 'lodash' // Import lodash

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false) // Controls background change

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 20) {
        setIsVisible(false); // Hide navbar on downward scroll
      } else if (currentScrollY < lastScrollY - 20) {
        setIsVisible(true); // Show navbar on upward scroll
      }
      
      setLastScrollY(currentScrollY);

      // Change background only after scrolling down
      setIsScrolled(currentScrollY > 50);
    }, 150); // Throttle for better performance

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white bg-opacity-0 shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-[1440px] mx-auto px-[120px] pt-[20px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/df470715-8b49-4d9d-b83b-7249a328b100/public" 
              alt="WAE Logo" 
              width={144} 
              height={56}
              className="mb-[10px]"
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
