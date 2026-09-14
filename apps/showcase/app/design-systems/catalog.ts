export const designSystemSlugs = [
  "minimal",
  "neo-brutalism",
  "editorial",
  "luxury",
  "retro",
] as const;

export type DesignSystemSlug = (typeof designSystemSlugs)[number];

export const designSystemRootHrefs = [
  "/design-systems/minimal",
  "/design-systems/neo-brutalism",
  "/design-systems/editorial",
  "/design-systems/luxury",
  "/design-systems/retro",
] as const;

export type DesignSystemRootHref = (typeof designSystemRootHrefs)[number];

type SlugHrefs = `/design-systems/${DesignSystemSlug}`;

type RootsMatchSlugs = DesignSystemRootHref extends SlugHrefs
  ? SlugHrefs extends DesignSystemRootHref
    ? true
    : never
  : never;

const _rootsMatchSlugs: RootsMatchSlugs = true;
void _rootsMatchSlugs;

/**
 * Design-system roots that have an App Router page and may be linked.
 * Showcase `tsc` does not load generated `Route` unions, so this
 * allowlist is the checked contract instead of `as Route`.
 */
export const implementedDesignSystemHrefs = [
  "/design-systems/minimal",
  "/design-systems/neo-brutalism",
  "/design-systems/editorial",
  "/design-systems/luxury",
  "/design-systems/retro",
] as const satisfies readonly DesignSystemRootHref[];

export type LinkedDesignSystemHref =
  (typeof implementedDesignSystemHrefs)[number];

export function linkedDesignSystemHref<H extends LinkedDesignSystemHref>(
  href: H,
): H {
  return href;
}

export type DesignSystemStatus = "ready" | "soon";

interface DesignSystemFields {
  slug: DesignSystemSlug;
  designSystem: string;
  brand: string;
  description: string;
}

export type ReadyDesignSystem = DesignSystemFields & {
  status: "ready";
  href: LinkedDesignSystemHref;
};

export type PendingDesignSystem = DesignSystemFields & {
  status: "soon";
  href?: never;
};

export type DesignSystemEntry = ReadyDesignSystem | PendingDesignSystem;

export function isReadyDesignSystem<T extends { status: DesignSystemStatus }>(
  entry: T,
): entry is T & { status: "ready" } {
  return entry.status === "ready";
}

export const designSystems = [
  {
    slug: "minimal",
    designSystem: "Minimal",
    brand: "West Room Studio",
    description:
      "Architecture and interiors. Work, project detail, services, and a local inquiry preview.",
    href: linkedDesignSystemHref("/design-systems/minimal"),
    status: "ready",
  },
  {
    slug: "neo-brutalism",
    designSystem: "Neo-brutalism",
    brand: "Good Noise",
    description:
      "Independent branding studio. Work, engagement, and a project-brief preview.",
    href: linkedDesignSystemHref("/design-systems/neo-brutalism"),
    status: "ready",
  },
  {
    slug: "editorial",
    designSystem: "Editorial",
    brand: "Common Hours",
    description:
      "Independent journal. Topic archive, longreads, contributors, and a local membership preview.",
    href: linkedDesignSystemHref("/design-systems/editorial"),
    status: "ready",
  },
  {
    slug: "luxury",
    designSystem: "Luxury",
    brand: "Stillwater House",
    description:
      "Boutique guest house. Rooms, detail, dates, and a stay-inquiry preview.",
    href: linkedDesignSystemHref("/design-systems/luxury"),
    status: "ready",
  },
  {
    slug: "retro",
    designSystem: "Retro",
    brand: "Pocket Keeps",
    description:
      "Creative image utility. Collection, format, and a local crop/download studio.",
    href: linkedDesignSystemHref("/design-systems/retro"),
    status: "ready",
  },
] as const satisfies readonly DesignSystemEntry[];

export type ReadyDesignSystemSlug = Extract<
  (typeof designSystems)[number],
  { status: "ready" }
>["slug"];

export function getReadyDesignSystem(
  slug: ReadyDesignSystemSlug,
): ReadyDesignSystem {
  const entry = designSystems.find(
    (item) => item.slug === slug && item.status === "ready",
  );
  if (!entry || !isReadyDesignSystem(entry)) {
    throw new Error(`Ready design system not found: ${slug}`);
  }
  return entry;
}
