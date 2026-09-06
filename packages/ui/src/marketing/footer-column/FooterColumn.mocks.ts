import type { FooterColumnProps } from "./FooterColumn.types";

export const footerColumnMocks = {
  default: {
    brandName: "Harbor",
    brandHref: "#home",
    description:
      "Quiet tools for studios that already ship. Landing blocks, registries, and the copy that holds a page together.",
    socialLinks: [
      { name: "Facebook", href: "#facebook", icon: "facebook" },
      { name: "Instagram", href: "#instagram", icon: "instagram" },
      { name: "Twitter", href: "#twitter", icon: "twitter" },
      { name: "GitHub", href: "#github", icon: "github" },
      { name: "Dribbble", href: "#dribbble", icon: "dribbble" },
    ],
    aboutTitle: "About us",
    aboutLinks: [
      { label: "Studio history", href: "#history" },
      { label: "Meet the desk", href: "#team" },
      { label: "Handbook", href: "#handbook" },
      { label: "Careers", href: "#careers" },
    ],
    servicesTitle: "Our services",
    serviceLinks: [
      { label: "Product sites", href: "#sites" },
      { label: "Design systems", href: "#systems" },
      { label: "Launch copy", href: "#copy" },
      { label: "Launch ads", href: "#ads" },
    ],
    helpTitle: "Helpful links",
    helpLinks: [
      { label: "FAQs", href: "#faqs" },
      { label: "Support", href: "#support" },
      { label: "Live chat", href: "#chat", indicator: true },
    ],
    contactTitle: "Contact us",
    contactItems: [
      {
        icon: "mail",
        label: "hello@harbor.work",
        href: "mailto:hello@harbor.work",
      },
      {
        icon: "phone",
        label: "+1 (503) 555-0148",
        href: "tel:+15035550148",
      },
      {
        icon: "map-pin",
        label: "18 Dock Street, Portland",
        address: true,
      },
    ],
    copyright: "© 2026 Harbor",
    rightsLabel: "All rights reserved.",
  },
  alternate: {
    brandName: "Atelier North",
    brandHref: "#home",
    description:
      "A quieter list for rooms that already have a process. Templates, status notes, and one workflow worth stealing.",
    socialLinks: [
      { name: "GitHub", href: "#github", icon: "github" },
      { name: "Instagram", href: "#instagram", icon: "instagram" },
      { name: "Dribbble", href: "#dribbble", icon: "dribbble" },
    ],
    aboutTitle: "Studio",
    aboutLinks: [
      { label: "Work", href: "#work" },
      { label: "Journal", href: "#journal" },
      { label: "Careers", href: "#careers" },
    ],
    servicesTitle: "Practice",
    serviceLinks: [
      { label: "Brand systems", href: "#brand" },
      { label: "Product UI", href: "#ui" },
      { label: "Workshops", href: "#workshops" },
    ],
    helpTitle: "Desk",
    helpLinks: [
      { label: "Billing", href: "#billing" },
      { label: "Status", href: "#status" },
    ],
    contactTitle: "Reach us",
    contactItems: [
      {
        icon: "mail",
        label: "desk@atelier.co",
        href: "mailto:desk@atelier.co",
      },
      {
        icon: "map-pin",
        label: "Floor 4, North Yard, Lisbon",
        address: true,
      },
    ],
    copyright: "© 2026 Atelier North",
    rightsLabel: "Built for quiet rooms.",
  },
} satisfies Record<string, FooterColumnProps>;
