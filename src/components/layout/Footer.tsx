'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, Shield, Award, Users, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import { scrollToElement } from '@/lib/utils'

export default function Footer() {
  const trustSignals = [
    {
      icon: Users,
      text: "+10.000 alunas transformadas",
      subtext: "Resultados comprovados"
    },
    {
      icon: Award,
      text: "PhD em Enfermagem",
      subtext: "Formação científica sólida"
    },
    {
      icon: Shield,
      text: "30 dias de garantia",
      subtext: "Compra 100% segura"
    },
    {
      icon: Clock,
      text: "Acesso vitalício",
      subtext: "Investimento único"
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/draijulianaferreira",
      label: "@draijulianaferreira",
      color: "hover:text-pink-500"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@jardimdapele",
      label: "Canal no YouTube",
      color: "hover:text-red-500"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/jardimdapele",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/juliana-ferreira",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    }
  ]

  const legalLinks = [
    { text: "Política de Privacidade", href: "/privacidade" },
    { text: "Termos de Uso", href: "/termos" },
    { text: "Política de Reembolso", href: "/reembolso" },
    { text: "Contrato de Prestação de Serviços", href: "/contrato" }
  ]

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Final CTA Section */}
      <div className="section-padding border-b border-neutral-700">
        <div className="section-container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronta para <span className="gradient-text">transformar sua pele</span> de uma vez por todas?
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Pare de sofrer com problemas de pele. Pare de gastar dinheiro com produtos que não funcionam. 
              <strong className="text-white"> Aprenda o método que já transformou mais de 10.000 mulheres.</strong>
            </p>
            
            <div className="space-y-6">
              <Button 
                size="xl" 
                onClick={() => scrollToElement('offer-section')}
                className="group text-lg px-12 py-6"
              >
                <span className="relative z-10">
                  🌟 SIM, QUERO TRANSFORMAR MINHA PELE AGORA
                </span>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-400">
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  Garantia de 30 dias
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Acesso imediato
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-purple-400" />
                  Suporte vitalício
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="section-padding border-b border-neutral-700">
        <div className="section-container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-white mb-1">{signal.text}</div>
                <div className="text-sm text-neutral-400">{signal.subtext}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* About Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Jardim da Pele</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  O curso mais completo de skincare do Brasil, criado pela Dra. Juliana Ferreira. 
                  Transformamos a vida de milhares de mulheres através da educação e ciência aplicada 
                  aos cuidados da pele.
                </p>
              </div>
              
              {/* Doctor info */}
              <div className="flex items-center space-x-4 bg-neutral-800 rounded-2xl p-6">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Dra. Juliana Ferreira"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">Dra. Juliana Ferreira</div>
                  <div className="text-sm text-neutral-400">PhD em Enfermagem</div>
                  <div className="text-sm text-neutral-400">Especialista em Estética Avançada</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contato & Suporte</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-white">contato@jardimdapele.com.br</div>
                    <div className="text-sm text-neutral-400">Suporte técnico e dúvidas</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-white">(11) 99999-9999</div>
                    <div className="text-sm text-neutral-400">WhatsApp - Seg a Sex, 9h às 18h</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="text-white">São Paulo, SP</div>
                    <div className="text-sm text-neutral-400">Brasil</div>
                  </div>
                </div>
              </div>
              
              {/* Response time */}
              <div className="mt-6 bg-neutral-800 rounded-xl p-4">
                <div className="text-sm font-semibold text-white mb-2">⚡ Tempo de Resposta</div>
                <div className="text-sm text-neutral-300">
                  Email: até 24h úteis<br />
                  WhatsApp: até 2h úteis
                </div>
              </div>
            </motion.div>

            {/* Social Media & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Redes Sociais</h4>
              
              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-neutral-300 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Legal Links */}
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <div className="space-y-2">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700 py-8">
        <div className="section-container">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left">
              <div className="text-neutral-400 text-sm">
                © 2024 Jardim da Pele. Todos os direitos reservados.
              </div>
              <div className="text-neutral-500 text-xs mt-1">
                CNPJ: 00.000.000/0001-00 | Dra. Juliana Ferreira - CRE: 000000
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-xs text-neutral-500 text-center">
                <div>💚 Site desenvolvido com</div>
                <div>tecnologia sustentável</div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-neutral-400">SSL Secure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-neutral-950 py-6">
        <div className="section-container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-neutral-500 max-w-4xl mx-auto leading-relaxed">
              <strong>Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa. As informações contidas neste site 
              não substituem o acompanhamento médico. Em caso de problemas de pele, consulte um dermatologista. 
              O curso Jardim da Pele oferece informações educacionais sobre cuidados da pele baseadas em evidências científicas.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}