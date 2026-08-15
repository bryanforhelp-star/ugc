import { SITE, substackSubscribeUrl } from "./site";

export type LinksButton = {
  title: string;
  sub: string;
  href: string;
  /** Omit or true to show. Needs a real href. */
  published?: boolean;
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
      title: "work with me",
      sub: "1:1 sessions. editing, content strategy, and more",
      href: "/work-with-me",
    },
    {
      title: "see my ugc portfolio",
      sub: "recent brand work and edits",
      href: "/ugc",
    },
    {
      title: "subscribe to my substack",
      sub: "human.md, field notes on ai and creativity",
      href: substackSubscribeUrl(SITE.newsletter.substackUrl),
    },
    {
      title: "explore my free guides",
      sub: "templates and workflows on bykyndall.com",
      href: "/guides",
    },
  ] satisfies LinksButton[],
  social: [
    { href: SITE.social.instagram, label: "instagram", short: "ig" },
    { href: SITE.social.tiktok, label: "tiktok", short: "tt" },
    { href: SITE.social.youtube, label: "youtube", short: "yt" },
    { href: SITE.social.email, label: "email", short: "@" },
  ],
} as const;

export function liveButtons() {
  return LINKS_PAGE.buttons.filter(
    (button) => Boolean(button.href) && !button.href.startsWith("#"),
  );
}
