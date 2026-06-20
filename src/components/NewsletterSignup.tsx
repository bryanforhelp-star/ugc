"use client";

import { FormEvent, useState } from "react";
import { SITE, substackSubscribeUrl } from "@/lib/site";

export function NewsletterSignup() {
  const substackUrl = SITE.newsletter.substackUrl.replace(/\/$/, "");
  const subscribeUrl = substackSubscribeUrl(substackUrl);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    const url = trimmed
      ? `${subscribeUrl}?email=${encodeURIComponent(trimmed)}`
      : subscribeUrl;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="newsletter">
      <p className="newsletter__cta">{SITE.newsletter.cta}</p>
      <p className="newsletter__lead">{SITE.newsletter.lead}</p>

      <form className="newsletter__form" onSubmit={handleSubmit}>
        <label className="newsletter__field">
          <span className="sr-only">email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            autoComplete="email"
            className="newsletter__input"
          />
        </label>
        <button type="submit" className="glass-pill newsletter__submit">
          subscribe
        </button>
      </form>
    </div>
  );
}
