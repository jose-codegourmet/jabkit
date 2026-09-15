import type { DemostackDashboardProps } from "./DemostackDashboard.types";

const defaultNavGroups: NonNullable<DemostackDashboardProps["navGroups"]> = [
  {
    label: "Workspace",
    items: [
      { id: "home", label: "Home" },
      { id: "demostacks", label: "Demostacks" },
      { id: "showcases", label: "Showcases" },
      { id: "videos", label: "Videos", badge: "Beta" },
      { id: "demo-hub", label: "Demo Hub" },
    ],
  },
  {
    label: "Admin",
    items: [
      { id: "analytics", label: "Analytics" },
      { id: "theme", label: "Theme" },
      { id: "integration", label: "Integration" },
      { id: "settings", label: "Settings" },
    ],
  },
];

export const demostackDashboardMocks = {
  default: {
    brand: "Demostack",
    searchPlaceholder: "Quick search for demo",
    navGroups: defaultNavGroups,
    organizations: [
      {
        id: "northline",
        name: "Northline Labs",
        role: "Admin",
        members: [
          {
            name: "Maya R.",
            initials: "MR",
            image: "/assets/4132445424a19cc6.webp",
          },
        ],
      },
      {
        id: "harbor",
        name: "Harbor Studio",
        role: "Member",
        members: [
          {
            name: "Abiola Ahmed",
            initials: "AA",
            image: "/assets/8c18989537b833e8.webp",
          },
          {
            name: "Ava Cole",
            initials: "AC",
            image: "/assets/60599cf2ed9c77bc.webp",
          },
        ],
      },
      {
        id: "fieldwork",
        name: "Fieldwork Inc",
        role: "Admin",
        members: [
          {
            name: "Vansh Patel",
            initials: "VP",
            image: "/assets/167acbe9e3afc083.webp",
          },
        ],
      },
    ],
    user: {
      name: "Vansh Patel",
      email: "vansh@northline.studio",
      initials: "VP",
      image: "/assets/167acbe9e3afc083.webp",
    },
    notifications: [
      {
        id: "shared",
        title: "New Demostack shared",
        description: "Abiola Ahmed shared a Demostack with you.",
        time: "2 min ago",
      },
      {
        id: "published",
        title: "Showcase published",
        description: "Your latest showcase is now live.",
        time: "1 hour ago",
      },
      {
        id: "invite",
        title: "Workspace invitation",
        description: "You were invited to join Harbor Studio.",
        time: "Yesterday",
      },
    ],
    actions: [
      {
        title: "Create a Demostack",
        description: "Record an example Demostack in under 2 minutes",
        image: "/assets/21a7a386e170d4cf.webp",
      },
      {
        title: "Interactive Tutorial",
        description: "Get a high-level platform overview in a few clicks",
        image: "/assets/5f56206b8544c593.webp",
      },
      {
        title: "Explore Gallery",
        description: "Get inspired with examples and use cases",
        image: "/assets/c7475f3caa3d48fd.webp",
      },
    ],
    tips: [
      {
        title: "Use case tips from the CEO",
        description: "Our high-level recommendation",
        image: "/assets/1ab3b7a7ea329629.webp",
      },
      {
        title: "Personalized outbound",
        description: "Use variables to send personalized demos at scale",
        image: "/assets/f6353ae76dc0096c.webp",
      },
      {
        title: "Tradeshow and expo demos",
        description: "Include in email sequences or follow-ups",
        image: "/assets/14573d2d5a225d90.webp",
      },
      {
        title: "Modular onboarding emails",
        description: "Include in email sequences or follow-ups",
        image: "/assets/1543ba72d246c0c3.webp",
      },
    ],
    resources: [
      { label: "Learning Academy" },
      { label: "Knowledge Base" },
      { label: "How we use Demostack" },
      { label: "Product Updates" },
    ],
    inspiration: [
      { title: "Mobile App Demo" },
      { title: "Payment Flow Demo" },
      { title: "Team Workspace Demo" },
      { title: "Analytics Platform Demo" },
    ],
    stacks: [
      {
        id: "stockroom",
        title: "Stockroom Inventory Onboarding",
        author: "Abiola Ahmed",
        avatar: "/assets/8c18989537b833e8.webp",
        image: "/assets/7c4790dcbb9fd01c.webp",
        updatedAt: "Mar 02",
        dateTime: "2026-03-02",
      },
      {
        id: "gridwise",
        title: "Gridwise Platform Tour",
        author: "Vansh Patel",
        avatar: "/assets/167acbe9e3afc083.webp",
        image: "/assets/1a3c84c318076e07.webp",
        updatedAt: "Mar 02",
        dateTime: "2026-03-02",
      },
      {
        id: "support",
        title: "Resolve a Support Request",
        author: "Ava Cole",
        avatar: "/assets/60599cf2ed9c77bc.webp",
        image: "/assets/16b543dae15dee36.webp",
        updatedAt: "Mar 02",
        dateTime: "2026-03-02",
      },
      {
        id: "northpeak",
        title: "Northpeak Revenue Overview",
        author: "Maya R.",
        avatar: "/assets/4132445424a19cc6.webp",
        image: "/assets/e89d407a6298dce2.webp",
        updatedAt: "Mar 02",
        dateTime: "2026-03-02",
      },
    ],
    initialPage: "home",
    initialOrganizationId: "northline",
  },
  alternate: {
    brand: "Demostack",
    searchPlaceholder: "Search Harbor demos",
    navGroups: defaultNavGroups,
    organizations: [
      {
        id: "harbor",
        name: "Harbor Studio",
        role: "Admin",
        members: [
          {
            name: "Amara Cole",
            initials: "AC",
            image: "/assets/2d2e13918d75791c.webp",
          },
          {
            name: "Abiola Ahmed",
            initials: "AA",
            image: "/assets/8c18989537b833e8.webp",
          },
        ],
      },
      {
        id: "northline",
        name: "Northline Labs",
        role: "Member",
        members: [
          {
            name: "Maya R.",
            initials: "MR",
            image: "/assets/4132445424a19cc6.webp",
          },
        ],
      },
    ],
    user: {
      name: "Amara Cole",
      email: "amara@harbor.studio",
      initials: "AC",
      image: "/assets/2d2e13918d75791c.webp",
    },
    notifications: [
      {
        id: "review",
        title: "Review requested",
        description: "Maya asked you to review Gridwise Platform Tour.",
        time: "18 min ago",
      },
    ],
    actions: [
      {
        title: "Create a Demostack",
        description: "Record a Harbor walkthrough in a few minutes",
        image: "/assets/88b829c7028a2016.webp",
      },
      {
        title: "Interactive Tutorial",
        description: "Walk the team through the latest workspace",
        image: "/assets/ceb500f4f6db225a.webp",
      },
      {
        title: "Explore Gallery",
        description: "Browse published Harbor showcases",
        image: "/assets/bf4e978c5bd9765e.webp",
      },
    ],
    tips: [
      {
        title: "Outbound sequences",
        description: "Pair a live demo with a follow-up note",
        image: "/assets/1a3c84c318076e07.webp",
      },
      {
        title: "Event booth loops",
        description: "Keep a silent tour running on the floor",
        image: "/assets/c8ed8f9471a82715.webp",
      },
    ],
    resources: [
      { label: "Harbor Academy" },
      { label: "Playbooks" },
      { label: "Release notes" },
      { label: "Office hours" },
    ],
    inspiration: [
      { title: "Client Kickoff Demo" },
      { title: "Billing Workspace Demo" },
      { title: "Onboarding Loop" },
      { title: "Analytics Recap" },
    ],
    stacks: [
      {
        id: "kickoff",
        title: "Client Kickoff Walkthrough",
        author: "Amara Cole",
        avatar: "/assets/2d2e13918d75791c.webp",
        image: "/assets/430c95dc5977cc0b.webp",
        updatedAt: "Apr 08",
        dateTime: "2026-04-08",
      },
      {
        id: "billing",
        title: "Billing Workspace Demo",
        author: "Abiola Ahmed",
        avatar: "/assets/8c18989537b833e8.webp",
        image: "/assets/6593e2b5c93d4704.webp",
        updatedAt: "Apr 04",
        dateTime: "2026-04-04",
      },
    ],
    initialPage: "demostacks",
    initialOrganizationId: "harbor",
  },
} as const satisfies Record<string, DemostackDashboardProps>;
