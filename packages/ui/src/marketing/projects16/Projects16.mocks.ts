import type { Projects16Image, Projects16Props } from "./Projects16.types";

const defaultImages: Projects16Image[] = [
  {
    src: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Empty office corridor with glass rooms and daylight",
    aspect: "landscape",
  },
  {
    src: "/assets/462c849dc9a41e59.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    aspect: "portrait",
  },
  {
    src: "/assets/6cc11e462a9aaded.webp",
    alt: "Arc floor lamp lighting a quiet corner",
    aspect: "portrait",
  },
  {
    src: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    aspect: "landscape",
  },
];

const alternateImages: Projects16Image[] = [
  {
    src: "/assets/66859c6f46cc742b.webp",
    alt: "Brass wall sconce on plaster",
    aspect: "landscape",
  },
  {
    src: "/assets/488fa5330da1224c.webp",
    alt: "Sculptural stone side table in a sunlit room",
    aspect: "portrait",
  },
  {
    src: "/assets/1fd89b6a1d45ac75.webp",
    alt: "Glass office rooms along a quiet corridor",
    aspect: "portrait",
  },
  {
    src: "/assets/e8b49d7b4617a825.webp",
    alt: "Open studio floor with desks and daylight",
    aspect: "landscape",
  },
];

export const projects16Mocks: Required<
  Pick<Projects16Props, "title" | "description" | "action" | "images">
> = {
  title: "Work from the last two seasons.\nQuiet frames, kept in sequence.",
  description:
    "A small edit of field photographs — still rooms, weather, and the edges of a brief. Nothing moves; the crop does the talking.",
  action: { label: "View all projects", href: "#projects" },
  images: defaultImages,
};

export const projects16AlternateMocks: typeof projects16Mocks = {
  title: "Interiors from the floor.\nFour rooms, no captions.",
  description:
    "A tighter set for product studios: plaster, timber, and one lamp. The grid still staggers landscape over portrait.",
  action: { label: "See the archive", href: "#archive" },
  images: alternateImages,
};
