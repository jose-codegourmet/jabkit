import type { RandomLetterSwapProps } from "./RandomLetterSwap.types";

export const randomLetterSwapMocks = {
  default: {
    brand: "Fieldline",
    brandHref: "#top",
    reverse: true,
    staggerMs: 28,
    durationMs: 620,
    cta: { label: "Start a brief", href: "#brief" },
    items: [
      { label: "Work", href: "#work" },
      { label: "Studio", href: "#studio" },
      { label: "Journal", href: "#journal" },
      { label: "Visit", href: "#visit" },
    ],
  },
  alternate: {
    brand: "Kite Loom",
    brandHref: "#top",
    reverse: false,
    staggerMs: 36,
    durationMs: 720,
    cta: { label: "Request hours", href: "#hours" },
    items: [
      { label: "Rooms", href: "#rooms" },
      { label: "Atelier", href: "#atelier" },
      { label: "Archive", href: "#archive" },
      { label: "Booking", href: "#booking" },
    ],
  },
} satisfies Record<"default" | "alternate", RandomLetterSwapProps>;
