export const forFamiliesSeo = {
  title: "For families — Pillo",
  description:
    "Pillo gives parents a simple setup, children one clear next step, and caregivers a shared view of who owns each task and what is done.",
} as const;

export const forFamiliesIntro = {
  title: "Made for the whole crew",
  body: "Parents set it up. Children follow along. Caregivers stay in the loop.",
  backgroundId: "cla-families-hero",
} as const;

export const forParents = {
  title: "For parents",
  bullets: [
    "Set up a board in a few minutes.",
    "See what is done without asking.",
    "Change a routine when the week changes.",
  ],
  placeholder: "[Setup time — client to confirm]",
} as const;

export const forChildren = {
  title: "For children",
  bullets: [
    "Big, friendly tiles.",
    "One clear next step.",
    "A cheer and a badge when it is done.",
  ],
  step: "Get dressed",
  action: "I did it",
  imageId: "cla-families-kids",
  states: [
    { id: "focus", label: "Focus", className: "jk-clay-focus" },
    { id: "pressed", label: "Pressed", className: "jk-clay-pressed" },
  ],
} as const;

export const forCaregivers = {
  title: "For caregivers",
  bullets: [
    "See who owns each step.",
    "Know what is already finished.",
    "Pick up where someone else left off.",
  ],
  imageId: "cla-caregivers",
} as const;

export const privacyPlain = {
  title: "Your family's board stays your family's",
  body: "Pillo is built around first names and routines, not profiles.",
  placeholder:
    "[Data collected, storage location, sharing and deletion terms — client to confirm before publishing]",
  linkLabel: "Read the privacy policy",
  linkHref: "/privacy",
  imageId: "cla-privacy-home",
} as const;

export const routineIdeas = {
  title: "Not sure where to start?",
  body: "Borrow a starter routine and adjust it.",
  buttonLabel: "Browse routine ideas",
  buttonHref: "/routines",
} as const;
