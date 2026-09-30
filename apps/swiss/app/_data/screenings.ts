export type TicketStatus =
  | "available"
  | "few-left"
  | "sold-out"
  | "not-on-sale";

export const statusMeta: Record<
  TicketStatus,
  { glyph: string; label: string }
> = {
  available: { glyph: "●", label: "Available" },
  "few-left": { glyph: "◐", label: "Few left" },
  "sold-out": { glyph: "✕", label: "Sold out" },
  "not-on-sale": { glyph: "—", label: "Not on sale yet" },
};

export const festivalDays = [
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
  { id: "sat", label: "Sat" },
  {
    id: "sun",
    label: "Sun",
    emptyNote:
      "No demo screenings on Sunday. [Sunday program — client to confirm]",
  },
] as const;

export interface Screening {
  id: "qc-thu-1830" | "bs-fri-2000" | "ss-sat-1500";
  day: "thu" | "fri" | "sat";
  dayLabel: "Thu" | "Fri" | "Sat";
  time: string;
  filmSlug: "the-quiet-current" | "between-stations" | "small-suns";
  venueSlug: "cinema-one" | "hall-b";
  language: string;
  status: TicketStatus;
}

export const screenings: Screening[] = [
  {
    id: "qc-thu-1830",
    day: "thu",
    dayLabel: "Thu",
    time: "18:30",
    filmSlug: "the-quiet-current",
    venueSlug: "cinema-one",
    language: "[Language]",
    status: "available",
  },
  {
    id: "bs-fri-2000",
    day: "fri",
    dayLabel: "Fri",
    time: "20:00",
    filmSlug: "between-stations",
    venueSlug: "hall-b",
    language: "[Language]",
    status: "sold-out",
  },
  {
    id: "ss-sat-1500",
    day: "sat",
    dayLabel: "Sat",
    time: "15:00",
    filmSlug: "small-suns",
    venueSlug: "cinema-one",
    language: "[Language]",
    status: "not-on-sale",
  },
];

export const ticketStatusNote = "Status is shown in words on every row.";

export function getScreening(id: string) {
  return screenings.find((screening) => screening.id === id);
}

export function screeningsForFilm(slug: string) {
  return screenings.filter((screening) => screening.filmSlug === slug);
}

export function screeningsForVenue(venueSlug: string) {
  return screenings.filter((screening) => screening.venueSlug === venueSlug);
}

export function checkoutHref(
  selection: { screening: string } | { pass: string },
) {
  const search = new URLSearchParams();
  if ("screening" in selection) search.set("screening", selection.screening);
  else search.set("pass", selection.pass);
  return `/tickets/checkout?${search.toString()}` as const;
}
