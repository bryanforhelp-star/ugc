type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.4 2.5 1.8 4.2 4 4.7v3.4c-1.6.1-3.1-.4-4.4-1.3v7.5c0 3.7-3 6.2-6.5 5.7-2.8-.4-5-2.8-5.2-5.6-.3-3.4 2.4-6.2 5.8-6.2.6 0 1.1.1 1.7.3v3.6c-.5-.2-1-.3-1.5-.2-1.3.2-2.2 1.3-2.1 2.6.1 1.3 1.2 2.2 2.5 2.1 1.4-.1 2.4-1.2 2.4-2.6V3h3.3z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C17.7 5 12 5 12 5s-5.7 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.3 19 12 19 12 19s5.7 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}
