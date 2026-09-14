"use client";

import { useCallback, useMemo, useState } from "react";
import { Badge } from "@/atoms/badge";
import type { ImageCropperArea } from "@/atoms/image-cropper";
import { sampleImage } from "../assets";
import { cropFormatLabels, toCropperAspect } from "../content";
import styles from "../style.module.css";
import type { CropAspect, KeepAsset } from "../types";
import { BrowserCropper } from "./BrowserCropper";

export function LocalStudio({
  asset,
  aspect,
}: {
  asset: KeepAsset;
  aspect: CropAspect;
}) {
  const image = sampleImage(asset.imageId, asset.alt);
  const [crop, setCrop] = useState<ImageCropperArea | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const handleCropChange = useCallback((next: ImageCropperArea) => {
    setCrop((previous) =>
      previous &&
      previous.x === next.x &&
      previous.y === next.y &&
      previous.width === next.width &&
      previous.height === next.height
        ? previous
        : next,
    );
  }, []);
  const downloadName = useMemo(
    () => `${asset.id}-${aspect.replace(":", "x")}.png`,
    [asset.id, aspect],
  );

  return (
    <div className={styles.studioFrame}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge>{cropFormatLabels[aspect]}</Badge>
        <p className={`jk-caption ${styles.meta}`}>
          Source: {fileName ?? `${asset.title} (built-in keep)`}. Crop and
          download stay in this browser.
        </p>
      </div>
      <BrowserCropper
        key={`${asset.id}-${aspect}-${image.src}`}
        alt={asset.alt}
        aspect={toCropperAspect(aspect)}
        downloadFileName={downloadName}
        resetLabel="Reset to sample"
        showReset
        src={image.src}
        onCropChange={handleCropChange}
        onFileChange={(file) => {
          setFileName(file?.name ?? null);
        }}
      />
      {crop ? (
        <p className={`jk-caption ${styles.meta} mt-4`} aria-live="polite">
          Crop window {Math.round(crop.width)} × {Math.round(crop.height)} from
          {` ${Math.round(crop.x)}, ${Math.round(crop.y)}`}. Download uses these
          pixels, without page texture.
        </p>
      ) : null}
    </div>
  );
}
