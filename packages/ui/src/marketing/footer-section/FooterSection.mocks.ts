import type { FooterSectionProps } from "./FooterSection.types";

export const footerSectionMocks = {
  default: {
    brandTitle: "Stay connected",
    brandDescription:
      "Field notes, release lines, and one workflow worth stealing. No ads. Unsubscribe any time.",
    emailPlaceholder: "you@studio.work",
    subscribeLabel: "Subscribe",
    linksTitle: "Quick links",
    links: [
      { label: "About Harbor", href: "#about" },
      { label: "Workspace", href: "#workspace" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    contactTitle: "Contact us",
    contactItems: [
      {
        icon: "map-pin",
        label: "18 Dock Street, Portland",
      },
      {
        icon: "phone",
        label: "+1 (503) 555-0148",
        href: "tel:+15035550148",
      },
      {
        icon: "mail",
        label: "hello@harbor.work",
        href: "mailto:hello@harbor.work",
      },
    ],
    socialTitle: "Follow us",
    socialLinks: [
      { name: "Facebook", href: "#facebook", icon: "facebook" },
      { name: "Twitter", href: "#twitter", icon: "twitter" },
      { name: "Instagram", href: "#instagram", icon: "instagram" },
      { name: "LinkedIn", href: "#linkedin", icon: "linkedin" },
    ],
    legalLinks: [
      { label: "Privacy policy", href: "#privacy" },
      { label: "Terms of service", href: "#terms" },
      { label: "Cookie settings", href: "#cookies" },
    ],
    copyright: "© 2026 Harbor. All rights reserved.",
    showThemeToggle: true,
  },
  alternate: {
    brandTitle: "Keep the brief",
    brandDescription:
      "A quieter list for studios that already ship. New templates and status notes, once a week.",
    emailPlaceholder: "desk@atelier.co",
    subscribeLabel: "Join the list",
    linksTitle: "Studio",
    links: [
      { label: "Work", href: "#work" },
      { label: "Journal", href: "#journal" },
      { label: "Careers", href: "#careers" },
    ],
    contactTitle: "Desk",
    contactItems: [
      {
        icon: "map-pin",
        label: "Floor 4, North Yard, Lisbon",
      },
      {
        icon: "mail",
        label: "desk@atelier.co",
        href: "mailto:desk@atelier.co",
      },
    ],
    socialTitle: "Elsewhere",
    socialLinks: [
      { name: "GitHub", href: "#github", icon: "github" },
      { name: "Instagram", href: "#instagram", icon: "instagram" },
      { name: "YouTube", href: "#youtube", icon: "youtube" },
    ],
    legalLinks: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
    copyright: "© 2026 Atelier North. Built for quiet rooms.",
    showThemeToggle: true,
  },
} satisfies Record<string, FooterSectionProps>;
