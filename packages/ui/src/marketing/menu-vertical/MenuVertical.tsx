"use client";

import { ArrowRightIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import type { MenuVerticalItem, MenuVerticalProps } from "./MenuVertical.types";

const defaultItems: MenuVerticalItem[] = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function MenuVertical({
  className,
  items = defaultItems,
  skew = 0,
  ...props
}: MenuVerticalProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "relative w-full bg-background px-6 py-16 text-foreground sm:px-10",
        className,
      )}
      data-slot="menu-vertical"
      {...props}
    >
      <style href="jk-menu-vertical" precedence="default">{`
        .jk-mv-link .jk-mv-arrow {
          transform: translate3d(-110%, 0, 0);
          opacity: 0;
        }
        .jk-mv-link .jk-mv-label {
          transform: translate3d(-2.5rem, 0, 0);
        }
        .jk-mv-link:is(:hover, :focus-visible) .jk-mv-arrow {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
        .jk-mv-link:is(:hover, :focus-visible) .jk-mv-label {
          transform: translate3d(0, 0, 0) skewX(var(--jk-mv-skew, 0deg));
        }
        @media (prefers-reduced-motion: no-preference) {
          .jk-mv-link .jk-mv-arrow {
            transition: transform 300ms ease-out, opacity 300ms ease-out;
          }
          .jk-mv-link .jk-mv-label {
            transition: transform 300ms ease-out, color 300ms ease-out;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .jk-mv-link .jk-mv-arrow,
          .jk-mv-link .jk-mv-label {
            transform: none;
            transition: none;
          }
          .jk-mv-link:not(:hover):not(:focus-visible) .jk-mv-arrow {
            opacity: 0;
          }
        }
      `}</style>
      <ul className="mx-auto flex w-full max-w-2xl flex-col gap-1">
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <a
              className="jk-mv-link group/item flex items-center gap-3 overflow-hidden py-1 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={item.href}
              style={{ "--jk-mv-skew": `${skew}deg` } as CSSProperties}
            >
              <ArrowRightIcon
                aria-hidden="true"
                className="jk-mv-arrow size-8 shrink-0 text-primary sm:size-9"
              />
              <span className="jk-mv-label text-4xl font-semibold tracking-tight text-foreground group-hover/item:text-primary group-focus-visible/item:text-primary sm:text-5xl">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
