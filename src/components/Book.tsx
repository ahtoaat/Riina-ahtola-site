'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

// Kuvat: lisää /public/images/idylli1.jpg ja /public/images/idylli2.jpg
const IMAGES = [
  { src: '/images/idylli1.webp', alt: 'Idylli — Riina Ahtola' },
  { src: '/images/idylli2.webp', alt: 'Idylli — Riina Ahtola' },
]

function BookSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % IMAGES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="aspect-[3/4] relative overflow-hidden">
      {IMAGES.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ))}

      {/* Piste-indikaattorit */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Kuva ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-warm-white w-4' : 'bg-warm-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Book() {
  const { eyebrow, title, subtitle, paragraphs, cta } = siteContent.book

  return (
    <section id="book" className="bg-warm-50 py-16 lg:py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Vaihtuva kirjakansikuva ────────────────────────────────── */}
          <Reveal direction="left">
            <BookSlider />
          </Reveal>

          {/* ── Text content ───────────────────────────────────────────── */}
          <div>
            <Reveal delay={100}>
              <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-6">
                {eyebrow}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-serif text-5xl md:text-6xl text-charcoal-900 leading-tight mb-3">
                {title}
              </h2>
              <p className="font-sans text-sm tracking-widest2 uppercase text-charcoal-700/50 mb-10">
                {subtitle}
              </p>
            </Reveal>

            <div className="h-px bg-sand-200 mb-10" />

            <div className="space-y-5 mb-10">
              {paragraphs.map((para, i) => (
                <Reveal key={i} delay={300 + i * 100}>
                  <p className="font-sans text-base text-charcoal-700 leading-relaxed">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={500}>
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-charcoal-900 hover:text-accent transition-colors duration-300 group"
              >
                {cta.label}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-16" />
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
