'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

// Animates a number from 0 to `target` when it enters the viewport
function AnimatedStat({ value }: { value: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  // Extract leading number if present, e.g. "Yli 10 vuotta" → prefix="Yli ", num=10, suffix=" vuotta"
  const match = value.match(/^(.*?)(\d+)(.*)$/)

  useEffect(() => {
    if (!match) { setDisplay(value); return }
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const target   = parseInt(match[2], 10)
        const duration = 1400
        const start    = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(String(Math.round(eased * target)))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [match, value])

  if (!match) return <span>{value}</span>

  return (
    <span ref={ref}>
      {match[1]}<span>{display}</span>{match[3]}
    </span>
  )
}

export default function About() {
  const { eyebrow, title, imageSrc, imageAlt, paragraphs, credentials, cta } =
    siteContent.about

  return (
    <section id="about" className="bg-warm-white py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Portrait image ─────────────────────────────────────────── */}
          {/* Replace /public/images/riina kuva.jpg with your portrait photo */}
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden group">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle color overlay that lifts on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/8 transition-colors duration-700" />
              </div>

              {/* Decorative offset border */}
              <div
                className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border border-sand-300 -z-10 transition-all duration-500"
                aria-hidden="true"
              />

              {/* Credential card overlapping image corner */}
              <div className="absolute bottom-8 -right-4 bg-warm-white p-6 shadow-lg max-w-[200px]">
                {credentials.map((c) => (
                  <div key={c.label} className="mb-4 last:mb-0">
                    <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-0.5">
                      {c.label}
                    </p>
                    <p className="font-serif text-xl text-charcoal-900">
                      <AnimatedStat value={c.value} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Text content ───────────────────────────────────────────── */}
          <div>
            <Reveal delay={100}>
              <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-6">
                {eyebrow}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 leading-tight mb-10">
                {title.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </Reveal>

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
              <div className="h-px bg-sand-200 mb-10" />
              <button
                onClick={() => document.querySelector(cta.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-charcoal-900 hover:text-accent transition-colors duration-300 group"
              >
                {cta.label}
                <span className="block h-px w-8 bg-current transition-all duration-500 group-hover:w-16" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
