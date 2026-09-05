import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const pipelineVersion = 1;
export const root = process.cwd();
export const uiRoot = path.join(root, "packages/ui/src");
export const registryRoot = path.join(root, "apps/showcase/public/r");
export const previewsRoot = path.join(root, "apps/showcase/public/previews");
export const assetsRoot = path.join(root, "apps/showcase/public/assets");

export type Category = "atoms" | "marketing" | "dashboard";
export type Theme = "light" | "dark";

export type CaptureMeta = {
  stories?: string[];
  themes?: Theme[];
  viewport?: { width: number; height: number };
  waitMs?: number;
};

export type PreviewMeta = {
  layout: "fit" | "center";
  width?: number;
  height?: number;
  capture?: CaptureMeta;
};

export type RegistryIndexItem = {
  name: string;
  displayName: string;
  category: Category;
  preview?: Omit<PreviewMeta, "capture">;
};

export type PreviewAsset = {
  story: string;
  theme: Theme;
  file: string;
  bytes: number;
  width: number;
  height: number;
};

export type PreviewManifestEntry = {
  sourceHash: string;
  pipelineVersion: number;
  stories: string[];
  themes: Theme[];
  assets: PreviewAsset[];
};

export type PreviewAssetsManifest = {
  pipelineVersion: number;
  components: Record<string, PreviewManifestEntry>;
};

export function componentDirectory(item: RegistryIndexItem) {
  return path.join(uiRoot, item.category, item.name);
}

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(filePath) : [filePath];
    }),
  );
  return files.flat().sort();
}

export async function componentSourceFiles(item: RegistryIndexItem) {
  const directory = componentDirectory(item);
  const files = await walk(directory);
  const imports = new Set<string>();
  for (const filePath of files) {
    const source = await readFile(filePath, "utf8");
    for (const match of source.matchAll(/from\s+["']@\/lib\/([^"']+)["']/g))
      imports.add(match[1]);
  }
  const libraryFiles = [...imports]
    .sort()
    .map((importPath) => path.join(uiRoot, "lib", `${importPath}.ts`));
  return [...files, ...libraryFiles];
}

export async function componentSourceHash(item: RegistryIndexItem) {
  const hash = createHash("sha256");
  for (const filePath of await componentSourceFiles(item)) {
    hash.update(path.relative(root, filePath));
    hash.update("\0");
    hash.update(await readFile(filePath));
    hash.update("\0");
  }
  return hash.digest("hex");
}

export async function componentCaptureMeta(item: RegistryIndexItem) {
  const directory = componentDirectory(item);
  const metaFile = (await readdir(directory)).find((file) =>
    file.endsWith(".meta.ts"),
  );
  if (!metaFile) throw new Error(`${item.name}: missing metadata file`);
  const module = (await import(
    pathToFileURL(path.join(directory, metaFile)).href
  )) as {
    default?: { preview?: PreviewMeta };
  };
  return module.default?.preview?.capture;
}

export function captureViewport(
  item: RegistryIndexItem,
  capture?: CaptureMeta,
) {
  if (capture?.viewport) return capture.viewport;
  if (item.preview?.layout === "fit") {
    return {
      width: item.preview.width ?? 1440,
      height: item.preview.height ?? 900,
    };
  }
  return { width: 800, height: 480 };
}
