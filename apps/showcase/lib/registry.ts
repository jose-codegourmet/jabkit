import { readFile } from "node:fs/promises";
import path from "node:path";

export type ComponentPreviewMeta = {
  layout: "fit" | "center";
  width?: number;
  height?: number;
};
export type RegistryIndexItem = {
  name: string;
  displayName: string;
  category: "atoms" | "marketing" | "dashboard";
  description: string;
  tags: string[];
  addedAt: string;
  dependencies: string[];
  a11y: { keyboardNav: boolean; reducedMotion: boolean };
  preview?: ComponentPreviewMeta;
};
export type RegistryEntry = RegistryIndexItem & {
  version: string;
  dependencies: string[];
  registryDependencies: string[];
  cssVars?: { light: Record<string, string>; dark: Record<string, string> };
  files: Array<{ path: string; type: string; content: string }>;
  examples: Array<{ name: string; code: string }>;
};
const registryPath = path.join(process.cwd(), "public/r");
export async function registryIndex(): Promise<RegistryIndexItem[]> {
  return JSON.parse(
    await readFile(path.join(registryPath, "index.json"), "utf8"),
  );
}
export async function registryEntry(
  name: string,
): Promise<RegistryEntry | null> {
  try {
    return JSON.parse(
      await readFile(path.join(registryPath, `${name}.json`), "utf8"),
    );
  } catch {
    return null;
  }
}
