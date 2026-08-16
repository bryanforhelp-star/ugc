"use client";

import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SiteCopyright } from "@/components/SiteCopyright";
import { SiteSocials } from "@/components/SiteSocials";
import { hidesSiteChrome } from "@/lib/site-mode";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  if (hidesSiteChrome(pathname)) return null;

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__start">
          <div className="site-footer__links">
            <Link href="/video">
              <span className="arr">↳</span> editing
            </Link>
            <Link href="/kits">
              <span className="arr">↳</span> {SITE.kits.navLabel}
            </Link>
            <Link href="/guides">
              <span className="arr">↳</span> {SITE.guides.navLabel}
            </Link>
            <Link href="/work-with-me">
              <span className="arr">↳</span> work with me
            </Link>
            <Link href="/">
              <span className="arr">↳</span> home
            </Link>
          </div>
          <SiteSocials />
          <SiteCopyright />
        </div>
        <NewsletterSignup />
      </div>
    </footer>
  );
}
