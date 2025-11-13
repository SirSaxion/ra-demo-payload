import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const payload = await getPayload({ config })

    // Fetch SEO settings
    const seoSettings = await payload.findGlobal({
      slug: 'seo',
    })

    // Check if sitemap is enabled
    if (!seoSettings?.sitemap?.enabled) {
      return []
    }

    const baseUrl = seoSettings.siteSettings?.canonicalUrl || 'https://www.realaccelerate.nl'
    const defaultChangeFreq = seoSettings.sitemap.defaultChangeFrequency || 'weekly'
    const defaultPriority = seoSettings.sitemap.defaultPriority || 0.7

    const sitemapEntries: MetadataRoute.Sitemap = []

    // Add pages if enabled
    if (seoSettings.sitemap.includePages) {
      const pages = await payload.find({
        collection: 'pages',
        where: {
          _status: {
            equals: 'published',
          },
        },
        limit: 1000,
      })

      for (const page of pages.docs) {
        const url = page.slug === '/' ? baseUrl : `${baseUrl}${page.slug}`

        sitemapEntries.push({
          url,
          lastModified: new Date(page.updatedAt),
          changeFrequency: defaultChangeFreq as any,
          priority: page.slug === '/' ? 1.0 : defaultPriority,
        })
      }
    }

    // Add case studies if enabled
    if (seoSettings.sitemap.includeCaseStudies) {
      const caseStudies = await payload.find({
        collection: 'case-studies',
        limit: 1000,
      })

      for (const caseStudy of caseStudies.docs) {
        sitemapEntries.push({
          url: `${baseUrl}/cases/${caseStudy.id}`,
          lastModified: new Date(caseStudy.updatedAt),
          changeFrequency: 'monthly' as any,
          priority: 0.8,
        })
      }
    }

    // Always add contact page
    sitemapEntries.push({
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as any,
      priority: 0.8,
    })

    return sitemapEntries
  } catch (error) {
    console.error('Failed to generate sitemap:', error)

    // Fallback sitemap with essential routes
    const baseUrl = 'https://www.realaccelerate.nl'
    const currentDate = new Date()

    return [
      { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
      {
        url: `${baseUrl}/cases`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/over-ons`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/makelaars`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/makelaars-buitenland`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/hypotheekadviseurs`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/projectontwikkelaars`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/hr-recruitment`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
    ]
  }
}
