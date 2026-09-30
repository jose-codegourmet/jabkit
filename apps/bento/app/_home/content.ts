import type { Route } from "next";

export const homeSeo = {
  title: "DAYMARK — The whole day, in view",
  description:
    "A shared portal for small service businesses: today's bookings, tasks, follow-ups and weekly visits on one screen. Request a walkthrough.",
} as const;

export const hero = {
  eyebrow: "For small service businesses",
  title: "Open the day with a clearer picture.",
  body: "DAYMARK puts today's bookings, open tasks, customer follow-ups and the week's visits on one screen. Each tile tells you what needs attention and takes you to the full view.",
  primary: { label: "See a sample dashboard", href: "/demo" as Route },
  secondary: { label: "Request a walkthrough", href: "/walkthrough" as Route },
  caption: "Demo data from a fictional studio.",
  imageId: "ben-hero",
  imageAlt:
    "Front desk of a small studio before opening, with a paper diary and coffee.",
} as const;

export const problem = {
  title: "Three places to check before the first customer arrives.",
  body: "A calendar for bookings. A group chat for tasks. A spreadsheet for who to call back. DAYMARK brings the pieces that matter into one view, and every piece still opens into its full record.",
  sources: ["Calendar", "Task chat", "Spreadsheet"],
  destination: "DAYMARK",
  imageId: "ben-process-before",
  imageAlt:
    "A front desk with a paper wall calendar, sticky notes, a printed sheet and a phone lying face down",
} as const;

export const benefits = {
  title: "Each tile answers one question.",
  materialImageId: "ben-material-tiles",
} as const;

export const drillDown = {
  title: "A summary, not a replacement.",
  body: "The overview tells you where to look. The calendar, bookings table and task board are where the work happens.",
  cards: [
    { id: "calendar", label: "Calendar", href: "/demo/calendar" as Route },
    {
      id: "bookings",
      label: "Bookings table",
      href: "/demo/bookings" as Route,
    },
    { id: "tasks", label: "Task board", href: "/demo/tasks" as Route },
  ],
} as const;

export const whoTeaser = {
  title: "Built for the people who open up.",
  imageId: "ben-team-shift",
  imageAlt:
    "Four team members starting a shift: one hanging a coat, one tying an apron, one checking a paper list and one at the front desk",
  roles: [
    {
      title: "Owners",
      body: "Know the state of the day without asking around.",
    },
    {
      title: "Front desk",
      body: "Confirm, reschedule and note follow-ups in one place.",
    },
    {
      title: "Team leads",
      body: "See the roster and the task board side by side.",
    },
  ],
  link: { label: "Who it's for", href: "/who-its-for" as Route },
} as const;
