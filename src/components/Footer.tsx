'use client'

import { siteContent } from '@/content/content'

export default function Footer() {
  const { name, tagline, copyright, links } = siteContent.footer

  return (
    <footer className="bg-charcoal-900 border-t border-warm-white/10 py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-serif text-lg tracking-widest text-warm-white mb-0.5">{name}</p>
          <p className="font-sans text-xs tracking-widest2 uppercase text-warm-white/40">{tagline}</p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-8" aria-label="Footer navigation">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="font-sans text-xs tracking-widest2 uppercase text-warm-white/50 hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-xs text-warm-white/30">{copyright}</p>
      </div>
    </footer>
  )
}
