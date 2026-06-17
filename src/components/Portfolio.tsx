'use client'

import Image from 'next/image'
import { useRef, MouseEvent } from 'react'
import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'
import type { Project } from '@/types'

// Subtle 3D tilt on hover — rotates the card toward the cursor
function TiltCard({ project, large }: { project: Project; large: boolean }) {
  const cardRef = useRef<HTMLElement>(null)

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el   = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x    = (e.clientX - rect.left) / rect.width  - 0.5  // –0.5 → 0.5
    const y    = (e.clientY - rect.top)  / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`
  }

  const onLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)', willChange: 'transform' }}
      className={`group relative overflow-hidden ${large ? 'lg:col-span-2' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
          sizes={large ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-500" />

        {/* Category badge that floats in on hover */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-warm-white/90 backdrop-blur-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <span className="font-sans text-xs tracking-widest2 uppercase text-accent">
            {project.category}
          </span>
        </div>
      </div>

      {/* Metadata */}
      <div className="pt-5 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-sans text-xs tracking-widest2 uppercase text-accent">
            {project.category}
          </span>
          <span className="font-sans text-xs text-charcoal-700/60">{project.year}</span>
        </div>
        <h3 className="font-serif text-xl text-charcoal-900 mb-1 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-charcoal-700/70">{project.location}</p>
      </div>

      {/* Animated bottom accent line */}
      <div className="h-px bg-sand-200 w-0 group-hover:w-full transition-all duration-500 ease-premium" />
    </article>
  )
}

export default function Portfolio() {
  const { eyebrow, title, subtitle, projects } = siteContent.portfolio

  return (
    <section id="portfolio" className="bg-warm-50 py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <Reveal>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-4">
              {eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 leading-tight mb-6">
              {title}
            </h2>
            <p className="font-sans text-base text-charcoal-700 leading-relaxed">{subtitle}</p>
          </div>
        </Reveal>

        {/* Project grid with staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80} direction="up">
              <TiltCard project={project} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
