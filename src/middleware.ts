import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";

const METADATA_PATHS = new Set([
  "/icon",
  "/apple-icon",
  "/opengraph-image",
  "/twitter-image",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (METADATA_PATHS.has(pathname) || pathname.startsWith("/icon-") || pathname.startsWith("/apple-icon-")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const segment = pathname.split("/")[1];

  if (segment && !isValidLocale(segment) && !pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
