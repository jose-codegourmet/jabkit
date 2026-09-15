"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SterlingGateKineticNavigation } from "@/marketing/sterling-gate-kinetic-navigation";
import { brand, navItems } from "../content";
import n from "../navigation.module.css";
import { useMotionPreference } from "./useMotionPreference";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const reduce = useMotionPreference();
  // This full-screen composition keeps the shared component unchanged while
  // making the page behind its local menu inert and containing keyboard focus.
  useEffect(() => {
    if (!open || !root.current) return;
    const panel = root.current.querySelector<HTMLElement>('[role="dialog"]');
    if (!panel) return;
    const siblings = Array.from(
      root.current.parentElement?.children ?? [],
    ).filter((el) => el !== root.current) as HTMLElement[];
    const previous = siblings.map((el) => el.inert);
    siblings.forEach((el) => {
      el.inert = true;
    });
    const contain = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const links = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href],button:not([disabled])"),
      ).filter((el) => el.getClientRects().length);
      const first = links[0],
        last = links.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    panel.addEventListener("keydown", contain);
    return () => {
      siblings.forEach((el, i) => {
        el.inert = previous[i];
      });
      panel.removeEventListener("keydown", contain);
    };
  }, [open]);
  return (
    <div ref={root} className={n.shell}>
      <SterlingGateKineticNavigation
        className={n.kinetic}
        brand={brand.name}
        brandHref="/"
        menuLabel="Make some noise"
        closeLabel="Close menu"
        links={navItems.map((item, i) => ({
          ...item,
          index: `0${i + 1}`,
          kicker: [
            "Proof, out in the world",
            "Find your starting point",
            "Meet the people",
            "Tell us what’s next",
          ][i],
        }))}
        cta={{ label: "Start a brief", href: "/start" }}
        footnote="Independent minds. Unmistakable brands."
        open={open}
        onOpenChange={setOpen}
      >
        <span />
      </SterlingGateKineticNavigation>
      <motion.a
        href="/work"
        className={n.workLink}
        whileHover={reduce ? {} : { rotate: -3, y: -2 }}
        whileTap={reduce ? {} : { scale: 0.96 }}
      >
        Work worth a look <span aria-hidden="true">↗</span>
      </motion.a>
    </div>
  );
}
