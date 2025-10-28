/**
 * SEO Helper Functions
 * 
 * Utility functions for SEO metadata generation
 */

const BASE_URL = 'https://www.realaccelerate.nl';

/**
 * Generate canonical URL for a page
 * 
 * Priority:
 * 1. Custom canonical URL (if provided by user in CMS)
 * 2. Auto-generated from slug
 * 3. Fallback to base URL
 * 
 * @param slug - Page slug (e.g., "/makelaars", "/hypotheekadviseurs")
 * @param customCanonical - Optional custom canonical URL from CMS
 * @returns Full canonical URL
 */
export function getCanonicalUrl(slug: string, customCanonical?: string): string {
  // 1. User has manually set canonical → use that
  if (customCanonical) {
    // If it's already a full URL, return as-is
    if (customCanonical.startsWith('http://') || customCanonical.startsWith('https://')) {
      return customCanonical;
    }
    // If it's a relative path, prepend base URL
    return `${BASE_URL}${customCanonical.startsWith('/') ? customCanonical : `/${customCanonical}`}`;
  }
  
  // 2. Auto-generate from slug
  // Handle homepage
  if (slug === '/' || slug === '') {
    return BASE_URL;
  }
  
  // Handle other pages - ensure slug starts with /
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  return `${BASE_URL}${cleanSlug}`;
}

/**
 * Get base URL
 */
export function getBaseUrl(): string {
  return BASE_URL;
}
