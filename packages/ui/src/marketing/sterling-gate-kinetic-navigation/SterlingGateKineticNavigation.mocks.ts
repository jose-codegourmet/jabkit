import type { SterlingGateKineticNavigationProps } from "./SterlingGateKineticNavigation.types";

export const sterlingGateKineticNavigationMocks = {
  default: {
    brand: "Northglass",
    brandHref: "#top",
    menuLabel: "Index",
    closeLabel: "Close",
    tagline: "Spatial identity for places that last.",
    footnote: "New work by referral",
    cta: { label: "Book a visit", href: "#visit" },
    links: [
      {
        label: "Work",
        href: "#work",
        index: "01",
        kicker: "Selected rooms",
      },
      {
        label: "Practice",
        href: "#practice",
        index: "02",
        kicker: "How we build",
      },
      {
        label: "Journal",
        href: "#journal",
        index: "03",
        kicker: "Site notes",
      },
      {
        label: "Contact",
        href: "#contact",
        index: "04",
        kicker: "New briefs",
      },
    ],
  },
  alternate: {
    defaultOpen: true,
    brand: "Vellum Tide",
    brandHref: "#top",
    menuLabel: "Menu",
    closeLabel: "Close",
    tagline: "Quiet rooms, heavy water, silver light.",
    footnote: "Lookbooks on request",
    cta: { label: "Request a lookbook", href: "#lookbook" },
    links: [
      {
        label: "Rooms",
        href: "#rooms",
        index: "01",
        kicker: "Live interiors",
      },
      {
        label: "Collections",
        href: "#collections",
        index: "02",
        kicker: "Material sets",
      },
      {
        label: "Atelier",
        href: "#atelier",
        index: "03",
        kicker: "The workshop",
      },
      {
        label: "Visit",
        href: "#visit",
        index: "04",
        kicker: "By appointment",
      },
    ],
  },
} satisfies Record<"default" | "alternate", SterlingGateKineticNavigationProps>;
