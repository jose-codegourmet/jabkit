import type { MemberId } from "../../_data/types";

export const howItWorksSeo = {
  title: "How it works — Pillo",
  description:
    "Build a board, show your child the next small step, and celebrate progress. See how Pillo fits a real morning and adapts when plans change.",
} as const;

export const howItWorksIntro = {
  title: "How Pillo works",
  body: "Set up a board once, use it every day, and change it whenever your week does.",
  actionLabel: "Create a free board",
  actionHref: "/start",
  backgroundId: "cla-background-blobs",
} as const;

export const buildStep = {
  title: "1. Build a board",
  body: 'Choose a starter routine or begin with a blank board. Add steps in plain words, like "Pack school bag," and give each one an owner.',
  checklist: ["Name the board", "Add 3 to 6 steps", "Pick who owns each step"],
  stepNameLabel: "Step name",
  stepNameHelp: "Keep it short, like 'Brush teeth'.",
  addStepLabel: "Add step",
  stepNameError: "Give this step a name first.",
  ownerLabel: "Owner",
  imageId: "cla-step-build",
} as const;

export const nextStep = {
  title: "2. Choose the next step",
  body: "The child view shows one big tile for what to do now and a short row of what comes after. Big buttons, few words.",
  current: "Brush teeth",
  following: "Ready to go",
  imageId: "cla-step-next",
} as const;

export const celebrateStep = {
  title: "3. Celebrate progress",
  body: "Each finished step fills the progress bar and says so in words. Finish the board and a badge joins the collection.",
  partial: "2 of 4 steps done",
  complete: "All 4 steps done. You did it!",
  badge: "Morning finished",
  toggleLabel: "Finish the board",
  imageId: "cla-step-celebrate",
} as const;

export const plansChange = {
  title: "When the day goes sideways",
  body: "Snow day, early pickup, or a sleepy start. Move a step to later, skip it for today, or swap owners without rebuilding the board.",
  tiles: ["Skip for today", "Move to later", "Swap owner"],
  placeholder: "[Confirm these actions exist — client to confirm]",
  imageId: "cla-benefit-change",
  stateStripLabel: "Button states",
  states: [
    { id: "normal", label: "Normal" },
    { id: "hover", label: "Hover" },
    { id: "pressed", label: "Pressed" },
    { id: "focus", label: "Focus" },
    { id: "disabled", label: "Disabled" },
  ],
} as const;

export const caregivers = {
  title: "Share the load",
  body: "Invite a second caregiver to see the same board, who owns each step, and what is already done.",
  placeholder: "[Confirm invite and co-manage behaviour — client to confirm]",
  ownerBadge: "Owner",
  imageId: "cla-caregivers",
  people: [
    { id: "dad" satisfies MemberId, owner: true },
    { id: "grandmaRosa" satisfies MemberId, owner: false },
  ],
} as const;

export const processNote = {
  title: "Designed to feel calm",
  body: "No streak pressure, no countdown timers, no guilt. Just the next small step and a kind word when it is done.",
  imageId: "cla-process-shaping",
} as const;
