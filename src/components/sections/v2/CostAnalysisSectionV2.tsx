'use client'

import { motion } from 'framer-motion'
import { Calculator, DollarSign, TrendingUp, Lightbulb, BookOpen, FlaskConical, Sparkles } from 'lucide-react'

export default function CostAnalysisSectionV2() {
  const wastefulExpenses = [
    {
      item: "Um sérum que promete milagre",
      price: "R$ 130",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      item: "Um sabonete \"top de linha\" que não se adapta à sua pele",
      price: "R$ 90", 
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      item: "Um hidratante que fica parado no armário",
      price: "R$ 150",
      color: "text-yellow-600", 
      bgColor: "bg-yellow-50"
    },
    {
      item: "Uma consulta que te deixou mais confusa que antes",
      price: "R$ 300",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ]

  const totalWaste = 130 + 90 + 150 + 300

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="section-container">
        {/* Main question */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-sans">
            Você já parou para <span className="gradient-text">somar quanto gasta</span> com produtos que não funcionam?
          </h2>
        </motion.div>

        {/* Cost breakdown */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div 
            className="bg-white rounded-3xl shadow-soft p-8 border border-neutral-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 rounded-2xl">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {wastefulExpenses.map((expense, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-2xl ${expense.bgColor} border border-white/60`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${expense.color.replace('text-', 'bg-')}`}></div>
                    <span className="text-neutral-800 font-medium font-sans">{expense.item}</span>
                  </div>
                  <span className={`font-bold text-lg ${expense.color} font-sans`}>{expense.price}</span>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <motion.div 
              className="border-t-2 border-neutral-200 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between text-2xl font-bold">
                <span className="text-neutral-900 font-sans">Total desperdiçado:</span>
                <span className="text-red-600 font-sans">R$ {totalWaste.toLocaleString()}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Impact statement */}
        <motion.div 
          className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/80 p-3 rounded-xl shadow-soft">
              <TrendingUp className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto font-sans">
            <strong>No fim do mês, o prejuízo não está só no bolso</strong> — está na frustração de não ver resultados.
          </p>
        </motion.div>

        {/* Solution presentation */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl shadow-medium p-8 border border-primary-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-sans">
                O <span className="gradient-text">Jardim da Pele</span> ensina exatamente o que a sua pele precisa.
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-50 p-4 rounded-2xl mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-neutral-700 font-medium font-sans">Ler rótulos com expertise</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-50 p-4 rounded-2xl mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <FlaskConical className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-neutral-700 font-medium font-sans">Entender ativos eficazes</p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-50 p-4 rounded-2xl mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-neutral-700 font-medium font-sans">Montar rotina personalizada</p>
              </motion.div>
            </div>

            <motion.p 
              className="text-center text-neutral-700 mb-6 font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.3 }}
              viewport={{ once: true }}
            >
              Você aprende a escolher os produtos certos para você — <strong>inclusive os mais acessíveis.</strong>
            </motion.p>

            <motion.div 
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-green-800 font-medium mb-4 font-sans">
                <strong>É conhecimento que economiza. Que previne desperdícios. Que se paga no primeiro mês.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Key insight */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="w-8 h-8" />
            </div>
            <p className="text-xl font-semibold font-sans">
              Não é sobre gastar menos. É sobre <strong>gastar melhor</strong> — com consciência e estratégia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}