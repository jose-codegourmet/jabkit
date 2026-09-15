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
          y: 65,
          duration: 0.65,
          ease: "power4.out",
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
            { scale: 1.08, yPercent: -2 },
            {
              scale: 1.05,
              yPercent: 2,
              ease: "none",
              scrollTrigger: {
                trigger: node,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.3,
              },
            },
          );
        });
        select("[data-motion-poster]").forEach(
          (node: HTMLElement, index: number) => {
            gsap.from(node, {
              rotation: index % 2 ? 5 : -5,
              y: 85,
              scale: 0.94,
              duration: 0.75,
              ease: "back.out(1.4)",
              clearProps: "transform",
              scrollTrigger: { trigger: node, start: "top 92%", once: true },
            });
          },
        );
        const wall = element.querySelector("[data-motion-wall]");
        if (wall)
          gsap.fromTo(
            wall,
            { clipPath: "inset(0 12% 0 12%)" },
            {
              clipPath: "inset(0 0% 0 0%)",
              ease: "none",
              scrollTrigger: {
                trigger: wall,
                start: "top 85%",
                end: "top 30%",
                scrub: 0.4,
              },
            },
          );
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
      <div ref={root} data-motion-canvas="neo-brutalism">
        {children}
      </div>
    </MotionConfig>
  );
}
