export type SampleRecordKind = "project" | "room" | "plan";

export interface SampleImageRef {
  /** Local showcase path only, e.g. `/assets/design-systems/...`. */
  src: `/${string}`;
  alt: string;
}

export interface SampleRecord {
  id: string;
  slug: string;
  kind: SampleRecordKind;
  title: string;
  summary: string;
  facet: string;
  image?: SampleImageRef;
}

export const sampleEmptyCopy = {
  noMatches: "No records match this filter. Reset to see the full list.",
  unknownSelection:
    "That link is not a known project, room, or plan. Pick one from the list.",
  unknownSlug: "This record is not in the sample fixtures.",
} as const;

export function indexBySlug<T extends { slug: string }>(
  records: readonly T[],
): Map<string, T> {
  return new Map(records.map((record) => [record.slug, record]));
}

export function indexById<T extends { id: string }>(
  records: readonly T[],
): Map<string, T> {
  return new Map(records.map((record) => [record.id, record]));
}

export function findRecordBySlug<T extends { slug: string }>(
  records: readonly T[],
  slug: string,
): T | undefined {
  return records.find((record) => record.slug === slug);
}

export function findRecordById<T extends { id: string }>(
  records: readonly T[],
  id: string,
): T | undefined {
  return records.find((record) => record.id === id);
}
