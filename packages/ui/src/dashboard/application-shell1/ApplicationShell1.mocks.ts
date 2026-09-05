import type { ApplicationShell1Props } from "./ApplicationShell1.types";

export const applicationShell1Mocks = {
  default: {
    logo: { name: "Northline", href: "#home", plan: "Workspace" },
    activeId: "drafts",
    defaultCollapsed: false,
    defaultOpenIds: ["studio"],
    breadcrumbs: [{ label: "Studio", href: "#studio" }, { label: "Drafts" }],
    groups: [
      {
        id: "product",
        label: "Product",
        items: [
          {
            id: "studio",
            label: "Studio",
            icon: "studio",
            children: [
              { id: "drafts", label: "Drafts", href: "#drafts" },
              { id: "starred", label: "Starred", href: "#starred" },
              { id: "settings", label: "Settings", href: "#settings" },
            ],
          },
          { id: "models", label: "Models", href: "#models", icon: "models" },
          {
            id: "docs",
            label: "Docs",
            icon: "docs",
            children: [
              { id: "intro", label: "Introduction", href: "#intro" },
              { id: "start", label: "Get started", href: "#start" },
              { id: "changelog", label: "Changelog", href: "#changelog" },
            ],
          },
        ],
      },
      {
        id: "workspaces",
        label: "Workspaces",
        items: [
          {
            id: "design",
            label: "Design systems",
            href: "#design",
            icon: "design",
          },
          {
            id: "sales",
            label: "Sales & marketing",
            href: "#sales",
            icon: "sales",
          },
          {
            id: "travel",
            label: "Field travel",
            href: "#travel",
            icon: "travel",
          },
        ],
      },
    ],
    user: {
      name: "Mara Chen",
      email: "mara@northline.app",
    },
    userActions: [
      { id: "account", label: "Account", href: "#account" },
      { id: "billing", label: "Billing", href: "#billing" },
      { id: "notifications", label: "Notifications", href: "#notifications" },
      { id: "logout", label: "Log out", href: "#logout", destructive: true },
    ],
  },
  alternate: {
    logo: { name: "Harbor", href: "#home", plan: "Ops" },
    activeId: "inbox",
    defaultCollapsed: true,
    defaultOpenIds: [],
    breadcrumbs: [{ label: "Operations", href: "#ops" }, { label: "Inbox" }],
    groups: [
      {
        id: "ops",
        label: "Operations",
        items: [
          { id: "inbox", label: "Inbox", href: "#inbox", icon: "inbox" },
          { id: "people", label: "People", href: "#people", icon: "people" },
          {
            id: "billing-nav",
            label: "Billing",
            href: "#billing",
            icon: "billing",
          },
        ],
      },
      {
        id: "library",
        label: "Library",
        items: [
          {
            id: "history",
            label: "History",
            href: "#history",
            icon: "history",
          },
          { id: "star", label: "Saved", href: "#saved", icon: "star" },
        ],
      },
    ],
    user: {
      name: "Jules Ortiz",
      email: "jules@harbor.studio",
    },
    userActions: [
      { id: "account", label: "Profile", href: "#profile" },
      { id: "logout", label: "Sign out", href: "#logout", destructive: true },
    ],
  },
} satisfies Record<string, ApplicationShell1Props>;
