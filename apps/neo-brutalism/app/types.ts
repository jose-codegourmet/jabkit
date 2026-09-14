export const sampleRoot = "/" as const;

export const disciplines = ["identity", "campaign"] as const;

export type Discipline = (typeof disciplines)[number];

export const disciplineFilters = ["all", ...disciplines] as const;

export type DisciplineFilter = (typeof disciplineFilters)[number];

export const engagementIds = [
  "identity-sprint",
  "full-brand",
  "launch-campaign",
] as const;

export type EngagementId = (typeof engagementIds)[number];

export const deliverableIds = [
  "wordmark",
  "type-color",
  "stationery",
  "signage",
  "campaign-kit",
  "social",
  "packaging",
  "launch-sequence",
] as const;

export type DeliverableId = (typeof deliverableIds)[number];

export type NarrativeSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ProjectRecord = {
  slug: string;
  title: string;
  subject: string;
  discipline: Discipline;
  year: string;
  problem: string;
  idea: string;
  applications: string;
  deliverables: [string, string, string];
  scopeId: EngagementId;
  relatedSlug: string;
  selectedOnHome: boolean;
  imageIds: {
    object: string;
    application: string;
  };
  alt: {
    object: string;
    application: string;
  };
  captions: {
    object: string;
    application: string;
  };
  sections: [NarrativeSection, NarrativeSection, NarrativeSection];
};

export type EngagementRecord = {
  id: EngagementId;
  title: string;
  suitable: string;
  outputs: string[];
  exclusions: string[];
  stages: string[];
  clientInputs: string[];
  defaultDeliverableIds: DeliverableId[];
};

export type DeliverableOption = {
  id: DeliverableId;
  label: string;
};

export type ProcessStage = {
  id: string;
  title: string;
  body: string;
};

export type TeamMember = {
  name: string;
  role: string;
  note: string;
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
