import { placeholders } from "../../_data/site";

export const howSeo = {
  title: "How it works — DAYMARK",
  description:
    "Open the day, keep work moving, close with nothing hidden. See how a small service team runs its day in DAYMARK.",
} as const;

export const header = {
  title: "How a day runs in DAYMARK.",
  body: "Open the dashboard, clear what needs attention, and let the tiles keep everyone on the same page until close.",
} as const;

export type StepPreview = "bookings" | "tasks" | "weekly";

export const steps = {
  /** Visually hidden H2 so the step H3s never skip a heading level. */
  srTitle: "The day, step by step",
  indexLabel: "Steps",
  items: [
    {
      id: "before-opening",
      label: "Before opening",
      title: "Open the day.",
      body: "Check today's visits, answer the 3 bookings waiting for a reply, and see who's on shift.",
      imageId: "ben-process-before",
      imageAlt:
        "The front desk early in the morning: a paper wall calendar, mint and apricot sticky notes, a printed sheet and a face-down phone",
      preview: "bookings",
    },
    {
      id: "between-visits",
      label: "Between visits",
      title: "Keep work moving.",
      body: "Move tasks across the board, reschedule when plans change, and flag a customer for follow-up right after their visit.",
      imageId: "ben-process-together",
      imageAlt:
        "Two coworkers in a brief standing conversation at the front counter between appointments, one pointing to a closed folder",
      preview: "tasks",
    },
    {
      id: "at-close",
      label: "At close",
      title: "Close with nothing hidden.",
      body: "Unfinished follow-ups carry into tomorrow's dashboard. The weekly chart updates with today's visits.",
      imageId: "ben-process-close",
      imageAlt:
        "The front desk at the end of the day in low warm light, the counter cleared, the diary closed and keys set out for tomorrow",
      preview: "weekly",
    },
  ] satisfies {
    id: string;
    label: string;
    title: string;
    body: string;
    imageId: string;
    imageAlt: string;
    preview: StepPreview;
  }[],
} as const;

export const setup = {
  title: "Getting set up.",
  body: "During your walkthrough we look at how you track bookings, tasks and follow-ups today and show how they map to DAYMARK.",
  items: [
    { label: "Setup time:", value: placeholders.setupTimeline },
    {
      label: "Importing existing bookings:",
      value: placeholders.importOptions,
    },
  ],
} as const;
