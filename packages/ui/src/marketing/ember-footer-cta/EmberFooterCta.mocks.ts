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
    eyebrow: "last call",
    title: "Join the waitlist.",
    description: "Leave an email, we will hold your spot.",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    submitLabel: "Get early access",
    successMessage: "You're on the list, we'll be in touch.",
    brand: "Ember Kit, est. 2026",
    links: defaultLinks,
    footnote: "no spam, one launch email",
    showEmber: true,
    flameHeight: 260,
  },
  alternate: {
    eyebrow: "field launch",
    title: "Keep a seat for site leads.",
    description: "One note when Ember opens the yard. Nothing else.",
    emailLabel: "Email address",
    emailPlaceholder: "lead@jobsite.co",
    submitLabel: "Hold my seat",
    brand: "Ember field, Portland",
    links: [
      { label: "Workspace", href: "#workspace" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    footnote: "Unsubscribe any time",
    showEmber: true,
  },
} satisfies Record<"default" | "alternate", EmberFooterCtaProps>;
