import { SITE } from "./site";
import { COFFEE, EDITING_GUIDE, getStoreProduct, type StoreProduct } from "./store";

export type BuyerMail = {
  subject: string;
  preview: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  signoff: string;
};

const REPLY = SITE.workWithMe.email;

export function buyerEmailFrom() {
  return (
    process.env.BUYER_EMAIL_FROM?.trim() ||
    `kyndall <${REPLY}>`
  );
}

export function buyerReplyTo() {
  return process.env.BUYER_EMAIL_REPLY_TO?.trim() || REPLY;
}

function firstNameFrom(name: string) {
  const part = name.trim().split(/\s+/)[0] ?? "";
  return part.length >= 2 ? part : "";
}

export function wrapBuyerEmail(mail: BuyerMail) {
  const paragraphs = mail.paragraphs
    .map(
      (p) =>
        `<p style="margin:0 0 18px;font-size:16px;line-height:1.55;color:#0b0b0c;">${escapeHtml(p)}</p>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(mail.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#eceae4;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(mail.preview)}</div>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#eceae4;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:520px;background:#ffffff;border-radius:18px;">
          <tr>
            <td style="padding:36px 32px 40px;font-family:Georgia,'Times New Roman',serif;color:#0b0b0c;">
              <p style="margin:0 0 18px;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1b2bff;">${escapeHtml(mail.kicker)}</p>
              <h1 style="margin:0 0 22px;font-size:28px;line-height:1.15;font-weight:400;letter-spacing:-0.02em;">${escapeHtml(mail.title)}</h1>
              ${paragraphs}
              <p style="margin:28px 0 0;font-size:16px;line-height:1.55;color:#0b0b0c;">${escapeHtml(mail.signoff)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    mail.title,
    "",
    ...mail.paragraphs,
    "",
    mail.signoff,
  ].join("\n");

  return { html, text };
}

export function buyerPaidMail(input: {
  product: StoreProduct | null;
  kind: string;
  when?: string;
  buyerName?: string;
}): BuyerMail {
  const product = input.product;
  const name = firstNameFrom(input.buyerName ?? "");
  const hi = name ? `hi ${name.toLowerCase()}.` : "hi.";
  const coffee = product?.id === COFFEE.id;
  const booked = input.kind === "booking";
  const presale = product?.status === "presale";
  const guide = product?.id === EDITING_GUIDE.id;

  if (booked) {
    const when = input.when?.trim() || "the hour you picked";
    return {
      subject: "you're booked.",
      preview: `${when}. reply if you need anything before then.`,
      kicker: "1:1 session",
      title: "you're on the calendar.",
      paragraphs: [
        hi,
        `we're on for ${when}. i'll show up ready.`,
        "if you have any questions or need to shift anything before then, just reply here.",
      ],
      signoff: "kyndall",
    };
  }

  if (coffee) {
    return {
      subject: "thank you.",
      preview: "that actually helps.",
      kicker: "matcha",
      title: "that's kind.",
      paragraphs: [
        hi,
        "thank you. it actually helps.",
        "if you have any questions, just reply here.",
      ],
      signoff: "kyndall",
    };
  }

  if (presale && guide) {
    return {
      subject: "you're in. the editing mini guide is on the way.",
      preview: "it lands september 30. reply if you need anything before then.",
      kicker: "presale",
      title: "you're in.",
      paragraphs: [
        hi,
        "thank you for preordering the editing mini guide. i'm so excited to be making this.",
        "it lands september 30, and i'll send it to this email that day.",
        "if you have any questions or issues before it's out, just reply here.",
      ],
      signoff: "kyndall",
    };
  }

  if (presale) {
    const title = product?.title ?? "this";
    return {
      subject: `you're in. ${title} is on the way.`,
      preview: "i'll send it here when it drops. reply if you need anything before then.",
      kicker: "presale",
      title: "you're in.",
      paragraphs: [
        hi,
        `thank you for preordering ${title}. i'm so excited to be making this.`,
        "i'll send it to this email when it drops.",
        "if you have any questions or issues before it's out, just reply here.",
      ],
      signoff: "kyndall",
    };
  }

  const title = product?.title ?? "your order";
  return {
    subject: `${title} is on the way.`,
    preview: "i'll send it to this email. reply if anything looks off.",
    kicker: "paid",
    title: "i'll send it over.",
    paragraphs: [
      hi,
      `thank you. ${title} comes to this email.`,
      "if you have any questions or it doesn't show up, just reply here.",
    ],
    signoff: "kyndall",
  };
}

/** Draft only. Do not send until the files exist. */
export function guideLaunchMail(): BuyerMail {
  return {
    subject: "the editing mini guide is here.",
    preview: "your copy is in this email.",
    kicker: "it's out",
    title: "here you go.",
    paragraphs: [
      "the editing mini guide is ready. how i edit my yaps, in one place.",
      "[download link goes here once the files exist]",
      "if anything's missing or you have questions, reply here and i'll sort it.",
    ],
    signoff: "kyndall",
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
