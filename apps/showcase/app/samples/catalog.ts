import type { Route } from "next";

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
 * A sample-root path that already exists as an App Router page.
 * `Route<H>` is never for destinations typedRoutes does not know, so a
 * ready catalog `href` cannot name a missing page or a non-sample path.
 */
export type LinkedSampleHref = {
  [H in SampleRootHref]: Route<H> extends H ? H : never;
}[SampleRootHref];

export function linkedSampleHref<H extends SampleRootHref>(
  href: Route<H> extends H ? H : never,
): H {
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

export function isReadySample(sample: SampleEntry): sample is ReadySample {
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
      "Architecture and interiors sample. Work, project detail, services, and a local inquiry preview. Catalogue link lands when this site is released.",
    status: "soon",
  },
  {
    slug: "neo-brutalism",
    designSystem: "Neo-brutalism",
    brand: "Good Noise",
    description:
      "Independent branding studio sample. Work, engagement, and a project-brief preview. Catalogue link lands when this site is released.",
    status: "soon",
  },
  {
    slug: "editorial",
    designSystem: "Editorial",
    brand: "Common Hours",
    description:
      "Independent journal sample. Topic, longread, contributor, and membership preview. Catalogue link lands when this site is released.",
    status: "soon",
  },
  {
    slug: "luxury",
    designSystem: "Luxury",
    brand: "Stillwater House",
    description:
      "Boutique guest house sample. Rooms, detail, dates, and a stay-inquiry preview. Catalogue link lands when this site is released.",
    status: "soon",
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
