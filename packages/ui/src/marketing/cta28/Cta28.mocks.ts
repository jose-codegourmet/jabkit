import type { Cta28Photo, Cta28Props } from "./Cta28.types";

export const cta28Photos: Cta28Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&h=1500&q=80",
    alt: "Operators gathered around a long table during a planning session",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&h=1000&q=80",
    alt: "Bright open studio with a communal work table",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&h=900&q=80",
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
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=1500&q=80",
        alt: "Two colleagues reviewing a plan on a tablet",
      },
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&h=1000&q=80",
        alt: "Glass-walled meeting room in a quiet office",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&h=900&q=80",
        alt: "Team collaborating around laptops",
      },
    ],
  },
} satisfies Record<string, Cta28Props>;
