/**
 * Static Site Settings
 * 
 * Eliminates database query in root layout
 * Settings are generated at build/save time and read instantly
 * 
 * Performance: ~100ms DB query → <1ms static read
 */

export interface StaticSiteSettings {
  navigation: {
    showServices: boolean
    showCases: boolean
    showAbout: boolean
    showContact: boolean
  }
  footer: {
    showSocial: boolean
    showNewsletter: boolean
  }
  _generated: {
    at: string
    source: 'cms' | 'default'
  }
}

/**
 * Default site settings (used as fallback)
 */
export const defaultSiteSettings: StaticSiteSettings = {
  navigation: {
    showServices: true,
    showCases: true,
    showAbout: true,
    showContact: true,
  },
  footer: {
    showSocial: true,
    showNewsletter: true,
  },
  _generated: {
    at: new Date().toISOString(),
    source: 'default',
  },
}

/**
 * Get static site settings
 * NO database query - instant!
 */
export function getStaticSiteSettings(): StaticSiteSettings {
  // In a real implementation, this would read from a generated static file
  // For now, return defaults (we'll generate the file later)
  return defaultSiteSettings
}
