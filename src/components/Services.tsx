import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

export default function Services() {
  const { eyebrow, title, subtitle, items, cta } = siteContent.services

  return (
    <section id="services" className="bg-warm-white py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-6">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 leading-tight mb-6 max-w-xl">
            {title}
          </h2>
          <p className="font-sans text-base text-charcoal-700 max-w-2xl mb-16 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand-200">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-warm-white p-10 lg:p-14 group">
                <span className="font-sans text-xs tracking-widest2 uppercase text-charcoal-700/40 mb-5 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-4 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="h-px w-10 bg-sand-300 mb-4 group-hover:w-20 transition-all duration-500" />
                <p className="font-sans text-sm text-charcoal-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-14 text-center">
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
