/** Organic social reels — self-hosted exports in public/showcase/ */

export type SocialVideoPiece = {
  id: string;
  /** Reel cover line */
  title: string;
  video: string;
  poster?: string;
  platform: "instagram" | "tiktok";
  /** Editing techniques shown in the piece */
  edits: string[];
};

export const VIDEO_PAGE_INTRO = {
  scope: "short-form video editing for instagram and tiktok.",
  capabilities: [
    "motion type",
    "captions",
    "ui overlays",
    "greenscreen comps",
    "pacing",
    "sound",
  ],
} as const;

export const SOCIAL_VIDEOS: SocialVideoPiece[] = [
  {
    id: "05",
    title: "cursor makes little animations for your videos",
    video: "/showcase/05.mp4",
    poster: "/showcase/05-poster.jpg",
    platform: "instagram",
    edits: ["greenscreen overlays", "cursor ui comps", "capcut layering"],
  },
  {
    id: "04",
    title: "3 things i would build this weekend",
    video: "/showcase/04.mp4",
    poster: "/showcase/04-poster.jpg",
    platform: "instagram",
    edits: ["kinetic hook type", "outdoor talking head", "list pacing"],
  },
  {
    id: "03",
    title: "4 files that actually make Claude sound like me",
    video: "/showcase/03.mp4",
    poster: "/showcase/03-poster.jpg",
    platform: "instagram",
    edits: ["branded ui cards", "product logo lockup", "screen-style overlays"],
  },
  {
    id: "02",
    title: "you don't need to build an app to build with ai",
    video: "/showcase/02.mp4",
    poster: "/showcase/02-poster.jpg",
    platform: "instagram",
    edits: ["kinetic captions", "ui mockup overlays", "comment cta card"],
  },
  {
    id: "01",
    title: "prompting is not the skill anymore. building loops is.",
    video: "/showcase/01.mp4",
    poster: "/showcase/01-poster.jpg",
    platform: "instagram",
    edits: ["kinetic typography", "talking head", "hook-first pacing"],
  },
];

/** Homepage marquee — stable order, newest excluded if you want a tighter row */
export const HOMEPAGE_SHOWCASE_IDS = ["01", "02", "03", "04"] as const;

export function getHomepageShowcasePieces() {
  const byId = new Map(SOCIAL_VIDEOS.map((piece) => [piece.id, piece]));
  return HOMEPAGE_SHOWCASE_IDS.flatMap((id) => {
    const piece = byId.get(id);
    return piece
      ? [
          {
            id: piece.id,
            video: piece.video,
            poster: piece.poster,
          },
        ]
      : [];
  });
}

export function getUgcOrganicPieces() {
  return SOCIAL_VIDEOS.map((piece) => ({
    id: piece.id,
    video: piece.video,
    poster: piece.poster,
  }));
}
