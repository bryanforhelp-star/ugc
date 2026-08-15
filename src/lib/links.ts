import { SITE, substackSubscribeUrl } from "./site";

export type LinksButton = {
  title: string;
  sub: string;
  href: string;
  emoji?: string;
  /** Omit or true to show. Needs a real href. */
  published?: boolean;
};

export type LinksSocial = {
  href: string;
  label: "instagram" | "tiktok" | "youtube" | "email";
};

/**
 * Link in bio at /links. Buttons and profile live here.
 * Shop, booking, affiliates: `src/lib/store.ts`.
 */
export const LINKS_PAGE = {
  title: "kyndall",
  description: "everything i make, in one place.",
  name: "hi, i'm kyndall.",
  tagline: "making ai feel more creative. everything i make, in one place.",
  avatar: "/links/avatar.jpg",
  buttons: [
    {
      title: "book a one-on-one with me",
      sub: "1:1 sessions. editing, content strategy, and more",
      href: "/work-with-me",
      emoji: "🧚",
    },
    {
      title: "see my ugc portfolio",
      sub: "recent brand work and edits",
      href: "/ugc",
      emoji: "📸",
    },
    {
      title: "subscribe to my substack",
      sub: "human.md, field notes on ai and creativity",
      href: substackSubscribeUrl(SITE.newsletter.substackUrl),
      emoji: "💌",
    },
    {
      title: "get my free guides",
      sub: "templates and workflows on bykyndall.com",
      href: "/guides",
      emoji: "📖",
    },
  ] satisfies LinksButton[],
  social: [
    { href: SITE.social.instagram, label: "instagram" },
    { href: SITE.social.tiktok, label: "tiktok" },
    { href: SITE.social.youtube, label: "youtube" },
    { href: SITE.social.email, label: "email" },
  ] satisfies LinksSocial[],
} as const;

export function liveButtons() {
  return LINKS_PAGE.buttons.filter(
    (button) => Boolean(button.href) && !button.href.startsWith("#"),
  );
}
