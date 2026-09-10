/** True when rendering the UGC portfolio (path or ugc subdomain). */

export function isUgcPath(pathname: string) {
  return pathname === "/ugc" || pathname.startsWith("/ugc/");
}

export function isShopProductPath(pathname: string) {
  return pathname.startsWith("/kits/") && pathname !== "/kits/";
}

export function isProposalPath(pathname: string) {
  return pathname === "/p" || pathname.startsWith("/p/");
}

export function isAnywayPath(pathname: string) {
  return pathname === "/anyway" || pathname.startsWith("/anyway/");
}

export function isProjectsPath(pathname: string) {
  return pathname === "/projects" || pathname.startsWith("/projects/");
}

export function isLinksPath(pathname: string) {
  return (
    pathname === "/links" ||
    pathname === "/work-with-me" ||
    pathname === "/book" ||
    pathname.startsWith("/book/") ||
    pathname === "/thanks" ||
    isShopProductPath(pathname)
  );
}

export function isEmailsPath(pathname: string) {
  return pathname === "/emails" || pathname.startsWith("/emails/");
}

/** Homepage, dedicated portfolios, and the link-in-bio page carry their own chrome. */
export function hidesSiteChrome(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/video" ||
    isLinksPath(pathname) ||
    isUgcPath(pathname) ||
    isProposalPath(pathname) ||
    isAnywayPath(pathname) ||
    isProjectsPath(pathname) ||
    isEmailsPath(pathname)
  );
}
