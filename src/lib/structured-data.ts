/**
 * Structured Data (Schema.org) helpers for SEO
 * 
 * These generate JSON-LD markup for better search engine visibility
 * Data is sourced from SEO settings in the database
 */

/**
 * LocalBusiness schema for homepage
 * Uses data from SEO settings database
 */
export function getLocalBusinessSchema(seoData: any) {
  const org = seoData.organizationSchema;
  const baseUrl = org.url || 'https://www.realaccelerate.nl';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: org.name,
    description: org.description,
    url: baseUrl,
    telephone: org.contactPhone,
    email: org.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: org.address.streetAddress,
      postalCode: org.address.postalCode,
      addressLocality: org.address.addressLocality,
      addressCountry: org.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: org.geo.latitude,
      longitude: org.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: org.openingHours.dayOfWeek,
        opens: org.openingHours.opens,
        closes: org.openingHours.closes,
      },
    ],
    sameAs: org.socialProfiles,
    logo: org.logo.startsWith('http') ? org.logo : `${baseUrl}${org.logo}`,
    image: org.logo.startsWith('http') ? org.logo : `${baseUrl}${org.logo}`,
  };
}

/**
 * Service schema for target group pages
 * Can be called with page metadata OR manual params
 */
export function getServiceSchema(seoData: any, paramsOrPage: {
  name?: string;
  description?: string;
  slug: string;
  serviceType?: string;
  areaServed?: string;
  // OR from page metadata
  metadata?: {
    serviceSchema?: {
      enabled: boolean;
      serviceName?: string;
      serviceDescription?: string;
      serviceType?: string;
      areaServed?: string;
    }
  }
}) {
  const baseUrl = seoData.organizationSchema.url || 'https://www.realaccelerate.nl';
  
  // Check if this is from page metadata
  const serviceData = paramsOrPage.metadata?.serviceSchema;
  const name = serviceData?.serviceName || paramsOrPage.name || 'Service';
  const description = serviceData?.serviceDescription || paramsOrPage.description || '';
  const serviceType = serviceData?.serviceType || paramsOrPage.serviceType || 'Online Marketing';
  const areaServed = serviceData?.areaServed || paramsOrPage.areaServed || 'Nederland';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/${paramsOrPage.slug}#service`,
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: seoData.organizationSchema.name,
      url: baseUrl,
    },
    serviceType,
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    url: `${baseUrl}/${paramsOrPage.slug}`,
  };
}

/**
 * Helper to generate service schema from Page data
 * Returns null if service schema not enabled
 */
export function getServiceSchemaFromPage(seoData: any, pageData: any) {
  if (!pageData.metadata?.serviceSchema?.enabled) {
    return null;
  }
  
  return getServiceSchema(seoData, {
    slug: pageData.slug,
    metadata: pageData.metadata,
  });
}

/**
 * BreadcrumbList schema for navigation
 */
export function getBreadcrumbSchema(seoData: any, items: Array<{ name: string; url?: string }>) {
  const baseUrl = seoData.organizationSchema.url || 'https://www.realaccelerate.nl';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}` }),
    })),
  };
}

/**
 * FAQ schema
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Organization schema (enhanced)
 * Uses data from SEO settings database
 */
export function getOrganizationSchema(seoData: any) {
  const org = seoData.organizationSchema;
  const baseUrl = org.url || 'https://www.realaccelerate.nl';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: org.name,
    url: baseUrl,
    logo: org.logo.startsWith('http') ? org.logo : `${baseUrl}${org.logo}`,
    description: org.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: org.contactPhone,
      contactType: 'Customer Service',
      email: org.contactEmail,
      areaServed: org.address.addressCountry,
      availableLanguage: ['nl', 'en'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: org.address.streetAddress,
      postalCode: org.address.postalCode,
      addressLocality: org.address.addressLocality,
      addressCountry: org.address.addressCountry,
    },
    sameAs: org.socialProfiles,
    founder: {
      '@type': 'Person',
      name: 'Real Accelerate Team',
    },
  };
}

/**
 * WebPage schema
 */
export function getWebPageSchema(seoData: any, params: {
  title: string;
  description: string;
  url: string;
}) {
  const org = seoData.organizationSchema;
  const baseUrl = org.url || 'https://www.realaccelerate.nl';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}#webpage`,
    url: params.url,
    name: params.title,
    description: params.description,
    publisher: {
      '@type': 'Organization',
      name: org.name,
      logo: {
        '@type': 'ImageObject',
        url: org.logo.startsWith('http') ? org.logo : `${baseUrl}${org.logo}`,
      },
    },
    inLanguage: 'nl-NL',
  };
}

/**
 * Review/Rating schema for case studies
 */
export function getReviewSchema(params: {
  reviewBody: string;
  author: string;
  rating: number;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: params.reviewBody,
    author: {
      '@type': 'Person',
      name: params.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: params.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: params.datePublished || new Date().toISOString().split('T')[0],
  };
}

/**
 * Helper to serialize structured data for JSON-LD script tags
 * Use this in your component like:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
 */
export function serializeStructuredData(data: Record<string, any> | Array<Record<string, any>>): string {
  return JSON.stringify(data);
}
