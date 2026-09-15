"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import { MenuVertical } from "@/marketing/menu-vertical";
import { brand, navItems } from "../content";
import n from "../navigation.module.css";
import { useMotionPreference } from "./useMotionPreference";

const photos = ["min-p01-a", "min-process-model", "min-materials", "min-cta"];
export function SiteHeader() {
  const [active, setActive] = useState(0);
  const reduce = useMotionPreference();
  return (
    <header className={n.header}>
      <a href="/" className={n.logo}>
        <img
          src="/assets/design-systems/minimal/min-logo-wordmark.webp"
          alt={brand.name}
          width={1200}
          height={167}
        />
      </a>
      <div className={n.right}>
        <a href="/work" className={n.quick}>
          Selected work <span>06</span>
        </a>
        <Dialog>
          <DialogTrigger className={n.toggle}>
            Index <span aria-hidden="true">＋</span>
          </DialogTrigger>
          <DialogContent
            className={`${n.panel} top-0 left-0 translate-x-0 translate-y-0`}
            showCloseButton={false}
          >
            <div className={n.panelTop}>
              <DialogTitle>West Room Studio</DialogTitle>
              <DialogClose className={n.toggle} aria-label="Close menu">
                Close <span aria-hidden="true">−</span>
              </DialogClose>
            </div>
            <DialogDescription className={n.description}>
              Architecture, interiors, and the spaces in between.
            </DialogDescription>
            <motion.div
              className={n.panelGrid}
              initial={reduce ? false : { y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: reduce ? 0 : 0.5 }}
            >
              <MenuVertical
                items={[...navItems]}
                className={n.menu}
                onPointerOver={(event) => {
                  const a = (event.target as Element).closest("a");
                  const i = navItems.findIndex(
                    (item) => item.href === a?.getAttribute("href"),
                  );
                  if (i >= 0) setActive(i);
                }}
                onFocus={(event) => {
                  const a = (event.target as Element).closest("a");
                  const i = navItems.findIndex(
                    (item) => item.href === a?.getAttribute("href"),
                  );
                  if (i >= 0) setActive(i);
                }}
              />
              <div className={n.preview}>
                {photos.map((file, i) => (
                  <motion.img
                    key={file}
                    src={`/assets/design-systems/minimal/${file}.webp`}
                    alt=""
                    width={800}
                    height={1000}
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      scale: active === i ? 1 : 1.035,
                    }}
                    transition={{ duration: reduce ? 0 : 0.45 }}
                  />
                ))}
                <p>{navItems[active]?.label}</p>
              </div>
            </motion.div>
            <div className={n.panelBottom}>
              Considered spaces. Lasting possibilities.
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
