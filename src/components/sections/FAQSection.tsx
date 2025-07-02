'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import { scrollToElement } from '@/lib/utils'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Esse curso funciona para qualquer tipo de pele?",
      answer: "Sim! O curso ensina você a identificar exatamente qual é o seu tipo de pele REAL (não aqueles tipos genéricos que você vê por aí) e como criar uma rotina personalizada. Independente se sua pele é oleosa, seca, mista, sensível ou com problemas específicos como acne ou manchas, você aprenderá as técnicas corretas para sua situação."
    },
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer: "A maioria das nossas alunas relatam melhorias visíveis entre 15-30 dias. Isso varia de pessoa para pessoa, mas geralmente: melhor textura e menos oleosidade em 1-2 semanas, redução de acne ativa em 2-4 semanas, e melhora geral na qualidade da pele em 30-60 dias. Lembre-se: não existe milagre, mas existe ciência aplicada corretamente!"
    },
    {
      question: "Preciso comprar produtos caros depois do curso?",
      answer: "Não! Uma das principais coisas que você aprenderá é como identificar produtos eficazes independente do preço. Ensino como ler rótulos, identificar ingredientes ativos reais e encontrar produtos excelentes em qualquer faixa de preço. Muitas alunas até economizam dinheiro parando de comprar produtos desnecessários."
    },
    {
      question: "E se eu já tentei de tudo e nada funcionou?",
      answer: "Essa é exatamente a situação da maioria das nossas alunas quando chegam até mim! O problema não é que 'nada funciona' para você - o problema é que você estava fazendo do jeito errado. Quando você entende como sua pele realmente funciona e para de seguir conselhos aleatórios, os resultados aparecem. Por isso oferecemos 30 dias de garantia."
    },
    {
      question: "Quanto tempo por dia preciso dedicar aos cuidados?",
      answer: "Uma das coisas que mais enfatizo é a simplicidade. Uma rotina eficaz leva entre 5-10 minutos pela manhã e 5-10 minutos à noite. Não acredito em rotinas complicadas de 15 passos. O curso ensina você a ser estratégica e usar seu tempo da forma mais eficiente possível."
    },
    {
      question: "O curso é adequado para iniciantes completas?",
      answer: "Perfeitamente! O curso foi pensado para mulheres que estão cansadas de tentar resolver sozinhas e querem aprender do zero da forma correta. Começamos desde o básico absoluto - como a pele funciona - até técnicas avançadas. Não assumo que você sabe nada, explico tudo passo a passo."
    },
    {
      question: "Posso acessar o curso pelo celular?",
      answer: "Sim! O curso é 100% online e otimizado para qualquer dispositivo. Você pode assistir pelo celular, tablet, computador ou smart TV. As aulas ficam disponíveis 24/7 e você pode assistir no seu ritmo, pausar, voltar, quantas vezes quiser."
    },
    {
      question: "Tem garantia? E se eu não gostar?",
      answer: "Sim! Oferecemos 30 dias de garantia incondicional. Se dentro desse período você sentir que o curso não é para você, devolvemos 100% do seu dinheiro, sem perguntas, sem burocracia. Minha missão é transformar sua relação com sua pele, não apenas vender um curso."
    },
    {
      question: "Vou ter acesso a suporte se tiver dúvidas?",
      answer: "Absolutamente! Além do suporte por email, você terá acesso à nossa comunidade exclusiva de alunas, onde pode fazer perguntas e trocar experiências. Também fazemos masterclasses ao vivo mensais para tirar dúvidas em tempo real. Você nunca estará sozinha nessa jornada."
    },
    {
      question: "O curso substitui a ida ao dermatologista?",
      answer: "Não! O curso ensina cuidados diários e prevenção, não tratamento de doenças. Se você tem alguma condição médica (como rosácea severa, dermatite, etc.), sempre consulte um dermatologista. O curso complementa o trabalho médico, ensinando você a cuidar da pele entre as consultas e a manter os resultados dos tratamentos."
    },
    {
      question: "Por quanto tempo tenho acesso ao conteúdo?",
      answer: "O acesso é vitalício! Uma vez matriculada, você pode acessar o curso para sempre. Além disso, sempre que atualizarmos o conteúdo ou adicionarmos novas aulas, você recebe sem custo adicional. É um investimento único para toda a vida."
    },
    {
      question: "E se eu não tiver tempo para fazer o curso agora?",
      answer: "Perfeito! Como o acesso é vitalício, você pode começar quando quiser e ir no seu ritmo. Muitas alunas fazem uma aula por dia, outras preferem maratonar no fim de semana. O importante é que o conteúdo estará sempre lá esperando você, e você pode voltar quantas vezes precisar."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="section-container max-w-4xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Separamos as dúvidas mais comuns para você se sentir 100% segura antes de tomar sua decisão
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-primary-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 bg-white bg-opacity-70">
                      <p className="text-neutral-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div 
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ainda tem alguma dúvida?
          </h3>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar! Entre em contato conosco pelo WhatsApp ou email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="group">
              <span className="mr-2">📱</span>
              Falar no WhatsApp
            </Button>
            
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-primary-500">
              <span className="mr-2">✉️</span>
              Enviar Email
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white border-opacity-20">
            <p className="text-lg font-semibold mb-4">
              Ou melhor ainda...
            </p>
            
            <p className="text-xl mb-6">
              <strong>Teste o curso por 30 dias com nossa garantia total!</strong>
            </p>
            
            <Button 
              variant="secondary" 
              size="xl" 
              onClick={() => scrollToElement('offer-section')}
              className="group"
            >
              <span className="relative z-10">
                🚀 QUERO COMEÇAR AGORA SEM RISCOS
              </span>
            </Button>
            
            <p className="text-sm mt-4 opacity-90">
              Se não ficar 100% satisfeita, devolvemos todo seu dinheiro
            </p>
          </div>
        </motion.div>

        {/* Objection handling */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-green-50 rounded-2xl">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">✓</span>
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">Risco Zero</h4>
            <p className="text-sm text-neutral-600">
              30 dias de garantia incondicional. Não gostou? Devolvemos 100% do valor.
            </p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">Compra Segura</h4>
            <p className="text-sm text-neutral-600">
              Pagamento 100% seguro e criptografado. Seus dados estão protegidos.
            </p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">∞</span>
            </div>
            <h4 className="font-bold text-neutral-900 mb-2">Acesso Vitalício</h4>
            <p className="text-sm text-neutral-600">
              Pague uma vez e tenha acesso para sempre, incluindo atualizações.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}