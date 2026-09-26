import { readFile } from "node:fs/promises";
import path from "node:path";

export type PreviewTheme = "light" | "dark";
export type PreviewAsset = {
  story: string;
  theme: PreviewTheme;
  file: string;
  width: number;
  height: number;
  format?: "webp" | "gif";
};
type PreviewManifest = {
  components: Record<string, { assets: PreviewAsset[] }>;
};

export function assetFormat(asset: PreviewAsset) {
  return asset.format ?? (asset.file.endsWith(".gif") ? "gif" : "webp");
}

async function loadManifest() {
  try {
    return JSON.parse(
      await readFile(
        path.join(process.cwd(), "public/previews/manifest.json"),
        "utf8",
      ),
    ) as PreviewManifest;
  } catch {
    return null;
  }
}

export async function previewAssets(
  name: string,
  story: string,
  theme: PreviewTheme,
) {
  const manifest = await loadManifest();
  return (
    manifest?.components[name]?.assets.filter(
      (asset) => asset.story === story && asset.theme === theme,
    ) ?? []
  );
}

/** Default-story still URL for every component, keyed by registry name. */
export async function previewStillMap(theme: PreviewTheme = "dark") {
  const manifest = await loadManifest();
  const map: Record<string, string> = {};
  for (const [name, { assets }] of Object.entries(manifest?.components ?? {})) {
    const still = assets.find(
      (asset) =>
        asset.story === "Default" &&
        asset.theme === theme &&
        assetFormat(asset) === "webp",
    );
    if (still) map[name] = `/previews/${still.file}`;
  }
  return map;
}

/** Public URL of the committed still for a component, or `null`. */
export async function previewStillSrc(
  name: string,
  { story = "Default", theme = "dark" as PreviewTheme } = {},
) {
  const assets = await previewAssets(name, story, theme);
  const still = assets.find((asset) => assetFormat(asset) === "webp");
  return still ? `/previews/${still.file}` : null;
}
