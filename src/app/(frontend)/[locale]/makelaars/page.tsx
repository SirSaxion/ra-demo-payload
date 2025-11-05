import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import PayloadBlockRenderer from '@/components/PayloadBlockRenderer'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Locale = 'nl' | 'en'

async function getPageData(locale: Locale) {
  const payload = await getPayload({ config })
  
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: '/makelaars',
      },
      _status: {
        equals: 'published',
      },
    },
    locale,
  })
  
  return pages.docs[0]
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const page = await getPageData(params.locale)
  
  return {
    title: page?.seo?.metaTitle || 'Makelaars | Real Accelerate',
    description: page?.seo?.metaDescription || 'Groei je makelaarskantoor met bewezen marketing strategieën',
  }
}

export default async function MakelaarsPage({ params }: { params: { locale: Locale } }) {
  const page = await getPageData(params.locale)
  
  if (!page) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-[var(--bg-background)] font-sans">
      <PayloadBlockRenderer blocks={page.blocks || []} />
    </div>
  )
}
