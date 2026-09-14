export const sampleRoot = "/" as const;

export const topics = ["places", "people", "rituals"] as const;

export type Topic = (typeof topics)[number];

export const topicFilters = ["all", ...topics] as const;

export type TopicFilter = (typeof topicFilters)[number];

export const contributorIds = [
  "mira-ellison",
  "jonah-voss",
  "adele-park",
] as const;

export type ContributorId = (typeof contributorIds)[number];

export const planIds = ["reader", "patron"] as const;

export type PlanId = (typeof planIds)[number];

export const billingIntervals = ["monthly", "yearly"] as const;

export type BillingInterval = (typeof billingIntervals)[number];

export type ContentParagraph = {
  type: "paragraph";
  id: string;
  text: string;
};

export type ContentHeading = {
  type: "heading";
  id: string;
  title: string;
};

export type ContentImage = {
  type: "image";
  id: string;
  imageId: string;
  alt: string;
  caption: string;
};

export type ArticleBlock = ContentParagraph | ContentHeading | ContentImage;

export type ArticleRecord = {
  slug: string;
  title: string;
  standfirst: string;
  topic: Topic;
  authorId: ContributorId;
  publishedOn: string;
  leadImageId: string;
  leadAlt: string;
  leadCaption: string;
  relatedSlugs: [string, string];
  isLead: boolean;
  selectedOnHome: "lead" | "secondary" | "more" | false;
  blocks: ArticleBlock[];
};

export type ContributorRecord = {
  slug: ContributorId;
  name: string;
  role: string;
  shortBio: string;
  biography: string[];
  portraitId: string;
  portraitAlt: string;
  fallback: string;
};

export type MembershipPlan = {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlyPeriod: string;
  yearlyPeriod: string;
  features: string[];
  popular?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export type AssetSlot = {
  route: string;
  section: string;
  recordId: string;
  imageId: string;
};
