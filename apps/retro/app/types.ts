export const sampleRoot = "/" as const;

export const collectionIds = [
  "desk-drawer",
  "weekend-postcards",
  "night-bus",
] as const;

export type CollectionId = (typeof collectionIds)[number];

export const assetIds = [
  "drawer-matchbox",
  "drawer-ticket",
  "postcard-pier",
  "postcard-kiosk",
  "bus-window",
  "bus-ticket",
] as const;

export type AssetId = (typeof assetIds)[number];

export const cropAspects = ["1:1", "4:3", "16:9", "free"] as const;

export type CropAspect = (typeof cropAspects)[number];

export const collectionTags = [
  "paper",
  "objects",
  "studio",
  "travel",
  "outdoor",
  "night",
  "transit",
  "city",
] as const;

export type CollectionTag = (typeof collectionTags)[number];

export const tagFilters = ["all", ...collectionTags] as const;

export type TagFilter = (typeof tagFilters)[number];

export const planIds = ["sleeve", "cabinet"] as const;

export type PlanId = (typeof planIds)[number];

export const billingIntervals = ["monthly", "yearly"] as const;

export type BillingInterval = (typeof billingIntervals)[number];

export type CapabilityStatus = "works-now" | "concept";

export type CapabilityRow = {
  id: string;
  label: string;
  status: CapabilityStatus;
  note: string;
};

export type KeepAsset = {
  id: AssetId;
  collectionId: CollectionId;
  title: string;
  summary: string;
  cropNote: string;
  imageId: string;
  alt: string;
  caption: string;
};

export type CollectionRecord = {
  id: CollectionId;
  slug: CollectionId;
  kind: "collection";
  title: string;
  theme: string;
  summary: string;
  description: string;
  tags: CollectionTag[];
  assetIds: [AssetId, AssetId];
  coverId: string;
  coverAlt: string;
  coverCaption: string;
};

export type PlanRecord = {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlyPeriod: string;
  yearlyPeriod: string;
  features: string[];
  conceptOnly: string[];
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
