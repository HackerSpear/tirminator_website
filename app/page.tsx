'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize Bootstrap tabs functionality
    const initTabs = () => {
      const homeTab = document.getElementById('pills-home-tab')
      const profileTab = document.getElementById('pills-profile-tab')
      
      if (homeTab && profileTab) {
        homeTab.addEventListener('click', () => {
          const sho = document.querySelector('.sho')
          const hid = document.querySelector('.hid')
          if (sho) sho.classList.remove('d-none')
          if (hid) hid.classList.add('d-none')
        })
        
        profileTab.addEventListener('click', () => {
          const sho = document.querySelector('.sho')
          const hid = document.querySelector('.hid')
          if (sho) sho.classList.add('d-none')
          if (hid) hid.classList.remove('d-none')
        })
      }
    }

    initTabs()
  }, [])

  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
    </>
  )
}
