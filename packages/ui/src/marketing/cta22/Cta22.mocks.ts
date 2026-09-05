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
    phoneImageSrc:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=720&h=1280&q=80",
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
    phoneImageSrc:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=720&h=1280&q=80",
    phoneImageAlt: "Smartphone showing a jobsite punch list",
    newsletterTitle: "Ops digest for site leads",
    newsletterDescription:
      "A short Friday note: what shipped, what broke, and what to try on Monday.",
    emailLabel: "Email",
    emailPlaceholder: "lead@jobsite.co",
    subscribeLabel: "Get the digest",
  },
} satisfies Record<"default" | "alternate", Cta22Props>;
