import { SITE } from "@/lib/site";

export function SiteCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className="site-copyright">
      © {year} {SITE.name}. all rights reserved.
    </p>
  );
}
