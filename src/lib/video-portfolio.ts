/** Organic social reels — self-hosted exports in public/showcase/ */

export type VideoAspect = "9/16" | "16/9";

export type SocialVideoPiece = {
  id: string;
  /** Reel cover line */
  title: string;
  video: string;
  poster?: string;
  platform: "instagram" | "tiktok";
  /** Editing techniques shown in the piece */
  edits: string[];
  /** Player frame aspect — defaults to vertical reel */
  aspect?: VideoAspect;
};

export const VIDEO_PAGE_HERO = {
  sub: [
    "i'm a content creator",
    "who edits my own short-form",
    "for instagram and tiktok.",
    "from talking head to final cut.",
  ],
  scrollLabel: "see the work",
  scrollTarget: "#work",
} as const;

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
    id: "09",
    title: "400 ads for a brand that doesn't exist",
    video: "/showcase/09.mp4",
    poster: "/showcase/09-poster.jpg",
    platform: "instagram",
    edits: ["ui overlays", "product comps", "count pacing", "talking head"],
  },
  {
    id: "13",
    title: "idk what i expected but it wasn't this",
    video: "/showcase/13.mp4",
    poster: "/showcase/13-poster.jpg",
    platform: "instagram",
    edits: ["profile ui overlays", "before after comps", "hook-first pacing"],
  },
  {
    id: "12",
    title: "sending it",
    video: "/showcase/12.mp4",
    poster: "/showcase/12-poster.jpg",
    platform: "instagram",
    edits: ["picture-in-picture", "kinetic captions", "talking head"],
  },
  {
    id: "11",
    title: "my best ideas disappear the moment i sit down at my laptop",
    video: "/showcase/11.mp4",
    poster: "/showcase/11-poster.jpg",
    platform: "instagram",
    edits: ["meme overlays", "greenscreen comps", "talking head"],
  },
  {
    id: "10",
    title: "this is my stan store except it's not stan store",
    video: "/showcase/10.mp4",
    poster: "/showcase/10-poster.jpg",
    platform: "instagram",
    edits: ["screen demos", "ui overlays", "talking head"],
  },
  {
    id: "08",
    title: "i hired an assistant (i built her)",
    video: "/showcase/08.mp4",
    poster: "/showcase/08-poster.jpg",
    platform: "instagram",
    edits: ["ui overlays", "meme cutaway inserts", "talking head"],
  },
  {
    id: "07",
    title: "somewhere in between: making cool shit",
    video: "/showcase/07.mp4",
    poster: "/showcase/07-poster.jpg",
    platform: "instagram",
    edits: ["kinetic captions", "outdoor talking head", "list pacing"],
  },
  {
    id: "06",
    title: "i quit my job 6 months ago",
    video: "/showcase/06.mp4",
    poster: "/showcase/06-poster.jpg",
    platform: "instagram",
    edits: ["meme cutaway inserts", "kinetic captions", "hook-first pacing"],
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
  {
    id: "05",
    title: "cursor makes little animations for your videos",
    video: "/showcase/05.mp4",
    poster: "/showcase/05-poster.jpg",
    platform: "instagram",
    edits: ["greenscreen overlays", "cursor ui comps", "capcut layering"],
    aspect: "16/9",
  },
];

/** Homepage marquee — newest first */
export const HOMEPAGE_SHOWCASE_IDS = ["09", "12", "11", "10"] as const;

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
