'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function StorySection() {
  const beforeAfterPoints = [
    {
      before: "Desinformada e sobrecarregada com mitos",
      after: "Entendimento científico da pele"
    },
    {
      before: "Destruí minha pele várias vezes",
      after: "Rotina simples e eficaz"
    },
    {
      before: "Culpava hormônios e alimentação",
      after: "Foco no que realmente importa"
    },
    {
      before: "Produtos caros e complicados",
      after: "2x ao dia. Só isso."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="section-container">
        {/* Section title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            EU MANTENHO MINHA PELE SAUDÁVEL <span className="gradient-text">DESDE 2016 — E NÃO É DIFÍCIL</span>
          </h2>
        </motion.div>

        {/* Before and After Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Before - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-medium border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">ANTES</span>
                Minha pele quando eu seguia conselhos aleatórios da internet:
              </h3>
              
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Pele com problemas - antes"
                  width={400}
                  height={300}
                  className="rounded-2xl object-cover w-full h-64 opacity-75"
                />
                <div className="absolute inset-0 bg-red-400 bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    Frustração e desespero
                  </span>
                </div>
              </div>
              
              <p className="text-neutral-700 text-lg leading-relaxed">
                <strong>Desinformada e sobrecarregada com mitos, destruí minha pele várias vezes, culpando hormônios e alimentação.</strong>
              </p>
            </div>
          </motion.div>

          {/* After - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-medium border-l-4 border-green-400">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">DEPOIS</span>
                Minha pele depois que parei de ouvir conselhos "bem-intencionados":
              </h3>
              
              <div className="relative mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Pele saudável - depois"
                  width={400}
                  height={300}
                  className="rounded-2xl object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-green-400 bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                    Confiança e beleza
                  </span>
                </div>
              </div>
              
              <p className="text-neutral-700 text-lg leading-relaxed mb-4">
                <strong>Entender como a pele funciona me ajudou a escolher produtos e hábitos que realmente apoiam esse órgão incrível.</strong>
              </p>
              
              <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                <p className="text-green-800 font-bold text-xl text-center">
                  Minha rotina? 2x ao dia. Só isso.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformation comparison */}
        <div className="bg-white rounded-3xl p-12 shadow-strong mb-16">
          <motion.h3 
            className="text-3xl font-bold text-center text-neutral-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            A diferença é gritante:
          </motion.h3>
          
          <div className="space-y-6">
            {beforeAfterPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 text-center">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-xl font-medium text-sm mb-2">
                    ANTES
                  </div>
                  <p className="text-neutral-700">{point.before}</p>
                </div>
                
                <div className="mx-6">
                  <ArrowRight className="w-8 h-8 text-primary-500" />
                </div>
                
                <div className="flex-1 text-center">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-medium text-sm mb-2">
                    DEPOIS
                  </div>
                  <p className="text-neutral-700 font-semibold">{point.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key insight */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            A pele protege todos os nossos órgãos. Mas quem protege a pele?
          </h3>
          
          <p className="text-2xl font-bold mb-4">
            Você… ou não.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p>
              As fotos "antes" que você vê aqui? São o resultado de quem tenta proteger a pele <strong>do jeito errado.</strong>
            </p>
            <p>
              As fotos "depois"? <strong>Mostram como eu ensino a proteger a sua pele.</strong>
            </p>
          </div>
        </motion.div>

        {/* The truth section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
            A VERDADE É:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-red-700 mb-4">❌ É fácil destruir</h4>
              <ul className="space-y-3 text-neutral-700">
                <li>• Qualquer um pode destruir uma pele saudável — sem querer, por acidente ou falta de informação</li>
                <li>• Qualquer um pode causar desequilíbrios e inflamações na pele</li>
                <li>• Nossa pele odeia maus-tratos</li>
                <li>• Ignorar suas necessidades só piora tudo</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-green-700 mb-4">✅ Você tem o poder</h4>
              <ul className="space-y-3 text-neutral-700">
                <li>• Mas temos <strong>MUITO poder</strong> sobre a saúde da nossa pele</li>
                <li>• Existe um caminho direto para a pele limpa</li>
                <li>• O problema é que estamos <strong>distraídas</strong> pelo marketing, desinformação e ruído</li>
                <li>• <strong>Você pode aprender o jeito certo!</strong></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}