import { Metadata } from 'next'
import HeroSectionV2 from '@/components/sections/v2/HeroSectionV2'
import ProblemSectionV2 from '@/components/sections/v2/ProblemSectionV2'
import CostAnalysisSectionV2 from '@/components/sections/v2/CostAnalysisSectionV2'
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

export default function Index2Page() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Hook */}
      <HeroSectionV2 />
      
      {/* Problem Agitation Section */}
      <ProblemSectionV2 />
      
      {/* Cost Analysis Section */}
      <CostAnalysisSectionV2 />
      
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