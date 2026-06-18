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
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
