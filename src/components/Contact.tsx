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
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setValues({ name: '', email: '', message: '' })
  }

  // Shared input class — text-base (16px) prevents iOS auto-zoom
  const inputClass =
    'w-full bg-transparent border-b border-warm-white/20 py-4 font-sans text-base text-warm-white placeholder:text-warm-white/40 focus:outline-none focus:border-accent transition-colors duration-300'

  return (
    <section id="contact" className="bg-charcoal-900 py-20 sm:py-24 lg:py-36 px-5 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <Reveal className="max-w-xl mb-14 lg:mb-20">
          <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-4">{eyebrow}</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-white leading-tight mb-5">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="font-sans text-base text-warm-50/70 leading-relaxed">{subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

          {/* ── Contact form ──────────────────────────────────────────── */}
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              <div>
                <label htmlFor="name" className="sr-only">Nimesi</label>
                <input
                  id="name" type="text" required
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  placeholder={form.namePlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Sähköpostisi</label>
                <input
                  id="email" type="email" required
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  placeholder={form.emailPlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Viestisi</label>
                <textarea
                  id="message" required rows={5}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  placeholder={form.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full sm:w-auto px-10 py-4 bg-accent text-warm-white font-sans text-sm tracking-widest uppercase hover:bg-warm-white hover:text-charcoal-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Lähetetään…' : status === 'sent' ? 'Viesti lähetetty ✓' : form.submitLabel}
              </button>

              {status === 'error' && (
                <p className="font-sans text-sm text-red-400">Jotain meni pieleen. Yritä uudelleen.</p>
              )}
            </form>
          </Reveal>

          {/* ── Contact details ───────────────────────────────────────── */}
          <Reveal direction="right" delay={150}>
            <div className="flex flex-col justify-center gap-8 lg:gap-10">

              <div>
                <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-2">Sähköposti</p>
                <a
                  href={`mailto:${details.email}`}
                  className="font-serif text-lg sm:text-xl text-warm-white hover:text-accent transition-colors duration-300 break-all"
                >
                  {details.email}
                </a>
              </div>

              <div className="h-px bg-warm-white/10" />

              <div>
                <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-2">Puhelin</p>
                <a
                  href={`tel:${details.phone.replace(/\s/g, '')}`}
                  className="font-serif text-lg sm:text-xl text-warm-white hover:text-accent transition-colors duration-300"
                >
                  {details.phone}
                </a>
              </div>

              <div className="h-px bg-warm-white/10" />

              <div>
                <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-2">Instagram</p>
                <a
                  href={details.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg sm:text-xl text-warm-white hover:text-accent transition-colors duration-300"
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
