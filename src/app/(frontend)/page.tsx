import type { Metadata } from "next";
import PayloadBlockRenderer from "@/components/PayloadBlockRenderer";
import { getPayload } from 'payload'
import config from '@/payload.config'

// Make this page dynamic to fetch from Payload
export const dynamic = 'force-dynamic'

async function getPageData() {
  try {
    const payload = await getPayload({ config })
    
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
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

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData()
  
  if (!page) {
    return {
      title: "Real Accelerate | Loading...",
      description: "Loading content...",
    }
  }
  
  return {
    title: page.seo?.metaTitle || page.title || "Real Accelerate",
    description: page.seo?.metaDescription || "Real Accelerate - Online marketing voor vastgoedprofessionals",
  }
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Real Accelerate",
  "description": "Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers",
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

export default async function HomePage() {
  const page = await getPageData()
  
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
  
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background font-sans">
        <PayloadBlockRenderer blocks={page.blocks || []} />
      </div>
    </>
  );
}
