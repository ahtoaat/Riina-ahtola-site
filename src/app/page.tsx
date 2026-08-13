import Navigation       from '@/components/Navigation'
import Hero             from '@/components/Hero'
import About            from '@/components/About'
import PortfolioPreview from '@/components/PortfolioPreview'
import Services         from '@/components/Services'
import Book             from '@/components/Book'
import Contact          from '@/components/Contact'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <PortfolioPreview />
      <Services />
      <Book />
      <Contact />
      <Footer />
    </main>
  )
}
