import type { Cta28Photo, Cta28Props } from "./Cta28.types";

export const cta28Photos: Cta28Photo[] = [
  {
    src: "/assets/f3a024ac28ac96a1.webp",
    alt: "Operators gathered around a long table during a planning session",
  },
  {
    src: "/assets/0d5b296cb8b10e6a.webp",
    alt: "Bright open studio with a communal work table",
  },
  {
    src: "/assets/ff0adba6f88d3473.webp",
    alt: "Close crop of a laptop and notes on a desk",
  },
];

export const cta28Mocks = {
  default: {
    title: "Run the next quarter\nfrom one room.",
    description:
      "Keep briefs, handoffs, and the live record in the same canvas so operators walk in already knowing the next move.",
    features: [
      { icon: "shield", label: "Policy-aware workflows" },
      { icon: "workflow", label: "Shared operator canvas" },
      { icon: "users", label: "Shift-proof handoffs" },
      { icon: "gauge", label: "Status without a scavenger hunt" },
      { icon: "lock", label: "Role-based access" },
      { icon: "sparkles", label: "Audit-ready history" },
    ],
    action: { label: "Start a workspace", href: "#start" },
    photos: cta28Photos,
  },
  alternate: {
    title: "Give procurement\na room they can trust.",
    description:
      "Show the same operating loop across sites: who owns the brief, what moved overnight, and where the record lives.",
    features: [
      { icon: "lock", label: "SSO and audit trails" },
      { icon: "shield", label: "Controls that survive review" },
      { icon: "users", label: "Seats for every operator" },
      { icon: "gauge", label: "Live posture, not a slide" },
    ],
    action: { label: "Book a walkthrough", href: "#walkthrough" },
    photos: [
      {
        src: "/assets/eb82a2f4ff6dfc76.webp",
        alt: "Two colleagues reviewing a plan on a tablet",
      },
      {
        src: "/assets/646c53d80dffa006.webp",
        alt: "Glass-walled meeting room in a quiet office",
      },
      {
        src: "/assets/67dbd1c3b703196d.webp",
        alt: "Team collaborating around laptops",
      },
    ],
  },
} satisfies Record<string, Cta28Props>;
