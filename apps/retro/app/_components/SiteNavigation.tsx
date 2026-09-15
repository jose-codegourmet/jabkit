"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { TubelightNavbar } from "@/marketing/tubelight-navbar";
import { brand, navItems } from "../content";
import n from "../navigation.module.css";
import { useMotionPreference } from "./useMotionPreference";

const icons = ["camera", "book-open", "sparkles", "file-text"] as const;
const items = navItems.map((item, i) => ({
  name: item.label,
  href: item.href,
  icon: icons[i],
}));
export function SiteHeader() {
  const path = usePathname();
  const reduce = useMotionPreference();
  const active =
    items.find((item) => path === item.href || path.startsWith(`${item.href}/`))
      ?.name ?? "";
  return (
    <div className={n.shell}>
      <header className={n.header}>
        <a href="/" className={n.logo}>
          <img
            src="/assets/design-systems/retro/ret-logo-wordmark.webp"
            alt={brand.name}
            width={1200}
            height={205}
          />
        </a>
        <p>A little home for your pictures</p>
        <motion.a
          href="/studio"
          className={n.studio}
          whileHover={reduce ? {} : { rotate: -3, y: -3 }}
          whileTap={reduce ? {} : { rotate: 0, y: 1 }}
        >
          Make a keep <span aria-hidden="true">↗</span>
        </motion.a>
      </header>
      <motion.div
        className={n.dock}
        initial={false}
        whileHover={reduce ? {} : { y: -3 }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
      >
        <TubelightNavbar className={n.tabs} items={items} activeName={active} />
      </motion.div>
    </div>
  );
}
