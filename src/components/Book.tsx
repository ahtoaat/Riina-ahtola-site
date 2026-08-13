import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

export default function Book() {
  const { eyebrow, title, subtitle, paragraphs, cta } = siteContent.book

  return (
    <section id="book" className="bg-warm-50 py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Book cover placeholder ─────────────────────────────────── */}
          {/* Add a book cover image to /public/images/idylli.jpg when available */}
          <Reveal direction="left">
            <div className="aspect-[3/4] relative overflow-hidden bg-sand-200 flex items-center justify-center">
              <div className="text-center px-10">
                <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-4">Kirja</p>
                <p className="font-serif text-5xl text-charcoal-900 mb-3">Idylli</p>
                <p className="font-sans text-sm text-charcoal-700/60 tracking-widest uppercase">Riina Ahtola</p>
              </div>
              {/* Replace the div above with an Image component when you have the cover:
              <Image src="/images/idylli.jpg" alt="Idylli — Riina Ahtola" fill className="object-cover" /> */}
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
