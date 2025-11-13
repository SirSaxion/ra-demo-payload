import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function robots(): Promise<MetadataRoute.Robots> {
  try {
    const payload = await getPayload({ config })

    // Fetch SEO settings
    const seoSettings = await payload.findGlobal({
      slug: 'seo',
    })

    // Check if robots.txt is enabled
    if (!seoSettings?.robotsTxt?.enabled) {
      return {
        rules: {
          userAgent: '*',
          allow: '/',
        },
        sitemap: `${seoSettings?.siteSettings?.canonicalUrl || 'https://www.realaccelerate.nl'}/sitemap.xml`,
      }
    }

    const baseUrl = seoSettings.siteSettings?.canonicalUrl || 'https://www.realaccelerate.nl'

    // If custom robots.txt is provided, we can't use it directly with Next.js robots()
    // Instead, use the disallowPaths array
    const disallowPaths = seoSettings.robotsTxt.disallowPaths?.map((item: any) => item.path) || []

    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths.length > 0 ? disallowPaths : ['/admin', '/api', '/_next'],
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  } catch (error) {
    console.error('Failed to generate robots.txt:', error)

    // Fallback robots.txt
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/_next'],
      },
      sitemap: 'https://www.realaccelerate.nl/sitemap.xml',
    }
  }
}
