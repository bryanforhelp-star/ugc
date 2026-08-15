/** True when rendering the UGC portfolio (path or ugc subdomain). */

export function isUgcPath(pathname: string) {
  return pathname === "/ugc" || pathname.startsWith("/ugc/");
}

export function isLinksPath(pathname: string) {
  return (
    pathname === "/links" ||
    pathname === "/work-with-me" ||
    pathname === "/book" ||
    pathname.startsWith("/book/") ||
    pathname === "/thanks"
  );
}

/** Homepage, dedicated portfolios, and the link-in-bio page carry their own chrome. */
export function hidesSiteChrome(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/video" ||
    isLinksPath(pathname) ||
    isUgcPath(pathname)
  );
}
