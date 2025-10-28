import { connectDB } from './mongodb';
import SEO from './models/SEO';
import Settings from './models/Settings';

/**
 * Get custom CSS and JS from settings
 * Server-side only function
 */
export async function getCustomCode() {
  try {
    await connectDB();
    const settings = await Settings.getSingleton();
    
    return {
      css: settings.developer.customCss || '',
      js: settings.developer.customJs || '',
    };
  } catch (error) {
    console.error('Failed to fetch custom code:', error);
    return { css: '', js: '' };
  }
}

/**
 * Get PostHog configuration from SEO settings
 * Server-side only function
 */
export async function getPostHogConfig() {
  try {
    await connectDB();
    const seo = await SEO.getSingleton();
    
    return {
      enabled: !!seo.posthogApiKey,
      apiKey: seo.posthogApiKey || '',
      host: seo.posthogHost || 'https://app.posthog.com',
    };
  } catch (error) {
    console.error('Failed to fetch PostHog config:', error);
    return { enabled: false, apiKey: '', host: 'https://app.posthog.com' };
  }
}

/**
 * Get organization schema for structured data
 * Server-side only function
 */
export async function getOrganizationSchema() {
  try {
    await connectDB();
    const seo = await SEO.getSingleton();
    
    if (!seo.organizationSchema.name) {
      return null;
    }
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: seo.organizationSchema.name,
      url: seo.organizationSchema.url,
      logo: seo.organizationSchema.logo,
      contactPoint: seo.organizationSchema.contactEmail || seo.organizationSchema.contactPhone ? {
        '@type': 'ContactPoint',
        email: seo.organizationSchema.contactEmail || undefined,
        telephone: seo.organizationSchema.contactPhone || undefined,
      } : undefined,
      sameAs: seo.organizationSchema.socialProfiles.length > 0 
        ? seo.organizationSchema.socialProfiles 
        : undefined,
    };
    
    return schema;
  } catch (error) {
    console.error('Failed to generate organization schema:', error);
    return null;
  }
}
