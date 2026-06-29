import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STATIC_PREFIXES = [
  "/_next",
  "/fonts",
  "/hero",
  "/brands",
  "/vendor",
  "/cursors",
  "/ugc/assets",
];

function isStaticAsset(pathname: string) {
  return STATIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const { pathname } = request.nextUrl;

  if (host.startsWith("ugc.")) {
    if (isStaticAsset(pathname)) {
      return NextResponse.next();
    }
    if (!pathname.startsWith("/ugc")) {
      const url = request.nextUrl.clone();
      url.pathname = pathname === "/" ? "/ugc" : `/ugc${pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
