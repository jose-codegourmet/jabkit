import type { Metadata } from "next";
import { LocalStudio } from "../_components/LocalStudio";
import { demoNote, resolveStudioSeed } from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";

export const metadata: Metadata = {
  title: "Studio - Pocket Keeps",
  description:
    "Browser-local ImageCropper. Crop, zoom, download, or replace with a file from this device.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function StudioPage({
  searchParams,
}: {
  searchParams: Promise<{ asset?: string; aspect?: string }>;
}) {
  const params = await searchParams;
  const seed = resolveStudioSeed({
    asset: firstParam(params.asset),
    aspect: firstParam(params.aspect),
  });

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">Studio</h1>
        <p className="jk-lead mt-4">
          {seed.asset.title} in{" "}
          {seed.aspect === "free" ? "a free frame" : seed.aspect}. Crop, zoom,
          and download here. Upload replaces the keep for this visit only.
        </p>
        <p className={`jk-caption ${styles.meta} mt-4`}>{demoNote}</p>
        {seed.ignoredUnknownAsset ? (
          <p className={`jk-caption ${styles.meta} mt-2`} role="status">
            That asset is not in the allowlist. Pier at low tide is shown
            instead. The unknown value was not used as a heading.
          </p>
        ) : null}
        {seed.ignoredUnknownAspect ? (
          <p className={`jk-caption ${styles.meta} mt-2`} role="status">
            That aspect is not 1:1, 4:3, 16:9, or free. 4:3 is shown instead.
          </p>
        ) : null}
        <p className="jk-body mt-6">{seed.asset.cropNote}</p>
        <div className="mt-8">
          <LocalStudio aspect={seed.aspect} asset={seed.asset} />
        </div>
        <p className={`jk-caption ${styles.meta} mt-6`}>
          Need another keep?{" "}
          <a href={`${sampleRoot}/collections`}>Browse collections</a>
          {" or "}
          <a href={`${sampleRoot}/how-it-works`}>read the control guide</a>.
        </p>
      </div>
    </main>
  );
}
