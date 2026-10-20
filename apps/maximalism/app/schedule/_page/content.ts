import { type Day, dayLabel } from "../../_data/artists";

/** Schedule page copy (brief: Schedule — /schedule). Keep it verbatim. */
export const scheduleMeta = {
  title: "Schedule — plan your sets at FULL VOLUME (demo)",
  description:
    "Filter FULL VOLUME demo set times by day and stage, sort the list, save a personal plan, and see clashes before they happen.",
} as const;

export const scheduleHeader = {
  eyebrow: "Schedule",
  title: "Make a plan. Leave room for surprises.",
  body: "Every set with its stage, start time, and length. Save the ones you want and we'll warn you about clashes.",
  imageId: "max-background-halftone",
} as const;

export const scheduleControls = {
  /** Section heading for assistive tech; the band carries the visible headline. */
  heading: "Set times",
  dayLabel: "Day",
  stageLabel: "Stage",
  allStages: "All stages",
  sortLabel: "Sort by",
  planOnlyLabel: "Show my plan only",
} as const;

export function resultText(count: number, day: Day): string {
  return `${count} ${count === 1 ? "set" : "sets"} on ${dayLabel(day)}`;
}

export const scheduleTable = {
  columns: {
    start: "Start",
    act: "Act",
    stage: "Stage",
    length: "Length",
    plan: "Plan",
  },
  caption: (day: Day, sortLabel: string) =>
    `${dayLabel(day)} set times, sorted by ${sortLabel.toLowerCase()}`,
  listLabel: (day: Day) => `${dayLabel(day)} set times`,
} as const;

export const clashCopy = {
  message: (a: string, b: string, minutes: number, day: Day) =>
    `Heads up: ${a} and ${b} overlap by ${minutes} minutes on ${dayLabel(day)}.`,
  keepBoth: "Keep both",
  remove: (b: string) => `Remove ${b}`,
  removed: (b: string) => `Removed ${b} from your plan.`,
  demoBadge: "Demo state",
  demoNote: "Preview of the clash warning. The demo set times never overlap.",
  /** Sample overlap used only by the labelled demo state. */
  demoOverlapMinutes: 15,
} as const;

export const planCopy = {
  heading: "Your plan",
  empty: "Your plan is empty. Tap Add on any set to save it here.",
  savedNote: "Saved in this browser only.",
  clear: "Clear plan",
  confirmTitle: "Clear all saved sets?",
  confirmBody: "This can't be undone.",
  confirmClear: "Clear",
  confirmKeep: "Keep my plan",
  count: (count: number) => `${count} ${count === 1 ? "set" : "sets"} saved`,
} as const;

export const stateCopy = {
  loading: "Loading set times…",
  empty: "No sets match. Try another stage or turn off 'Show my plan only'.",
  error: "Set times didn't load. Try again.",
  retry: "Try again",
  changeNotice: "Set times can change. [Update policy — client to confirm].",
} as const;

export type DemoState = "live" | "loading" | "error" | "clash";

export const demoStates = {
  label: "Preview a demo state",
  badge: "Demo state",
  options: [
    { value: "live", label: "Live list" },
    { value: "loading", label: "Loading" },
    { value: "error", label: "Error" },
    { value: "clash", label: "Clash" },
  ] satisfies { value: DemoState; label: string }[],
} as const;

export function isDemoState(value: unknown): value is DemoState {
  return (
    value === "live" ||
    value === "loading" ||
    value === "error" ||
    value === "clash"
  );
}
