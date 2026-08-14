'use client'

import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

const NOTES = [
  { bg: '#F5EDD8', rotate: '-2deg',  translateY: '0px'  },
  { bg: '#E2D5C8', rotate: '1.5deg', translateY: '-8px' },
  { bg: '#D8E0D5', rotate: '-1deg',  translateY: '4px'  },
  { bg: '#DDD3DC', rotate: '2deg',   translateY: '-4px' },
]

function Pin({ color }: { color: string }) {
  return (
    <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="9" cy="9" rx="7" ry="7" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <ellipse cx="9" cy="9" rx="4" ry="4" fill="rgba(255,255,255,0.35)" />
      <rect x="8" y="14" width="2" height="12" rx="1" fill="rgba(0,0,0,0.25)" />
    </svg>
  )
}

const PIN_COLORS = ['#C4785A', '#8A9E8C', '#8B7BA8', '#A0856B']

export default function Services() {
  const { eyebrow, title, subtitle, items, cta } = siteContent.services

  return (
    <section
      id="services"
      className="bg-warm-white py-16 lg:py-24 px-6 lg:px-10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-6">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 leading-tight mb-6 max-w-xl">
            {title}
          </h2>
          <p className="font-sans text-base text-charcoal-700 max-w-2xl mb-20 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14">
          {items.map((item, i) => {
            const note = NOTES[i]
            return (
              <Reveal key={i} delay={i * 110} direction="scale">
                <div
                  className="group cursor-default transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-10 relative"
                  style={{
                    transform: `rotate(${note.rotate}) translateY(${note.translateY})`,
                    transformOrigin: 'center center',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) translateY(-12px) scale(1.03)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = `rotate(${note.rotate}) translateY(${note.translateY})`
                  }}
                >
                  <div
                    className="relative px-8 pt-4 pb-10 lg:px-10 lg:pb-12 transition-shadow duration-700"
                    style={{
                      backgroundColor: note.bg,
                      boxShadow: '4px 6px 20px rgba(0,0,0,0.13), 0 1px 3px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '8px 20px 48px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.6)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '4px 6px 20px rgba(0,0,0,0.13), 0 1px 3px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.6)'
                    }}
                  >
                    {/* Teippi */}
                    <div className="flex justify-center -mt-2 mb-5">
                      <div className="h-4 w-12 rounded-sm" style={{ backgroundColor: 'rgba(180,160,140,0.4)' }} />
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-4 leading-snug">
                      {item.title}
                    </h3>

                    <div
                      className="h-px mb-4 w-10"
                      style={{ backgroundColor: 'rgba(60,40,20,0.15)' }}
                    />

                    <p className="font-sans text-sm text-charcoal-800/75 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Paperin alapuolen varjo-efekti */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-20"
                      style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))' }}
                    />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={450}>
          <div className="mt-20 text-center">
            <a
              href={cta.href}
              className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-charcoal-900 hover:text-accent transition-colors duration-300 group"
            >
              {cta.label}
              <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-16" />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
