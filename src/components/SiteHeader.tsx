"use client";

import Link from "next/link";
import { isUgcPath } from "@/lib/site-mode";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/" || isUgcPath(pathname)) return null;

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="site-mark">
          kyndall
        </Link>
        <nav className="site-nav">
          <Link href="/video">video</Link>
          <Link href="/guides">{SITE.guides.navLabel}</Link>
          <Link href="/work-with-me">work with me</Link>
        </nav>
      </div>
    </header>
  );
}
