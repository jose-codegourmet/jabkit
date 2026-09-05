import type { Gallery31Item, Gallery31Props } from "./Gallery31.types";

const defaultItems: Gallery31Item[] = [
  {
    name: "Oak lounge chair",
    price: "$1,240",
    href: "#oak-lounge",
    span: "wide",
    image: {
      src: "/assets/462a1be29787cd8e.webp",
      alt: "Low oak lounge chair on a pale floor",
    },
  },
  {
    name: "Arc floor lamp",
    price: "$480",
    href: "#arc-lamp",
    image: {
      src: "/assets/6cc11e462a9aaded.webp",
      alt: "Arc floor lamp lighting a quiet corner",
    },
  },
  {
    name: "Stone side table",
    price: "$890",
    href: "#stone-table",
    span: "tall",
    image: {
      src: "/assets/488fa5330da1224c.webp",
      alt: "Sculptural stone side table in a sunlit room",
    },
  },
  {
    name: "Linen daybed",
    price: "$2,180",
    href: "#linen-daybed",
    image: {
      src: "/assets/7cb36691e11ed9af.webp",
      alt: "Linen daybed against a plaster wall",
    },
  },
  {
    name: "Ceramic pendant",
    price: "$310",
    href: "#ceramic-pendant",
    span: "wide",
    image: {
      src: "/assets/4f6410f5452c0ba5.webp",
      alt: "Hand-thrown ceramic pendant light",
    },
  },
];

const alternateItems: Gallery31Item[] = [
  {
    name: "Walnut desk",
    price: "$1,860",
    href: "#walnut-desk",
    span: "wide",
    image: {
      src: "/assets/21aecf698128f57b.webp",
      alt: "Walnut writing desk with a single drawer",
    },
  },
  {
    name: "Paper shade",
    price: "$220",
    href: "#paper-shade",
    image: {
      src: "/assets/e40131b7fd7bf05b.webp",
      alt: "Folded paper pendant shade",
    },
  },
  {
    name: "Wool lounge",
    price: "$2,640",
    href: "#wool-lounge",
    span: "tall",
    image: {
      src: "/assets/d35b71081ab5deef.webp",
      alt: "Wool-upholstered lounge in a pale room",
    },
  },
  {
    name: "Ash stool",
    price: "$175",
    href: "#ash-stool",
    image: {
      src: "/assets/46d405deede5a407.webp",
      alt: "Turned ash stool on a timber floor",
    },
  },
  {
    name: "Brass sconce",
    price: "$390",
    href: "#brass-sconce",
    span: "wide",
    image: {
      src: "/assets/66859c6f46cc742b.webp",
      alt: "Brass wall sconce on plaster",
    },
  },
];

export const gallery31Mocks: Required<
  Pick<Gallery31Props, "kicker" | "title" | "description" | "items">
> = {
  kicker: "New season",
  title: "Pieces that hold a room.",
  description:
    "Five objects from the floor — name and price wait on the overlay, from whichever edge you enter.",
  items: defaultItems,
};

export const gallery31AlternateMocks: typeof gallery31Mocks = {
  kicker: "Studio edit",
  title: "A quieter catalog.",
  description:
    "Same mosaic, different stock: still five tiles, still a wide span and a tall span, still a directional reveal.",
  items: alternateItems,
};
