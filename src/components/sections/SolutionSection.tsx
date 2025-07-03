'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { scrollToElement } from '@/lib/utils'

export default function SolutionSection() {
  const frustrations = [
    "Cansada de comprar e testar sem ver resultado?",
    "Cansada de gastar dinheiro com produtos que não funcionam?",
    "Cansada de entrar na farmácia e se sentir perdida no meio de tantas opções?",
    "Cansada de seguir promessas milagrosas de influenciadores?",
    "Cansada de culpar o corpo, dieta, hormônios?",
    "Cansada de ouvir que \"você terá que conviver com isso pra sempre\"?",
    "Cansada de pesquisar \"como acabar com acne/cravos/etc.\" todo santo dia?",
    "Cansada de cobrir com maquiagem e correr pro espelho a cada momento livre?",
    "Cansada de conselhos aleatórios de estranhos?",
    "Cansada de perder a vida obcecada com uma pele que não melhora?"
  ]

  const courseComponents = [
    {
      icon: BookOpen,
      title: "Conhecimento",
      description: "Saber o quê, por quê, como e quando fazer cada coisa.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Produtos Bem-Formulados",
      description: "Saber identificar o que realmente funciona — e não seguir modinha.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Consistência",
      description: "Manter uma rotina que funcione para a sua pele.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Paciência",
      description: "Sem ela, você pula de produto em produto e nunca vê resultado.",
      color: "from-pink-500 to-pink-600"
    }
  ]

  const handleCTAClick = () => {
    scrollToElement('credibility-section')
  }

  return (
    <section id="solution-section" className="section-padding bg-white">
      <div className="section-container">
        {/* Not alone section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
            NÃO ESTOU <span className="gradient-text">SOZINHA</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12">
            <p className="text-xl text-neutral-700 mb-6">
              Muitas pacientes me escrevem com experiências parecidas.
            </p>
            
            <div className="space-y-4 text-lg text-neutral-600">
              <p>• Achamos que há algo errado conosco.</p>
              <p>• Copiamos os outros.</p>
              <p>• Seguimos conselhos de "influenciadoras".</p>
              <p>• E causamos mais danos.</p>
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-soft">
              <p className="text-xl font-bold text-primary-600 mb-2">
                É o famoso "cego guiando cego".
              </p>
              <p className="text-lg text-neutral-700">
                E no fim? Parece que tentamos de tudo e que a acne é para sempre.
              </p>
              <p className="text-lg font-bold text-neutral-900 mt-4">
                Mas não precisa ser assim.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skincare is a skill */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Skincare é uma <span className="gradient-text">HABILIDADE!</span>
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-12">
            E NENHUMA DE NÓS FOI ENSINADA A FAZÊ-LO…
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">Você merece ter pele limpa e saudável em casa.</h4>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-500 to-rose-500 text-white rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">Pele limpa não é impossível, é natural.</h4>
            </div>
            
            <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">Não exige mudar sua vida, só seus hábitos.</h4>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-green-800">
              Não é só para quem tem "bons genes", mas para quem desenvolve boas habilidades.
            </p>
          </div>
        </motion.div>

        {/* Frustration list */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-6">
            EU TAMBÉM ACHEI QUE <span className="gradient-text">"JÁ TINHA TENTADO DE TUDO"</span>
          </h2>
          
          <h3 className="text-2xl font-semibold text-center text-neutral-700 mb-12">
            E você?
          </h3>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-4">
              {frustrations.map((frustration, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-soft"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-500 text-xl">😤</span>
                  <p className="text-neutral-700">{frustration}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-primary-600 mb-4">
                EU SEI.
              </p>
              <p className="text-xl text-neutral-700 mb-4">
                Passei por isso.
              </p>
              <p className="text-lg text-neutral-600">
                E percebi que estava me afundando tentando resolver um problema com a <strong>abordagem errada.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Solution revelation */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              EU NÃO SABIA O QUE ESTAVA FAZENDO
            </h2>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Eu gastava com produtos errados, usava do jeito errado e confiava nos conselhos errados.
            </p>
            
            <div className="bg-primary-500 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-2xl font-bold">
                Parece que tentei de tudo — mas não tentei o certo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Course requirements */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-6">
            DEPOIS DE AJUDAR <span className="gradient-text">CENTENAS DE PACIENTES</span>
          </h2>
          
          <p className="text-xl text-center text-neutral-700 mb-12 max-w-3xl mx-auto">
            Aprendi que: Qualquer pessoa pode aprender a cuidar da pele. Mas skincare exige:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {courseComponents.map((component, index) => (
              <motion.div
                key={component.title}
                className="bg-white rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 text-center group hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${component.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <component.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {component.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {component.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            PODEMOS CONCORDAR QUE VOCÊ JÁ SOFREU DEMAIS?
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agora é hora de retomar o controle. Trocar os palpites por estratégia baseada em evidência.
          </p>
          
          <Button 
            size="xl"
            variant="secondary"
            onClick={handleCTAClick}
            className="group"
          >
            QUERO APRENDER O JEITO CERTO AGORA
          </Button>
          
          <p className="text-sm mt-4 opacity-90">
            ⬇️ Continue lendo para conhecer o curso completo
          </p>
        </motion.div>
      </div>
    </section>
  )
}