'use client'

import { siteContent } from '@/content/content'

export default function Footer() {
  const { name, tagline, copyright, links } = siteContent.footer

  return (
    <footer className="bg-charcoal-900 border-t border-warm-white/10 py-10 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Mobile: stacked, centered. Desktop: single row. */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-4">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg tracking-widest text-warm-white mb-0.5">{name}</p>
            <p className="font-sans text-xs tracking-widest2 uppercase text-warm-white/40">{tagline}</p>
          </div>

          {/* Nav links — larger tap targets on mobile */}
          <nav className="flex items-center gap-1" aria-label="Alatunnisteen navigointi">
            {links.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <button
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-3 font-sans text-xs tracking-widest2 uppercase text-warm-white/50 hover:text-accent active:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
                {i < links.length - 1 && (
                  <span className="text-warm-white/20 text-xs select-none">·</span>
                )}
              </span>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-sans text-xs text-warm-white/30 text-center md:text-right">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
