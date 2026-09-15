import type {
  CoverflowCarouselItem,
  CoverflowCarouselProps,
} from "./CoverflowCarousel.types";

const records: CoverflowCarouselItem[] = [
  {
    id: "harbor-cut",
    image: "/assets/d3f9bde61c9a29e7.webp",
    imageAlt: "Glass rooms along an empty daylight corridor",
    title: "Harbor Cut",
    subtitle: "Northline · 2024",
  },
  {
    id: "plant-room",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open notebooks",
    title: "Plant Room",
    subtitle: "Fieldwork · 2025",
  },
  {
    id: "arc-study",
    image: "/assets/6cc11e462a9aaded.webp",
    imageAlt: "Arc floor lamp lighting a quiet corner",
    title: "Arc Study",
    subtitle: "Lumen · 2023",
  },
  {
    id: "yard-stairs",
    image: "/assets/97c532d558fa4fbc.webp",
    imageAlt: "Concrete structure photographed from the ground",
    title: "Yard Stairs",
    subtitle: "Helio · 2024",
  },
  {
    id: "oak-hour",
    image: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
    title: "Oak Hour",
    subtitle: "Harbor · 2025",
  },
  {
    id: "stone-table",
    image: "/assets/488fa5330da1224c.webp",
    imageAlt: "Sculptural stone side table in a sunlit room",
    title: "Stone Table",
    subtitle: "Orbit · 2026",
  },
];

const portraits: CoverflowCarouselItem[] = [
  {
    id: "amara",
    image: "/assets/c21dbcfeac157c9b.webp",
    imageAlt: "Portrait of Amara Cole",
    title: "Amara Cole",
    subtitle: "Creative director",
  },
  {
    id: "julian",
    image: "/assets/1391b53bc91d2127.webp",
    imageAlt: "Portrait of Julian Hart",
    title: "Julian Hart",
    subtitle: "Design lead",
  },
  {
    id: "noor",
    image: "/assets/c65cd8af6df1b122.webp",
    imageAlt: "Portrait of Noor Elamin",
    title: "Noor Elamin",
    subtitle: "Brand strategist",
  },
  {
    id: "mateo",
    image: "/assets/040bd026249d7af9.webp",
    imageAlt: "Portrait of Mateo Ruiz",
    title: "Mateo Ruiz",
    subtitle: "Art director",
  },
  {
    id: "sable",
    image: "/assets/7b4e1076c576b862.webp",
    imageAlt: "Portrait of Sable Wren",
    title: "Sable Wren",
    subtitle: "Producer",
  },
];

export const coverflowCarouselMocks = {
  default: {
    eyebrow: "Listening room",
    heading: "Covers that open toward you.",
    description:
      "The centre plate sits square. Neighbors swing their outer edges forward so the rack leans in, not away. Drag to change the cut.",
    items: records,
  },
  alternate: {
    eyebrow: "Studio faces",
    heading: "Five people, one rack.",
    description:
      "Same inverse coverflow, portraits instead of sleeves. The caption under the stage follows whoever is in front.",
    items: portraits,
    autoplay: true,
    autoplayMs: 4200,
  },
} satisfies Record<"default" | "alternate", CoverflowCarouselProps>;
