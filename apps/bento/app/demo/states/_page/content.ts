import type { CardStateId } from "../../../_data/card-states";

export const statesSeo = {
  title: "Card states — DAYMARK demo",
  description:
    "DAYMARK bento card states: loading, empty, warning, actionable, selected, error and static, with span and ordering rules.",
} as const;

export const statesHeader = {
  title: "Card states",
  sub: "Every DAYMARK tile uses one of these states. Only actionable tiles look clickable.",
} as const;

/** Accessible name for the specimen grid (the page H1 already introduces it). */
export const stateGridLabel = "Tile states";

/** The Foundation Tile prop that produces each state, shown as a code chip. */
export const stateProps: Record<CardStateId, string> = {
  loading: 'state="loading"',
  empty: 'state="empty"',
  warning: 'state="warning"',
  actionable: 'kind="link"',
  selected: 'state="selected"',
  error: 'state="error"',
  static: 'kind="static"',
};

/** Selected specimen sub line, from the weekly demo data. */
export function selectedDayVisits(visits: number): string {
  return `${visits} visits`;
}

/** Error specimen: "Try again" re-renders the tile through loading to the roster. */
export const errorDemo = {
  retry: "Try again",
  loading: "Loading roster…",
  reset: "Reset demo",
} as const;

export const layoutSection = {
  id: "layout-rules",
  heading: "Spans, gaps and order",
  toggle: "Show mobile order",
  desktopView: "1024px and wider: 12 columns, rows of 8 + 4 and 4 + 4 + 4.",
  mobileView: "Below 768px: one column, stacked in DOM order.",
  spanPrefix: "Span",
  diagramLabel: "Dashboard layout diagram",
} as const;

export type LayoutRule = {
  term: string;
  /** Inline `code` is written between backticks. */
  text: string;
};

/** Bento layout rules, as written in app/theme.css. */
export const layoutRules: LayoutRule[] = [
  {
    term: "Grid",
    text: "12-column grid. Gap `--ben-gap`: 16px, 24px at 1280px and wider.",
  },
  {
    term: "Radius and padding",
    text: "Tile radius `--ben-radius`: 16px. Internal padding `--ben-pad`: 20px, 24px at 1024px and wider.",
  },
  {
    term: "Spans",
    text: "Primary tile 6–8 columns, secondary 4, compact 3. A tile spans two rows only when its content needs the height.",
  },
  {
    term: "Nesting",
    text: "One level at most. A tile may hold a list or a mini-chart, never another grid.",
  },
  {
    term: "Order",
    text: "DOM order = reading order = mobile stack order. Desktop placement uses only `grid-column` / `grid-row` spans, never `order`.",
  },
  {
    term: "Interactive tiles",
    text: "Either one link (the whole card is the `<a>`, evergreen border on hover, focus ring) or a static surface holding explicit buttons.",
  },
  {
    term: "Static tiles",
    text: "No hover, no pointer cursor and no chevron.",
  },
  {
    term: "State",
    text: "Never shown by colour alone: warning adds an icon and the words “Needs attention”; selected adds `aria-current` and an evergreen border.",
  },
];
