import type { Route } from "next";

export const DEMO_BUSINESS = "Juniper Street Studio (demo)";

/** Fixed demo "today" (a Tuesday). Never derive today from `new Date()`. */
export const DEMO_TODAY = "2026-10-13";
export const DEMO_TODAY_LABEL = "Tuesday";

export type PortalIcon =
  | "dashboard"
  | "calendar"
  | "bookings"
  | "tasks"
  | "customers"
  | "reports"
  | "states";

export type PortalNavItem = {
  id: string;
  label: string;
  href: Route;
  icon: PortalIcon;
};

export type PortalNavGroup = {
  id: string;
  label: string;
  items: PortalNavItem[];
};

export const portalNavGroups: PortalNavGroup[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/demo", icon: "dashboard" },
    ],
  },
  {
    id: "work",
    label: "Work",
    items: [
      {
        id: "calendar",
        label: "Calendar",
        href: "/demo/calendar",
        icon: "calendar",
      },
      {
        id: "bookings",
        label: "Bookings",
        href: "/demo/bookings",
        icon: "bookings",
      },
      { id: "tasks", label: "Tasks", href: "/demo/tasks", icon: "tasks" },
    ],
  },
  {
    id: "people",
    label: "People",
    items: [
      {
        id: "customers",
        label: "Customers",
        href: "/demo/customers",
        icon: "customers",
      },
    ],
  },
  {
    id: "insight",
    label: "Insight",
    items: [
      {
        id: "reports",
        label: "Reports",
        href: "/demo/reports",
        icon: "reports",
      },
    ],
  },
  {
    id: "design-system",
    label: "Design system",
    items: [
      {
        id: "states",
        label: "Card states",
        href: "/demo/states",
        icon: "states",
      },
    ],
  },
];

export const breadcrumbLabels: Record<string, string> = {
  "/demo": "Dashboard",
  "/demo/bookings": "Bookings",
  "/demo/calendar": "Calendar",
  "/demo/customers": "Customers",
  "/demo/tasks": "Tasks",
  "/demo/reports": "Reports",
  "/demo/states": "Card states",
};

export const staffProfile = {
  initials: "RL",
  name: "Robin Lee",
  role: "Front desk",
  actions: [
    { label: "Switch role (demo)" },
    { label: "Back to site", href: "/" as Route },
  ],
  switchRoleMessage: "Role switching is not available in this demo.",
} as const;

export const demoFootnote =
  "Sample data for a fictional business. These numbers are not customer results or product performance claims.";
