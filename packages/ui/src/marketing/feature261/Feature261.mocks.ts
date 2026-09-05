import type { Feature261Props } from "./Feature261.types";

export const feature261Mocks = {
  default: {
    title: "Proof, price, and the people who ship it",
    description:
      "A single mosaic for the objections a buyer actually has. Imagery, a hard number, a clear seat price, and the crew already on the floor.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=1600&q=80",
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
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Ines Calder",
          fallback: "IC",
        },
        {
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Rowan Hale",
          fallback: "RH",
        },
        {
          src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Priya Nair",
          fallback: "PN",
        },
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Eli Voss",
          fallback: "EV",
        },
      ],
    },
    supportingImage: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Sunlit studio desks with plants and open notebooks",
      caption: "Desk side of the same thread",
    },
  },
  alternate: {
    title: "What the floor already believes",
    description:
      "Swap the mosaic for a field crew: jobsite photography, a punch-list stat, a crew license, and the leads who close the week.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&h=1600&q=80",
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
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Mateo Ruiz",
          fallback: "MR",
        },
        {
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Lena Park",
          fallback: "LP",
        },
        {
          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
          alt: "Portrait of Jonah Adeyemi",
          fallback: "JA",
        },
      ],
    },
    supportingImage: {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Hard hats and plans on a site table",
      caption: "Close-out before the gate",
    },
  },
} satisfies Record<"default" | "alternate", Feature261Props>;
