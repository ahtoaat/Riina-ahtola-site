import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/content/content'

const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair',
  display:  'swap',
})

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       `${siteContent.meta.businessName} — ${siteContent.meta.tagline}`,
  description: siteContent.meta.description,
  keywords: [
    'Riina Ahtola',
    'sisustussuunnittelija Helsinki',
    'sisututoimittaja',
    'sisustussuunnittelu',
    'kaupallinen stailaus',
    'TV-sisustaja',
    'Remppa vai muutto',
    'Huvila ja Huussi',
    'Pientä pintaremonttia',
    'sisustuskoordinaattori',
    'sisustuskoulutus',
    'sisustusstailaus',
    'interior design Finland',
    'sisustus Helsinki',
  ],
  openGraph: {
    title:       `${siteContent.meta.businessName} — ${siteContent.meta.tagline}`,
    description: siteContent.meta.description,
    locale:      siteContent.meta.locale,
    type:        'website',
    url:         siteContent.meta.siteUrl,
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${siteContent.meta.businessName} — ${siteContent.meta.tagline}`,
    description: siteContent.meta.description,
  },
  robots:      { index: true, follow: true },
  alternates:  { canonical: siteContent.meta.siteUrl },
}

// JSON-LD rakenteellinen data — Google lukee tämän ja ymmärtää kuka Riina on
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Riina Ahtola',
  url: siteContent.meta.siteUrl,
  image: `${siteContent.meta.siteUrl}/images/riina kuva.jpg`,
  jobTitle: 'Sisustussuunnittelija, Sisututoimittaja, TV-sisustaja',
  description: siteContent.meta.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Helsinki',
    addressCountry: 'FI',
  },
  knowsAbout: [
    'Sisustussuunnittelu',
    'Kaupallinen stailaus',
    'Televisiotuotanto',
    'Sisustuskoulutus',
    'Skandinaavinen sisustus',
    'Sisustuskoordinaatio',
  ],
  hasOccupation: [
    { '@type': 'Occupation', name: 'Sisustussuunnittelija' },
    { '@type': 'Occupation', name: 'Sisututoimittaja' },
    { '@type': 'Occupation', name: 'Sisustuskoordinaattori' },
    { '@type': 'Occupation', name: 'Sisustuskouluttaja' },
  ],
  workExample: [
    { '@type': 'CreativeWork', name: 'Remppa vai muutto Suomi', description: 'Sisustusvastaava ja sisustusstailaaja, kolme kautta' },
    { '@type': 'CreativeWork', name: 'Huvila ja Huussi', description: 'Sisustuskoordinaattori ja sisustusstailaaja' },
    { '@type': 'CreativeWork', name: 'Pientä pintaremonttia', description: 'Sisustussuunnittelija, kameroiden edessä' },
    { '@type': 'Book', name: 'Idylli', author: { '@type': 'Person', name: 'Riina Ahtola' } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
