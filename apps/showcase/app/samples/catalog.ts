export const sampleSlugs = ["saas"] as const;

export type SampleSlug = (typeof sampleSlugs)[number];

export const sampleRootHrefs = ["/samples/saas"] as const;

export type SampleRootHref = (typeof sampleRootHrefs)[number];

type SlugHrefs = `/samples/${SampleSlug}`;

type RootsMatchSlugs = SampleRootHref extends SlugHrefs
  ? SlugHrefs extends SampleRootHref
    ? true
    : never
  : never;

const _rootsMatchSlugs: RootsMatchSlugs = true;
void _rootsMatchSlugs;

/**
 * Sample roots that have an App Router page and may be linked.
 * Showcase `tsc` does not load generated `Route` unions, so this
 * allowlist is the checked contract instead of `as Route`.
 */
export const implementedSampleHrefs = [
  "/samples/saas",
] as const satisfies readonly SampleRootHref[];

export type LinkedSampleHref = (typeof implementedSampleHrefs)[number];

export function linkedSampleHref<H extends LinkedSampleHref>(href: H): H {
  return href;
}

export type SampleStatus = "ready" | "soon";

interface SampleFields {
  slug: SampleSlug;
  designSystem: string;
  brand: string;
  description: string;
}

export type ReadySample = SampleFields & {
  status: "ready";
  href: LinkedSampleHref;
};

export type PendingSample = SampleFields & {
  status: "soon";
  href?: never;
};

export type SampleEntry = ReadySample | PendingSample;

export function isReadySample<T extends { status: SampleStatus }>(
  sample: T,
): sample is T & { status: "ready" } {
  return sample.status === "ready";
}

export const samples = [
  {
    slug: "saas",
    designSystem: "SaaS",
    brand: "Quarry",
    description:
      "A full marketing site for Quarry, a fictional product-analytics company, assembled from JabKit marketing and dashboard blocks.",
    href: linkedSampleHref("/samples/saas"),
    status: "ready",
  },
] as const satisfies readonly SampleEntry[];

export type ReadySlug = Extract<
  (typeof samples)[number],
  { status: "ready" }
>["slug"];

export function getReadySample(slug: ReadySlug): ReadySample {
  const sample = samples.find(
    (entry) => entry.slug === slug && entry.status === "ready",
  );
  if (!sample || !isReadySample(sample)) {
    throw new Error(`Ready sample not found: ${slug}`);
  }
  return sample;
}
