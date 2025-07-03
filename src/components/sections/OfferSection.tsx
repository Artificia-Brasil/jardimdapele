'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Shield, Gift, PlayCircle, BookOpen, Smartphone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { formatPrice, formatInstallments, scrollToElement } from '@/lib/utils'

export default function OfferSection() {
  const courseModules = [
    {
      number: "01",
      title: "Boas-vindas e Introdução ao Método (Sementes do Cuidado)",
      description: "Conhecendo o método Skin Garden e preparando-se para a transformação da sua pele",
      lessons: 3,
      duration: "1h 30min",
      topics: [
        "Apresentação da Dra. Juliana e do Método Skin Garden",
        "Objetivos e transformações esperadas no curso",
        "Como acessar os materiais e participar das atividades"
      ]
    },
    {
      number: "02", 
      title: "Diagnóstico: Entendendo a Sua Pele (Reconhecendo o Solo)",
      description: "Identifique corretamente seu tipo de pele e aprenda a interpretar suas necessidades",
      lessons: 4,
      duration: "2h 15min",
      topics: [
        "O que é o tipo de pele (seca, oleosa, mista, sensível, acneica)",
        "Formulário de diagnóstico completo e explicativo",
        "Como interpretar seu diagnóstico e adaptar a rotina",
        "Erros comuns na identificação do tipo de pele"
      ]
    },
    {
      number: "03",
      title: "Fundamentos: Conhecendo os Ativos e Produtos (Nutrição das Raízes)",
      description: "Entenda os ingredientes ativos e aprenda a escolher produtos de forma inteligente",
      lessons: 5,
      duration: "3h 00min",
      topics: [
        "A importância de entender os ingredientes ativos",
        "Classificação dos produtos por função (limpeza, hidratação, proteção, tratamento)",
        "Como ler rótulos, composições e promessas de produtos",
        "Ativos mais usados no mercado e suas aplicações (ex.: ácido hialurônico, niacinamida, retinol, vitamina C, AHAs, etc.)",
        "Cuidados com modismos e promessas milagrosas"
      ]
    },
    {
      number: "04",
      title: "Limpeza de Pele (Preparação do Solo)",
      description: "Domine a arte da limpeza facial e prepare sua pele para receber os tratamentos",
      lessons: 5,
      duration: "2h 45min",
      topics: [
        "A importância da limpeza para saúde e eficácia dos produtos",
        "Tipos de produtos: sabonetes, géis, águas micelares, óleos de limpeza",
        "Double cleansing: quando faz sentido",
        "Limpeza para diferentes tipos de pele",
        "Demonstração prática + como monitorar a resposta da pele"
      ]
    },
    {
      number: "05",
      title: "Proteção Solar (Cuidados com o Sol)",
      description: "Proteja sua pele dos danos solares com conhecimento científico e aplicação correta",
      lessons: 5,
      duration: "2h 30min",
      topics: [
        "Entendendo os danos solares e sua relação com manchas, rugas e doenças",
        "Tipos de protetores: físico vs químico, com ou sem cor, oil-free, etc.",
        "FPS e PPD: como interpretar e escolher o ideal",
        "Reaplicação, resistência à água, e uso com maquiagem",
        "Dicas práticas para facilitar o uso diário"
      ]
    },
    {
      number: "06",
      title: "Hidratação (Regando o Solo)",
      description: "Entenda como manter sua pele hidratada, nutrida e com a barreira de proteção fortalecida",
      lessons: 4,
      duration: "2h 00min",
      topics: [
        "O que é hidratação e como ela age na pele",
        "Diferença entre hidratação, emoliência e oclusão",
        "Texturas e fórmulas: como escolher (géis, loções, cremes, séruns)",
        "Aplicação correta + massagem facial"
      ]
    },
    {
      number: "07",
      title: "Tratamentos Específicos",
      description: "Aprenda a usar ativos específicos para tratar problemas da pele de forma segura e eficaz",
      lessons: 4,
      duration: "2h 45min",
      topics: [
        "Clareadores, antiacne, anti-idade, calmantes",
        "Como encaixar esses tratamentos na rotina",
        "Ordem de aplicação e combinação segura de ativos",
        "Rotinas de uso noturno e cuidados com sensibilização"
      ]
    },
    {
      number: "08",
      title: "Cuidados Extras e Avançados (Rituais de Encantamento)",
      description: "Eleve sua rotina com cuidados especiais e técnicas avançadas para potencializar os resultados",
      lessons: 4,
      duration: "2h 15min",
      topics: [
        "Esfoliantes: físicos x químicos (quando e como usar)",
        "Máscaras: detox, calmantes, iluminadoras",
        "Cuidados com a área dos olhos, pescoço e colo",
        "Rotinas semanais e ciclos mensais"
      ]
    },
    {
      number: "09",
      title: "Rotina Ideal e Manutenção (Colheita e Continuidade)",
      description: "Monte sua rotina personalizada e aprenda a mantê-la ao longo da vida",
      lessons: 6,
      duration: "3h 00min",
      topics: [
        "Como montar uma rotina completa e adaptada à sua pele",
        "Rotinas simplificadas para manhã e noite",
        "Ajustes por clima, ciclo hormonal e fase da vida",
        "Checklist semanal e planner de skincare",
        "Como manter disciplina sem exageros"
      ]
    }
  ]

  const bonuses = [
    {
      icon: Smartphone,
      title: "App Acompanhamento Personalizado",
      description: "App exclusivo para acompanhar sua evolução diária, com lembretes e dicas personalizadas",
      value: 197,
      highlight: "NOVO!"
    },
    {
      icon: BookOpen,
      title: "Guia de Produtos 2024",
      description: "Lista atualizada com os melhores produtos por categoria e faixa de preço",
      value: 97,
      highlight: "EXCLUSIVO"
    },
    {
      icon: PlayCircle,
      title: "Masterclass Ao Vivo Mensais",
      description: "Sessões exclusivas para tirar dúvidas e novidades em skincare",
      value: 297,
      highlight: "POR 1 ANO"
    },
    {
      icon: Users,
      title: "Comunidade VIP",
      description: "Grupo exclusivo de alunas para trocar experiências e receber suporte",
      value: 147,
      highlight: "VITALÍCIO"
    }
  ]

  const guarantees = [
    "30 dias de garantia incondicional",
    "Suporte por email ilimitado",
    "Acesso vitalício ao conteúdo",
    "Atualizações gratuitas do curso",
    "Certificado de conclusão"
  ]

  const originalPrice = 1997
  const currentPrice = 497
  const installments = 12
  const installmentPrice = currentPrice / installments

  return (
    <section id="offer-section" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
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
            E É POR ISSO QUE EU CRIEI O CURSO <span className="gradient-text">JARDIM DA PELE</span>
          </h2>
          
          <p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
            Um curso para mulheres sérias sobre criar uma rotina de skincare que <strong>CUIDA, CURA e PROTEGE</strong> — em casa.
          </p>
        </motion.div>

        {/* Course Promise */}
        <motion.div 
          className="bg-white rounded-3xl p-12 shadow-medium mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Você vai aprender tudo que precisa:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900">Como sua pele funciona</h4>
              <p className="text-neutral-600">Entenda a ciência por trás dos cuidados</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-rose-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900">O que ela precisa</h4>
              <p className="text-neutral-600">Identifique as necessidades específicas</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900">Como cuidar dela do jeito certo</h4>
              <p className="text-neutral-600">Técnicas e rotinas que realmente funcionam</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
            <p className="text-lg font-semibold text-green-800">
              Sem enrolação. Sem modismos. Sem perda de tempo.
            </p>
          </div>
        </motion.div>

        {/* Course Modules */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Conteúdo Completo do Curso
          </h3>
          
          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <motion.div
                key={module.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-strong">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {module.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-neutral-900 mb-2">{module.title}</h4>
                          <p className="text-neutral-600 mb-4">{module.description}</p>
                        </div>
                        
                        <div className="flex space-x-4 text-sm text-neutral-500">
                          <span className="flex items-center">
                            <PlayCircle className="w-4 h-4 mr-1" />
                            {module.lessons} aulas
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {module.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold">
                🎯 Total: 40 aulas | 22 horas de conteúdo premium
              </p>
              <p className="text-sm opacity-90 mt-2">
                Acesso vitalício + atualizações gratuitas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bonuses */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Bônus Exclusivos <span className="gradient-text">(Apenas Hoje)</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 relative">
                  {bonus.highlight && (
                    <div className="absolute -top-3 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {bonus.highlight}
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-rose-500 rounded-xl flex items-center justify-center text-white">
                        <bonus.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-900 mb-2">{bonus.title}</h4>
                      <p className="text-neutral-600 text-sm mb-3">{bonus.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-500">Valor:</span>
                        <span className="font-bold text-green-600">{formatPrice(bonus.value)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Freedom Promise */}
        <motion.div 
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-3xl p-12 mb-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Você vai se libertar da dependência de:
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              "influencers",
              "consultoras de loja", 
              "esteticistas",
              "até de mim!"
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-4">
                <div className="text-2xl mb-2">❌</div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6">
            <p className="text-xl font-bold">
              Para viver o resto da vida com a pele limpa.
            </p>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <Card featured className="max-w-2xl mx-auto text-center p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              Investimento para Transformar Sua Vida
            </h3>
            
            {/* Value breakdown */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                <span>Curso Completo (40 aulas)</span>
                <span className="font-semibold">{formatPrice(997)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                <span>4 Bônus Exclusivos</span>
                <span className="font-semibold">{formatPrice(738)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                <span>Suporte Vitalício</span>
                <span className="font-semibold">{formatPrice(497)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b-2 border-neutral-400">
                <span className="font-bold">Valor Total</span>
                <span className="font-bold">{formatPrice(2232)}</span>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="mb-8">
              <div className="text-center">
                <div className="text-lg text-neutral-600 line-through mb-2">
                  De {formatPrice(originalPrice)}
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {formatPrice(currentPrice)}
                </div>
                <div className="text-neutral-600">
                  ou {formatInstallments(currentPrice, installments)}
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button size="xl" className="w-full mb-6 group">
              <span className="relative z-10">
                🚀 QUERO TRANSFORMAR MINHA PELE AGORA
              </span>
            </Button>
            
            {/* Guarantees */}
            <div className="space-y-2 text-sm text-neutral-600">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Urgency and Scarcity */}
        <motion.div 
          className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            ⚠️ ATENÇÃO: Oferta por Tempo Limitado
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">72h</div>
              <div className="text-sm">Restam apenas</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-sm">De desconto</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">247</div>
              <div className="text-sm">Vagas restantes</div>
            </div>
          </div>
          
          <p className="text-lg mb-6">
            Após esse período, o curso volta ao preço normal de {formatPrice(originalPrice)}
          </p>
          
          <Button size="xl" variant="secondary" className="group">
            <span className="relative z-10">
              GARANTO MINHA VAGA COM 50% OFF
            </span>
          </Button>
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
            onClick={() => scrollToElement('faq-section')}
            className="bg-gradient-to-r from-neutral-800 to-neutral-700 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-200 shadow-strong"
          >
            Ainda tem dúvidas? Ver perguntas frequentes →
          </button>
        </motion.div>
      </div>
    </section>
  )
}