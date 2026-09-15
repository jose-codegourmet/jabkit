"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

/** App-owned choreography. Content is visible before JavaScript and after cleanup. */
export function MotionCanvas({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // biome-ignore lint/correctness/useExhaustiveDependencies: Rebuild scoped timelines when Next replaces the route content.
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let cancelled = false;
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const select = gsap.utils.selector(element);
        const headings = select("main h1, [data-motion-title]");
        gsap.from(headings, {
          y: 32,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.09,
          clearProps: "transform",
        });
        select("[data-motion-reveal]").forEach((node: HTMLElement) => {
          gsap.from(node, {
            y: 35,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: node, start: "top 91%", once: true },
          });
        });
        select("[data-motion-image]").forEach((node: HTMLElement) => {
          const img = node.querySelector("img");
          if (!img) return;
          gsap.fromTo(
            img,
            { scale: 1.13, yPercent: -2 },
            {
              scale: 1.05,
              yPercent: 2,
              ease: "none",
              scrollTrigger: {
                trigger: node,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        });
        const hero = element.querySelector("[data-motion-hero]");
        const image = hero?.querySelector("img");
        if (hero && image)
          gsap.fromTo(
            image,
            { scale: 1.12, yPercent: 0 },
            {
              scale: 1.08,
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
        select("[data-motion-room]").forEach((node: HTMLElement) => {
          gsap.from(node, {
            y: 45,
            duration: 1.2,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: { trigger: node, start: "top 90%", once: true },
          });
        });
      },
      element,
    );
    // Font metrics can settle after hydration; refresh without rebuilding timelines.
    void document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    return () => {
      cancelled = true;
      media.revert();
    };
  }, [pathname]);
  return (
    <MotionConfig reducedMotion="user">
      <div ref={root} data-motion-canvas="luxury">
        {children}
      </div>
    </MotionConfig>
  );
}
