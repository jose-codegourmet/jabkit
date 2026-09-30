import Image from "next/image";
import { cn } from "@/lib/cn";
import { assets, sampleImage } from "../assets";
import styles from "../style.module.css";

export type BenImageProps = {
  id: string;
  alt?: string;
  /** Decorative images get alt="". */
  decorative?: boolean;
  /** Art-directed image for viewports below 768px (e.g. ben-cta-mobile). */
  mobileId?: string;
  /**
   * "intrinsic": width 100%, natural height.
   * "cover": fills a positioned parent (use inside a Tile with flush or an imageFrame),
   *          cropped around the asset's focal point.
   */
  fit?: "intrinsic" | "cover";
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function BenImage({
  id,
  alt = "",
  decorative = false,
  mobileId,
  fit = "intrinsic",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
}: BenImageProps) {
  const resolvedAlt = decorative ? "" : alt;
  const image = sampleImage(id, resolvedAlt);
  const objectPosition = assets[id]?.objectPosition;
  const imageClass = cn(
    fit === "cover" ? styles.imageCover : styles.image,
    className,
  );

  const img = (
    <Image
      alt={resolvedAlt}
      className={imageClass}
      height={image.height}
      priority={priority}
      sizes={sizes}
      src={image.src}
      style={fit === "cover" ? { objectPosition } : undefined}
      width={image.width}
    />
  );

  if (!mobileId) return img;

  const mobile = sampleImage(mobileId, "");
  return (
    <picture className={styles.picture}>
      <source
        height={mobile.height}
        media="(max-width: 767px)"
        srcSet={mobile.src}
        width={mobile.width}
      />
      {img}
    </picture>
  );
}
