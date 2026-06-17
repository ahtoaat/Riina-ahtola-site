'use client'

import { useState, useEffect } from 'react'
import { siteContent } from '@/content/content'

export default function Navigation() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const { logo, links } = siteContent.nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const ids = links.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [links])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    // Small delay so drawer closes before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  // Logo and hamburger colors: white over dark hero, charcoal after scroll
  const logoColor   = scrolled ? 'text-charcoal-900' : 'text-warm-white'
  const burgerColor = scrolled ? 'bg-charcoal-800'   : 'bg-warm-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? 'bg-warm-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-serif text-lg sm:text-xl tracking-widest transition-colors duration-300 hover:text-accent ${logoColor}`}
          aria-label="Takaisin ylös"
        >
          {logo}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Päänavigointi">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`font-sans text-sm tracking-widest2 uppercase transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 ${
                  scrolled
                    ? isActive ? 'text-accent after:w-full' : 'text-charcoal-700 hover:text-charcoal-900 after:w-0 hover:after:w-full'
                    : isActive ? 'text-accent after:w-full' : 'text-warm-white/90 hover:text-warm-white after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Mobile hamburger — 44×44px tap target */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-6 transition-all duration-300 origin-center ${burgerColor} ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${burgerColor} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-6 transition-all duration-300 origin-center ${burgerColor} ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile full-screen drawer */}
      <div
        className={`md:hidden transition-all duration-500 ease-premium overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="flex flex-col bg-warm-white/98 backdrop-blur-md border-t border-sand-200/60 py-4"
          aria-label="Mobiilinavigointi"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              /* min 56px tall for comfortable mobile tap target */
              className="w-full py-4 px-6 text-left font-sans text-sm tracking-widest2 uppercase text-charcoal-700 hover:text-accent hover:bg-warm-50 active:bg-warm-50 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
