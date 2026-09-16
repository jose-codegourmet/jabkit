import type {
  FisheyeInfiniteGridItem,
  FisheyeInfiniteGridProps,
} from "./FisheyeInfiniteGrid.types";

const editorial: FisheyeInfiniteGridItem[] = [
  {
    image: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Glass rooms along an empty daylight corridor",
    title: "Silver Veil",
    meta: "01",
  },
  {
    image: "/assets/462c849dc9a41e59.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    title: "Quiet Frame",
    meta: "02",
  },
  {
    image: "/assets/6cc11e462a9aaded.webp",
    alt: "Arc floor lamp lighting a quiet corner",
    title: "Ember Transit",
    meta: "03",
  },
  {
    image: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    title: "Soft Gesture",
    meta: "04",
  },
  {
    image: "/assets/462a1be29787cd8e.webp",
    alt: "Low oak lounge chair on a pale floor",
    title: "Amber Echo",
    meta: "05",
  },
  {
    image: "/assets/488fa5330da1224c.webp",
    alt: "Sculptural stone side table in a sunlit room",
    title: "Moss Passage",
    meta: "06",
  },
  {
    image: "/assets/66859c6f46cc742b.webp",
    alt: "Quiet interior still with a pale wall and a single chair",
    title: "Cyan Current",
    meta: "07",
  },
  {
    image: "/assets/1fd89b6a1d45ac75.webp",
    alt: "Soft daylight across a timber-lined room",
    title: "Phantom Chorus",
    meta: "08",
  },
  {
    image: "/assets/e8b49d7b4617a825.webp",
    alt: "Abstract still of folded paper and warm light",
    title: "Ivory Fade",
    meta: "09",
  },
  {
    image: "/assets/c21dbcfeac157c9b.webp",
    alt: "Portrait still used as a sleeve for Still Water",
    title: "Ionic Profile",
    meta: "10",
  },
  {
    image: "/assets/1391b53bc91d2127.webp",
    alt: "Portrait still used as a sleeve for Third Rail",
    title: "Carbon Study",
    meta: "11",
  },
  {
    image: "/assets/c65cd8af6df1b122.webp",
    alt: "Portrait still used as a sleeve for Undertow",
    title: "Petal Trace",
    meta: "12",
  },
];

const studio: FisheyeInfiniteGridItem[] = [
  {
    image: "/assets/040bd026249d7af9.webp",
    alt: "Portrait of Mateo Ruiz",
    title: "Northline",
    meta: "A",
  },
  {
    image: "/assets/7b4e1076c576b862.webp",
    alt: "Portrait of Sable Wren",
    title: "Fieldwork",
    meta: "B",
  },
  {
    image: "/assets/c21dbcfeac157c9b.webp",
    alt: "Portrait of Amara Cole",
    title: "Harbor",
    meta: "C",
  },
  {
    image: "/assets/1391b53bc91d2127.webp",
    alt: "Portrait of Julian Hart",
    title: "Lumen",
    meta: "D",
  },
  {
    image: "/assets/c65cd8af6df1b122.webp",
    alt: "Portrait of Noor Elamin",
    title: "Helio",
    meta: "E",
  },
  {
    image: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Glass rooms along an empty daylight corridor",
    title: "Tidewater",
    meta: "F",
  },
  {
    image: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    title: "Slow Bloom",
    meta: "G",
  },
  {
    image: "/assets/1fd89b6a1d45ac75.webp",
    alt: "Soft daylight across a timber-lined room",
    title: "Understory",
    meta: "H",
  },
];

export const fisheyeInfiniteGridItems = editorial;

export const fisheyeInfiniteGridMocks = {
  default: {
    items: editorial,
    className: "h-[620px] min-h-[620px] w-full",
  },
  alternate: {
    items: studio,
    tileWidth: 210,
    tileHeight: 248,
    gap: 14,
    lensStrength: 0.4,
    hoverNudge: 22,
    className: "h-[620px] min-h-[620px] w-full",
  },
} satisfies Record<"default" | "alternate", FisheyeInfiniteGridProps>;
