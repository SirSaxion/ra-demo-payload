import type { Metadata } from "next";
import PayloadBlockRenderer from "@/components/PayloadBlockRenderer";
import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'

// Make this page dynamic to fetch from Payload
export const dynamic = 'force-dynamic'

const locales = ['en', 'nl'] as const
type Locale = typeof locales[number]

async function getPageData(locale: Locale) {
  try {
    const payload = await getPayload({ config })
    
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
      locale,
      limit: 1,
    })
    
    if (pages.docs.length === 0) {
      return null
    }
    
    return pages.docs[0]
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
}

async function getSiteSettings(locale: Locale) {
  try {
    const payload = await getPayload({ config })
    return await payload.findGlobal({ slug: 'site-settings', locale })
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale as Locale
  
  if (!locales.includes(locale)) {
    return {
      title: "Not Found",
    }
  }
  
  const page = await getPageData(locale)
  
  if (!page) {
    return {
      title: "Real Accelerate | Loading...",
      description: "Loading content...",
    }
  }
  
  return {
    title: page.seo?.metaTitle || page.title || "Real Accelerate",
    description: page.seo?.metaDescription || "Real Accelerate - Online marketing for real estate professionals",
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export default async function LocaleHomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  
  // Check if locale is valid
  if (!locales.includes(locale)) {
    notFound()
  }
  
  const [page, siteSettings] = await Promise.all([
    getPageData(locale),
    getSiteSettings(locale),
  ])
  
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading page...</h1>
          <p className="text-muted-foreground">Please wait while we fetch the content.</p>
        </div>
      </div>
    )
  }
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Real Accelerate",
    "description": locale === 'en' 
      ? "Online marketing agency specialized in real estate marketing for agents and real estate entrepreneurs"
      : "Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers",
    "url": "https://realaccelerate.nl",
    "telephone": "085 060 2989",
    "email": "info@realaccelerate.nl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Daalwijkdreef 47",
      "postalCode": "1103 AD",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3676,
      "longitude": 4.9041
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };
  
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background font-sans">
        <PayloadBlockRenderer blocks={page.blocks || []} siteSettings={siteSettings} />
      </div>
    </>
  );
}
