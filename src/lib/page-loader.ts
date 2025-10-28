/**
 * Centralized page data loader
 * Ensures consistent data fetching and structured data generation across all pages
 */

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { connectDB } from '@/lib/mongodb'
import Page from '@/lib/models/Page'
import SEO from '@/lib/models/SEO'
import { getCanonicalUrl } from '@/lib/seo-helpers'
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
  getServiceSchemaFromPage,
} from '@/lib/structured-data'
import type { PageDataWithMetadata } from '@/lib/models/Page'

interface BreadcrumbItem {
  name: string
  url: string
}

interface PageLoaderOptions {
  slug: string
  staticPageData: PageDataWithMetadata | any // Accept any for backwards compatibility with old static files
  breadcrumbs: BreadcrumbItem[]
  includeLocalBusiness?: boolean // Only for homepage
  defaultTitle?: string
  defaultDescription?: string
  preloadImages?: string[] // Images to preload for better LCP
}

interface PageLoaderResult {
  metadata: Metadata
  structuredData: any
  blocks: any[]
  pageStatus: 'draft' | 'published'
}

/**
 * Load page data with consistent SEO, structured data, and content
 * 
 * @example
 * ```typescript
 * const { metadata, structuredData, blocks } = await loadPageData({
 *   slug: '/makelaars',
 *   staticPageData: pageData,
 *   breadcrumbs: [
 *     { name: 'Home', url: '/' },
 *     { name: 'Makelaars', url: '/makelaars' }
 *   ]
 * })
 * ```
 */
export async function loadPageData(options: PageLoaderOptions): Promise<PageLoaderResult> {
  const {
    slug,
    staticPageData,
    breadcrumbs,
    includeLocalBusiness = false,
    defaultTitle,
    defaultDescription,
    preloadImages = [],
  } = options

  // Normalize slug: ensure it starts with /
  const normalizedSlug = normalizeSlug(slug)

  // Fetch SEO settings and page metadata from database
  let seoData: any
  let dbPageData: any
  
  try {
    await connectDB()
    seoData = await SEO.getSingleton()
    
    // Fetch page from database to check status and get additional metadata
    dbPageData = await Page.findOne({ slug: normalizedSlug }).lean()
    
    // In production, enforce published status (allow draft in development)
    if (process.env.NODE_ENV === 'production' && dbPageData?.status === 'draft') {
      notFound()
    }
  } catch (error) {
    console.error('⚠️ [PAGE LOADER] Database fetch failed:', error)
    // Fallback to static data if database fails
    seoData = getDefaultSEOData()
  }

  // Generate metadata
  const metadata = generateMetadata({
    staticPageData,
    dbPageData,
    normalizedSlug,
    defaultTitle,
    defaultDescription,
    preloadImages,
  })

  // Generate structured data
  const structuredData = generateStructuredData({
    seoData,
    dbPageData,
    breadcrumbs,
    includeLocalBusiness,
  })

  // Get blocks from static data (fast for visitors)
  const blocks = staticPageData.content.nl.blocks

  return {
    metadata,
    structuredData,
    blocks,
    pageStatus: dbPageData?.status || 'published',
  }
}

/**
 * Normalize slug to always have leading slash, no trailing slash
 */
export function normalizeSlug(slug: string): string {
  if (slug === 'home' || slug === '') return '/'
  
  // Ensure starts with /
  let normalized = slug.startsWith('/') ? slug : `/${slug}`
  
  // Remove trailing slash (except for root)
  if (normalized !== '/' && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }
  
  return normalized
}

/**
 * Convert slug to filename for static files
 * Examples:
 *   / -> home.ts
 *   /makelaars -> makelaars.ts
 *   /makelaars-buitenland -> makelaars-buitenland.ts
 */
export function slugToFilename(slug: string): string {
  const normalized = normalizeSlug(slug)
  if (normalized === '/') return 'home'
  return normalized.replace(/^\//, '').replace(/\//g, '-')
}

/**
 * Convert filename back to slug
 * Examples:
 *   home -> /
 *   makelaars -> /makelaars
 */
export function filenameToSlug(filename: string): string {
  if (filename === 'home') return '/'
  return `/${filename.replace(/-/g, '/')}`
}

/**
 * Generate metadata object
 */
function generateMetadata(options: {
  staticPageData: PageDataWithMetadata
  dbPageData: any
  normalizedSlug: string
  defaultTitle?: string
  defaultDescription?: string
  preloadImages?: string[]
}): Metadata {
  const {
    staticPageData,
    dbPageData,
    normalizedSlug,
    defaultTitle,
    defaultDescription,
    preloadImages = [],
  } = options

  // Prefer DB metadata over static (DB is source of truth for metadata)
  const metaTitle =
    dbPageData?.metadata?.metaTitle ||
    staticPageData.metadata?.metaTitle ||
    defaultTitle ||
    'Real Accelerate'

  const metaDescription =
    dbPageData?.metadata?.metaDescription ||
    staticPageData.metadata?.metaDescription ||
    defaultDescription ||
    'Online marketing voor vastgoedprofessionals'

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: getCanonicalUrl(normalizedSlug),
    },
  }

  // Add preload hints for critical images (improves LCP)
  if (preloadImages.length > 0) {
    metadata.other = {
      'preload-image': preloadImages[0], // First image is most important
    }
  }

  // Add OG image if specified
  if (dbPageData?.metadata?.ogImage || staticPageData.metadata?.ogImage) {
    metadata.openGraph = {
      images: [dbPageData?.metadata?.ogImage || staticPageData.metadata?.ogImage],
    }
  }

  return metadata
}

/**
 * Generate structured data JSON-LD
 */
function generateStructuredData(options: {
  seoData: any
  dbPageData: any
  breadcrumbs: BreadcrumbItem[]
  includeLocalBusiness: boolean
}): any {
  const { seoData, dbPageData, breadcrumbs, includeLocalBusiness } = options

  if (!seoData) return null

  const structuredDataItems = []

  // Always include Organization
  structuredDataItems.push(getOrganizationSchema(seoData))

  // Include LocalBusiness only for homepage
  if (includeLocalBusiness) {
    structuredDataItems.push(getLocalBusinessSchema(seoData))
  }

  // Always include Breadcrumbs
  structuredDataItems.push(getBreadcrumbSchema(seoData, breadcrumbs))

  // Include Service schema if enabled in page metadata
  if (dbPageData?.metadata?.serviceSchema?.enabled) {
    const serviceSchema = getServiceSchemaFromPage(seoData, dbPageData)
    if (serviceSchema) {
      structuredDataItems.push(serviceSchema)
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': structuredDataItems,
  }
}

/**
 * Fallback SEO data if database is unavailable
 */
function getDefaultSEOData() {
  return {
    organizationSchema: {
      name: 'Real Accelerate',
      url: 'https://www.realaccelerate.nl',
      logo: '/images/logo.webp',
      description: 'Online marketing bureau gespecialiseerd in vastgoedmarketing',
      contactEmail: 'info@realaccelerate.nl',
      contactPhone: '+31850602989',
      socialProfiles: [],
      address: {
        streetAddress: 'Daalwijkdreef 47',
        postalCode: '1103 AD',
        addressLocality: 'Amsterdam',
        addressCountry: 'NL',
      },
      geo: { latitude: 52.3676, longitude: 4.9041 },
      openingHours: {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    },
  }
}
