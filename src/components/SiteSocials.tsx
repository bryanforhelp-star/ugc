import { SITE } from "@/lib/site";

export function SiteSocials() {
  return (
    <div className="socials">
      <a href={SITE.social.instagram} target="_blank" rel="noreferrer">
        <span className="arr">↳</span> instagram
      </a>
      <a href={SITE.social.tiktok} target="_blank" rel="noreferrer">
        <span className="arr">↳</span> tiktok
      </a>
      <a href={SITE.social.youtube} target="_blank" rel="noreferrer">
        <span className="arr">↳</span> youtube
      </a>
      <a href={SITE.social.email}>
        <span className="arr">↳</span> email
      </a>
    </div>
  );
}
