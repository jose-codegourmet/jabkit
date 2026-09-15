import type { AgndexDashboardProps } from "./AgndexDashboard.types";

const defaultNavGroups: NonNullable<AgndexDashboardProps["navGroups"]> = [
  {
    label: "General",
    items: [{ id: "dashboard", label: "Dashboard" }],
  },
  {
    label: "Settings",
    items: [
      { id: "api-keys", label: "API Keys" },
      { id: "billing", label: "Billing" },
    ],
  },
  {
    label: "Support",
    items: [
      { id: "docs", label: "Docs" },
      {
        id: "discord",
        label: "Discord",
        href: "https://discord.com",
        external: true,
      },
    ],
  },
];

const defaultFooterNav: NonNullable<AgndexDashboardProps["footerNav"]> = [
  { id: "settings", label: "Settings" },
];

export const agndexDashboardMocks = {
  default: {
    brand: "AGNDEX",
    portalLabel: "Developer Portal",
    navGroups: defaultNavGroups,
    footerNav: defaultFooterNav,
    projects: [
      { id: "default", name: "Default Project" },
      { id: "staging", name: "Staging" },
      { id: "production", name: "Production" },
    ],
    user: {
      name: "Vansh Patel",
      email: "vansh@agndex.com",
      initials: "VP",
      image: "/assets/2d2e13918d75791c.webp",
    },
    indexes: [
      {
        id: "1",
        name: "demo-customer_faqs",
        updatedAt: "3/16/2026",
        docs: 55,
      },
      {
        id: "2",
        name: "demo-customer_faqs",
        updatedAt: "3/16/2026",
        docs: 55,
      },
    ],
    credentials: {
      projectId: "c101d38e-0555-421b-be6d-5699ed27c9aa",
      projectKey: "sk_live_agndex_demo_secret_key_12345",
    },
    summary: {
      tier: "Developer",
      indexesUsed: 1,
      indexesLimit: 3,
    },
    subscription: {
      tier: "Developer Tier",
      plan: "Free",
      billingCycle: "Mar 1, 2026 - Mar 31,2026",
    },
    usageStats: [
      { label: "Projects", value: "12,847" },
      { label: "Indexes per Project", value: "140" },
      { label: "Items per Index", value: "47" },
    ],
    resourceRows: [
      { resource: "Storage", included: "500 MB cap", overage: "- -" },
      { resource: "Egress", included: "10 GB cap", overage: "- -" },
      { resource: "Ingest", included: "50 MB cap", overage: "- -" },
      { resource: "Control API ops", included: "1K / month", overage: "- -" },
      { resource: "Cloud query calls", included: "1K / month", overage: "- -" },
    ],
    initialPage: "dashboard",
    initialProjectId: "default",
  },
  alternate: {
    brand: "AGNDEX",
    portalLabel: "Developer Portal",
    navGroups: defaultNavGroups,
    footerNav: defaultFooterNav,
    projects: [
      { id: "northline", name: "Northline Search" },
      { id: "harbor", name: "Harbor Docs" },
    ],
    user: {
      name: "Amara Cole",
      email: "amara@harbor.studio",
      initials: "AC",
    },
    indexes: [
      {
        id: "nl-1",
        name: "northline-support_kb",
        updatedAt: "4/02/2026",
        docs: 128,
      },
    ],
    credentials: {
      projectId: "a77c2f10-4b91-4d0e-9e3a-18c0e4b1d902",
      projectKey: "sk_test_northline_sample_key_88421",
    },
    summary: {
      tier: "Team",
      indexesUsed: 2,
      indexesLimit: 8,
    },
    subscription: {
      tier: "Team Tier",
      plan: "Monthly",
      billingCycle: "Apr 1, 2026 - Apr 30,2026",
    },
    usageStats: [
      { label: "Projects", value: "4,210" },
      { label: "Indexes per Project", value: "36" },
      { label: "Items per Index", value: "91" },
    ],
    resourceRows: [
      { resource: "Storage", included: "8 GB cap", overage: "$0.08 / GB" },
      { resource: "Egress", included: "80 GB cap", overage: "$0.04 / GB" },
      { resource: "Ingest", included: "2 GB cap", overage: "$0.12 / GB" },
      { resource: "Control API ops", included: "40K / month", overage: "- -" },
      {
        resource: "Cloud query calls",
        included: "40K / month",
        overage: "- -",
      },
    ],
    initialPage: "billing",
    initialProjectId: "northline",
  },
} as const satisfies Record<string, AgndexDashboardProps>;
