"use client";

import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SiteSocials } from "@/components/SiteSocials";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__tagline">
          let&apos;s make
          <br />
          something.
        </div>
        <div className="site-footer__aside">
          <NewsletterSignup />
          <div className="site-footer__links">
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
        </div>
      </div>
    </footer>
  );
}
