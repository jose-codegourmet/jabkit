import type { Hero307Dashboard, Hero307Props } from "./Hero307.types";

export const hero307Dashboard: Hero307Dashboard = {
  brand: "Northline",
  nav: [
    { label: "Overview" },
    { label: "Sales" },
    { label: "Customers" },
    { label: "Activity" },
    { label: "Settings" },
  ],
  metrics: [
    { label: "Revenue", value: "$48.2k", delta: "+12.4%", trend: "up" },
    { label: "Customers", value: "1,284", delta: "+6.1%", trend: "up" },
    { label: "Conversion", value: "3.8%", delta: "+0.4%", trend: "up" },
    { label: "Churn", value: "1.2%", delta: "-0.3%", trend: "down" },
  ],
  bars: [
    { label: "Mon", value: 42 },
    { label: "Tue", value: 58 },
    { label: "Wed", value: 51 },
    { label: "Thu", value: 73 },
    { label: "Fri", value: 66 },
    { label: "Sat", value: 38 },
    { label: "Sun", value: 29 },
  ],
  sales: [
    { name: "Helio Labs", amount: "$2,400", when: "2m ago" },
    { name: "Fieldwork", amount: "$1,180", when: "14m ago" },
    { name: "Orbit", amount: "$860", when: "1h ago" },
    { name: "Kite & Co", amount: "$640", when: "3h ago" },
  ],
  rows: [
    { product: "Studio seat", status: "Paid", amount: "$120" },
    { product: "Usage add-on", status: "Open", amount: "$48" },
    { product: "Annual plan", status: "Paid", amount: "$960" },
    { product: "Support pack", status: "Refund", amount: "-$36" },
  ],
  activity: [
    { actor: "Amara Cole", action: "exported the weekly ledger", time: "4m" },
    { actor: "Julian Hart", action: "invited two operators", time: "21m" },
    { actor: "Noor Elamin", action: "closed the Harbor deal", time: "1h" },
    { actor: "Mateo Ruiz", action: "updated billing rules", time: "3h" },
  ],
  areaValues: [18, 24, 22, 31, 28, 36, 34, 41, 39, 48, 46, 54],
};

export const hero307EditorialDashboard: Hero307Dashboard = {
  brand: "Harbor",
  nav: [
    { label: "Home" },
    { label: "Pipeline" },
    { label: "Invoices" },
    { label: "Team" },
    { label: "Audit" },
  ],
  metrics: [
    { label: "Pipeline", value: "$126k", delta: "+9.8%", trend: "up" },
    { label: "Won", value: "18", delta: "+3", trend: "up" },
    { label: "Cycle", value: "11d", delta: "-2d", trend: "down" },
    { label: "At risk", value: "4", delta: "-1", trend: "down" },
  ],
  bars: [
    { label: "W1", value: 36 },
    { label: "W2", value: 44 },
    { label: "W3", value: 61 },
    { label: "W4", value: 55 },
    { label: "W5", value: 70 },
    { label: "W6", value: 64 },
  ],
  sales: [
    { name: "Lumen", amount: "$6,200", when: "today" },
    { name: "Nova", amount: "$3,150", when: "yesterday" },
    { name: "Northline", amount: "$2,080", when: "Tue" },
    { name: "Helio", amount: "$1,440", when: "Mon" },
  ],
  rows: [
    { product: "Pilot", status: "Won", amount: "$4,800" },
    { product: "Expansion", status: "Open", amount: "$2,200" },
    { product: "Renewal", status: "Won", amount: "$7,200" },
    { product: "Trial", status: "Hold", amount: "$0" },
  ],
  activity: [
    { actor: "Sable Wren", action: "moved Lumen to won", time: "12m" },
    { actor: "Iris Chen", action: "sent the Harbor recap", time: "40m" },
    { actor: "Julian Voss", action: "flagged a stalled seat", time: "2h" },
    { actor: "Amara Cole", action: "published the forecast", time: "5h" },
  ],
  areaValues: [12, 16, 21, 19, 27, 33, 30, 38, 44, 41, 49, 57],
};

export const hero307Mocks: Required<
  Pick<
    Hero307Props,
    | "kicker"
    | "title"
    | "description"
    | "primaryAction"
    | "secondaryAction"
    | "dashboard"
  >
> = {
  kicker: "Operations console",
  title: "See the whole workspace in one frame.",
  description:
    "A fullscreen hero for product teams who want the offer up front and a living admin preview underneath — metrics, charts, and activity, all built in CSS.",
  primaryAction: { label: "Start free", href: "#start" },
  secondaryAction: { label: "View the docs", href: "#docs" },
  dashboard: hero307Dashboard,
};

export const hero307EditorialMocks: typeof hero307Mocks = {
  kicker: "Now in public beta",
  title: "Ship the dashboard before the screenshot.",
  description:
    "Keep the headline large, the chrome quiet, and the preview tilting just enough to feel like a product — not a still.",
  primaryAction: { label: "Book a demo", href: "#demo" },
  secondaryAction: { label: "See pricing", href: "#pricing" },
  dashboard: hero307EditorialDashboard,
};
