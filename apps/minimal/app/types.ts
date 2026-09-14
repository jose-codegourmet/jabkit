export const sampleRoot = "/" as const;

export const disciplines = ["residential", "workspace", "retail"] as const;

export type Discipline = (typeof disciplines)[number];

export const disciplineFilters = ["all", ...disciplines] as const;

export type DisciplineFilter = (typeof disciplineFilters)[number];

export const serviceIds = ["architecture", "interiors"] as const;

export type ServiceId = (typeof serviceIds)[number];

export type NarrativeSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ProjectRecord = {
  slug: string;
  title: string;
  discipline: Discipline;
  place: string;
  year: string;
  area: string;
  brief: string;
  constraints: string;
  outcome: string;
  relatedServiceId: ServiceId;
  selectedOnHome: boolean;
  imageIds: {
    establishing: string;
    detail: string;
  };
  alt: {
    establishing: string;
    detail: string;
  };
  captions: {
    establishing: string;
    detail: string;
  };
  sections: [NarrativeSection, NarrativeSection, NarrativeSection];
};

export type ServiceRecord = {
  id: ServiceId;
  title: string;
  audience: string;
  deliverables: string[];
  exclusions: string[];
  stages: string[];
  clientInputs: string[];
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
