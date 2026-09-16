export type ComponentCategory = "atoms" | "marketing" | "dashboard";

export interface ComponentCaptureMeta {
  stories?: string[];
  themes?: Array<"light" | "dark">;
  viewport?: { width: number; height: number };
  waitMs?: number;
  /** Still WebP is the default. GIF is only for motion a still cannot show. */
  format?: "still" | "gif";
  /** Stories encoded as GIF when `format` is `"gif"`. Defaults to `["Default"]`. */
  gifStories?: string[];
  gifFrames?: number;
  gifIntervalMs?: number;
  gifDelayMs?: number;
}

export interface ComponentPreviewMeta {
  /** "fit" renders at a fixed viewport and scales down; "center" centres the component in the frame. */
  layout: "fit" | "center";
  width?: number;
  height?: number;
  capture?: ComponentCaptureMeta;
}

export type ComponentContentDensity = "low" | "medium" | "high";
export type ComponentVisualWeight = "low" | "medium" | "high";

export interface ComponentLayoutMeta {
  type: string;
  alignment?: "left" | "center" | "right" | "mixed";
  columns?: number;
}

export interface ComponentCapabilitiesMeta {
  supportsImage?: boolean;
  supportsVideo?: boolean;
  supportsForm?: boolean;
  supportsCTA?: boolean;
  supportsDarkMode?: boolean;
}

/** Standalone design-system apps under apps/*. Kept local: build-registry never imports apps/*. */
export type ComponentUsageSite =
  | "minimal"
  | "neo-brutalism"
  | "editorial"
  | "luxury"
  | "retro";

export interface ComponentUsageMeta {
  site: ComponentUsageSite;
  /** How that site actually composes the component, including local wrapping or overrides. */
  role: string;
}

export interface ComponentMeta {
  name: string;
  displayName: string;
  version: string;
  description: string;
  /** Source reference used to tune visual and interaction fidelity. */
  inspoUrl?: string;
  /** Semantic role used by composing agents. Structural grouping remains RegistryComponent.category. */
  sectionCategory: string;
  purpose: string;
  bestFor: string[];
  avoidFor?: string[];
  tone?: string[];
  industries?: string[];
  contentDensity?: ComponentContentDensity;
  visualWeight?: ComponentVisualWeight;
  layout?: ComponentLayoutMeta;
  slots?: string[];
  capabilities?: ComponentCapabilitiesMeta;
  recommendedAfter?: string[];
  recommendedBefore?: string[];
  usedIn?: ComponentUsageMeta[];
  tags: string[];
  dependencies: string[];
  registryDependencies: string[];
  cssVars?: { light: Record<string, string>; dark: Record<string, string> };
  a11y: { keyboardNav: boolean; reducedMotion: boolean };
  addedAt: string;
  preview?: ComponentPreviewMeta;
}

export interface RegistryFile {
  path: string;
  type: "component" | "types" | "index" | "lib" | "mocks";
  content: string;
}

export interface RegistryComponent extends ComponentMeta {
  category: ComponentCategory;
  files: RegistryFile[];
  examples: Array<{ name: string; code: string }>;
}
