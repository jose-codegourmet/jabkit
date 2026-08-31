"use client";

import { useEffect, useRef, useState } from "react";

export function ScaledFrame({
  src,
  title,
  viewportWidth,
  viewportHeight,
  maxScale = 1,
  className = "",
}: {
  src: string;
  title: string;
  viewportWidth: number;
  viewportHeight: number;
  maxScale?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const next = Math.min(maxScale, el.clientWidth / viewportWidth);
      setScale(Number.isFinite(next) && next > 0 ? next : 1);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [viewportWidth, maxScale]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: viewportHeight * scale }}
    >
      <iframe
        title={title}
        aria-hidden="true"
        src={src}
        loading="lazy"
        className="absolute left-0 top-0 border-0"
        style={{
          width: viewportWidth,
          height: viewportHeight,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
