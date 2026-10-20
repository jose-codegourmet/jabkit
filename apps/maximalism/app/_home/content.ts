import { brand, festivalFacts } from "../_data/site";

/** Home (/) copy. Verbatim from the epic #547 brief; `[…]` tokens stay literal. */

export const homeMeta = {
  title: "FULL VOLUME — Two days, four stages, one very loud weekend",
  description:
    "FULL VOLUME is a two-day independent music and visual arts festival. Explore the lineup, plan your sets, and choose your ticket.",
} as const;

export const heroCopy = {
  kicker: brand.kicker,
  title: "Turn the whole city up.",
  sub: brand.tagline,
  facts: {
    label: festivalFacts.label,
    rows: [
      { term: "When:", value: festivalFacts.dates },
      { term: "Where:", value: festivalFacts.venue },
    ],
  },
  primary: { label: "Explore tickets", href: "/tickets" },
  secondary: { label: "See the lineup", href: "/lineup" },
  /** Layered portrait cards over the collage, in stack order. */
  featuredSlugs: ["tuesday-lanterns", "velvet-forklift", "marigold-static"],
  featuredLabel: "Featured demo acts",
} as const;

export const lineupCopy = {
  title: "Find your next favorite noise.",
  body: "Eight demo acts across two days. Tap any card for the set time, stage, and a short intro.",
  carouselLabel: "Demo acts",
  previous: "Previous acts",
  next: "Next acts",
  fullLineup: { label: "See the full lineup", href: "/lineup" },
  listView: { label: "View as list", href: "/lineup?view=list" },
} as const;

export const stagesCopy = {
  title: "Four stages. Pick your volume.",
  link: "See this stage's sets",
} as const;

export const scheduleCopy = {
  title: "Make a plan. Leave room for surprises.",
  body: "Filter by day and stage, save the sets you love, and we'll flag any clashes.",
  caption: "First four Day 1 sets (demo data)",
  columns: ["Time", "Act", "Stage", "Length"],
  link: { label: "Open the full schedule", href: "/schedule" },
} as const;

export const artsCopy = {
  eyebrow: "Between the stages",
  title: "Art you can walk through.",
  body: "FULL VOLUME is a music and visual arts festival. Between sets, the site fills with collage walls, printed posters, and pieces from local creative communities. [Installation list — client to confirm].",
} as const;

export const ticketsCopy = {
  title: "Choose your ticket.",
  button: { label: "Choose your ticket", href: "/tickets" },
} as const;

export const infoCopy = {
  title: "Know before you go.",
} as const;
