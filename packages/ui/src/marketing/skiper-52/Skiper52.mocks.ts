import type { Skiper52Image, Skiper52Props } from "./Skiper52.types";

const plates: Skiper52Image[] = [
  {
    src: "/assets/462a1be29787cd8e.webp",
    alt: "Low oak lounge chair on a pale floor",
    code: "# 01",
  },
  {
    src: "/assets/6cc11e462a9aaded.webp",
    alt: "Arc floor lamp lighting a quiet corner",
    code: "# 02",
  },
  {
    src: "/assets/488fa5330da1224c.webp",
    alt: "Sculptural stone side table in a sunlit room",
    code: "# 03",
  },
  {
    src: "/assets/7cb36691e11ed9af.webp",
    alt: "Linen daybed against a plaster wall",
    code: "# 04",
  },
  {
    src: "/assets/4f6410f5452c0ba5.webp",
    alt: "Hand-thrown ceramic pendant light",
    code: "# 05",
  },
  {
    src: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    code: "# 06",
  },
  {
    src: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Glass rooms along an empty daylight corridor",
    code: "# 07",
  },
];

const portraits: Skiper52Image[] = [
  {
    src: "/assets/c21dbcfeac157c9b.webp",
    alt: "Portrait of Amara Cole",
    code: "# AC",
  },
  {
    src: "/assets/1391b53bc91d2127.webp",
    alt: "Portrait of Julian Hart",
    code: "# JH",
  },
  {
    src: "/assets/c65cd8af6df1b122.webp",
    alt: "Portrait of Noor Elamin",
    code: "# NE",
  },
  {
    src: "/assets/040bd026249d7af9.webp",
    alt: "Portrait of Mateo Ruiz",
    code: "# MR",
  },
  {
    src: "/assets/7b4e1076c576b862.webp",
    alt: "Portrait of Sable Wren",
    code: "# SW",
  },
];

export const skiper52Mocks = {
  default: {
    eyebrow: "Hover expand",
    heading: "Plates that open when you linger.",
    description:
      "Idle strips stay narrow. The one under the pointer grows so the photograph can be read, then the rest close back in.",
    images: plates,
    initialActive: 1,
  },
  alternate: {
    eyebrow: "Cast",
    heading: "Five faces, one strip.",
    description:
      "Same expand-on-hover rack, portraits instead of objects. Focus or tap a strip to hold it open.",
    images: portraits,
    initialActive: 2,
  },
} satisfies Record<"default" | "alternate", Skiper52Props>;
