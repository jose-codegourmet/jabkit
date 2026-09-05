import type { ApplicationShell13Props } from "./ApplicationShell13.types";

const defaultNavGroups: NonNullable<ApplicationShell13Props["navGroups"]> = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "#dashboard" },
      { label: "Analytics", href: "#analytics" },
      { label: "Reports", href: "#reports" },
    ],
  },
  {
    label: "Projects",
    items: [
      { label: "All projects", href: "#projects" },
      { label: "Active", href: "#projects-active" },
      { label: "Archived", href: "#projects-archived" },
      {
        label: "Templates",
        href: "#templates",
        children: [
          { label: "Product brief", href: "#template-brief" },
          { label: "Sprint board", href: "#template-sprint" },
        ],
      },
    ],
  },
  {
    label: "Team",
    items: [
      { label: "Members", href: "#members" },
      { label: "Roles", href: "#roles" },
      { label: "Invites", href: "#invites" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { label: "General", href: "#workspace" },
      { label: "Billing", href: "#billing" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
];

const defaultBottomNav: NonNullable<ApplicationShell13Props["bottomNav"]> = [
  { label: "Home", href: "#dashboard", icon: "home" },
  { label: "Projects", href: "#projects", icon: "projects" },
  { label: "Team", href: "#members", icon: "team" },
  { label: "Settings", href: "#workspace", icon: "settings" },
];

export const applicationShell13Mocks = {
  default: {
    brand: { name: "Harbor", href: "#dashboard" },
    navGroups: defaultNavGroups,
    organizations: [
      { name: "Harbor Labs", plan: "Team", initials: "HL" },
      { name: "Northline", plan: "Pro", initials: "NL" },
      { name: "Fieldwork", plan: "Starter", initials: "FW" },
    ],
    user: {
      name: "Amara Cole",
      email: "amara@harbor.studio",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80",
    },
    searchPlaceholder: "Search the workspace…",
    notificationCount: 3,
    bottomNav: defaultBottomNav,
  },
  alternate: {
    brand: { name: "Lumen", href: "#home" },
    navGroups: [
      {
        label: "Overview",
        items: [
          { label: "Home", href: "#home" },
          { label: "Pulse", href: "#pulse" },
        ],
      },
      {
        label: "Projects",
        items: [
          { label: "Live", href: "#live" },
          {
            label: "Libraries",
            href: "#libraries",
            children: [
              { label: "Brand kit", href: "#brand-kit" },
              { label: "Research", href: "#research" },
            ],
          },
        ],
      },
      {
        label: "Team",
        items: [
          { label: "Directory", href: "#directory" },
          { label: "Guests", href: "#guests" },
        ],
      },
      {
        label: "Workspace",
        items: [
          { label: "Preferences", href: "#preferences" },
          { label: "Usage", href: "#usage" },
        ],
      },
    ],
    organizations: [
      { name: "Lumen Studio", plan: "Enterprise", initials: "LS" },
      { name: "Orbit", plan: "Team", initials: "OR" },
    ],
    user: {
      name: "Julian Hart",
      email: "julian@lumen.studio",
    },
    searchPlaceholder: "Find a file or person…",
    notificationCount: 0,
    bottomNav: defaultBottomNav,
  },
} as const satisfies Record<string, ApplicationShell13Props>;
