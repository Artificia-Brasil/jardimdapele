import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import StorySection from '@/components/sections/StorySection'
import SolutionSection from '@/components/sections/SolutionSection'
import CredibilitySection from '@/components/sections/CredibilitySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import OfferSection from '@/components/sections/OfferSection'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Jardim da Pele - Transforme Sua Pele com o Curso Mais Completo do Brasil',
  description: 'Pare de sofrer com problemas de pele! Aprenda técnicas profissionais de skincare com a Dra. Juliana Ferreira e conquiste a pele limpa e saudável que você sempre sonhou.',
  openGraph: {
    title: 'Jardim da Pele - Transforme Sua Pele com o Curso Mais Completo do Brasil',
    description: 'Pare de sofrer com problemas de pele! Aprenda técnicas profissionais de skincare com a Dra. Juliana Ferreira.',
  },
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Hook */}
      <HeroSection />
      
      {/* Problem Agitation Section */}
      <ProblemSection />
      
      {/* Dr. Juliana's Story */}
      <StorySection />
      
      {/* Solution Presentation */}
      <SolutionSection />
      
      {/* Credibility Building */}
      <CredibilitySection />
      
      {/* Social Proof */}
      <TestimonialsSection />
      
      {/* Offer & Pricing */}
      <OfferSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}