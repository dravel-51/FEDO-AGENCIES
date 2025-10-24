import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of restricted paths - all pages except home
const restrictedPaths = [
  '/about',
  '/contact',
  '/products',
  '/news',
  '/resources',
  '/solutions'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the current path is in the restricted list
  const isRestrictedPath = restrictedPaths.some(path => 
    pathname.startsWith(path)
  )

  // If accessing a restricted path, redirect to home page
  if (isRestrictedPath) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Allow access to home page and other allowed paths
  return NextResponse.next()
}

// Configure which paths this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.webp|assets).*)',
  ],
}