import {
  assetFormat,
  type PreviewTheme,
  previewAssets,
} from "../lib/preview-assets";

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
  theme?: PreviewTheme;
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
