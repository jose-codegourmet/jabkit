import type { Route } from "next";

export type TileKey = "today" | "bookings" | "follow-ups" | "team" | "trend";

export type DashboardTile = {
  key: TileKey;
  label: string;
  primary: string;
  action: { label: string; href: Route };
  productAnchor: string;
  productHref: Route;
  benefit: {
    title: string;
    question: string;
    answer: string;
    span: 4 | 5 | 7;
  };
};

export const dashboardTiles: DashboardTile[] = [
  {
    key: "today",
    label: "Today",
    primary: "8 visits scheduled",
    action: { label: "View day", href: "/demo/calendar" },
    productAnchor: "today",
    productHref: "/product#today",
    benefit: {
      title: "Today",
      question: "What's on today?",
      answer: "See every visit in order, with gaps and overlaps easy to spot.",
      span: 7,
    },
  },
  {
    key: "bookings",
    label: "Confirmation",
    primary: "3 bookings need a reply",
    action: {
      label: "Review bookings",
      href: "/demo/bookings?status=needs-reply",
    },
    productAnchor: "bookings",
    productHref: "/product#bookings",
    benefit: {
      title: "Bookings",
      question: "Who's waiting for a reply?",
      answer: "Unconfirmed bookings rise to the top until someone answers.",
      span: 5,
    },
  },
  {
    key: "follow-ups",
    label: "Follow-ups",
    primary: "2 customers to contact",
    action: {
      label: "Open follow-ups",
      href: "/demo/customers?filter=follow-up",
    },
    productAnchor: "follow-ups",
    productHref: "/product#follow-ups",
    benefit: {
      title: "Follow-ups",
      question: "Who should we call back?",
      answer:
        "Customers flagged for contact stay visible until the task is done.",
      span: 4,
    },
  },
  {
    key: "team",
    label: "Team",
    primary: "4 people on shift",
    action: { label: "View roster", href: "/demo/tasks#roster" },
    productAnchor: "team",
    productHref: "/product#team",
    benefit: {
      title: "Team",
      question: "Who's on shift?",
      answer: "See who's in, who's on break and who's covering the desk.",
      span: 4,
    },
  },
  {
    key: "trend",
    label: "Weekly trend",
    primary: "Visits this week",
    action: { label: "View report", href: "/demo/reports" },
    productAnchor: "trend",
    productHref: "/product#trend",
    benefit: {
      title: "Performance",
      question: "How is the week going?",
      answer: "A plain visits-per-day chart, with the numbers written out.",
      span: 4,
    },
  },
];

export function getTile(key: TileKey): DashboardTile {
  const tile = dashboardTiles.find((item) => item.key === key);
  if (!tile) throw new Error(`Unknown tile: ${key}`);
  return tile;
}
