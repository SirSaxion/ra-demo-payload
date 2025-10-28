import mongoose, { Model } from 'mongoose';

interface ISEO {
  // Basic Meta Tags
  defaultTitle: string;
  titleTemplate: string; // e.g., "%s | Real Accelerate"
  defaultDescription: string;
  keywords: string[];
  
  // Open Graph (Facebook, LinkedIn, etc.)
  ogSiteName: string;
  ogType: string; // website, article, etc.
  ogImage: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogImageAlt: string;
  
  // Twitter Card
  twitterCard: string; // summary, summary_large_image, etc.
  twitterSite: string; // @realaccelerate
  twitterCreator: string;
  twitterImage: string;
  
  // Additional Meta Tags
  author: string;
  language: string;
  locale: string;
  canonicalUrl: string;
  
  // Robots & Crawling
  robotsTxt: string;
  robots: string; // index,follow / noindex,nofollow
  googlebot: string;
  
  // Structured Data
  organizationSchema: {
    name: string;
    url: string;
    logo: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
    socialProfiles: string[];
    // LocalBusiness data
    address: {
      streetAddress: string;
      postalCode: string;
      addressLocality: string;
      addressCountry: string;
    };
    geo: {
      latitude: number;
      longitude: number;
    };
    openingHours: {
      dayOfWeek: string[];
      opens: string;
      closes: string;
    };
  };
  
  // Sitemap
  autoGenerateSitemap: boolean;
  sitemapPriority: number; // 0.0 - 1.0
  sitemapChangefreq: string; // daily, weekly, monthly, etc.
  
  // Verification
  googleSiteVerification: string;
  bingSiteVerification: string;
  
  // Analytics (PostHog)
  posthogApiKey: string;
  posthogHost: string;
  
  updatedAt: Date;
}

interface ISEOModel extends Model<ISEO> {
  getSingleton(): Promise<mongoose.Document<unknown, {}, ISEO> & ISEO>;
}

const seoSchema = new mongoose.Schema<ISEO>({
  // Basic Meta Tags
  defaultTitle: { type: String, default: 'Real Accelerate' },
  titleTemplate: { type: String, default: '%s | Real Accelerate' },
  defaultDescription: { type: String, default: 'Your success accelerator' },
  keywords: { type: [String], default: [] },
  
  // Open Graph
  ogSiteName: { type: String, default: 'Real Accelerate' },
  ogType: { type: String, default: 'website' },
  ogImage: { type: String, default: '' },
  ogImageWidth: { type: Number, default: 1200 },
  ogImageHeight: { type: Number, default: 630 },
  ogImageAlt: { type: String, default: 'Real Accelerate' },
  
  // Twitter Card
  twitterCard: { type: String, default: 'summary_large_image' },
  twitterSite: { type: String, default: '' },
  twitterCreator: { type: String, default: '' },
  twitterImage: { type: String, default: '' },
  
  // Additional Meta
  author: { type: String, default: 'Real Accelerate' },
  language: { type: String, default: 'en' },
  locale: { type: String, default: 'en_US' },
  canonicalUrl: { type: String, default: '' },
  
  // Robots
  robotsTxt: { 
    type: String, 
    default: `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Google bots
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/

# Bing bot
User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /api/

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Sitemap
Sitemap: https://www.realaccelerate.nl/sitemap.xml` 
  },
  robots: { type: String, default: 'index, follow' },
  googlebot: { type: String, default: 'index, follow' },
  
  // Structured Data
  organizationSchema: {
    name: { type: String, default: 'Real Accelerate' },
    url: { type: String, default: 'https://www.realaccelerate.nl' },
    logo: { type: String, default: '/images/logo.webp' },
    description: { type: String, default: 'Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers' },
    contactEmail: { type: String, default: 'info@realaccelerate.nl' },
    contactPhone: { type: String, default: '+31850602989' },
    socialProfiles: { 
      type: [String], 
      default: [
        'https://www.linkedin.com/company/realaccelerate',
        'https://www.instagram.com/realaccelerate',
        'https://www.facebook.com/realaccelerate',
      ] 
    },
    // LocalBusiness data
    address: {
      streetAddress: { type: String, default: 'Daalwijkdreef 47' },
      postalCode: { type: String, default: '1103 AD' },
      addressLocality: { type: String, default: 'Amsterdam' },
      addressCountry: { type: String, default: 'NL' },
    },
    geo: {
      latitude: { type: Number, default: 52.3676 },
      longitude: { type: Number, default: 4.9041 },
    },
    openingHours: {
      dayOfWeek: { 
        type: [String], 
        default: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] 
      },
      opens: { type: String, default: '09:00' },
      closes: { type: String, default: '17:00' },
    },
  },
  
  // Sitemap
  autoGenerateSitemap: { type: Boolean, default: true },
  sitemapPriority: { type: Number, default: 0.8 },
  sitemapChangefreq: { type: String, default: 'weekly' },
  
  // Verification
  googleSiteVerification: { type: String, default: '' },
  bingSiteVerification: { type: String, default: '' },
  
  // Analytics
  posthogApiKey: { type: String, default: '' },
  posthogHost: { type: String, default: 'https://app.posthog.com' },
  
  updatedAt: { type: Date, default: Date.now },
});

// Singleton pattern
seoSchema.statics.getSingleton = async function() {
  let seo = await this.findOne();
  if (!seo) {
    seo = await this.create({});
  }
  return seo;
};

const SEO = (mongoose.models.SEO || mongoose.model<ISEO, ISEOModel>('SEO', seoSchema)) as ISEOModel;

export default SEO;
