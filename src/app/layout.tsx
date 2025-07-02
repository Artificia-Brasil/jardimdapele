import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
// import { GoogleAnalytics, FacebookPixel } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jardim da Pele - Curso de Skincare com Dra. Juliana Ferreira',
  description: 'Transforme sua pele com o curso mais completo de skincare do Brasil. Aprenda técnicas profissionais com a Dra. Juliana Ferreira e conquiste a pele dos seus sonhos.',
  keywords: [
    'skincare',
    'cuidados da pele',
    'acne',
    'rotina de beleza',
    'dermatologia',
    'curso de skincare',
    'pele saudável',
    'Dra. Juliana Ferreira',
    'tratamento de pele',
    'beleza natural'
  ].join(', '),
  authors: [{ name: 'Dra. Juliana Ferreira' }],
  creator: 'Dra. Juliana Ferreira',
  publisher: 'Jardim da Pele',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jardimdapele.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jardim da Pele - Curso de Skincare com Dra. Juliana Ferreira',
    description: 'Transforme sua pele com o curso mais completo de skincare do Brasil. Aprenda técnicas profissionais e conquiste a pele dos seus sonhos.',
    url: 'https://jardimdapele.com.br',
    siteName: 'Jardim da Pele',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jardim da Pele - Curso de Skincare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jardim da Pele - Curso de Skincare com Dra. Juliana Ferreira',
    description: 'Transforme sua pele com o curso mais completo de skincare do Brasil.',
    images: ['/og-image.jpg'],
    creator: '@jardimdapele',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code', // Replace with actual verification code
  },
  category: 'health',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  'name': 'Jardim da Pele - Curso Completo de Skincare',
  'description': 'Curso completo de cuidados com a pele ministrado pela Dra. Juliana Ferreira, especialista em dermatologia e estética.',
  'provider': {
    '@type': 'Organization',
    'name': 'Jardim da Pele',
    'url': 'https://jardimdapele.com.br'
  },
  'instructor': {
    '@type': 'Person',
    'name': 'Dra. Juliana Ferreira',
    'jobTitle': 'Dermatologista e Especialista em Estética',
    'image': '/dr-juliana.jpg',
    'sameAs': [
      'https://instagram.com/draijulianaferreira',
      'https://linkedin.com/in/juliana-ferreira'
    ]
  },
  'educationalLevel': 'Beginner to Advanced',
  'courseMode': 'Online',
  'hasCourseInstance': {
    '@type': 'CourseInstance',
    'courseMode': 'Online',
    'instructor': {
      '@type': 'Person',
      'name': 'Dra. Juliana Ferreira'
    }
  },
  'audience': {
    '@type': 'Audience',
    'audienceType': 'Women interested in skincare'
  },
  'about': [
    {
      '@type': 'Thing',
      'name': 'Skincare'
    },
    {
      '@type': 'Thing',
      'name': 'Dermatology'
    },
    {
      '@type': 'Thing',
      'name': 'Beauty Care'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f43f5e" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Uncomment and add your tracking IDs to enable analytics */}
        {/* <GoogleAnalytics gaId="GA_MEASUREMENT_ID" /> */}
        {/* <FacebookPixel pixelId="FB_PIXEL_ID" /> */}
        
        <div className="min-h-screen bg-gradient-primary">
          {children}
        </div>
      </body>
    </html>
  )
}