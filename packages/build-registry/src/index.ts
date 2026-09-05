export type ComponentCategory = "atoms" | "marketing" | "dashboard";

export interface ComponentCaptureMeta {
  stories?: string[];
  themes?: Array<"light" | "dark">;
  viewport?: { width: number; height: number };
  waitMs?: number;
}

export interface ComponentPreviewMeta {
  /** "fit" renders at a fixed viewport and scales down; "center" centres the component in the frame. */
  layout: "fit" | "center";
  width?: number;
  height?: number;
  capture?: ComponentCaptureMeta;
}

export interface ComponentMeta {
  name: string;
  displayName: string;
  version: string;
  description: string;
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
  type: "component" | "types" | "index" | "lib";
  content: string;
}

export interface RegistryComponent extends ComponentMeta {
  category: ComponentCategory;
  files: RegistryFile[];
  examples: Array<{ name: string; code: string }>;
}
