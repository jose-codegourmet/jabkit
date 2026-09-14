"use client";

import { ImageCropper } from "@/atoms/image-cropper";
import { sampleImage } from "../assets";
import { defaultStudioAspect, getAsset } from "../content";
import styles from "../style.module.css";

export function StudioPreview() {
  const asset = getAsset("postcard-pier");
  if (!asset) return null;
  const image = sampleImage(asset.imageId, asset.alt);

  return (
    <div className={styles.studioFrame}>
      <ImageCropper
        alt={asset.alt}
        aspect={defaultStudioAspect}
        downloadFileName="postcard-pier-4x3.png"
        showReset
        src={image.src}
      />
    </div>
  );
}
