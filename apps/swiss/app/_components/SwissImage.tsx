import Image from "next/image";
import type { ReactNode } from "react";
import { type SwissImageId, sampleImage } from "../_data/assets";
import styles from "../style.module.css";

export type SwissImageRatio = "21:9" | "16:9" | "4:5" | "3:2" | "1:1";

const ratioClass: Record<SwissImageRatio, string> = {
  "21:9": styles.ratio219,
  "16:9": styles.ratio169,
  "4:5": styles.ratio45,
  "3:2": styles.ratio32,
  "1:1": styles.ratio11,
};

export function SwissImage({
  id,
  alt,
  ratio,
  caption,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 767px) 100vw, 60vw",
}: {
  id: SwissImageId;
  alt?: string;
  ratio?: SwissImageRatio;
  caption?: ReactNode;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const image = sampleImage(id, alt);
  const inferredRatio =
    ratio ??
    (image.width >= image.height * 2
      ? "21:9"
      : image.width > image.height
        ? "16:9"
        : "4:5");
  const body = (
    <div className={`${styles.imageFrame} ${ratioClass[inferredRatio]}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
        data-swiss-logo={id.startsWith("swi-logo") ? "true" : undefined}
      />
    </div>
  );
  if (caption) {
    return (
      <figure className={`${styles.figure} ${className}`}>
        {body}
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>
    );
  }
  return <div className={`${styles.imageOnly} ${className}`}>{body}</div>;
}
