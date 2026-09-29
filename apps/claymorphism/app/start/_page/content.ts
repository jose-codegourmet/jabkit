export const startSeo = {
  title: "Create a free board — Pillo",
  description:
    "Set up your family's first Pillo board in a couple of minutes. Add a step, pick who owns it, and see today's next step.",
} as const;

export const startIntro = {
  title: "Create a free board",
  body: "Two quick details, then add your first step.",
  notice: "This is a demo. Nothing you type is sent or saved.",
  imageId: "cla-empty-board",
  imageAlt: "An empty family board",
} as const;

export const startFormCopy = {
  firstNameLabel: "Your first name",
  firstNameHelp: "Shown to your family on the board.",
  firstNameError: "Add your first name.",
  emailLabel: "Email",
  emailHelp: "We'll use this to sign you in.",
  emailError: "Enter an email like name@example.com.",
  boardNameLabel: "Board name",
  boardNamePlaceholder: "Morning",
  boardNameError: "Give your board a name.",
  routineLabel: "Starting routine",
  termsBefore: "I agree to the",
  termsLink: "Terms",
  termsBetween: "and",
  privacyLink: "Privacy policy",
  termsError: "Please agree to continue.",
  submit: "Create my board",
  disabledHelp: "Fill in the fields above to continue.",
  loading: "Creating your board…",
  showError: "Show error state",
  error:
    "We couldn't create your board just now. Your details are still here. Try again.",
  tryAgain: "Try again",
  successTitle: "Your board is ready.",
  empty:
    "Your board is ready for its first step. Add one thing your family does each morning.",
  stepNameLabel: "Step name",
  addStep: "Add step",
  childToggle: "Try the child view",
} as const;

export function errorSummary(count: number): string {
  const noun = count === 1 ? "thing" : "things";
  return `Check ${count} ${noun} before continuing.`;
}

export function successBody(firstName: string): string {
  return `Nice start, ${firstName}. Now add one step.`;
}

export function stepCountMessage(count: number): string {
  const noun = count === 1 ? "step" : "steps";
  return `${count} ${noun} on your board. Add a few more, or try it now.`;
}
