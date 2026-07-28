/** Homepage portfolio row — data lives in video-portfolio.ts */

import {
  getHomepageShowcasePieces,
  type SocialVideoPiece,
} from "@/lib/video-portfolio";

export type ShowcasePiece = Pick<SocialVideoPiece, "id" | "video" | "poster">;

/** One line under the headline — edit to your voice */
export const SHOWCASE_INTRO =
  "i make content about using ai on real problems. tested, useful, shared while it's still messy.";

export const SHOWCASE_PIECES: ShowcasePiece[] = getHomepageShowcasePieces();
