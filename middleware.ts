import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // For static export, we'll handle auth on client-side only
  // This middleware will be minimal for static sites

  const path = request.nextUrl.pathname

  // Add security headers
  const response = NextResponse.next()

  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

// Only apply to specific paths to avoid issues with static export
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
