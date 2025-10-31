import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['nl', 'en']
const defaultLocale = 'nl'

// Paths that should not be localized
const excludedPaths = [
  '/admin',
  '/api',
  '/_next',
  '/favicon.ico',
  '/images',
  '/videos',
  '/static-html',
]

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for excluded paths
  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If no locale in pathname, check Accept-Language header or use default
  if (!pathnameHasLocale) {
    const acceptLanguage = request.headers.get('accept-language')
    let preferredLocale = defaultLocale

    // Try to detect preferred locale from Accept-Language header
    if (acceptLanguage) {
      const languages = acceptLanguage.split(',').map((lang) => {
        const [code] = lang.split(';')
        return code.trim().toLowerCase().split('-')[0]
      })

      preferredLocale =
        languages.find((lang) => locales.includes(lang)) || defaultLocale
    }

    // For default locale (nl), don't redirect, just rewrite
    if (preferredLocale === defaultLocale) {
      return NextResponse.next()
    }

    // For non-default locales, redirect to localized URL
    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLocale}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
