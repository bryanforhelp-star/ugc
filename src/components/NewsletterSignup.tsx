import { SITE, substackEmbedUrl, substackSubscribeUrl } from "@/lib/site";

export function NewsletterSignup() {
  const substackUrl = SITE.newsletter.substackUrl.trim();

  return (
    <div className="newsletter">
      <p className="newsletter__label">{SITE.newsletter.label}</p>
      <p className="newsletter__lead">{SITE.newsletter.lead}</p>

      {substackUrl ? (
        <>
          <iframe
            src={substackEmbedUrl(substackUrl)}
            title="subscribe to newsletter"
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
        </>
      ) : (
        <p className="newsletter__soon">{SITE.newsletter.comingSoon}</p>
      )}
    </div>
  );
}
