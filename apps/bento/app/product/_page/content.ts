import type { Route } from "next";
import type { TileKey } from "../../_data/tiles";

export const productSeo = {
  title: "Product — DAYMARK",
  description:
    "See how DAYMARK's Today, Bookings, Follow-ups, Team and Weekly trend tiles summarise the day and open into full calendar, table and board views.",
} as const;

export const header = {
  title: "One overview. Five tiles. Every one opens up.",
  body: "DAYMARK is a portal for owners and staff. The dashboard shows what needs attention now; each tile leads to the full calendar, table, board or report behind it.",
  cta: { label: "See a sample dashboard", href: "/demo" as Route },
} as const;

/** Marker placed after every demo primary line. */
export const demoTag = "(demo)";

export type TourSection = {
  /** Anchor id (Home links to /product#<id>). Matches tiles.ts productAnchor. */
  id: string;
  tile: TileKey;
  title: string;
  /** Demo primary line; null when the heading already names the figure. */
  primary: string | null;
  body: string;
  /** Link text; the arrow is drawn as an icon. The href comes from tiles.ts. */
  linkLabel: string;
};

export const tour = {
  today: {
    id: "today",
    tile: "today",
    title: "Today",
    primary: "8 visits scheduled",
    body: "The day's visits in time order with the staff member for each. Open the day to see the full calendar.",
    linkLabel: "View the calendar",
  },
  bookings: {
    id: "bookings",
    tile: "bookings",
    title: "Bookings that need a reply",
    primary: "3 bookings need a reply",
    body: "New and changed bookings stay here until someone confirms or reschedules them. Nothing drops off because a message got buried.",
    linkLabel: "Review bookings",
  },
  followUps: {
    id: "follow-ups",
    tile: "follow-ups",
    title: "Customer follow-ups",
    primary: "2 customers to contact",
    body: "Flag a customer after a visit and choose a reason. The follow-up stays on the dashboard until it's marked done.",
    linkLabel: "Open follow-ups",
  },
  team: {
    id: "team",
    tile: "team",
    title: "Team on shift",
    primary: "4 people on shift",
    body: "Who is in, who is covering the desk and who is off, so you can plan the day's handoffs.",
    linkLabel: "View roster",
  },
  trend: {
    id: "trend",
    tile: "trend",
    title: "Visits this week",
    primary: null,
    body: "A labeled daily chart with the numbers also written out below it, so the trend is readable without the picture.",
    linkLabel: "View report",
  },
} as const satisfies Record<string, TourSection>;

/** Small visible labels inside the demo parts of the tour tiles. */
export const tourLabels = {
  visitList: "Today's visits",
  calendarThumb: "Calendar view",
  bookingList: "Waiting for a reply",
  followUpList: "To contact",
  roster: "On shift",
  chartCaption: "Visits per day, this week (demo)",
} as const;

export const cardStatesSection = {
  title: "Tiles that tell the truth about themselves.",
  body: "A tile shows when it is loading, empty, needs attention, can be acted on, is selected, or failed to load. Static tiles never look clickable.",
  link: { label: "See every card state", href: "/demo/states" as Route },
  /** The six states shown here, in reading order (card-states.ts ids). */
  states: [
    "loading",
    "empty",
    "warning",
    "actionable",
    "selected",
    "error",
  ] as const,
  retryingMessage: "Trying again…",
} as const;

export const interlude = {
  line: "Visual size reflects priority, not decoration.",
  imageId: "ben-background-grid",
} as const;
