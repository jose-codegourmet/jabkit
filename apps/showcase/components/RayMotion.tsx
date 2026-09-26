"use client";

import { useEffect } from "react";

const BASE_SPEED = 4; // degrees per second
const BOOST_CAP = 14; // × 12 → up to ~170°/s extra while scrolling
const BOOST_KEEP_PER_SECOND = 0.04; // ~96% of the boost decays each second

/**
 * Advances `--ray` on every visible `[data-vd-rays]` layer. One rAF loop for
 * the whole page; scroll velocity adds a decaying boost. Does nothing under
 * `prefers-reduced-motion: reduce`.
 */
export function RayMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const visible = new Set<HTMLElement>();
    const observed = new WeakSet<Element>();
    const intersection = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) visible.add(target);
        else visible.delete(target);
      }
    });
    const scan = () => {
      for (const element of document.querySelectorAll("[data-vd-rays]")) {
        if (observed.has(element)) continue;
        observed.add(element);
        intersection.observe(element);
      }
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    let angle = 0;
    let boost = 0;
    let lastY = window.scrollY;
    let last = performance.now();
    let frame = 0;

    const onScroll = () => {
      const y = window.scrollY;
      boost = Math.min(boost + Math.abs(y - lastY) * 0.06, BOOST_CAP);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = (now: number) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;
      angle = (angle + (BASE_SPEED + boost * 12) * dt) % 360;
      boost *= BOOST_KEEP_PER_SECOND ** dt;
      const value = `${angle.toFixed(2)}deg`;
      for (const element of visible) {
        if (element.isConnected) element.style.setProperty("--ray", value);
        else visible.delete(element);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      mutations.disconnect();
      intersection.disconnect();
    };
  }, []);
  return null;
}
