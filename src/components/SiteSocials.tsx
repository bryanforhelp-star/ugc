import { SITE } from "@/lib/site";
import {
  EmailIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

const LINKS = [
  {
    href: SITE.social.instagram,
    label: "instagram",
    icon: InstagramIcon,
    external: true,
  },
  {
    href: SITE.social.tiktok,
    label: "tiktok",
    icon: TikTokIcon,
    external: true,
  },
  {
    href: SITE.social.youtube,
    label: "youtube",
    icon: YouTubeIcon,
    external: true,
  },
  {
    href: SITE.social.email,
    label: "email",
    icon: EmailIcon,
    external: false,
  },
] as const;

export function SiteSocials() {
  return (
    <div className="socials-block">
      <p className="socials__cta">
        <span className="arr" aria-hidden="true">
          ↳
        </span>
        learn with me
      </p>
      <nav className="socials" aria-label="social links">
      {LINKS.map(({ href, label, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <Icon className="socials__icon" />
        </a>
      ))}
      </nav>
    </div>
  );
}
