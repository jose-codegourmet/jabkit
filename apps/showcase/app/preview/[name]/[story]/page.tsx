import { notFound } from "next/navigation";
import { previewManifest } from "../../../../lib/preview-manifest.generated";
import { registryEntry } from "../../../../lib/registry";
import "../../../globals.css";

export default async function Preview({
  params,
  searchParams,
}: {
  params: Promise<{ name: string; story: string }>;
  searchParams: Promise<{ theme?: string }>;
}) {
  const { name, story } = await params;
  const { theme } = await searchParams;

  const load = previewManifest[name];
  if (!load) notFound();
  const previews = (await load()).default;
  const render = previews[story] ?? previews.Default;
  if (!render) notFound();

  const entry = await registryEntry(name);
  const fit = entry?.preview?.layout === "fit";
  const isDark = theme === "dark" || story === "ThemeComparison";

  return (
    <main
      data-preview-stories={Object.keys(previews).join(",")}
      data-preview-ready=""
      className={`${isDark ? "dark" : ""} min-h-dvh bg-background text-foreground ${fit ? "" : "grid place-items-center overflow-hidden p-6"}`}
    >
      {render()}
    </main>
  );
}
