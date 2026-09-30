import type { Route } from "next";

export const dashboardSeo = {
  title: "Sample dashboard — DAYMARK demo",
  description:
    "Explore a DAYMARK sample dashboard for a fictional studio: today's visits, bookings needing a reply, follow-ups, team and weekly visits.",
} as const;

export const dashboardHeader = {
  title: "Good morning, Robin.",
  sub: "Tuesday · Juniper Street Studio (demo)",
  action: { label: "Add visit", href: "/demo/calendar?new=1" as Route },
} as const;

export const overlapAlert = {
  text: "1 visit overlaps: 2:00 pm Sam has two bookings.",
  link: {
    label: "Review in calendar.",
    href: "/demo/calendar#overlap" as Route,
  },
  dismiss: "Dismiss",
} as const;
