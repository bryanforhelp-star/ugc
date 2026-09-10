import type { Metadata } from "next";
import {
  buyerPaidMail,
  guideLaunchMail,
  wrapBuyerEmail,
} from "@/lib/emails";
import { COFFEE, EDITING_GUIDE_PRODUCT, SESSION_PRODUCT } from "@/lib/store";
import "./preview.css";

export const metadata: Metadata = {
  title: { absolute: "email preview" },
  robots: { index: false, follow: false },
};

const KINDS = ["guide", "launch", "booking", "matcha"] as const;
type Kind = (typeof KINDS)[number];

function mailFor(kind: Kind) {
  if (kind === "launch") return guideLaunchMail();
  if (kind === "booking") {
    return buyerPaidMail({
      product: SESSION_PRODUCT,
      kind: "booking",
      when: "thursday, oct 2, 10:00–11:00am bali",
      buyerName: "Sam",
    });
  }
  if (kind === "matcha") {
    return buyerPaidMail({
      product: COFFEE,
      kind: "digital",
      buyerName: "Sam",
    });
  }
  return buyerPaidMail({
    product: EDITING_GUIDE_PRODUCT,
    kind: "digital",
    buyerName: "Sam",
  });
}

export default async function EmailPreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>;
}) {
  const raw = (await searchParams).kind;
  const kind: Kind = KINDS.includes(raw as Kind) ? (raw as Kind) : "guide";
  const mail = mailFor(kind);
  const { html } = wrapBuyerEmail(mail);

  return (
    <div className="emails-preview">
      <nav className="emails-preview__nav" aria-label="email drafts">
        {KINDS.map((item) => (
          <a
            key={item}
            href={`/emails/preview?kind=${item}`}
            aria-current={item === kind ? "page" : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
      <p className="emails-preview__note">
        subject: {mail.subject}
        {kind === "launch"
          ? " this one does not send yet. the files are not ready."
          : " this one sends after checkout."}
      </p>
      <iframe title={mail.subject} srcDoc={html} />
    </div>
  );
}
