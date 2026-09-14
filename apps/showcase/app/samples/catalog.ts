export const sampleSlugs = [
  "saas",
  "minimal",
  "neo-brutalism",
  "editorial",
  "luxury",
  "retro",
] as const;

export type SampleSlug = (typeof sampleSlugs)[number];

export const sampleRootHrefs = [
  "/samples/saas",
  "/samples/minimal",
  "/samples/neo-brutalism",
  "/samples/editorial",
  "/samples/luxury",
  "/samples/retro",
] as const;

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
 * Sample roots that currently have an App Router page and may be linked.
 * Planned roots stay in `sampleRootHrefs` until their release ticket adds
 * them here. Showcase `tsc` does not load generated `Route` unions, so this
 * allowlist is the checked contract instead of `as Route`.
 */
export const implementedSampleHrefs = [
  "/samples/saas",
  "/samples/minimal",
  "/samples/neo-brutalism",
  "/samples/editorial",
  "/samples/luxury",
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
  {
    slug: "minimal",
    designSystem: "Minimal",
    brand: "West Room Studio",
    description:
      "Architecture and interiors sample. Work, project detail, services, and a local inquiry preview.",
    href: linkedSampleHref("/samples/minimal"),
    status: "ready",
  },
  {
    slug: "neo-brutalism",
    designSystem: "Neo-brutalism",
    brand: "Good Noise",
    description:
      "Independent branding studio sample. Work, engagement, and a project-brief preview.",
    href: linkedSampleHref("/samples/neo-brutalism"),
    status: "ready",
  },
  {
    slug: "editorial",
    designSystem: "Editorial",
    brand: "Common Hours",
    description:
      "Independent journal sample. Topic archive, longreads, contributors, and a local membership preview.",
    href: linkedSampleHref("/samples/editorial"),
    status: "ready",
  },
  {
    slug: "luxury",
    designSystem: "Luxury",
    brand: "Stillwater House",
    description:
      "Boutique guest house sample. Rooms, detail, dates, and a stay-inquiry preview.",
    href: linkedSampleHref("/samples/luxury"),
    status: "ready",
  },
  {
    slug: "retro",
    designSystem: "Retro",
    brand: "Pocket Keeps",
    description:
      "Creative image-utility sample. Collection, format, and a local crop/download studio. Catalogue link lands when this site is released.",
    status: "soon",
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
