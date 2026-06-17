'use client'

import Image from 'next/image'
import { siteContent } from '@/content/content'
import Reveal from '@/components/Reveal'

export default function PortfolioPreview() {
  const { eyebrow, title, images } = siteContent.portfolioPreview

  return (
    <section className="bg-warm-white py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="font-sans text-xs tracking-widest2 uppercase text-accent mb-4">
                {eyebrow}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 leading-tight">
                {title.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
            </div>
            <div className="h-px w-24 bg-sand-300 hidden md:block mb-3" />
          </div>
        </Reveal>

        {/* Asymmetric editorial collage */}
        <Reveal delay={150} direction="scale">
          <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[600px] md:h-[700px] lg:h-[800px]">

            {/* Large left image — col 1-5, rows 1-2 */}
            <div className="col-span-12 md:col-span-5 row-span-2 relative overflow-hidden group">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/15 transition-colors duration-500" />
            </div>

            {/* Top middle */}
            <div className="hidden md:block md:col-span-3 row-span-1 relative overflow-hidden group">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/15 transition-colors duration-500" />
            </div>

            {/* Top right */}
            <div className="hidden md:block md:col-span-4 row-span-1 relative overflow-hidden group">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/15 transition-colors duration-500" />
            </div>

            {/* Bottom middle */}
            <div className="hidden md:block md:col-span-3 row-span-1 relative overflow-hidden group">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/15 transition-colors duration-500" />
            </div>

            {/* Bottom right */}
            <div className="hidden md:block md:col-span-4 row-span-1 relative overflow-hidden group">
              <Image
                src={images[4].src}
                alt={images[4].alt}
                fill
                className="object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/15 transition-colors duration-500" />
            </div>
          </div>

          {/* Mobile: simple 2-col grid */}
          <div className="grid grid-cols-2 gap-3 mt-3 md:hidden">
            {images.slice(1, 5).map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
