import type { VForm8Plan, VForm8Props } from "./VForm8.types";

const defaultPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$0 / month",
    description: "One desk, local files, and a quiet inbox.",
  },
  {
    id: "studio",
    name: "Studio",
    price: "$18 / month",
    description: "Shared boards, guest seats, and weekly backups.",
  },
  {
    id: "desk",
    name: "Desk",
    price: "$42 / month",
    description: "Client rooms, archive search, and priority support.",
  },
] as const satisfies readonly VForm8Plan[];

const alternatePlans = [
  {
    id: "member",
    name: "Member",
    price: "$12 / month",
    description: "Reading room, two drafts, and Sunday notes.",
  },
  {
    id: "fellow",
    name: "Fellow",
    price: "$28 / month",
    description: "Editorial desk, guest reviewers, and print proofs.",
  },
  {
    id: "press",
    name: "Press",
    price: "$64 / month",
    description: "Newsroom seats, archive access, and a dedicated editor.",
  },
] as const satisfies readonly VForm8Plan[];

export const vForm8Mocks = {
  default: {
    title: "Open a Kestrel desk",
    description:
      "Three short steps. Name the account, pick a plan, then confirm before we send the invite.",
    accountStepLabel: "Account",
    planStepLabel: "Plan",
    reviewStepLabel: "Review",
    nameLabel: "Full name",
    namePlaceholder: "Mira Solano",
    defaultName: "Mira Solano",
    emailLabel: "Work email",
    emailPlaceholder: "mira@kestrel.studio",
    defaultEmail: "mira@kestrel.studio",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 8 characters",
    defaultPassword: "fieldnote-8",
    plans: defaultPlans,
    defaultPlanId: "studio",
    newsletterLabel: "Send the Sunday field notes",
    defaultNewsletter: true,
    continueLabel: "Continue",
    backLabel: "Back",
    submitLabel: "Create account",
    successTitle: "Desk is ready",
    successDescription:
      "We sent a confirm link to mira@kestrel.studio. Open it to finish the invite.",
    passwordSetLabel: "Password set",
    newsletterYesLabel: "Sunday notes on",
    newsletterNoLabel: "No newsletter",
  },
  alternate: {
    title: "Join the Quill cooperative",
    description:
      "Name, membership, then a last look. We open the reading room after you confirm.",
    accountStepLabel: "Profile",
    planStepLabel: "Seat",
    reviewStepLabel: "Confirm",
    nameLabel: "Byline",
    namePlaceholder: "Ellis Voss",
    defaultName: "Ellis Voss",
    emailLabel: "Newsroom email",
    emailPlaceholder: "ellis@quill.press",
    defaultEmail: "ellis@quill.press",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 8 characters",
    defaultPassword: "pressroom-9",
    plans: alternatePlans,
    defaultPlanId: "fellow",
    newsletterLabel: "Send the Friday proof list",
    defaultNewsletter: false,
    continueLabel: "Next",
    backLabel: "Back",
    submitLabel: "Claim this seat",
    successTitle: "Seat held",
    successDescription:
      "We sent a confirm link to ellis@quill.press. Use it to unlock the reading room.",
    passwordSetLabel: "Password set",
    newsletterYesLabel: "Friday proofs on",
    newsletterNoLabel: "No list",
  },
} satisfies Record<"default" | "alternate", VForm8Props>;
