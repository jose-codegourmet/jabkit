"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import type {
  Projects11Aspect,
  Projects11Image,
  Projects11Props,
} from "./Projects11.types";

const DEFAULT_LABEL = "Selected projects";

const DEFAULT_IMAGES: Projects11Image[] = [
  {
    src: "/assets/d3f9bde61c9a29e7.webp",
    alt: "Empty office corridor with glass rooms and daylight",
    aspect: "landscape",
    href: "#corridor",
  },
  {
    src: "/assets/462c849dc9a41e59.webp",
    alt: "Sunlit studio desks with plants and open notebooks",
    aspect: "tall",
    href: "#studio",
  },
  {
    src: "/assets/6cc11e462a9aaded.webp",
    alt: "Arc floor lamp lighting a quiet corner",
    aspect: "square",
    href: "#lamp",
  },
  {
    src: "/assets/97c532d558fa4fbc.webp",
    alt: "Concrete structure photographed from the ground",
    aspect: "portrait",
    href: "#concrete",
  },
  {
    src: "/assets/462a1be29787cd8e.webp",
    alt: "Low oak lounge chair on a pale floor",
    aspect: "landscape",
    href: "#lounge",
  },
  {
    src: "/assets/488fa5330da1224c.webp",
    alt: "Sculptural stone side table in a sunlit room",
    aspect: "tall",
    href: "#stone",
  },
  {
    src: "/assets/7cb36691e11ed9af.webp",
    alt: "Linen daybed against a plaster wall",
    aspect: "portrait",
    href: "#daybed",
  },
  {
    src: "/assets/4f6410f5452c0ba5.webp",
    alt: "Hand-thrown ceramic pendant light",
    aspect: "square",
    href: "#pendant",
  },
  {
    src: "/assets/d7eddb427ba6f203.webp",
    alt: "Shipping containers stacked along a lit harbor dock",
    aspect: "tall",
    href: "#harbor",
  },
  {
    src: "/assets/4cc437eeea3384d1.webp",
    alt: "Researcher reviewing data on a laptop in a bright lab",
    aspect: "landscape",
    href: "#lab",
  },
  {
    src: "/assets/dd6c26bc44cd7218.webp",
    alt: "Glass office atrium with warm interior lighting",
    aspect: "portrait",
    href: "#atrium",
  },
  {
    src: "/assets/672651fa6e0f526b.webp",
    alt: "Architectural concrete stairwell with a skylight",
    aspect: "square",
    href: "#stair",
  },
];

const FALLBACK_ASPECT: Projects11Aspect[] = [
  "landscape",
  "tall",
  "square",
  "portrait",
  "landscape",
  "tall",
  "portrait",
  "square",
  "tall",
  "landscape",
  "portrait",
  "square",
];

const ASPECT_CLASS: Record<Projects11Aspect, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  tall: "aspect-[2/3]",
};

function MasonryPhoto({
  image,
  index,
}: {
  image: Projects11Image;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const aspect =
    image.aspect ?? FALLBACK_ASPECT[index % FALLBACK_ASPECT.length];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          node.dataset.inview = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const body = (
    <>
      <img
        src={image.src}
        alt={image.alt}
        className={cn(
          "w-full object-cover transition-[transform,filter] duration-500 ease-out",
          "group-hover:scale-[1.04] group-hover:brightness-110",
          "motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:brightness-100",
          ASPECT_CLASS[aspect],
        )}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 ease-out group-hover:bg-foreground/35 motion-reduce:transition-none motion-reduce:group-hover:bg-foreground/0"
      />
    </>
  );

  const frameClass = cn(
    "group relative block overflow-hidden bg-muted",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  );

  return (
    <div
      ref={ref}
      className="jk-projects11-item mb-4 break-inside-avoid"
      style={{ animationDelay: `${Math.min(index, 11) * 70}ms` }}
    >
      {image.href ? (
        <a href={image.href} className={frameClass}>
          {body}
        </a>
      ) : (
        <div className={frameClass}>{body}</div>
      )}
    </div>
  );
}

export function Projects11({
  className,
  label = DEFAULT_LABEL,
  images = DEFAULT_IMAGES,
  ...props
}: Projects11Props) {
  return (
    <section
      data-slot="projects11"
      aria-label={label}
      className={cn("bg-background text-foreground", className)}
      {...props}
    >
      <style href="jk-projects11" precedence="default">{`
        @keyframes jk-projects11-rise {
          from { opacity: 0; transform: translateY(1.25rem); }
          to { opacity: 1; transform: none; }
        }
        .jk-projects11-item {
          animation: jk-projects11-rise 0.75s ease-out both;
          animation-play-state: paused;
        }
        .jk-projects11-item[data-inview="true"] {
          animation-play-state: running;
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-projects11-item {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <MasonryPhoto key={image.src} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
