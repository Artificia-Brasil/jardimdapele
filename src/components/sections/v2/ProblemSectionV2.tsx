'use client'

import { AlertTriangle, TrendingDown, Volume2, RefreshCw, DollarSign, HelpCircle, Frown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProblemSectionV2() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Marketing",
      description: "O trabalho de uma marca é vender. Elas dizem o que for preciso para isso. Você quer acreditar nas promessas do rótulo… mesmo que os resultados não batam. Produtos caros não significam produtos de qualidade ou adequados para sua pele.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: AlertTriangle,
      title: "Desinformação",
      description: "Você acredita tanto no marketing que, quando surgem \"explicações\" como \"são seus genes, sua alimentação, seus hormônios\", você pensa: \"Será que tem algo de errado comigo?\"",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Volume2,
      title: "Ruído",
      description: "Todo mundo está no mesmo barco — repetindo marketing e desinformação — até parecer que isso é tudo que existe. A confusão cresce, a frustração aumenta e você fica obcecada com sua pele… Ignorando a solução mais óbvia.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ]

  const frustrations = [
    {
      icon: RefreshCw,
      title: "Ciclo sem fim de produtos",
      description: "Você testa produto após produto sem ver resultado",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: DollarSign,
      title: "Dinheiro desperdiçado",
      description: "Gasta dinheiro com promessas que não se cumprem",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: HelpCircle,
      title: "Confusão e sobrecarga",
      description: "Se sente perdida no meio de tanta informação contraditória",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Frown,
      title: "Autoculpa desnecessária",
      description: "Culpa seu corpo, seus genes, sua alimentação",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Opening statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Podemos concordar que <span className="gradient-text">sua vida não precisa girar em torno da sua pele?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-neutral-700 mb-8 font-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Conquistar uma pele bonita parece cada vez mais difícil
          </motion.p>
          
          <motion.p 
            className="text-lg text-neutral-600 font-medium font-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mas não pelos motivos que você pensa.
          </motion.p>
        </div>

        {/* Problem explanation */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.p 
            className="text-xl text-center text-neutral-700 mb-12 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Não é por causa dos seus genes, da sua dieta ou dos seus hormônios — é por causa de <span className="font-bold text-primary-600">3 coisas irritantes:</span>
          </motion.p>

          {/* The 3 problems */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${problem.bgColor} shadow-soft mb-6`}>
                    <problem.icon className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-sans">
                    {problem.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed font-sans">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emotional impact - Professional version without emojis */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center font-sans">
                O resultado? Uma bagunça total na sua cabeça...
              </h3>
              
              {/* Professional grid layout instead of emoji list */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {frustrations.map((frustration, index) => (
                  <motion.div
                    key={frustration.title}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/60"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl ${frustration.bgColor}`}>
                        <frustration.icon className={`w-6 h-6 ${frustration.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2 font-sans">
                          {frustration.title}
                        </h4>
                        <p className="text-neutral-700 font-sans">
                          {frustration.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/60"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-semibold text-primary-600 font-sans">
                  E no final... parece que você "já tentou de tudo" mas nada funciona.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Transition to solution */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-sans">
            Mas e se eu te dissesse que existe uma forma muito mais simples de resolver isso tudo?
          </p>
          
          <div className="mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold font-sans">
              Continue lendo para descobrir...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}