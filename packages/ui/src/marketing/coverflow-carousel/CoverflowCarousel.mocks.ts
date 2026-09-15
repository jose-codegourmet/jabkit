import type {
  CoverflowCarouselItem,
  CoverflowCarouselProps,
} from "./CoverflowCarousel.types";

const records: CoverflowCarouselItem[] = [
  {
    id: "tidewater",
    image: "/assets/d3f9bde61c9a29e7.webp",
    imageAlt: "Glass rooms along an empty daylight corridor",
    title: "Tidewater",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2019" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:42" },
    ],
  },
  {
    id: "nightshift",
    image: "/assets/462c849dc9a41e59.webp",
    imageAlt: "Sunlit studio desks with plants and open notebooks",
    title: "Nightshift",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "4:08" },
    ],
  },
  {
    id: "overexposed",
    image: "/assets/6cc11e462a9aaded.webp",
    imageAlt: "Arc floor lamp lighting a quiet corner",
    title: "Overexposed",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2018" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:57" },
    ],
  },
  {
    id: "slow-bloom",
    image: "/assets/97c532d558fa4fbc.webp",
    imageAlt: "Concrete structure photographed from the ground",
    title: "Slow Bloom",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2022" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "3:15" },
    ],
  },
  {
    id: "open-palm",
    image: "/assets/462a1be29787cd8e.webp",
    imageAlt: "Low oak lounge chair on a pale floor",
    title: "Open Palm",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "3:01" },
    ],
  },
  {
    id: "low-country",
    image: "/assets/488fa5330da1224c.webp",
    imageAlt: "Sculptural stone side table in a sunlit room",
    title: "Low Country",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2017" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "5:20" },
    ],
  },
  {
    id: "dry-season",
    image: "/assets/66859c6f46cc742b.webp",
    imageAlt: "Quiet interior still with a pale wall and a single chair",
    title: "Dry Season",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2016" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "2:44" },
    ],
  },
  {
    id: "understory",
    image: "/assets/1fd89b6a1d45ac75.webp",
    imageAlt: "Soft daylight across a timber-lined room",
    title: "Understory",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2023" },
      { label: "Producer", value: "Kell Mora" },
      { label: "Length", value: "3:38" },
    ],
  },
  {
    id: "paper-lantern",
    image: "/assets/e8b49d7b4617a825.webp",
    imageAlt: "Abstract still of folded paper and warm light",
    title: "Paper Lantern",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2021" },
      { label: "Producer", value: "Rue Alcott" },
      { label: "Length", value: "2:19" },
    ],
  },
  {
    id: "still-water",
    image: "/assets/c21dbcfeac157c9b.webp",
    imageAlt: "Portrait still used as a sleeve for Still Water",
    title: "Still Water",
    subtitle: "Long Player",
    meta: [
      { label: "Year", value: "2015" },
      { label: "Producer", value: "Ada Ferrow" },
      { label: "Length", value: "4:51" },
    ],
  },
  {
    id: "third-rail",
    image: "/assets/1391b53bc91d2127.webp",
    imageAlt: "Portrait still used as a sleeve for Third Rail",
    title: "Third Rail",
    subtitle: "EP",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Producer", value: "Sim Oyo" },
      { label: "Length", value: "3:07" },
    ],
  },
  {
    id: "undertow",
    image: "/assets/c65cd8af6df1b122.webp",
    imageAlt: "Portrait still used as a sleeve for Undertow",
    title: "Undertow",
    subtitle: "Single",
    meta: [
      { label: "Year", value: "2020" },
      { label: "Producer", value: "Juno Vale" },
      { label: "Length", value: "3:29" },
    ],
  },
];

const portraits: CoverflowCarouselItem[] = [
  {
    id: "amara",
    image: "/assets/c21dbcfeac157c9b.webp",
    imageAlt: "Portrait of Amara Cole",
    title: "Amara Cole",
    subtitle: "Creative director",
    meta: [
      { label: "Studio", value: "Northline" },
      { label: "City", value: "Lisbon" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: "julian",
    image: "/assets/1391b53bc91d2127.webp",
    imageAlt: "Portrait of Julian Hart",
    title: "Julian Hart",
    subtitle: "Design lead",
    meta: [
      { label: "Studio", value: "Fieldwork" },
      { label: "City", value: "Porto" },
      { label: "Year", value: "2025" },
    ],
  },
  {
    id: "noor",
    image: "/assets/c65cd8af6df1b122.webp",
    imageAlt: "Portrait of Noor Elamin",
    title: "Noor Elamin",
    subtitle: "Brand strategist",
    meta: [
      { label: "Studio", value: "Lumen" },
      { label: "City", value: "Madrid" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    id: "mateo",
    image: "/assets/040bd026249d7af9.webp",
    imageAlt: "Portrait of Mateo Ruiz",
    title: "Mateo Ruiz",
    subtitle: "Art director",
    meta: [
      { label: "Studio", value: "Helio" },
      { label: "City", value: "Barcelona" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    id: "sable",
    image: "/assets/7b4e1076c576b862.webp",
    imageAlt: "Portrait of Sable Wren",
    title: "Sable Wren",
    subtitle: "Producer",
    meta: [
      { label: "Studio", value: "Harbor" },
      { label: "City", value: "Bilbao" },
      { label: "Year", value: "2025" },
    ],
  },
];

export const coverflowCarouselMocks = {
  default: {
    items: records,
    showCaption: true,
  },
  alternate: {
    items: portraits,
    showCaption: true,
    showNavigation: true,
    showPagination: true,
  },
} satisfies Record<"default" | "alternate", CoverflowCarouselProps>;
