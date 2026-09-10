import { SITE } from "./site";
import { COFFEE, EDITING_GUIDE, type StoreProduct } from "./store";

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const DISPLAY = "'Bootzy TM', 'Helvetica Neue', Helvetica, Arial, sans-serif";
const INK = "#0b0b0c";
const POP = "#1b2bff";

export type BuyerMail = {
  subject: string;
  preview: string;
  kicker?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
  meta?: string;
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

export function firstNameFrom(name: string) {
  const part = name.trim().split(/\s+/)[0] ?? "";
  if (part.length < 2) return "";
  return part.charAt(0).toUpperCase() + part.slice(1);
}

function assetUrl(path: string) {
  const base = SITE.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function wrapBuyerEmail(mail: BuyerMail) {
  const site = SITE.url.replace(/\/$/, "") || "https://bykyndall.com";
  const bootzy = assetUrl("/fonts/Bootzy-TM.woff2");
  const pixel = assetUrl("/fonts/NewPixel.woff2");
  const kicker = mail.kicker
    ? `<p style="margin:0 0 16px;font-family:${FONT};font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${POP};">${escapeHtml(mail.kicker)}</p>`
    : "";
  const headline = mail.title
    ? `<h1 style="margin:0 0 28px;font-family:${DISPLAY};font-size:52px;line-height:0.9;font-weight:400;letter-spacing:0.02em;color:${INK};">${escapeHtml(mail.title)}</h1>`
    : "";
  const paragraphs = mail.paragraphs
    .map(
      (p) =>
        `<p style="margin:0 0 16px;font-family:${FONT};font-size:16px;line-height:1.55;color:${INK};">${escapeHtml(p)}</p>`,
    )
    .join("");
  const signoff = mail.signoff.split("\n").map((line, index) => {
    const top = index === 0 ? "24px" : "4px";
    return `<p style="margin:${top} 0 0;font-family:${FONT};font-size:16px;line-height:1.55;color:${INK};">${escapeHtml(line)}</p>`;
  }).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(mail.subject)}</title>
<style>
@font-face {
  font-family: "Bootzy TM";
  src: url("${bootzy}") format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "NewPixel";
  src: url("${pixel}") format("woff2");
  font-weight: 400;
  font-style: normal;
}
</style>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(mail.preview)}</div>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:36px 24px 48px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:520px;">
          <tr>
            <td style="font-family:${FONT};color:${INK};">
              ${kicker}
              ${headline}
              ${paragraphs}
              ${signoff}
            </td>
          </tr>
          <tr>
            <td style="padding:32px 0 0;">
              <a href="${site}" style="font-family:'NewPixel',Georgia,serif;font-size:17px;color:${INK};text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:1.5px;">bykyndall.com <span style="color:${POP};">→</span></a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [mail.title, "", ...mail.paragraphs, "", mail.signoff, "", site]
    .filter((line): line is string => Boolean(line))
    .join("\n");

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
  const hey = name ? `hey ${name},` : "hey,";
  const coffee = product?.id === COFFEE.id;
  const booked = input.kind === "booking";
  const presale = product?.status === "presale";
  const guide = product?.id === EDITING_GUIDE.id;

  if (booked) {
    const when = input.when?.trim() || "the hour you picked";
    return {
      subject: "you're booked.",
      preview: `${when}. reply if you need anything before then.`,
      paragraphs: [
        hey,
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
      paragraphs: [
        hey,
        "thank you. it actually helps.",
        "if you have any questions, just reply here.",
      ],
      signoff: "kyndall",
    };
  }

  if (presale && guide) {
    return {
      subject: "Thank you for your purchase 💛",
      preview: "it goes live september 30th. you'll get it in your inbox.",
      title: "thank you sm!",
      paragraphs: [
        hey,
        "thank you so much for ordering the editing guide. i'm excited to be making this.",
        "it goes live september 30th. you'll get it in your inbox 💌",
        "again, appreciate you sm! if you have any questions about it, just reply here.",
      ],
      signoff: "cheers,\nkyn",
    };
  }

  if (presale) {
    const title = product?.title ?? "this";
    return {
      subject: `you're in. ${title} is on the way.`,
      preview: "i'll send it here when it drops. reply if you need anything before then.",
      paragraphs: [
        hey,
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
    paragraphs: [
      hey,
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
