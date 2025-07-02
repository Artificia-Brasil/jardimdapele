'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Heart, BookOpen, Stethoscope } from 'lucide-react'

export default function CredibilitySection() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "PhD em Enfermagem",
      description: "Formação acadêmica sólida em ciências da saúde"
    },
    {
      icon: Award,
      title: "Especialização em Estética Avançada",
      description: "Conhecimento técnico especializado em cuidados da pele"
    },
    {
      icon: BookOpen,
      title: "Estudos em Anatomia e Fisiologia",
      description: "Compreensão profunda de como a pele realmente funciona"
    },
    {
      icon: Users,
      title: "Centenas de Pacientes Atendidas",
      description: "Experiência prática com casos reais e diversos"
    }
  ]

  const whyTrustHer = [
    {
      problem: "Dermatologista?",
      solution: "Resolve problemas reais, não sua rotina."
    },
    {
      problem: "Clínico geral?",
      solution: "Cuida da sua saúde geral, não da sua pele."
    },
    {
      problem: "Procedimentos estéticos?",
      solution: "Deixa a pele bonita, mas não muda seus hábitos."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="section-container">
        {/* Main introduction */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
            POR QUE EU POSSO <span className="gradient-text">TE AJUDAR?</span>
          </h2>
          
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Antes de ser especialista em skincare, <strong>eu era como você.</strong>
          </p>
        </motion.div>

        {/* Dr. Juliana's profile */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo and basic info */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Dra. Juliana Ferreira"
                  width={400}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
                
                {/* Credential badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Stethoscope className="w-5 h-5 text-primary-500" />
                    <span className="font-bold text-neutral-900">Dra. Juliana Ferreira</span>
                  </div>
                  <p className="text-sm text-neutral-600 text-center mt-1">
                    PhD em Enfermagem | Estética Avançada
                  </p>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-4 shadow-strong animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold">7+</div>
                  <div className="text-xs">Anos transformando vidas</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Credentials and story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Minha formação me salvou dos erros?
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Sou a <strong>Dra. Juliana Ferreira</strong>, tenho PhD em Enfermagem, com especialização em Estética Avançada. 
                  Sou apaixonada pela pele e obcecada por entender como ela realmente funciona.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed mt-4">
                  Mas por muito tempo, <strong>nem mesmo minha formação me salvou dos erros</strong> que cometi com a minha própria pele.
                </p>
              </div>

              {/* Credentials grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential.title}
                    className="bg-white rounded-2xl p-4 shadow-soft border border-primary-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-3">
                      <credential.icon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-neutral-900 text-sm">{credential.title}</h4>
                        <p className="text-xs text-neutral-600 mt-1">{credential.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal story */}
        <motion.div 
          className="bg-white rounded-3xl p-12 shadow-medium mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-8">
              A verdade é que <span className="text-primary-600">eu era como você...</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl">😢</div>
                <p className="text-neutral-700">
                  <strong>Assim como você, eu já chorei no espelho.</strong>
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl">💸</div>
                <p className="text-neutral-700">
                  <strong>Já gastei dinheiro com produtos que prometiam milagres.</strong>
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl">😕</div>
                <p className="text-neutral-700">
                  <strong>Já fui atendida por médicos incríveis — mas que não sabiam me ensinar o que eu realmente precisava.</strong>
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <p className="text-lg text-neutral-700 text-center leading-relaxed">
                Eu seguia conselhos bem-intencionados, testava tudo que via nas redes, fazia tratamentos caros sem entender o porquê… 
                <strong className="text-primary-600"> E ainda assim, minha pele só piorava.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* The turning point */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-3xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Foi nesse momento de frustração que decidi parar tudo.
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                  <div className="text-2xl mb-2">🛑</div>
                  <p className="font-semibold">Respirar</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="font-semibold">Estudar</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                  <div className="text-2xl mb-2">👀</div>
                  <p className="font-semibold">Observar</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                  <div className="text-2xl mb-2">🧪</div>
                  <p className="font-semibold">Praticar</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                Comecei a estudar profundamente a anatomia e fisiologia da pele. Não para "decorar nomes", 
                mas para entender como ela se comporta na vida real — no calor, no estresse, nos ciclos hormonais, no uso dos produtos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why others can't help */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
            NINGUÉM CONSEGUIU <span className="gradient-text">ME AJUDAR</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyTrustHer.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-medium text-center">
                <h4 className="text-xl font-bold text-red-600 mb-4">{item.problem}</h4>
                <p className="text-neutral-700">{item.solution}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-xl font-bold">
                Perguntar à pessoa errada leva à resposta errada.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Results and mission */}
        <motion.div 
          className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            O resultado?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl mb-4">✨</div>
              <h4 className="font-bold text-green-700 mb-2">Minha pele mudou</h4>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl mb-4">💪</div>
              <h4 className="font-bold text-green-700 mb-2">Minha confiança voltou</h4>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-bold text-green-700 mb-2">Minha missão nasceu</h4>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Hoje, atendo mulheres reais, com rotinas reais, que chegam até mim depois de já terem tentado de tudo — 
              e saem com um novo olhar sobre a própria pele.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed">
              Um olhar de <strong className="text-green-700">acolhimento, não de culpa</strong>. 
              De <strong className="text-green-700">cuidado, não de desespero</strong>. 
              De <strong className="text-green-700">clareza, não de confusão</strong>.
            </p>
          </div>
        </motion.div>

        {/* Course origin */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary-500 text-white rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Esse curso nasceu desse processo.
            </h3>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ele é o curso que <strong>eu gostaria de ter feito há anos</strong>, quando tudo parecia tão difícil e confuso.
            </p>
            
            <div className="bg-white bg-opacity-20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                Não é sobre mil passos ou produtos caros. É sobre te ensinar, de forma clara, prática e direta, 
                <strong> o que nunca te ensinaram: Como cuidar da sua pele de verdade.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}