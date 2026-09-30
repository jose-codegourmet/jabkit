import type { Route } from "next";

export const whoSeo = {
  title: "Who it's for — DAYMARK",
  description:
    "DAYMARK helps owners, front-desk staff and team leads at clinics, studios, repair shops and pet care businesses see the day in one place.",
} as const;

export const header = {
  title: "For the people who run the day.",
  body: "DAYMARK is for small service businesses where a few people share one front desk, one calendar and a lot of small follow-ups.",
  imageId: "ben-who-desk",
  imageAlt:
    "A business owner behind a chalk-coloured counter greeting an arriving customer in morning light, a paper diary open beside them",
} as const;

export type RoleId = "owners" | "front-desk" | "team-leads";

export const roles = {
  title: "Three roles, one view.",
  items: [
    {
      id: "owners",
      title: "Owners",
      body: "Open DAYMARK and know what needs you: unanswered bookings, overdue follow-ups, how the week compares.",
    },
    {
      id: "front-desk",
      title: "Front desk",
      body: "Confirm bookings, move visits and note who to call back without switching apps.",
    },
    {
      id: "team-leads",
      title: "Team leads",
      body: "Check who's on shift and move tasks across the board as the day changes.",
    },
  ] satisfies { id: RoleId; title: string; body: string }[],
} as const;

export const businessTypes = {
  title: "Businesses that run on appointments.",
  items: [
    {
      id: "clinic",
      label: "Clinics and therapy practices",
      imageId: "ben-who-clinic",
      imageAlt:
        "A small, calm treatment room with a mint-covered treatment table, a folded towel, a wooden stool and soft window light",
    },
    {
      id: "salon",
      label: "Salons and studios",
      imageId: "ben-who-salon",
      imageAlt:
        "A tidy styling station in an independent salon with an evergreen chair, a tray of combs and clips and a folded apricot towel",
    },
    {
      id: "repair",
      label: "Repair and service shops",
      imageId: "ben-who-repair",
      imageAlt:
        "An organised repair bench with hand tools on a pegboard, a bicycle wheel on a stand and a tray of tagged parts",
    },
    {
      id: "grooming",
      label: "Pet care and grooming",
      imageId: "ben-who-grooming",
      imageAlt:
        "A calm dog sitting on a mint grooming mat while a groomer brushes its coat",
    },
  ],
  /** Rendered as: before + link + after. */
  body: {
    before:
      "If your day is shaped by bookings and a small team, DAYMARK is built for it. Not sure? ",
    link: { label: "Ask during a walkthrough", href: "/walkthrough" as Route },
    after: ".",
  },
} as const;

export const fitNote = {
  title: "Where DAYMARK is not the right tool.",
  body: "DAYMARK is a daily overview and shared workspace. It is not accounting software or a payroll system.",
} as const;
