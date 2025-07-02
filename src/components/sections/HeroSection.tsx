'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { scrollToElement } from '@/lib/utils'
import { Heart, Star, Users } from 'lucide-react'

export default function HeroSection() {
  const handleCTAClick = () => {
    scrollToElement('offer-section')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-25 to-orange-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 animate-float blur-sm"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-30 animate-float animation-delay-400 blur-sm"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-25 animate-float animation-delay-200 blur-sm"></div>
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-40 animate-float animation-delay-600"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-10">

            {/* Main headline */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                O CURSO QUE <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-rose-500 bg-clip-text text-transparent">REALMENTE VAI TRANSFORMAR</span> SUA PELE
              </h1>
              
              <h2 className="text-xl md:text-2xl text-neutral-700 font-medium leading-relaxed">
                Pule anos de tentativa e erro e domine <span className="text-primary-600 font-bold">A ARTE DE CUIDAR MUITO BEM DA SUA PELE</span>
              </h2>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200 leading-relaxed">
              Aprenda tudo o que você precisa para conquistar uma pele limpa em casa — <strong className="text-neutral-800">sem dietas, pílulas ou produtos milagrosos!</strong>
            </p>

            {/* CTA */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <Button 
                size="xl" 
                onClick={handleCTAClick}
                className="group relative overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 text-lg font-bold">QUERO TRANSFORMAR MINHA PELE AGORA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
              
              {/* <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Acesso imediato após a compra
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <Heart className="w-4 h-4" />
                  30 dias de garantia total
                </div>
              </div> */}
            </div>

            {/* Elegant social proof */}
            {/* <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 animate-fade-in-up animation-delay-600">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">7+</div>
                  <div className="text-xs md:text-sm text-neutral-600 font-medium">Anos transformando vidas</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-rose-600 bg-clip-text text-transparent">PhD</div>
                  <div className="text-xs md:text-sm text-neutral-600 font-medium">Formação científica</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-xs md:text-sm text-neutral-600 font-medium">Método comprovado</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Hero image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image container */}
              <div className="relative">
                {/* Background decorative circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-secondary-200 to-rose-200 rounded-full transform rotate-6 scale-105 opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-rose-200 via-pink-200 to-orange-200 rounded-full transform -rotate-3 scale-110 opacity-20"></div>
                
                {/* Main photo container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-primary-50 p-2">
                  <Image
                    src="https://www.drajulianamartins.com.br/juliana.png"
                    alt="Dra. Juliana Ferreira - Especialista em Skincare"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover w-full h-[500px] object-top"
                    priority
                  />
                  
                  {/* Professional badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                    <div className="text-center">
                      <h3 className="font-bold text-neutral-900 text-lg mb-1">Dra. Juliana Ferreira</h3>
                      <p className="text-sm text-neutral-600 mb-2">PhD em Enfermagem | Especialista em Estética Avançada</p>
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-neutral-600 ml-2">Especialista há mais de 10 anos</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating success testimonial */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-float animation-delay-600 border border-green-100">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108755-2616c96ca1e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt="Cliente satisfeita"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="flex text-yellow-400 text-xs mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-neutral-700 font-medium">
                        "Minha pele nunca esteve tão bonita!"
                      </p>
                      <p className="text-xs text-neutral-500">- Maria S.</p>
                    </div>
                  </div>
                </div> */}

                {/* Floating experience badge */}
                {/* <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl shadow-xl p-4 animate-float animation-delay-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold">7+</div>
                    <div className="text-xs opacity-90 font-medium">Anos de experiência</div>
                  </div>
                </div> */}

                {/* Floating certification badge */}
                {/* <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-lg p-3 animate-float animation-delay-800 border border-blue-100">
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-sm">PhD</div>
                    <div className="text-xs text-neutral-600">Enfermagem</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm shadow-lg">
            <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-neutral-600 text-center mt-2 font-medium">Role para baixo</p>
        </div> */}
      </div>
    </section>
  )
}