'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, Instagram } from 'lucide-react'
import Card from '@/components/ui/Card'
import { scrollToElement } from '@/lib/utils'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Úrsula Teles",
      age: "35 anos",
      profession: "Estudante",
      image: "/ursula.jpg",
      instagram: "https://instagram.com/ursula.teles",
      rating: 5,
      text: "Depois de 15 anos lutando contra acne, finalmente entendi o que estava fazendo de errado. O curso da Dra. Juliana mudou minha vida! Minha pele nunca esteve tão bonita e eu nunca me senti tão confiante.",
      transformation: "Acne severa → Pele limpa em 3 meses",
      highlight: "\"Finalmente me olho no espelho e me sinto bonita\""
    },
    {
      name: "Ana Santos",
      age: "28 anos", 
      profession: "Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      instagram: "https://instagram.com/ana.design",
      rating: 5,
      text: "Gastei uma fortuna em produtos caros que não funcionavam. Com as técnicas do curso, aprendi a escolher produtos corretos gastando muito menos. Minha rotina agora é simples e eficaz!",
      transformation: "Rotina complicada → 5 minutos por dia",
      highlight: "\"Economia de R$ 500/mês em produtos desnecessários\""
    },
    {
      name: "Carolina Oliveira",
      age: "35 anos",
      profession: "Empresária", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      instagram: "https://instagram.com/carol.entrepreneur",
      rating: 5,
      text: "Como mãe de dois filhos, eu não tinha tempo para uma rotina complicada. O método da Dra. Juliana me ensinou uma rotina simples que cabe na minha realidade. Resultados incríveis em pouco tempo!",
      transformation: "Pele cansada → Glow natural aos 35",
      highlight: "\"Rotina que funciona mesmo corrida\""
    },
    {
      name: "Beatriz Costa",
      age: "24 anos",
      profession: "Estudante",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      instagram: "https://instagram.com/bia.skincare",
      rating: 5,
      text: "Sempre tive pele oleosa e cheia de cravos. Achava que era normal para minha idade. Descobri que estava cuidando da pele de forma totalmente errada! Agora tenho a pele que sempre sonhei.",
      transformation: "Pele oleosa com cravos → Textura uniforme",
      highlight: "\"Autoestima nas alturas!\""
    },
    {
      name: "Fernanda Lima",
      age: "42 anos",
      profession: "Psicóloga",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      instagram: "https://instagram.com/fer.psicologa",
      rating: 5,
      text: "Depois dos 40, achei que era tarde demais para ter uma pele bonita. O curso me provou o contrário! Aprendi que idade não é desculpa - é sobre ter os conhecimentos certos. Minha pele está melhor que aos 30!",
      transformation: "Sinais de idade → Pele renovada",
      highlight: "\"Nunca é tarde para começar do jeito certo\""
    },
    {
      name: "Juliana Rocha",
      age: "29 anos",
      profession: "Enfermeira",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      instagram: "https://instagram.com/ju.enfermeira",
      rating: 5,
      text: "Mesmo sendo da área da saúde, eu não sabia cuidar da minha própria pele! O curso abriu meus olhos. Agora entendo a ciência por trás de cada produto e cada passo da rotina. Resultado: pele impecável!",
      transformation: "Conhecimento teórico → Aplicação prática",
      highlight: "\"Ciência aplicada na prática real\""
    }
  ]

  const stats = [
    {
      number: "10,247",
      label: "Mulheres transformadas",
      icon: "👩"
    },
    {
      number: "98%",
      label: "Taxa de satisfação",
      icon: "💕"
    },
    {
      number: "4.9/5",
      label: "Avaliação média",
      icon: "⭐"
    },
    {
      number: "30 dias",
      label: "Primeiros resultados",
      icon: "⚡"
    }
  ]

  return (
    <section id="testimonials-section" className="section-padding bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            O que <span className="gradient-text">nossas alunas</span> estão dizendo?
          </h2>
          
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Mais de 10.000 mulheres já transformaram suas vidas com nosso método. 
            Veja alguns dos resultados reais:
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="testimonial" className="h-full hover:shadow-strong transition-all duration-300 relative">
                {/* Instagram logo in top right corner */}
                <a 
                  href={testimonial.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-20 bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>

                {/* Header with photo and info */}
                <div className="flex items-center space-x-4 mb-6 relative z-10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border-2 border-primary-200"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.age} • {testimonial.profession}</p>
                    <div className="flex space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Transformation highlight */}
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-neutral-700 mb-1">TRANSFORMAÇÃO</div>
                    <div className="text-primary-700 font-bold">{testimonial.transformation}</div>
                  </div>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-neutral-700 leading-relaxed mb-6 relative z-10">
                  {testimonial.text}
                </blockquote>

                {/* Highlight quote */}
                <div className="bg-gradient-to-r from-secondary-500 to-primary-500 text-white rounded-xl p-4 text-center">
                  <Quote className="w-6 h-6 mx-auto mb-2 opacity-80" />
                  <p className="font-semibold text-sm">{testimonial.highlight}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video testimonials section */}
        <motion.div 
          className="bg-white rounded-3xl p-12 shadow-medium text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Quer ver mais depoimentos em vídeo?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 aspect-video flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary-500 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-sm font-semibold text-neutral-700">
                    Depoimento {i}
                  </p>
                  <p className="text-xs text-neutral-600 mt-1">
                    Clique para assistir
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-neutral-600 mt-6">
            📱 Acesse nossa página no Instagram para ver dezenas de outros depoimentos
          </p>
        </motion.div>

        {/* Before and After Gallery */}
        <motion.div 
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Resultados que você pode ver
          </h3>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Estas são apenas algumas das centenas de transformações que acompanhamos diariamente. 
            <strong> Sua transformação pode ser a próxima!</strong>
          </p>
          
          {/* Before/After placeholder */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white bg-opacity-10 rounded-2xl p-6">
                <div className="aspect-square bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">ANTES/DEPOIS {i}</span>
                </div>
                <p className="text-sm opacity-90">Transformação em 60 dias</p>
              </div>
            ))}
          </div>
          
          <div className="bg-primary-500 rounded-2xl p-6">
            <p className="text-lg font-semibold">
              💌 Recebemos fotos de transformação todos os dias!
            </p>
            <p className="text-sm opacity-90 mt-2">
              Queremos ver a sua transformação também
            </p>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900">Garantia de 30 dias</div>
                <div className="text-sm text-neutral-600">Satisfação total ou seu dinheiro de volta</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">🔒</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900">Compra 100% segura</div>
                <div className="text-sm text-neutral-600">Ambiente protegido e criptografado</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xl">📞</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-neutral-900">Suporte especializado</div>
                <div className="text-sm text-neutral-600">Nossa equipe está aqui para ajudar</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => scrollToElement('offer-section')}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 shadow-strong"
          >
            Conhecer o Curso Jardim da Pele →
          </button>
        </motion.div>
      </div>
    </section>
  )
}