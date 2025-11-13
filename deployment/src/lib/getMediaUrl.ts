/**
 * Helper functions for working with Payload Media
 */

import type { Media } from '@/payload-types'

/**
 * Get the URL for a media item
 * Supports both Media objects and direct URLs
 */
export function getMediaUrl(media: Media | string | null | undefined): string {
  if (!media) return ''
  
  // If it's already a string URL, return it
  if (typeof media === 'string') {
    return media
  }
  
  // If it's a Media object, get the URL
  if (media && typeof media === 'object' && 'url' in media) {
    return media.url || ''
  }
  
  return ''
}

/**
 * Get a specific size variant of a media item
 */
export function getMediaUrlWithSize(
  media: Media | string | null | undefined,
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): string {
  if (!media) return ''
  
  // If it's a string, return it as-is
  if (typeof media === 'string') {
    return media
  }
  
  // If it's a Media object, try to get the specific size
  if (media && typeof media === 'object') {
    const sizes = media.sizes
    if (sizes && typeof sizes === 'object' && size in sizes) {
      const sizeData = sizes[size]
      if (sizeData && typeof sizeData === 'object' && 'url' in sizeData) {
        return sizeData.url || media.url || ''
      }
    }
    return media.url || ''
  }
  
  return ''
}

/**
 * Get alt text for a media item
 */
export function getMediaAlt(media: Media | string | null | undefined, fallback = ''): string {
  if (!media || typeof media === 'string') {
    return fallback
  }
  
  if (media && typeof media === 'object' && 'alt' in media) {
    return media.alt || fallback
  }
  
  return fallback
}
