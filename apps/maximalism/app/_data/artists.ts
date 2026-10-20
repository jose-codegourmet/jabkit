import type { StageId } from "./stages";

export type Day = 1 | 2;

export const days: readonly Day[] = [1, 2];

export interface Artist {
  slug: string;
  name: string;
  genre: string;
  day: Day;
  stageId: StageId;
  /** 24-hour start time, "HH:MM". */
  start: string;
  lengthMinutes: number;
  imageId: string;
  bio: string;
}

/** Fictional demo acts. Do not substitute real artists. */
export const artists: Artist[] = [
  {
    slug: "tuesday-lanterns",
    name: "Tuesday Lanterns",
    genre: "Brass-heavy dance pop",
    day: 1,
    stageId: "loud-stage",
    start: "21:00",
    lengthMinutes: 75,
    imageId: "max-artist-01",
    bio: "Eleven players, four trumpets, zero chill. Choruses built for the back row.",
  },
  {
    slug: "honey-ultra",
    name: "Honey Ultra",
    genre: "Synth soul",
    day: 1,
    stageId: "glow-tent",
    start: "19:30",
    lengthMinutes: 60,
    imageId: "max-artist-02",
    bio: "Warm vocals over cold synths. Slow-burn songs that end up very loud.",
  },
  {
    slug: "velvet-forklift",
    name: "Velvet Forklift",
    genre: "Bass-driven garage rock",
    day: 1,
    stageId: "low-end-room",
    start: "22:30",
    lengthMinutes: 60,
    imageId: "max-artist-03",
    bio: "Three-piece, two basses, one drum kit held together with tape.",
  },
  {
    slug: "glasshouse-choir",
    name: "Glasshouse Choir",
    genre: "Choral folk",
    day: 1,
    stageId: "open-air-deck",
    start: "17:00",
    lengthMinutes: 45,
    imageId: "max-artist-04",
    bio: "Twenty voices, one acoustic guitar, and a sunset if the weather agrees.",
  },
  {
    slug: "marigold-static",
    name: "Marigold Static",
    genre: "Noise pop",
    day: 2,
    stageId: "loud-stage",
    start: "21:30",
    lengthMinutes: 75,
    imageId: "max-artist-05",
    bio: "Sweet melodies wrapped in feedback. Earplugs optional, joy mandatory.",
  },
  {
    slug: "kilo-kaleido",
    name: "Kilo Kaleido",
    genre: "Club percussion",
    day: 2,
    stageId: "glow-tent",
    start: "20:00",
    lengthMinutes: 60,
    imageId: "max-artist-06",
    bio: "Live drums, steel pans, and a drum machine that never sits still.",
  },
  {
    slug: "sofa-comet",
    name: "Sofa Comet",
    genre: "Bedroom psych",
    day: 2,
    stageId: "open-air-deck",
    start: "16:30",
    lengthMinutes: 45,
    imageId: "max-artist-07",
    bio: "Songs written on a couch, played to a field. Hazy, bright, and kind.",
  },
  {
    slug: "neon-tidepool",
    name: "Neon Tidepool",
    genre: "Ambient dub",
    day: 2,
    stageId: "low-end-room",
    start: "23:00",
    lengthMinutes: 90,
    imageId: "max-artist-08",
    bio: "Deep bass, long echoes, the slowest dance of the weekend.",
  },
];

export const artistSlugs = artists.map((artist) => artist.slug);

export function getArtist(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

export function artistsByDay(day: Day): Artist[] {
  return artists.filter((artist) => artist.day === day);
}

/** Other acts on the same stage and day. Every stage/day pair has one act, so this is empty for the demo lineup. */
export function relatedArtists(slug: string): Artist[] {
  const artist = getArtist(slug);
  if (!artist) return [];
  return artists.filter(
    (other) =>
      other.slug !== slug &&
      other.day === artist.day &&
      other.stageId === artist.stageId,
  );
}

export function artistHref(slug: string): string {
  return `/lineup/${slug}`;
}

export function formatLength(minutes: number): string {
  return `${minutes} min`;
}

export function dayLabel(day: Day): string {
  return `Day ${day}`;
}
