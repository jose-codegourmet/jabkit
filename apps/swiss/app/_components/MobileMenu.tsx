"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/atoms/dialog";
import { festivalDatesPlaceholder, mobileNav } from "../_data/site";
import navigation from "../navigation.module.css";
import { FrameLogo } from "./FrameLogo";

export function MobileMenu() {
  const pathname = usePathname();
  return (
    <Dialog>
      <DialogTrigger className={navigation.menuTrigger}>Menu</DialogTrigger>
      <DialogContent className={navigation.menuPanel} showCloseButton={false}>
        <div className={navigation.menuTop}>
          <FrameLogo format="symbol" className={navigation.menuLogo} />
          <DialogTitle className={navigation.menuTitle}>Menu</DialogTitle>
          <DialogClose className={navigation.closeButton}>Close</DialogClose>
        </div>
        <DialogDescription className="sr-only">
          FRAME/01 festival navigation
        </DialogDescription>
        <nav aria-label="Mobile" className={navigation.menuLinks}>
          {mobileNav.map((item) => {
            const [index, ...label] = item.label.split(" ");
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <DialogClose
                key={item.href}
                render={
                  <Link
                    href={item.href as Route}
                    className={navigation.menuLink}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className={navigation.menuLinkIndex}>{index}</span>
                    <span>{label.join(" ")}</span>
                    <span
                      className={navigation.menuLinkArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>
                }
              />
            );
          })}
        </nav>
        <p className={navigation.menuMeta}>{festivalDatesPlaceholder}</p>
      </DialogContent>
    </Dialog>
  );
}
