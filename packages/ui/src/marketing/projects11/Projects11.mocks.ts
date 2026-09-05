import type { Projects11Image, Projects11Props } from "./Projects11.types";

const defaultImages: Projects11Image[] = [
  {
    src: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Empty office corridor with glass rooms and daylight",
    aspect: "landscape",
    href: "#corridor",
  },
  {
    src: "/assets/462c849dc9a41e59.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    aspect: "tall",
    href: "#studio",
  },
  {
    src: "/assets/6cc11e462a9aaded.webp",
    alt: "Arc floor lamp lighting a quiet corner",
    aspect: "square",
    href: "#lamp",
  },
  {
    src: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    aspect: "portrait",
    href: "#concrete",
  },
  {
    src: "/assets/462a1be29787cd8e.webp",
    alt: "Low oak lounge chair on a pale floor",
    aspect: "landscape",
    href: "#lounge",
  },
  {
    src: "/assets/488fa5330da1224c.webp",
    alt: "Sculptural stone side table in a sunlit room",
    aspect: "tall",
    href: "#stone",
  },
  {
    src: "/assets/7cb36691e11ed9af.webp",
    alt: "Linen daybed against a plaster wall",
    aspect: "portrait",
    href: "#daybed",
  },
  {
    src: "/assets/4f6410f5452c0ba5.webp",
    alt: "Hand-thrown ceramic pendant light",
    aspect: "square",
    href: "#pendant",
  },
  {
    src: "/assets/d7eddb427ba6f203.webp",
    alt: "Shipping containers stacked along a lit harbor dock",
    aspect: "tall",
    href: "#harbor",
  },
  {
    src: "/assets/4cc437eeea3384d1.webp",
    alt: "Researcher reviewing data on a laptop in a bright lab",
    aspect: "landscape",
    href: "#lab",
  },
  {
    src: "/assets/dd6c26bc44cd7218.webp",
    alt: "Glass office atrium with warm interior lighting",
    aspect: "portrait",
    href: "#atrium",
  },
  {
    src: "/assets/672651fa6e0f526b.webp",
    alt: "Architectural concrete stairwell with a skylight",
    aspect: "square",
    href: "#stair",
  },
];

const alternateImages: Projects11Image[] = [
  {
    src: "/assets/66859c6f46cc742b.webp",
    alt: "Brass wall sconce on plaster",
    aspect: "portrait",
    href: "#sconce",
  },
  {
    src: "/assets/21aecf698128f57b.webp",
    alt: "Walnut writing desk with a single drawer",
    aspect: "landscape",
    href: "#desk",
  },
  {
    src: "/assets/e40131b7fd7bf05b.webp",
    alt: "Folded paper pendant shade",
    aspect: "square",
    href: "#shade",
  },
  {
    src: "/assets/d35b71081ab5deef.webp",
    alt: "Wool-upholstered lounge in a pale room",
    aspect: "tall",
    href: "#wool",
  },
  {
    src: "/assets/46d405deede5a407.webp",
    alt: "Turned ash stool on a timber floor",
    aspect: "square",
    href: "#stool",
  },
  {
    src: "/assets/1fd89b6a1d45ac75.webp",
    alt: "Glass office rooms along a quiet corridor",
    aspect: "portrait",
    href: "#glass",
  },
  {
    src: "/assets/e8b49d7b4617a825.webp",
    alt: "Open studio floor with desks and daylight",
    aspect: "landscape",
    href: "#floor",
  },
  {
    src: "/assets/7c4790dcbb9fd01c.webp",
    alt: "Retail interior with hanging lamps and wood fixtures",
    aspect: "tall",
    href: "#retail",
  },
  {
    src: "/assets/0641888d44065d35.webp",
    alt: "Team gathered around a table reviewing work together",
    aspect: "portrait",
    href: "#review",
  },
  {
    src: "/assets/02e3cd676d6ef884.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    aspect: "square",
    href: "#desks",
  },
  {
    src: "/assets/34919d09d11a5a00.webp",
    alt: "Reading nook with a lounge chair and a floor lamp",
    aspect: "landscape",
    href: "#nook",
  },
  {
    src: "/assets/b7aa48391ad153f6.webp",
    alt: "Workshop around a long table with laptops open",
    aspect: "tall",
    href: "#workshop",
  },
];

export const projects11Mocks: Required<
  Pick<Projects11Props, "label" | "images">
> = {
  label: "Selected projects",
  images: defaultImages,
};

export const projects11AlternateMocks: typeof projects11Mocks = {
  label: "Studio archive",
  images: alternateImages,
};
