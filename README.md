# 🌸 Jardim da Pele - Curso de Skincare

Uma landing page de vendas profissional criada com Next.js 14, seguindo a metodologia Product Launch Formula (PLF) para o curso de skincare da Dra. Juliana Ferreira.

## ✨ Características

### 🎨 Design
- **Design feminino e moderno** com paleta de cores suaves (rosa, coral, branco)
- **Totalmente responsivo** - funciona perfeitamente em mobile, tablet e desktop
- **Animações suaves** com Framer Motion para uma experiência envolvente
- **Tipografia profissional** com Google Fonts (Inter + Playfair Display)

### 🚀 Tecnologia
- **Next.js 14** com App Router para performance máxima
- **TypeScript** para código mais seguro e maintível
- **Tailwind CSS** para estilização eficiente e responsiva
- **Framer Motion** para animações profissionais
- **SEO otimizado** com meta tags, Open Graph, Schema markup

### 💼 Estrutura PLF (Product Launch Formula)
1. **Hook/Problema** - Identifica as dores e frustrações do público
2. **Agitação** - Explora os problemas (marketing, desinformação, ruído)
3. **História pessoal** - Credibilidade da Dra. Juliana
4. **Solução** - Apresenta o curso como a resposta
5. **Prova social** - Depoimentos e resultados reais
6. **Oferta** - Preço, bônus, garantias e urgência
7. **FAQ** - Remove objeções e dúvidas
8. **Fechamento** - Múltiplas oportunidades de conversão

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css         # Estilos globais e Tailwind
│   ├── layout.tsx          # Layout principal com SEO
│   ├── page.tsx           # Página inicial
│   ├── sitemap.ts         # Sitemap para SEO
│   └── robots.ts          # Robots.txt para SEO
├── components/
│   ├── layout/
│   │   └── Footer.tsx     # Footer com links e trust signals
│   ├── sections/
│   │   ├── HeroSection.tsx        # Seção principal com hook
│   │   ├── ProblemSection.tsx     # Agitação dos problemas
│   │   ├── StorySection.tsx       # História da Dra. Juliana
│   │   ├── SolutionSection.tsx    # Apresentação da solução
│   │   ├── CredibilitySection.tsx # Credibilidade e autoridade
│   │   ├── TestimonialsSection.tsx # Prova social
│   │   ├── OfferSection.tsx       # Oferta principal
│   │   └── FAQSection.tsx         # Perguntas frequentes
│   ├── ui/
│   │   ├── Button.tsx     # Componente de botão reutilizável
│   │   └── Card.tsx       # Componente de card reutilizável
│   └── Analytics.tsx      # Configuração do Google Analytics e Facebook Pixel
├── lib/
│   └── utils.ts          # Funções utilitárias
└── types/               # Definições de tipos TypeScript
```

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

2. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

3. **Abra o navegador:**
```
http://localhost:3000
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Providers
- **Netlify**: Funciona perfeitamente
- **AWS Amplify**: Suporte nativo para Next.js
- **DigitalOcean App Platform**: Boa opção custo-benefício

## ⚙️ Configuração

### 1. SEO e Analytics

**Edite `src/app/layout.tsx`:**
```typescript
// Descomente e configure seus IDs
<GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
<FacebookPixel pixelId="FB_PIXEL_ID" />
```

**Configure o domínio:**
```typescript
// src/app/layout.tsx
metadataBase: new URL('https://seudominio.com.br'),
```

### 2. Informações de Contato

**Edite `src/components/layout/Footer.tsx`:**
- Email de contato
- Telefone/WhatsApp
- Links das redes sociais
- CNPJ e informações legais

### 3. Imagens

**Substitua as imagens placeholder:**
- Coloque as fotos reais da Dra. Juliana
- Adicione imagens de antes/depois dos tratamentos
- Otimize todas as imagens para web (WebP recomendado)

### 4. Copywriting

**Personalize o conteúdo em cada seção:**
- `HeroSection.tsx` - Título principal e proposta de valor
- `TestimonialsSection.tsx` - Depoimentos reais
- `OfferSection.tsx` - Preços e bônus específicos
- `FAQSection.tsx` - Perguntas baseadas no seu público

## 🎯 Otimizações de Conversão

### Elementos Implementados:
- ✅ Múltiplos CTAs estrategicamente posicionados
- ✅ Urgência e escassez (tempo limitado, vagas limitadas)
- ✅ Prova social (depoimentos, números, certificações)
- ✅ Garantia de 30 dias
- ✅ Preço parcelado para reduzir barreira
- ✅ FAQ para remover objeções
- ✅ Design que gera confiança

### Para Maximizar Conversões:
1. **Teste A/B** em headlines e CTAs
2. **Monitore** scroll depth e cliques nos CTAs
3. **Optimize** para mobile (mais de 70% do tráfego)
4. **Use** chat/WhatsApp para suporte em tempo real

## 📱 Mobile First

O site foi desenvolvido com abordagem **mobile-first**:
- Layout adaptado para telas pequenas
- Botões com tamanho adequado para toque
- Texto legível sem zoom
- Navegação simplificada
- Carregamento rápido em 3G

## 🔍 SEO Implementado

### On-Page SEO:
- ✅ Meta tags otimizadas
- ✅ Open Graph para redes sociais
- ✅ Schema.org markup (Curso + Pessoa)
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ URLs amigáveis
- ✅ Estrutura de headers (H1-H6)

### Performance:
- ✅ Imagens otimizadas com next/image
- ✅ Lazy loading automático
- ✅ Code splitting
- ✅ CSS otimizado
- ✅ Web Vitals otimizados

## 🧪 Testes

### Para Testar:
```bash
npm run build      # Testa a build de produção
npm run start      # Testa o site em produção local
npm run lint       # Verifica problemas no código
npm run type-check # Verifica tipos TypeScript
```

### Ferramentas Recomendadas:
- **Google PageSpeed Insights** - Performance
- **Google Search Console** - SEO
- **GTmetrix** - Análise detalhada
- **Lighthouse** - Auditoria completa

## 📈 Monitoramento

### Analytics Configurados:
- **Google Analytics 4** - Comportamento dos usuários
- **Facebook Pixel** - Rastreamento de conversões
- **Eventos customizados** - CTAs, formulários, vídeos

### Métricas Importantes:
- Taxa de conversão por seção
- Tempo na página
- Taxa de rejeição
- Fontes de tráfego
- Dispositivos mais usados

## 💡 Próximos Passos

1. **Personalize** todo o conteúdo com informações reais
2. **Configure** analytics e pixels de rastreamento
3. **Adicione** integração com Gateway de Pagamento
4. **Implemente** sistema de captação de leads
5. **Configure** email marketing para seguimento
6. **Teste** diferentes headlines e ofertas

## 🆘 Suporte

Para dúvidas sobre implementação:
- Documentação do Next.js: https://nextjs.org/docs
- Documentação do Tailwind: https://tailwindcss.com/docs
- Documentação do Framer Motion: https://www.framer.com/motion/

---

**Desenvolvido com ❤️ usando Next.js 14 e tecnologias modernas para máxima performance e conversão.**