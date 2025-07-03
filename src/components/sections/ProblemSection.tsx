'use client'

import { AlertTriangle, TrendingDown, Volume2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Marketing",
      description: "O trabalho de uma marca é vender. Elas dizem o que for preciso para isso. Você quer acreditar nas promessas do rótulo… mesmo que os resultados não batam. Produtos caros não significam produtos de qualidade ou adequados para sua pele.",
      color: "text-red-500"
    },
    {
      icon: AlertTriangle,
      title: "Desinformação",
      description: "Você acredita tanto no marketing que, quando surgem \"explicações\" como \"são seus genes, sua alimentação, seus hormônios\", você pensa: \"Será que tem algo de errado comigo?\"",
      color: "text-orange-500"
    },
    {
      icon: Volume2,
      title: "Ruído",
      description: "Todo mundo está no mesmo barco — repetindo marketing e desinformação — até parecer que isso é tudo que existe. A confusão cresce, a frustração aumenta e você fica obcecada com sua pele… Ignorando a solução mais óbvia.",
      color: "text-purple-500"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Opening statement */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Podemos concordar que <span className="gradient-text">sua vida não precisa girar em torno da sua pele?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-neutral-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Conquistar uma pele bonita parece cada vez mais difícil
          </motion.p>
          
          <motion.p 
            className="text-lg text-neutral-600 font-medium"
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
            className="text-xl text-center text-neutral-700 mb-12 leading-relaxed"
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
                  <div className={`inline-flex p-4 rounded-2xl bg-white shadow-soft mb-6 ${problem.color}`}>
                    <problem.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {problem.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emotional impact */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                O resultado? Uma bagunça total na sua cabeça...
              </h3>
              
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  🔄 Você testa produto após produto sem ver resultado
                </p>
                <p>
                  💸 Gasta dinheiro com promessas que não se cumprem
                </p>
                <p>
                  😰 Se sente perdida no meio de tanta informação contraditória
                </p>
                <p>
                  😔 Culpa seu corpo, seus genes, sua alimentação
                </p>
                <p className="font-semibold text-primary-600">
                  E no final... parece que você "já tentou de tudo" mas nada funciona.
                </p>
              </div>
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
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Mas e se eu te dissesse que existe uma forma muito mais simples de resolver isso tudo?
          </p>
          
          <div className="mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold">
              Continue lendo para descobrir...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}