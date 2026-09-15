import type { VForm8Plan, VForm8Props } from "./VForm8.types";

const defaultPlans = [
  {
    id: "hobby",
    label: "Hobby",
    description: "Free forever, up to 3 projects",
  },
  {
    id: "pro",
    label: "Pro",
    description: "$12/mo - unlimited projects",
  },
  {
    id: "team",
    label: "Team",
    description: "$49/mo - collaboration tools",
  },
] as const satisfies readonly VForm8Plan[];

const alternatePlans = [
  {
    id: "reader",
    label: "Reader",
    description: "Free forever, two drafts",
  },
  {
    id: "desk",
    label: "Desk",
    description: "$18/mo - shared boards",
  },
  {
    id: "press",
    label: "Press",
    description: "$46/mo - newsroom seats",
  },
] as const satisfies readonly VForm8Plan[];

export const vForm8Mocks = {
  default: {
    accountStepLabel: "Account",
    planStepLabel: "Plan",
    confirmStepLabel: "Confirm",
    nameLabel: "Full name",
    namePlaceholder: "Alex Rivera",
    defaultName: "Alex Rivera",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    defaultEmail: "you@example.com",
    planFieldLabel: "Choose a plan",
    plans: defaultPlans,
    defaultPlanId: "hobby",
    newsletterLabel: "Send me product updates and tips",
    defaultNewsletter: true,
    continueLabel: "Continue",
    backLabel: "Back",
    submitLabel: "Create account",
    reviewNameLabel: "Name",
    reviewEmailLabel: "Email",
    reviewPlanLabel: "Plan",
    reviewUpdatesLabel: "Updates",
    updatesYesLabel: "Yes",
    updatesNoLabel: "No",
    successTitle: "Account created!",
    successDescription:
      "Welcome, {name}. Check your inbox to verify your email.",
  },
  alternate: {
    accountStepLabel: "Profile",
    planStepLabel: "Seat",
    confirmStepLabel: "Review",
    nameLabel: "Byline",
    namePlaceholder: "Ellis Voss",
    defaultName: "Ellis Voss",
    emailLabel: "Newsroom email",
    emailPlaceholder: "ellis@quill.press",
    defaultEmail: "ellis@quill.press",
    planFieldLabel: "Choose a seat",
    plans: alternatePlans,
    defaultPlanId: "desk",
    newsletterLabel: "Send the Friday proof list",
    defaultNewsletter: false,
    continueLabel: "Next",
    backLabel: "Back",
    submitLabel: "Claim this seat",
    reviewNameLabel: "Byline",
    reviewEmailLabel: "Email",
    reviewPlanLabel: "Seat",
    reviewUpdatesLabel: "Proofs",
    updatesYesLabel: "Yes",
    updatesNoLabel: "No",
    successTitle: "Seat held",
    successDescription:
      "Welcome, {name}. Open the confirm link to unlock the reading room.",
    defaultStep: "confirm",
  },
} satisfies Record<"default" | "alternate", VForm8Props>;
