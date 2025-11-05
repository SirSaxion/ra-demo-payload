import type { Metadata } from "next";
import PayloadBlockRenderer from "@/components/PayloadBlockRenderer";
import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'

// Make this page dynamic to fetch from Payload
export const dynamic = 'force-dynamic'

const locales = ['en', 'nl'] as const
type Locale = typeof locales[number]

async function getPageData(slug: string, locale: Locale) {
  try {
    const payload = await getPayload({ config })
    
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: `/${slug}`,
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

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const locale = params.locale as Locale
  const slug = params.slug
  
  if (!locales.includes(locale)) {
    return {
      title: "Not Found",
    }
  }
  
  const page = await getPageData(slug, locale)
  
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
  // Generate params for all page slugs and locales
  const slugs = ['over-ons', 'cases', 'makelaars', 'makelaars-buitenland', 'hypotheekadviseurs', 'hr-recruitment', 'projectontwikkelaars']
  
  const params: { locale: string; slug: string }[] = []
  
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }
  
  return params
}

export default async function LocalePage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale as Locale
  const slug = params.slug
  
  // Check if locale is valid
  if (!locales.includes(locale)) {
    notFound()
  }
  
  const [page, siteSettings] = await Promise.all([
    getPageData(slug, locale),
    getSiteSettings(locale),
  ])
  
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page not found</h1>
          <p className="text-muted-foreground">This page doesn't exist or hasn't been published yet.</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background font-sans">
      <PayloadBlockRenderer blocks={page.blocks || []} siteSettings={siteSettings} />
    </div>
  );
}
