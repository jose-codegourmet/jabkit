"use client";

import { sampleImage } from "../assets";
import { defaultStudioAspect, getAsset } from "../content";
import styles from "../style.module.css";
import { BrowserCropper } from "./BrowserCropper";

export function StudioPreview() {
  const asset = getAsset("postcard-pier");
  if (!asset) return null;
  const image = sampleImage(asset.imageId, asset.alt);

  return (
    <div className={styles.studioFrame}>
      <BrowserCropper
        alt={asset.alt}
        aspect={defaultStudioAspect}
        downloadFileName="postcard-pier-4x3.png"
        showReset
        src={image.src}
      />
    </div>
  );
}
