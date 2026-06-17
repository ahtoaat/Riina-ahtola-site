'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { siteContent } from '@/content/content'

export default function Hero() {
  const { imageSrc, imageAlt, eyebrow, title, subtitle, cta } = siteContent.hero
  const imgWrapRef = useRef<HTMLDivElement>(null)

  // Parallax only on non-touch devices (iOS Safari has fixed-bg issues)
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const onScroll = () => {
      if (!imgWrapRef.current) return
      imgWrapRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden" aria-label="Hero">
      {/* ── Background image ────────────────────────────────────────────── */}
      {/* Replace /public/images/hero.jpg with your hero photo */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imgWrapRef} className="absolute inset-[-12%] will-change-transform">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Stronger gradient on mobile for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-charcoal-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/30 to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-28 pt-32 sm:pt-0">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="animate-fade-up font-sans text-xs tracking-widest2 uppercase text-sand-200 mb-5">
            {eyebrow}
          </p>

          {/* Title — tighter on mobile */}
          <h1 className="animate-fade-up animate-fade-up-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-white leading-tight mb-5">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up animate-fade-up-delay-2 font-sans text-sm sm:text-base md:text-lg text-warm-50/80 leading-relaxed mb-8 sm:mb-10 max-w-md">
            {subtitle}
          </p>

          {/* CTA buttons — full-width on mobile, row on sm+ */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4">

            {/* Primary — full-width on mobile */}
            <button
              onClick={() => document.querySelector(cta.primary.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full sm:w-auto px-8 py-4 bg-accent text-warm-white font-sans text-sm tracking-widest uppercase overflow-hidden text-center"
            >
              <span className="absolute inset-0 bg-charcoal-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
              <span className="relative">{cta.primary.label}</span>
            </button>

            {/* Secondary — full-width on mobile */}
            <button
              onClick={() => document.querySelector(cta.secondary.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full sm:w-auto px-8 py-4 border border-warm-white/60 text-warm-white font-sans text-sm tracking-widest uppercase overflow-hidden text-center"
            >
              <span className="absolute inset-0 bg-warm-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
              <span className="relative">{cta.secondary.label}</span>
            </button>

            {/* Tertiary — as a text link on mobile, less prominent */}
            <button
              onClick={() => document.querySelector(cta.tertiary.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 text-warm-white/80 font-sans text-sm tracking-widest uppercase hover:text-warm-white transition-colors duration-300 underline underline-offset-4 decoration-warm-white/40 text-center"
            >
              {cta.tertiary.label}
            </button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator — desktop only */}
      <div className="animate-fade-up animate-fade-up-delay-4 absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3">
        <span className="font-sans text-xs tracking-widest2 uppercase text-warm-white/40 [writing-mode:vertical-rl]">
          Vieritä
        </span>
        <div className="relative h-16 w-px bg-warm-white/20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-warm-white/60" style={{ animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
        <style>{`
          @keyframes scrollLine {
            0%   { height: 0%;   top: 0%;   }
            50%  { height: 100%; top: 0%;   }
            100% { height: 0%;   top: 100%; }
          }
        `}</style>
      </div>
    </section>
  )
}
