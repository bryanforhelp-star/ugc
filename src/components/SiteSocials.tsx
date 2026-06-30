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
    <nav className="socials-block" aria-label="learn with me">
      <p className="socials__cta">
        learn with me{" "}
        <span className="socials__arrow arr" aria-hidden="true">
          ↓
        </span>
      </p>
      <div className="socials">
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
      </div>
    </nav>
  );
}
