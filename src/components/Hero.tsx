'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { siteContent } from '@/content/content'

export default function Hero() {
  const { imageSrc, imageAlt, eyebrow, title, subtitle, cta } = siteContent.hero
  const imgWrapRef = useRef<HTMLDivElement>(null)

  // Subtle parallax: image moves slower than the scroll
  useEffect(() => {
    const onScroll = () => {
      if (!imgWrapRef.current) return
      const y = window.scrollY * 0.28
      imgWrapRef.current.style.transform = `translateY(${y}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" aria-label="Hero">
      {/* ── Background image with parallax ──────────────────────────────── */}
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
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/40 to-transparent" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="animate-fade-up font-sans text-xs tracking-widest2 uppercase text-sand-200 mb-6">
            {eyebrow}
          </p>

          {/* Title */}
          <h1 className="animate-fade-up animate-fade-up-delay-1 font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-tight mb-6">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up animate-fade-up-delay-2 font-sans text-base md:text-lg text-warm-50/80 leading-relaxed mb-10 max-w-md">
            {subtitle}
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector(cta.primary.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-accent text-warm-white font-sans text-sm tracking-widest uppercase overflow-hidden"
            >
              <span className="absolute inset-0 bg-charcoal-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
              <span className="relative">{cta.primary.label}</span>
            </button>

            <button
              onClick={() => document.querySelector(cta.secondary.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 border border-warm-white/60 text-warm-white font-sans text-sm tracking-widest uppercase overflow-hidden"
            >
              <span className="absolute inset-0 bg-warm-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
              <span className="relative">{cta.secondary.label}</span>
            </button>

            <button
              onClick={() => document.querySelector(cta.tertiary.href)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-warm-white/80 font-sans text-sm tracking-widest uppercase hover:text-warm-white transition-colors duration-300 underline underline-offset-4 decoration-warm-white/40"
            >
              {cta.tertiary.label}
            </button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="animate-fade-up animate-fade-up-delay-4 absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3">
          <span className="font-sans text-xs tracking-widest2 uppercase text-warm-white/40 [writing-mode:vertical-rl]">
            Vieritä
          </span>
          {/* Animated line that pulses down */}
          <div className="relative h-16 w-px bg-warm-white/20 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-warm-white/60"
              style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
            />
          </div>
          <style>{`
            @keyframes scrollLine {
              0%   { height: 0%; top: 0; }
              50%  { height: 100%; top: 0; }
              100% { height: 0%; top: 100%; }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
