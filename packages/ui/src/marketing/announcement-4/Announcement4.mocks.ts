import type { Announcement4Props } from "./Announcement4.types";

export const announcement4Mocks = {
  default: {
    message:
      "A better version is here. Faster, cleaner, and built to scale with you.",
    ctaLabel: "See what's new",
    ctaHref: "#whats-new",
    dismissLabel: "Dismiss announcement",
  },
  alternate: {
    message:
      "Billing v2 is in public beta. Usage charts, seat invites, and invoice exports ship together.",
    ctaLabel: "Open the changelog",
    ctaHref: "#changelog",
    dismissLabel: "Dismiss announcement",
  },
} satisfies Record<"default" | "alternate", Announcement4Props>;
