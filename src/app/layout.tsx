import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './(frontend)/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://realaccelerate.nl'),
  title: {
    default: 'Real Accelerate | Online marketing voor vastgoedprofessionals',
    template: '%s | Real Accelerate',
  },
  description:
    'Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers',
  keywords: [
    'online marketing',
    'vastgoed marketing',
    'makelaars',
    'real estate marketing',
    'lead generation',
  ],
  authors: [{ name: 'Real Accelerate' }],
  creator: 'Real Accelerate',
  publisher: 'Real Accelerate',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://realaccelerate.nl',
    siteName: 'Real Accelerate',
    title: 'Real Accelerate | Online marketing voor vastgoedprofessionals',
    description:
      'Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers',
    images: [
      {
        url: '/images/logorealaccelerate.webp',
        width: 1200,
        height: 630,
        alt: 'Real Accelerate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Accelerate | Online marketing voor vastgoedprofessionals',
    description:
      'Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers',
    images: ['/images/logorealaccelerate.webp'],
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
}

// Organization structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Real Accelerate',
  description:
    'Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers',
  url: 'https://realaccelerate.nl',
  logo: 'https://realaccelerate.nl/images/logorealaccelerate.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31-85-060-2989',
    contactType: 'Customer Service',
    email: 'info@realaccelerate.nl',
    areaServed: 'NL',
    availableLanguage: ['Dutch', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Daalwijkdreef 47',
    postalCode: '1103 AD',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
  sameAs: [
    'https://www.linkedin.com/company/realaccelerate',
    'https://www.facebook.com/realaccelerate',
    'https://www.instagram.com/realaccelerate',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="dark">
      <head>
        {/* Preload critical hero poster image for LCP with highest priority */}
        <link
          rel="preload"
          href="/images/herofootage_first_frame.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Preload critical font to reduce render blocking */}
        <link
          rel="preload"
          href="/_next/static/media/93f479601ee12b01-s.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  )
}
