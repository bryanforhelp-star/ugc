import type { Metadata } from "next";
import {
  buyerEmailFrom,
  buyerPaidMail,
  wrapBuyerEmail,
} from "@/lib/emails";
import { SITE } from "@/lib/site";
import { EDITING_GUIDE_PRODUCT } from "@/lib/store";
import "./preview.css";

export const metadata: Metadata = {
  title: { absolute: "email preview" },
  robots: { index: false, follow: false },
};

export default function EmailPreviewPage() {
  const mail = buyerPaidMail({
    product: EDITING_GUIDE_PRODUCT,
    kind: "digital",
    buyerName: "Sam",
  });
  let { html } = wrapBuyerEmail(mail);
  if (process.env.NODE_ENV !== "production") {
    html = html.replaceAll(
      SITE.url.replace(/\/$/, ""),
      "http://localhost:4000",
    );
  }
  const from = buyerEmailFrom();

  return (
    <div className="emails-preview">
      <p className="emails-preview__hint">
        this is what lands in their inbox after checkout.
      </p>
      <article className="emails-inbox">
        <header className="emails-inbox__head">
          <p>
            <span>From</span> {from}
          </p>
          <p>
            <span>To</span> Sam
          </p>
          <p>
            <span>Subject</span> {mail.subject}
          </p>
        </header>
        <iframe title={mail.subject} srcDoc={html} />
      </article>
    </div>
  );
}
