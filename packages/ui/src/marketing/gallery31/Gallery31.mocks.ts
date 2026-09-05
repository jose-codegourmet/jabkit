import type { Gallery31Item, Gallery31Props } from "./Gallery31.types";

const defaultItems: Gallery31Item[] = [
  {
    name: "Oak lounge chair",
    price: "$1,240",
    href: "#oak-lounge",
    span: "wide",
    image: {
      src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&h=1200&q=80",
      alt: "Low oak lounge chair on a pale floor",
    },
  },
  {
    name: "Arc floor lamp",
    price: "$480",
    href: "#arc-lamp",
    image: {
      src: "https://images.unsplash.com/photo-1507473887601-a6dd6838aaf2?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Arc floor lamp lighting a quiet corner",
    },
  },
  {
    name: "Stone side table",
    price: "$890",
    href: "#stone-table",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&h=1400&q=80",
      alt: "Sculptural stone side table in a sunlit room",
    },
  },
  {
    name: "Linen daybed",
    price: "$2,180",
    href: "#linen-daybed",
    image: {
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Linen daybed against a plaster wall",
    },
  },
  {
    name: "Ceramic pendant",
    price: "$310",
    href: "#ceramic-pendant",
    span: "wide",
    image: {
      src: "https://images.unsplash.com/photo-1540932239986-30128078f57c?auto=format&fit=crop&w=1600&h=900&q=80",
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
      src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba55c?auto=format&fit=crop&w=1600&h=1200&q=80",
      alt: "Walnut writing desk with a single drawer",
    },
  },
  {
    name: "Paper shade",
    price: "$220",
    href: "#paper-shade",
    image: {
      src: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Folded paper pendant shade",
    },
  },
  {
    name: "Wool lounge",
    price: "$2,640",
    href: "#wool-lounge",
    span: "tall",
    image: {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&h=1400&q=80",
      alt: "Wool-upholstered lounge in a pale room",
    },
  },
  {
    name: "Ash stool",
    price: "$175",
    href: "#ash-stool",
    image: {
      src: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Turned ash stool on a timber floor",
    },
  },
  {
    name: "Brass sconce",
    price: "$390",
    href: "#brass-sconce",
    span: "wide",
    image: {
      src: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&w=1600&h=900&q=80",
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
