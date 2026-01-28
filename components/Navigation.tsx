'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className={`main-nav ${isScrolled ? 'bgchange' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/images/footer-logo.png"
                alt="logo image"
                className="logo-img"
                width={186}
                height={40}
              />
            </Link>
          </div>

          <div className={`ext-stl ${isMenuOpen ? 'show' : ''}`}>
            <div className="nav-items con lue circleBehind">
              <a href="#feacture-section" className="nav-link btn-111">Features</a>
              <a href="#fre-ask-question-section" className="nav-link btn-111">FAQ&apos;s</a>
              <a href="#how-it-work-section" className="nav-link btn-111">How it works</a>
            </div>
            <div>
              <a className="nav-cont-btn" href="#contact-us-section">Contact Us</a>
            </div>
          </div>
          <Image
            id="nav-toggler"
            src="/assets/images/hamburger.svg"
            alt="menu toggle"
            width={24}
            height={24}
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
        </nav>
      </div>
    </section>
  )
}
