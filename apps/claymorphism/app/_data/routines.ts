import type { ClayAssetId } from "./assets";
import type {
  HomeMorningBoard,
  Routine,
  RoutineSlug,
  StartRoutineOption,
} from "./types";
import { routineSlugs } from "./types";

const ageNote = "works well for ages 6–12";

function seoDescription(name: string): string {
  return `A starter ${name.toLowerCase()} routine for families with children aged 6–12. See the steps, try the example board, and copy it to your own.`;
}

export const routines: Routine[] = [
  {
    slug: "morning",
    name: "Morning",
    imageId: "cla-routine-morning" satisfies ClayAssetId,
    homeSummary: "Four steps from wake-up to the front door.",
    indexSummary: "Get dressed, pack the bag, brush teeth, out the door.",
    stepCountLabel: "4 steps",
    ageNote,
    seoTitle: "Morning routine — Pillo",
    seoDescription: seoDescription("Morning"),
    steps: [
      { label: "Get dressed", owner: "maya", status: "todo" },
      { label: "Pack school bag", owner: "maya", status: "todo" },
      { label: "Brush teeth", owner: "maya", status: "todo" },
      { label: "Ready to go", owner: "maya", status: "todo" },
    ],
    tip: "Lay clothes out the night before to make step one quick.",
    completion: "Nice work, Maya. Your bag is ready.",
  },
  {
    slug: "after-school",
    name: "After school",
    imageId: "cla-routine-after-school" satisfies ClayAssetId,
    homeSummary: "Unpack, snack, homework, play.",
    indexSummary: "Unpack, snack, homework, then play.",
    stepCountLabel: "4 steps",
    ageNote,
    seoTitle: "After school routine — Pillo",
    seoDescription: seoDescription("After school"),
    steps: [
      { label: "Unpack bag", owner: "maya", status: "todo" },
      { label: "Have a snack", owner: "maya", status: "todo" },
      { label: "Homework time", owner: "maya", status: "todo" },
      { label: "Free play", owner: "maya", status: "todo" },
    ],
    tip: "Put the snack step before homework so energy is up.",
    completion: "Homework done. Time to play!",
  },
  {
    slug: "bedtime",
    name: "Bedtime",
    imageId: "cla-routine-bedtime" satisfies ClayAssetId,
    homeSummary: "A calm wind-down in five steps.",
    indexSummary: "Bath, pajamas, story, lights down, sleep.",
    stepCountLabel: "5 steps",
    ageNote,
    seoTitle: "Bedtime routine — Pillo",
    seoDescription: seoDescription("Bedtime"),
    steps: [
      { label: "Bath or wash", owner: "maya", status: "todo" },
      { label: "Pajamas on", owner: "maya", status: "todo" },
      { label: "Story time", owner: "maya", status: "todo" },
      { label: "Lights down", owner: "maya", status: "todo" },
      { label: "Sleep tight", owner: "maya", status: "todo" },
    ],
    tip: "Keep the last two steps quiet and the same every night.",
    completion: "All set for sleep. You did it!",
  },
];

export { routineSlugs };

export function isRoutineSlug(value: string): value is RoutineSlug {
  return (routineSlugs as readonly string[]).includes(value);
}

export function getRoutine(slug: string): Routine | undefined {
  return routines.find((routine) => routine.slug === slug);
}

export function otherRoutines(slug: RoutineSlug): Routine[] {
  return routines.filter((routine) => routine.slug !== slug);
}

export const homeMorningBoard: HomeMorningBoard = {
  title: "Morning board",
  dayLabel: "Today",
  steps: [
    { label: "Get dressed", owner: "maya", status: "done" },
    {
      label: "Pack school bag",
      owner: "maya",
      status: "done",
      message: "Nice work, Maya. Your bag is ready.",
    },
    { label: "Brush teeth", owner: "maya", status: "next" },
    { label: "Ready to go", owner: "dad", status: "todo" },
  ],
  progress: "2 of 4 steps done",
  nextStep: "Today's next step: Brush teeth",
  genericMessage: "You did it!",
  allDone: "All 4 steps done. You did it!",
  resetLabel: "Reset example",
};

export const startRoutineOptions: StartRoutineOption[] = [
  { value: "blank", label: "Blank board" },
  { value: "morning", label: "Morning" },
  { value: "after-school", label: "After school" },
  { value: "bedtime", label: "Bedtime" },
];
