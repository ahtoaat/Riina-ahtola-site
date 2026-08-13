'use client'

import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

const NOTES = [
  { bg: '#F5EDD8', rotate: '-2deg',  translateY: '0px'   },
  { bg: '#E2D5C8', rotate: '1.5deg', translateY: '-8px'  },
  { bg: '#D8E0D5', rotate: '-1deg',  translateY: '4px'   },
  { bg: '#DDD3DC', rotate: '2deg',   translateY: '-4px'  },
]

export default function Services() {
  const { eyebrow, title, subtitle, items, cta } = siteContent.services

  return (
    <section id="services" className="bg-warm-white py-24 lg:py-36 px-6 lg:px-10 overflow-hidden">
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

        {/* Post-it lappu -ruudukko */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, i) => {
            const note = NOTES[i]
            return (
              <Reveal key={i} delay={i * 100} direction="scale">
                <div
                  className="group cursor-default transition-all duration-500 hover:scale-[1.03] hover:z-10 relative"
                  style={{
                    transform: `rotate(${note.rotate}) translateY(${note.translateY})`,
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Lappu */}
                  <div
                    className="p-8 lg:p-10 shadow-[4px_6px_24px_rgba(0,0,0,0.13)] transition-shadow duration-500 group-hover:shadow-[6px_10px_32px_rgba(0,0,0,0.18)]"
                    style={{ backgroundColor: note.bg }}
                  >
                    {/* Teipin illuusio yläreunassa */}
                    <div className="flex justify-center mb-6">
                      <div
                        className="h-4 w-12 rounded-sm opacity-40"
                        style={{ backgroundColor: 'rgba(180,160,140,0.5)' }}
                      />
                    </div>

                    <span className="font-sans text-xs tracking-widest2 uppercase text-charcoal-900/30 mb-4 block">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-4 leading-snug">
                      {item.title}
                    </h3>

                    <div className="h-px w-10 bg-charcoal-900/20 mb-4" />

                    <p className="font-sans text-sm text-charcoal-800/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={400}>
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
