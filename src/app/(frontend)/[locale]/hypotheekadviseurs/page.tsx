import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import PayloadBlockRenderer from '@/components/PayloadBlockRenderer'

export const dynamic = 'force-dynamic'

type Locale = 'nl' | 'en'

async function getPageData(locale: Locale) {
  const payload = await getPayload({ config })
  
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: '/hypotheekadviseurs',
      },
    },
    locale,
  })
  
  return pages.docs[0]
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const page = await getPageData(params.locale)
  
  return {
    title: page?.seo?.metaTitle || 'Hypotheekadviseur marketing | Real Accelerate',
    description: page?.seo?.metaDescription || 'Word onafhankelijk van offerte-sites. Bouw een voorspelbare klantenstroom met bewezen campagnes.',
  }
}

export default async function HypotheekadviseursPage({ params }: { params: { locale: Locale } }) {
  const page = await getPageData(params.locale)
  
  if (!page) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <PayloadBlockRenderer blocks={page.blocks || []} />
    </div>
  )
}
