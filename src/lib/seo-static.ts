import type { Metadata } from 'next';

/**
 * Static SEO configuration
 * This is loaded at build time, not at runtime
 * Same approach as homepage data in /data/pages/home.ts
 */

export const seoConfig = {
  // Basic settings
  siteName: 'Real Accelerate',
  siteTagline: 'Online marketing voor vastgoedprofessionals',
  language: 'nl',
  
  // Custom code (empty by default, can be filled via admin later)
  customCss: '',
  customJs: '',
  
  // PostHog
  posthog: {
    enabled: false,
    apiKey: '',
    host: 'https://app.posthog.com',
  },
  
  // Organization schema
  organization: {
    name: 'Real Accelerate',
    url: 'https://www.realaccelerate.nl',
    logo: 'https://www.realaccelerate.nl/images/logo.webp',
    contactEmail: 'info@realaccelerate.nl',
    contactPhone: '+31850602989',
    socialProfiles: [
      'https://www.linkedin.com/company/realaccelerate',
      'https://www.instagram.com/realaccelerate',
      'https://www.facebook.com/realaccelerate',
    ],
  },
};

/**
 * Generate organization schema for JSON-LD
 */
export function getStaticOrganizationSchema() {
  const org = seoConfig.organization;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      email: org.contactEmail,
      telephone: org.contactPhone,
    },
    sameAs: org.socialProfiles,
  };
}

/**
 * Generate static metadata (no database queries)
 * Fast and cached at build time
 */
export function getStaticMetadata(): Metadata {
  return {
    title: {
      default: seoConfig.siteName,
      template: `%s | ${seoConfig.siteName}`,
    },
    description: seoConfig.siteTagline,
    applicationName: seoConfig.siteName,
    authors: [{ name: seoConfig.siteName }],
    creator: seoConfig.siteName,
    publisher: seoConfig.siteName,
    metadataBase: new URL(seoConfig.organization.url),
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    
    // Open Graph
    openGraph: {
      type: 'website',
      siteName: seoConfig.siteName,
      title: seoConfig.siteName,
      description: seoConfig.siteTagline,
      locale: 'nl_NL',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: seoConfig.siteName,
      description: seoConfig.siteTagline,
    },
  };
}
