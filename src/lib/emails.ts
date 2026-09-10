import { SITE } from "./site";
import { COFFEE, EDITING_GUIDE, type StoreProduct } from "./store";

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const INK = "#0b0b0c";

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

const BODY =
  `margin:0 0 28px;font-family:${FONT};font-size:16px;line-height:1.5;font-weight:400;color:${INK};`;
const FOOT =
  `margin:0;font-family:${FONT};font-size:12px;line-height:1.55;font-weight:400;color:#9a9a9e;`;
const FOOT_LINK =
  `color:#9a9a9e;text-decoration:underline;text-underline-offset:2px;`;

export function wrapBuyerEmail(mail: BuyerMail) {
  const site = SITE.url.replace(/\/$/, "") || "https://bykyndall.com";
  const siteHost = site.replace(/^https?:\/\//, "");
  const mark = assetUrl("/email/withkyndall.gif");
  const signature = assetUrl("/email/kyn-sign.png");
  const kicker = mail.kicker
    ? `<p style="${BODY}">${escapeHtml(mail.kicker)}</p>`
    : "";
  const headline = mail.title
    ? `<p style="${BODY}">${escapeHtml(mail.title)}</p>`
    : "";
  const paragraphs = mail.paragraphs
    .map((p) => `<p style="${BODY}">${escapeHtml(p)}</p>`)
    .join("");
  const signoffLines = mail.signoff
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !/^(kyn|kyndall)$/i.test(line));
  const signoff = signoffLines
    .map(
      (line, index) =>
        `<p style="margin:${index === 0 ? "8px" : "0"} 0 0;font-family:${FONT};font-size:16px;line-height:1.5;color:${INK};">${escapeHtml(line)}</p>`,
    )
    .join("");
  const mailing = escapeHtml(SITE.mailingAddress);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(mail.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(mail.preview)}</div>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:56px 28px 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;">
          <tr>
            <td align="center" style="padding:0 0 56px;">
              <a href="${site}" style="text-decoration:none;">
                <img src="${mark}" width="176" height="64" alt="withkyndall" style="display:block;border:0;width:176px;height:auto;">
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-family:${FONT};color:${INK};">
              ${kicker}
              ${headline}
              ${paragraphs}
              ${signoff}
              <img src="${signature}" width="86" height="71" alt="kyn" style="display:block;border:0;margin:18px 0 0;width:86px;height:auto;">
            </td>
          </tr>
          <tr>
            <td style="padding:48px 8px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="border-top:1px solid #e6e6e8;padding-top:28px;">
                    <p style="${FOOT}">
                      you're getting this because you ordered something at
                      <a href="${site}" style="${FOOT_LINK}">${escapeHtml(siteHost)}</a>.
                    </p>
                    <p style="${FOOT}margin-top:10px;">
                      questions about your order?
                      <a href="mailto:${escapeHtml(REPLY)}" style="${FOOT_LINK}">just reply here</a>.
                    </p>
                    <p style="${FOOT}margin-top:22px;">
                      ${mailing}
                    </p>
                  </td>
                </tr>
              </table>
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
    "",
    `you're getting this because you ordered something at ${siteHost}.`,
    `questions about your order? reply to ${REPLY}.`,
    SITE.mailingAddress,
  ]
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
      subject: "thank you for your purchase 💙",
      preview: "it goes live september 30th. you'll get it in your inbox.",
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
