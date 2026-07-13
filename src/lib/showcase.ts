/** Homepage portfolio row — drop files in public/showcase/ and fill in paths below */

export type ShowcasePiece = {
  id: string;
  /** e.g. "/showcase/01.mp4" */
  video?: string;
  poster?: string;
};

/** One line under the headline — edit to your voice */
export const SHOWCASE_INTRO =
  "i make content about using ai on real problems. tested, useful, shared while it's still messy.";

export const SHOWCASE_PIECES: ShowcasePiece[] = [
  {
    id: "01",
    video: "/showcase/01.mp4",
    poster: "/showcase/01-poster.jpg",
  },
  {
    id: "02",
    video: "/showcase/02.mp4",
    poster: "/showcase/02-poster.jpg",
  },
  {
    id: "03",
    video: "/showcase/03.mp4",
    poster: "/showcase/03-poster.jpg",
  },
  {
    id: "04",
    video: "/showcase/04.mp4",
    poster: "/showcase/04-poster.jpg",
  },
];

