import type { Metadata } from 'next';
import { connectDB } from './mongodb';
import SEO from './models/SEO';

/**
 * Generate Next.js metadata from SEO settings
 * This runs on the server during build/request time
 */
export async function getSEOMetadata(pageOverrides?: {
  title?: string;
  description?: string;
  image?: string;
}): Promise<Metadata> {
  try {
    await connectDB();
    const seo = await SEO.getSingleton();
    
    const title = pageOverrides?.title 
      ? seo.titleTemplate.replace('%s', pageOverrides.title)
      : seo.defaultTitle;
    
    const description = pageOverrides?.description || seo.defaultDescription;
    const ogImage = pageOverrides?.image || seo.ogImage;
    const twitterImage = pageOverrides?.image || seo.twitterImage || seo.ogImage;
    
    // Build canonical URL
    const canonicalBase = seo.canonicalUrl || 'https://www.realaccelerate.nl';
    
    const metadata: Metadata = {
      title: {
        default: seo.defaultTitle,
        template: seo.titleTemplate,
      },
      description,
      applicationName: seo.ogSiteName,
      authors: seo.author ? [{ name: seo.author }] : undefined,
      creator: seo.author,
      publisher: seo.ogSiteName,
      keywords: seo.keywords,
      metadataBase: new URL(canonicalBase),
      
      // Robots
      robots: {
        index: seo.robots.includes('index'),
        follow: seo.robots.includes('follow'),
        googleBot: {
          index: seo.googlebot.includes('index'),
          follow: seo.googlebot.includes('follow'),
        },
      },
      
      // Open Graph
      openGraph: {
        type: seo.ogType as any,
        siteName: seo.ogSiteName,
        title,
        description,
        locale: seo.locale,
        images: ogImage ? [
          {
            url: ogImage,
            width: seo.ogImageWidth,
            height: seo.ogImageHeight,
            alt: seo.ogImageAlt,
          },
        ] : undefined,
      },
      
      // Twitter
      twitter: {
        card: seo.twitterCard as any,
        site: seo.twitterSite,
        creator: seo.twitterCreator,
        title,
        description,
        images: twitterImage ? [twitterImage] : undefined,
      },
      
      // Verification
      verification: {
        google: seo.googleSiteVerification || undefined,
        other: seo.bingSiteVerification ? {
          'msvalidate.01': seo.bingSiteVerification,
        } : undefined,
      },
      
      // Language
      alternates: {
        canonical: canonicalBase,
      },
    };
    
    return metadata;
  } catch (error) {
    console.error('Failed to generate SEO metadata:', error);
    
    // Fallback metadata
    return {
      title: {
        default: 'Real Accelerate | Online marketing voor vastgoedprofessionals',
        template: '%s | Real Accelerate',
      },
      description: 'Groei je vastgoedbedrijf met bewezen online marketing strategieën.',
      metadataBase: new URL('https://www.realaccelerate.nl'),
    };
  }
}
