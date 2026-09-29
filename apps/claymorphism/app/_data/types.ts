export const routineSlugs = ["morning", "after-school", "bedtime"] as const;

export type RoutineSlug = (typeof routineSlugs)[number];

export const memberIds = ["maya", "leo", "dad", "grandmaRosa"] as const;

export type MemberId = (typeof memberIds)[number];

/** Semantic `--jk-*` roles used for initial avatars. */
export const memberTones = [
  "primary",
  "secondary",
  "accent",
  "warning",
] as const;

export type MemberTone = (typeof memberTones)[number];

export type Member = {
  id: MemberId;
  firstName: string;
  initial: string;
  tone: MemberTone;
};

export type BoardStepStatus = "done" | "next" | "todo";

export type BoardStep = {
  label: string;
  owner: MemberId;
  status: BoardStepStatus;
  message?: string;
};

export type Routine = {
  slug: RoutineSlug;
  name: string;
  imageId: string;
  homeSummary: string;
  indexSummary: string;
  stepCountLabel: string;
  ageNote: string;
  seoTitle: string;
  seoDescription: string;
  steps: BoardStep[];
  tip: string;
  completion: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type PlanId = "free" | "plus";

export type Plan = {
  id: PlanId;
  name: string;
  homeSummary: string;
  homeDetail: string;
  summary: string;
  price: string;
  includes: string[];
  cta: NavLink;
};

export type FaqItem = {
  question: string;
  answer: string;
  draft?: boolean;
};

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export type FooterColumnId = "brand" | "product" | "help" | "legal";

export type FooterColumn = {
  id: FooterColumnId;
  title: string;
  text?: string[];
  links: NavLink[];
};

export type StartRoutineValue = "blank" | RoutineSlug;

export type StartRoutineOption = {
  value: StartRoutineValue;
  label: string;
};

export type HomeMorningBoard = {
  title: string;
  dayLabel: string;
  steps: BoardStep[];
  progress: string;
  nextStep: string;
  genericMessage: string;
  allDone: string;
  resetLabel: string;
};
