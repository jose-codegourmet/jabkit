import { sampleImage } from "../assets";

export function SupportingImage({ id, alt }: { id: string; alt: string }) {
  const image = sampleImage(id, alt);
  return (
    <figure className="m-0 overflow-hidden bg-muted">
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full object-cover"
      />
    </figure>
  );
}
