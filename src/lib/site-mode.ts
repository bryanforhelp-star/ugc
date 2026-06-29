/** True when rendering the UGC portfolio (path or ugc subdomain). */

export function isUgcPath(pathname: string) {
  return pathname === "/ugc" || pathname.startsWith("/ugc/");
}
