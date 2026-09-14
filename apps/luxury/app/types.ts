export const sampleRoot = "/" as const;

export const roomIds = ["lake-room", "garden-room", "upper-suite"] as const;

export type RoomId = (typeof roomIds)[number];

export const experienceIds = [
  "morning-on-the-water",
  "seasonal-table",
  "woodland-walk",
] as const;

export type ExperienceId = (typeof experienceIds)[number];

export type RoomRecord = {
  id: RoomId;
  slug: RoomId;
  kind: "room";
  title: string;
  summary: string;
  facet: string;
  location: string;
  area: string;
  occupancy: number;
  beds: string;
  access: string;
  amenities: string[];
  nightlyRate: number;
  currency: string;
  rateNote: string;
  comparison: string;
  imageIds: { establishing: string; detail: string };
  alt: { establishing: string; detail: string };
  captions: { establishing: string; detail: string };
  inclusions: string[];
  narrative: string[];
};

export type ExperienceRecord = {
  id: ExperienceId;
  slug: ExperienceId;
  title: string;
  summary: string;
  atmosphere: string;
  duration: string;
  audience: string;
  access: string;
  inquiryPrompt: string;
  imageId: string;
  alt: string;
  caption: string;
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
