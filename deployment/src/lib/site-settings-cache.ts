'use client';

import type { SiteSettingsDocument } from '@/lib/models/SiteSettings';

const CACHE_KEY = 'ra_site_settings';
const CACHE_VERSION_KEY = 'ra_site_settings_version';

/**
 * Cache site settings in localStorage to prevent flash of old content
 */
export function cacheSiteSettings(settings: SiteSettingsDocument) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(settings));
    localStorage.setItem(CACHE_VERSION_KEY, String(settings.version || 0));
  } catch (error) {
    console.warn('Failed to cache site settings:', error);
  }
}

/**
 * Get cached site settings from localStorage
 */
export function getCachedSiteSettings(): SiteSettingsDocument | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    return JSON.parse(cached) as SiteSettingsDocument;
  } catch (error) {
    console.warn('Failed to retrieve cached site settings:', error);
    return null;
  }
}

/**
 * Check if we need to fetch new settings
 */
export function shouldFetchSettings(currentVersion?: number): boolean {
  if (typeof window === 'undefined') return true;
  
  try {
    const cachedVersion = localStorage.getItem(CACHE_VERSION_KEY);
    if (!cachedVersion) return true;
    
    const cached = parseInt(cachedVersion, 10);
    return currentVersion ? currentVersion > cached : false;
  } catch (error) {
    return true;
  }
}

/**
 * Clear the cache (useful for testing)
 */
export function clearSiteSettingsCache() {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_VERSION_KEY);
  } catch (error) {
    console.warn('Failed to clear site settings cache:', error);
  }
}
