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

  // If pathname already has locale, just pass through
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // For paths without locale, serve default (nl) content
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
