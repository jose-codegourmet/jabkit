import type {
  TraffoFooterColumn,
  TraffoFooterProps,
} from "./TraffoFooter.types";

export const traffoFooterColumns: TraffoFooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Analytics", href: "#analytics" },
      { label: "Experiments", href: "#experiments" },
      { label: "Sessions", href: "#sessions" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Security", href: "#security" },
      { label: "GDPR", href: "#gdpr" },
    ],
  },
];

export const traffoFooterMocks = {
  default: {
    brand: "Traffo",
    blurb:
      "The analytics platform for teams who'd rather ship than spreadsheet.",
    columns: traffoFooterColumns,
    copyright: "© 2026 Traffo",
    credit: "Made with attention",
  },
  alternate: {
    brand: "Traffo Labs",
    blurb: "Instrumentation without the busywork.",
    columns: traffoFooterColumns.slice(0, 2),
    copyright: "© 2026 Traffo Labs",
    credit: "Built for operators",
  },
} satisfies Record<string, TraffoFooterProps>;
