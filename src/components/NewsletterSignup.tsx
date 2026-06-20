import { SITE, substackEmbedUrl, substackSubscribeUrl } from "@/lib/site";

export function NewsletterSignup() {
  const substackUrl = SITE.newsletter.substackUrl.replace(/\/$/, "");

  return (
    <div className="newsletter">
      <p className="newsletter__label">{SITE.newsletter.label}</p>
      <p className="newsletter__lead">{SITE.newsletter.lead}</p>

      <iframe
        src={substackEmbedUrl(substackUrl)}
        title="subscribe to human.md"
        className="newsletter__embed"
        height={152}
        scrolling="no"
      />
      <a
        href={substackSubscribeUrl(substackUrl)}
        target="_blank"
        rel="noreferrer"
        className="newsletter__link"
      >
        <span className="arr">↳</span> subscribe
      </a>
    </div>
  );
}
