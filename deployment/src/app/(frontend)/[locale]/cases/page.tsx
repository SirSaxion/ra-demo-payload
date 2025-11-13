import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import PayloadBlockRenderer from '@/components/PayloadBlockRenderer'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Locale = 'nl' | 'en'

interface PageProps {
  params: {
    locale: Locale
  }
}

async function getPageData(locale: Locale) {
  try {
    const payload = await getPayload({ config })
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/cases',
        },
        _status: {
          equals: 'published',
        },
      },
      locale,
      limit: 1,
    })

    return pages.docs[0] || null
  } catch (error) {
    console.error('Error fetching cases page:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageData(params.locale)

  if (!page) {
    return {
      title: 'Cases & Resultaten | Real Accelerate',
      description: 'Bewezen resultaten van honderden vastgoedprofessionals.',
    }
  }

  return {
    title: page.seo?.metaTitle || page.title || 'Cases & Resultaten',
    description: page.seo?.metaDescription || 'Bewezen resultaten van honderden vastgoedprofessionals.',
  }
}

export default async function CasesPage({ params }: PageProps) {
  const page = await getPageData(params.locale)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <PayloadBlockRenderer blocks={page.blocks || []} />
    </div>
  )
}
