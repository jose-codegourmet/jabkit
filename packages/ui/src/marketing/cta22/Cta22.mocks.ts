import type { Cta22Props, Cta22StoreLink } from "./Cta22.types";

const defaultStoreLinks: Cta22StoreLink[] = [
  {
    platform: "app-store",
    href: "#app-store",
    caption: "Download on the",
    label: "App Store",
  },
  {
    platform: "play",
    href: "#play",
    caption: "Get it on",
    label: "Google Play",
  },
];

export const cta22Mocks = {
  default: {
    title: "Take Harbor into the field.",
    description:
      "Capture briefs, markups, and sign-off from the jobsite. Same workspace as the desk, without the laptop.",
    storeLinks: defaultStoreLinks,
    phoneImageSrc: "/assets/8853774f028d7a82.webp",
    phoneImageAlt: "Harbor field app on a smartphone",
    newsletterTitle: "Field notes, once a week",
    newsletterDescription:
      "Release notes, site templates, and one workflow worth stealing. Unsubscribe any time.",
    emailLabel: "Work email",
    emailPlaceholder: "you@studio.work",
    subscribeLabel: "Subscribe",
  },
  alternate: {
    title: "Keep the crew on one thread.",
    description:
      "Punch lists, photos, and approvals land in Harbor before the drive back to the yard.",
    storeLinks: [
      {
        platform: "app-store",
        href: "#ios",
        caption: "Available on the",
        label: "App Store",
      },
      {
        platform: "play",
        href: "#android",
        caption: "Available on",
        label: "Google Play",
      },
    ],
    phoneImageSrc: "/assets/0ea25dc8a5d8c81b.webp",
    phoneImageAlt: "Smartphone showing a jobsite punch list",
    newsletterTitle: "Ops digest for site leads",
    newsletterDescription:
      "A short Friday note: what shipped, what broke, and what to try on Monday.",
    emailLabel: "Email",
    emailPlaceholder: "lead@jobsite.co",
    subscribeLabel: "Get the digest",
  },
} satisfies Record<"default" | "alternate", Cta22Props>;
