import { readFile } from "node:fs/promises";
import path from "node:path";

type Theme = "light" | "dark";
type PreviewAsset = {
  story: string;
  theme: Theme;
  file: string;
  width: number;
  height: number;
  format?: "webp" | "gif";
};
type PreviewManifest = {
  components: Record<string, { assets: PreviewAsset[] }>;
};

function assetFormat(asset: PreviewAsset) {
  return asset.format ?? (asset.file.endsWith(".gif") ? "gif" : "webp");
}

async function previewAssets(name: string, story: string, theme: Theme) {
  try {
    const manifest = JSON.parse(
      await readFile(
        path.join(process.cwd(), "public/previews/manifest.json"),
        "utf8",
      ),
    ) as PreviewManifest;
    return (
      manifest.components[name]?.assets.filter(
        (asset) => asset.story === story && asset.theme === theme,
      ) ?? []
    );
  } catch {
    return [];
  }
}

export async function PreviewImage({
  name,
  displayName,
  story = "Default",
  theme = "dark",
  loading = "lazy",
}: {
  name: string;
  displayName: string;
  story?: string;
  theme?: Theme;
  loading?: "eager" | "lazy";
}) {
  const assets = await previewAssets(name, story, theme);
  const still = assets.find((asset) => assetFormat(asset) === "webp");
  const gif = assets.find((asset) => assetFormat(asset) === "gif");
  const fallback = still ?? gif;
  if (!fallback) {
    return (
      <div className="grid h-full w-full place-items-center bg-muted p-4 text-center text-sm text-muted-foreground">
        Preview unavailable
      </div>
    );
  }
  const image = (
    <img
      src={`/previews/${fallback.file}`}
      alt={displayName}
      width={fallback.width}
      height={fallback.height}
      loading={loading}
      decoding="async"
      className="h-full w-full object-cover object-top"
    />
  );
  if (!gif || !still) return image;
  return (
    <picture>
      <source
        srcSet={`/previews/${gif.file}`}
        type="image/gif"
        media="(prefers-reduced-motion: no-preference)"
      />
      {image}
    </picture>
  );
}
