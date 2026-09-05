import type { Feature261Props } from "./Feature261.types";

export const feature261Mocks = {
  default: {
    title: "Proof, price, and the people who ship it",
    description:
      "A single mosaic for the objections a buyer actually has. Imagery, a hard number, a clear seat price, and the crew already on the floor.",
    heroImage: {
      src: "/assets/e9bbbe08553b17ce.webp",
      alt: "Product team gathered around a table reviewing work",
      caption: "Standup on the studio floor",
    },
    stat: {
      value: "47 hrs",
      label: "Median time from brief to first review",
      hint: "Last 90 days, paid seats only",
    },
    pricing: {
      amount: "$48",
      period: "/ seat / month",
      caption:
        "Includes reviews, markup, and field capture. No per-project fees.",
      ctaLabel: "See plans",
      href: "#plans",
    },
    promo: {
      title: "One workspace for desk and site",
      body: "Markups, photos, and sign-off land in the same thread. No second tool for the jobsite.",
    },
    avatars: {
      title: "Already in the room",
      body: "Operators at Harbor, Northline, and Kindred run weekly reviews here.",
      extraCount: "18",
      people: [
        {
          src: "/assets/bd48582e630a15fa.webp",
          alt: "Portrait of Ines Calder",
          fallback: "IC",
        },
        {
          src: "/assets/8e9489842d5e2cdf.webp",
          alt: "Portrait of Rowan Hale",
          fallback: "RH",
        },
        {
          src: "/assets/4132445424a19cc6.webp",
          alt: "Portrait of Priya Nair",
          fallback: "PN",
        },
        {
          src: "/assets/8c18989537b833e8.webp",
          alt: "Portrait of Eli Voss",
          fallback: "EV",
        },
      ],
    },
    supportingImage: {
      src: "/assets/e8b49d7b4617a825.webp",
      alt: "Sunlit studio desks with plants and open notebooks",
      caption: "Desk side of the same thread",
    },
  },
  alternate: {
    title: "What the floor already believes",
    description:
      "Swap the mosaic for a field crew: jobsite photography, a punch-list stat, a crew license, and the leads who close the week.",
    heroImage: {
      src: "/assets/09d7b8338ea2f19c.webp",
      alt: "Construction crew reviewing plans on site",
      caption: "Morning walk on the jobsite",
    },
    stat: {
      value: "12k",
      label: "Punch items closed this quarter",
      hint: "Across 86 active sites",
    },
    pricing: {
      amount: "$36",
      period: "/ crew / month",
      caption:
        "Unlimited photos, punch lists, and sign-off from the field app.",
      ctaLabel: "Start a crew",
      href: "#crew",
    },
    promo: {
      title: "Sign-off before the drive back",
      body: "Leads mark complete on the slab. The desk sees it before the truck hits the yard.",
    },
    avatars: {
      title: "Site leads on Harbor",
      body: "Field captains at Copper Yard, Midway, and Parcel run Friday close-out here.",
      extraCount: "9",
      people: [
        {
          src: "/assets/167acbe9e3afc083.webp",
          alt: "Portrait of Mateo Ruiz",
          fallback: "MR",
        },
        {
          src: "/assets/ea07d2da071b9238.webp",
          alt: "Portrait of Lena Park",
          fallback: "LP",
        },
        {
          src: "/assets/3be42edfe042471f.webp",
          alt: "Portrait of Jonah Adeyemi",
          fallback: "JA",
        },
      ],
    },
    supportingImage: {
      src: "/assets/07c0c688f7558af7.webp",
      alt: "Hard hats and plans on a site table",
      caption: "Close-out before the gate",
    },
  },
} satisfies Record<"default" | "alternate", Feature261Props>;
