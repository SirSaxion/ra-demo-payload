export type Locale = 'nl' | 'en'

export const defaultLocale: Locale = 'nl'
export const locales: Locale[] = ['nl', 'en']

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale
  }
  
  return defaultLocale
}

export function removeLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname)
  if (locale === defaultLocale) {
    return pathname
  }
  return pathname.replace(`/${locale}`, '') || '/'
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname
  }
  
  const cleanPath = removeLocaleFromPathname(pathname)
  return `/${locale}${cleanPath}`
}
