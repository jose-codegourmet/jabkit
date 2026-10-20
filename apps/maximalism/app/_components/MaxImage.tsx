import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { assets } from "../assets";
import styles from "../style.module.css";

export type MaxImageRatio = "21:9" | "16:9" | "3:2" | "4:3" | "1:1" | "4:5";

const ratioValue: Record<MaxImageRatio, string> = {
  "21:9": "21 / 9",
  "16:9": "16 / 9",
  "3:2": "3 / 2",
  "4:3": "4 / 3",
  "1:1": "1 / 1",
  "4:5": "4 / 5",
};

export type MaxImageProps = {
  id: string;
  /** Overrides the provenance alt. Ignored when `decorative`. */
  alt?: string;
  decorative?: boolean;
  /** Art-directed portrait source used below 768px. */
  mobileId?: string;
  /** Crop to a fixed frame. Without it the image keeps its own ratio. */
  ratio?: MaxImageRatio;
  mobileRatio?: MaxImageRatio;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * next/image wrapper that reads every image from app/assets.ts by ID.
 * A missing asset renders a halftone placeholder frame instead of breaking the page.
 */
export function MaxImage({
  id,
  alt,
  decorative = false,
  mobileId,
  ratio,
  mobileRatio,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 767px) 100vw, 50vw",
}: MaxImageProps) {
  const asset = assets[id];
  const mobile = mobileId ? assets[mobileId] : undefined;
  const resolvedAlt = decorative ? "" : (alt ?? asset?.alt ?? "");
  const desktopRatio = ratio ? ratioValue[ratio] : undefined;
  const mobileRatioValue = mobileRatio ? ratioValue[mobileRatio] : desktopRatio;
  const frameStyle = {
    "--max-ratio": desktopRatio,
    "--max-ratio-mobile": mobileRatioValue,
  } as CSSProperties;

  if (!asset) {
    const missingStyle = {
      "--max-ratio": desktopRatio ?? "4 / 3",
      "--max-ratio-mobile": mobileRatioValue ?? "4 / 3",
    } as CSSProperties;
    const missingClass = cn(styles.imageFrame, styles.imageMissing, className);
    return decorative || !resolvedAlt ? (
      <div
        aria-hidden="true"
        className={missingClass}
        data-image-id={id}
        style={missingStyle}
      />
    ) : (
      <div
        aria-label={resolvedAlt}
        className={missingClass}
        data-image-id={id}
        role="img"
        style={missingStyle}
      />
    );
  }

  const img = ratio ? (
    <Image
      alt={resolvedAlt}
      className={cn(styles.imageFill, imageClassName)}
      fill
      priority={priority}
      sizes={sizes}
      src={asset.src}
      style={{ objectPosition: asset.objectPosition }}
    />
  ) : (
    <Image
      alt={resolvedAlt}
      className={cn(styles.imageNatural, imageClassName)}
      height={asset.height}
      priority={priority}
      sizes={sizes}
      src={asset.src}
      width={asset.width}
    />
  );

  return (
    <div
      className={cn(styles.imageFrame, ratio && styles.imageRatio, className)}
      data-image-id={id}
      style={frameStyle}
    >
      {mobile ? (
        <picture>
          <source
            height={mobile.height}
            media="(max-width: 767px)"
            srcSet={mobile.src}
            width={mobile.width}
          />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  );
}
