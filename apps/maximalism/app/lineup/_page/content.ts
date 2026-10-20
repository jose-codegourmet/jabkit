/** Lineup page copy. Verbatim from the FULL VOLUME brief (epic #547). */

export const lineupMeta = {
  title: "Lineup — FULL VOLUME (demo)",
  description:
    "Browse the FULL VOLUME demo lineup by day and stage. Eight acts, four stages, two days — find your next favorite noise.",
} as const;

export const lineupHeader = {
  eyebrow: "Lineup",
  title: "Find your next favorite noise.",
  body: "Eight demo acts, two days, four stages. Filter, browse, then build your plan.",
  imageId: "max-background-poster-wall",
} as const;

export const lineupBrowse = {
  /** Visually hidden section heading so the act-card H3s sit under an H2. */
  heading: "Browse the lineup",
  filtersLabel: "Lineup filters",
  resultsLabel: "Lineup results",
  demoLineupBadge: "Demo lineup",
} as const;

export const lineupControls = {
  dayLabel: "Day",
  dayOptions: [
    { value: "both", label: "Both days" },
    { value: "1", label: "Day 1" },
    { value: "2", label: "Day 2" },
  ],
  stageLabel: "Stage",
  stageAll: "All stages",
  viewLabel: "View",
  viewOptions: [
    { value: "cards", label: "Cards" },
    { value: "list", label: "List" },
  ],
} as const;

/** "Showing 8 acts" / "Showing 1 act". */
export function showingCount(count: number): {
  before: string;
  count: number;
  after: string;
} {
  return { before: "Showing", count, after: count === 1 ? "act" : "acts" };
}

export const lineupStates = {
  loading: "Loading the lineup…",
  empty: "No acts match those filters. Try another stage or day.",
  clearFilters: "Clear filters",
  error: "The lineup didn't load. Check your connection and try again.",
  retry: "Try again",
} as const;

/**
 * The lineup is static, so loading / empty / error are previewed through a
 * clearly labelled demo control (and ?state=loading|empty|error).
 */
export const demoStates = {
  badge: "Demo states",
  label: "Preview a state",
  description:
    "The demo lineup is static. Preview how this page looks while loading, with no matches, or when the lineup fails to load.",
  activeBadge: "Demo state",
  options: [
    { value: "live", label: "Lineup" },
    { value: "loading", label: "Loading" },
    { value: "empty", label: "Empty" },
    { value: "error", label: "Error" },
  ],
} as const;

export const lineupTable = {
  caption:
    "FULL VOLUME demo lineup: act, genre, day, stage, start time and set length.",
  scrollLabel: "Lineup table",
  columns: {
    act: "Act",
    genre: "Genre",
    day: "Day",
    stage: "Stage",
    start: "Start",
    length: "Length",
  },
} as const;
