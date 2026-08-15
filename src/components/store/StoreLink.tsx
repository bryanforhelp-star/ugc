import Link from "next/link";

function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

export function StoreLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  if (isExternal(href)) {
    const mailto = href.startsWith("mailto:");
    const sponsored =
      typeof rest.rel === "string" && rest.rel.includes("sponsored");
    return (
      <a
        {...rest}
        href={href}
        className={className}
        {...(mailto
          ? {}
          : {
              target: "_blank",
              rel: sponsored ? "sponsored noopener noreferrer" : "noreferrer",
            })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
