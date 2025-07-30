import { locales } from "./lib/i18n";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if path is valid locale path
  const isValidLocalePath = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If it's a valid locale path, continue
  if (isValidLocalePath) {
    const response = NextResponse.next();
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // If it's root path, continue
  if (pathname === '/') {
    const response = NextResponse.next();
    response.headers.set('x-pathname', pathname);
    return response;
  }

  // For all other paths, add pathname header for 404 page language detection
  const response = NextResponse.next();
  response.headers.set('x-pathname', pathname);
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|terms|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)'
  ]
};