'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

export default function Contact() {
  const { eyebrow, title, subtitle, sidebar, form } = siteContent.contact

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setValues({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-charcoal-900 py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Vasen: otsikko + lomake ───────────────────────────────── */}
          <Reveal direction="left">
            <div className="flex flex-col gap-10">

              {/* Section header */}
              <div>
                <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-4">
                  {eyebrow}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-warm-white leading-tight mb-6">
                  {title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>
                {subtitle ? (
                  <p className="font-sans text-base text-warm-50/70 leading-relaxed">{subtitle}</p>
                ) : null}
              </div>

              {/* Lomake */}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="sr-only">Nimesi</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    placeholder={form.namePlaceholder}
                    className="w-full bg-transparent border-b border-warm-white/20 py-4 font-sans text-sm text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Sähköpostisi</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    placeholder={form.emailPlaceholder}
                    className="w-full bg-transparent border-b border-warm-white/20 py-4 font-sans text-sm text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Viestisi</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    placeholder={form.messagePlaceholder}
                    className="w-full bg-transparent border-b border-warm-white/20 py-4 font-sans text-sm text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="px-10 py-4 bg-accent text-warm-white font-sans text-sm tracking-widest uppercase hover:bg-warm-white hover:text-charcoal-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending'
                    ? 'Lähetetään…'
                    : status === 'sent'
                    ? 'Viesti lähetetty ✓'
                    : form.submitLabel}
                </button>

                {status === 'error' && (
                  <p className="font-sans text-sm text-red-400">
                    Jotain meni pieleen. Yritä uudelleen.
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          {/* ── Oikea: kuva + Y-tunnus + some ────────────────────────── */}
          <Reveal direction="right" delay={150}>
            <div className="flex flex-col gap-6">

              {/* Kuva — näkyy kokonaan, ei rajauksia */}
              <Image
                src={sidebar.imageSrc}
                alt={sidebar.imageAlt}
                width={600}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Y-tunnus */}
              <p className="font-sans text-xs tracking-widest uppercase text-warm-white/50">
                Y-tunnus: {sidebar.businessId}
              </p>

              {/* Some-ikonit */}
              <div className="flex items-center gap-6">
                <a
                  href={sidebar.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-warm-white/60 hover:text-warm-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                </a>

                <a
                  href={sidebar.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-warm-white/60 hover:text-warm-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
