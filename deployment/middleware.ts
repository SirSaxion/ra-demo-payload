import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'

const locales = ['nl', 'en']
const defaultLocale = 'nl'

// Debug logging
function logToFile(message: string) {
  try {
    const logPath = path.join(process.cwd(), 'debug.log')
    fs.appendFileSync(logPath, `${new Date().toISOString()} - ${message}\n`)
  } catch (e) {
    console.error('Failed to write log:', e)
  }
}

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
  
  try {
    logToFile(`[MIDDLEWARE] Request: ${pathname}`)

    // Skip middleware for excluded paths
    if (excludedPaths.some((path) => pathname.startsWith(path))) {
      logToFile(`[MIDDLEWARE] Excluded path: ${pathname}`)
      return NextResponse.next()
    }

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // If pathname already has locale, just pass through
    if (pathnameHasLocale) {
      logToFile(`[MIDDLEWARE] Has locale: ${pathname}`)
      return NextResponse.next()
    }

    logToFile(`[MIDDLEWARE] No locale, serving default: ${pathname}`)
    // For paths without locale, serve default (nl) content
    return NextResponse.next()
  } catch (error) {
    logToFile(`[MIDDLEWARE ERROR] ${error instanceof Error ? error.message : String(error)}`)
    logToFile(`[MIDDLEWARE ERROR STACK] ${error instanceof Error ? error.stack : 'No stack'}`)
    throw error
  }
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
