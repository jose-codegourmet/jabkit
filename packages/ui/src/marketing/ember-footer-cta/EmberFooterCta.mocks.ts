import type {
  EmberFooterCtaLink,
  EmberFooterCtaProps,
} from "./EmberFooterCta.types";

const defaultLinks: EmberFooterCtaLink[] = [
  { label: "Changelog", href: "#changelog" },
  { label: "Twitter", href: "#twitter" },
  { label: "GitHub", href: "#github" },
];

export const emberFooterCtaMocks = {
  default: {
    eyebrow: "Last call",
    title: "Join the waitlist.",
    description: "Leave a work email. We will hold your desk.",
    emailLabel: "Work email",
    emailPlaceholder: "you@studio.work",
    submitLabel: "Get early access",
    brand: "Harbor, est. 2026",
    links: defaultLinks,
    footnote: "No spam, one launch email",
    showEmber: true,
  },
  alternate: {
    eyebrow: "Field launch",
    title: "Keep a seat for site leads.",
    description: "One note when Harbor opens the yard. Nothing else.",
    emailLabel: "Email",
    emailPlaceholder: "lead@jobsite.co",
    submitLabel: "Hold my seat",
    brand: "Harbor field, Portland",
    links: [
      { label: "Workspace", href: "#workspace" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    footnote: "Unsubscribe any time",
    showEmber: true,
  },
} satisfies Record<"default" | "alternate", EmberFooterCtaProps>;
