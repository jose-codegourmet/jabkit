import { sampleImage } from "../assets";
export function ArtImage({
  id,
  alt,
  className,
  priority = false,
  mobile,
}: {
  id: string;
  alt: string;
  className?: string;
  priority?: boolean;
  mobile?: string;
}) {
  const image = sampleImage(id, alt);
  const portrait = mobile ? sampleImage(mobile, alt) : undefined;
  return (
    <picture className={className}>
      {portrait ? (
        <source media="(max-width: 767px)" srcSet={portrait.src} />
      ) : null}
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
