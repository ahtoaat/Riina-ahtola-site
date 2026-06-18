'use client'

import { useState, FormEvent } from 'react'
import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

export default function Contact() {
  const { eyebrow, title, subtitle, details, form } = siteContent.contact

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // ── Wire up your form submission here (e.g. Resend, Formspree, etc.) ──
    // For now we simulate a successful send after a short delay
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setValues({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-charcoal-900 py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <Reveal className="max-w-xl mb-16 lg:mb-20">
          <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white leading-tight mb-6">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-sans text-base text-warm-50/70 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Contact form ──────────────────────────────────────────── */}
          <Reveal direction="left">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="sr-only">Your name</label>
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

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">Your email</label>
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

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">Your message</label>
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

            {/* Submit */}
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
          </Reveal>

          {/* ── Contact details ───────────────────────────────────────── */}
          <Reveal direction="right" delay={150}>
          <div className="flex flex-col justify-center gap-10">
            {/* Email */}
            <div>
              <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-2">Email</p>
              <a
                href={`mailto:${details.email}`}
                className="font-serif text-xl text-warm-white hover:text-accent transition-colors duration-300"
              >
                {details.email}
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-warm-white/10" />

            {/* Phone */}
            <div>
              <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-2">Phone</p>
              <a
                href={`tel:${details.phone.replace(/\s/g, '')}`}
                className="font-serif text-xl text-warm-white hover:text-accent transition-colors duration-300"
              >
                {details.phone}
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-warm-white/10" />

            {/* Instagram */}
            <div>
              <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-2">Instagram</p>
              <a
                href={details.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-warm-white hover:text-accent transition-colors duration-300"
              >
                {details.instagram}
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
