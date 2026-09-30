import type { SwissImageId } from "./assets";

export const filmCategories = [
  "Documentary",
  "Narrative",
  "Shorts program",
] as const;

export type FilmCategory = (typeof filmCategories)[number];

export interface Film {
  slug: "the-quiet-current" | "between-stations" | "small-suns";
  index: "01" | "02" | "03";
  title: string;
  category: FilmCategory;
  runtime: number;
  year: string;
  country: string;
  synopsis: string;
  director: string;
  language: string;
  subtitles: string;
  ageGuidance: string;
  accessibility: string;
  address: string;
  venueSlug: "cinema-one" | "hall-b";
  stills: { lead: SwissImageId; detail: SwissImageId };
  shortsNote?: string;
  talk: null;
}

const sharedPlaceholders = {
  year: "[Year]",
  country: "[Country]",
  synopsis: "[Synopsis — client to confirm]",
  director: "[Director — client to confirm]",
  language: "[Language — client to confirm]",
  subtitles: "[Subtitles — client to confirm]",
  ageGuidance: "[Age guidance — client to confirm]",
  accessibility:
    "[Captioning / audio description / step-free access — client to confirm]",
  address: "[Venue address — client to confirm]",
} as const;

export const films: Film[] = [
  {
    ...sharedPlaceholders,
    slug: "the-quiet-current",
    index: "01",
    title: "The Quiet Current",
    category: "Documentary",
    runtime: 82,
    venueSlug: "cinema-one",
    stills: {
      lead: "swi-film-quiet-current-a",
      detail: "swi-film-quiet-current-b",
    },
    talk: null,
  },
  {
    ...sharedPlaceholders,
    slug: "between-stations",
    index: "02",
    title: "Between Stations",
    category: "Narrative",
    runtime: 104,
    venueSlug: "hall-b",
    stills: {
      lead: "swi-film-between-stations-a",
      detail: "swi-film-between-stations-b",
    },
    talk: null,
  },
  {
    ...sharedPlaceholders,
    slug: "small-suns",
    index: "03",
    title: "Small Suns",
    category: "Shorts program",
    runtime: 76,
    venueSlug: "cinema-one",
    stills: {
      lead: "swi-film-small-suns-a",
      detail: "swi-film-small-suns-b",
    },
    shortsNote:
      "Small Suns is a shorts program. Individual titles: [Shorts list — client to confirm].",
    talk: null,
  },
];

export function getFilm(slug: string) {
  return films.find((film) => film.slug === slug);
}

export function relatedFilms(slug: string) {
  return films.filter((film) => film.slug !== slug);
}

export function filmHref(slug: string) {
  return `/films/${slug}` as const;
}
