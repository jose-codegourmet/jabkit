import Image from "next/image";
import { sampleImage } from "../_data/assets";
import styles from "../style.module.css";

export type ClayImageProps = {
  id: string;
  alt: string;
  mobileId?: string;
  decorative?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fluid?: boolean;
};

export function ClayImage({
  id,
  alt,
  mobileId,
  decorative = false,
  className,
  priority = false,
  sizes,
  fluid = false,
}: ClayImageProps) {
  const image = sampleImage(id, decorative ? "" : alt);
  const mobile = mobileId ? sampleImage(mobileId, "") : null;
  const resolvedAlt = decorative ? "" : alt;

  return (
    <picture className={styles.picture}>
      {mobile ? (
        <source
          height={mobile.height}
          media="(max-width: 767px)"
          srcSet={mobile.src}
          width={mobile.width}
        />
      ) : null}
      <Image
        alt={resolvedAlt}
        className={className ?? styles.image}
        height={image.height}
        priority={priority}
        sizes={sizes}
        src={image.src}
        style={fluid ? { width: "100%", height: "auto" } : undefined}
        width={image.width}
      />
    </picture>
  );
}
