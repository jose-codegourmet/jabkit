import type { AgencyTopbarProps } from "./AgencyTopbar.types";

export const agencyTopbarMocks = {
  default: {
    brand: "LAYOUT",
    brandHref: "#top",
    links: [
      { label: "Index", href: "#index" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    locationCode: "BDX",
    menuLabel: "Toggle menu",
  },
  alternate: {
    brand: "STUDIO",
    brandHref: "#top",
    links: [
      { label: "Work", href: "#index" },
      { label: "Practice", href: "#services" },
      { label: "Write", href: "#contact" },
    ],
    locationCode: "BER",
    menuLabel: "Open navigation",
  },
} satisfies Record<string, AgencyTopbarProps>;
