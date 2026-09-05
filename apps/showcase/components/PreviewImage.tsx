import { readFile } from "node:fs/promises";
import path from "node:path";

type Theme = "light" | "dark";
type PreviewAsset = {
  story: string;
  theme: Theme;
  file: string;
  width: number;
  height: number;
};
type PreviewManifest = {
  components: Record<string, { assets: PreviewAsset[] }>;
};

async function previewAsset(name: string, story: string, theme: Theme) {
  try {
    const manifest = JSON.parse(
      await readFile(
        path.join(process.cwd(), "public/previews/manifest.json"),
        "utf8",
      ),
    ) as PreviewManifest;
    return manifest.components[name]?.assets.find(
      (asset) => asset.story === story && asset.theme === theme,
    );
  } catch {
    return undefined;
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
  const asset = await previewAsset(name, story, theme);
  if (!asset) {
    return (
      <div className="grid h-full w-full place-items-center bg-muted p-4 text-center text-sm text-muted-foreground">
        Preview unavailable
      </div>
    );
  }
  return (
    <img
      src={`/previews/${asset.file}`}
      alt={displayName}
      width={asset.width}
      height={asset.height}
      loading={loading}
      decoding="async"
      className="h-full w-full object-cover object-top"
    />
  );
}
