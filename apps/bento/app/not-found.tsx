import type { Metadata, Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { BenImage } from "./_components/BenImage";
import { BentoGrid, Tile } from "./_components/Bento";
import shared from "./style.module.css";

/*
 * Root 404. It renders inside the root layout's MarketingFrame, which already supplies
 * the header, <main id="top"> and footer, so this file renders only the page content.
 * Copy lives here because the ticket owns only this one file at the app root; layout
 * reuses the shared empty-state classes from style.module.css.
 */
const notFoundCopy = {
  seoTitle: "Page not found — DAYMARK",
  title: "This page isn't on today's schedule.",
  body: "The link may be old or mistyped.",
  primary: { label: "Back to home", href: "/" as Route },
  secondary: { label: "See a sample dashboard", href: "/demo" as Route },
  imageId: "ben-empty-day",
} as const;

export const metadata: Metadata = {
  title: { absolute: notFoundCopy.seoTitle },
};

export default function NotFound() {
  return (
    <div className={cn(shared.container, shared.section)}>
      <BentoGrid style={{ maxWidth: "42rem", marginInline: "auto" }}>
        <Tile
          as="section"
          labelledBy="not-found-heading"
          span={12}
          surfaceClassName={cn(shared.empty, shared.emptyCentered)}
        >
          <BenImage
            className={shared.emptyImage}
            decorative
            id={notFoundCopy.imageId}
            priority
            sizes="160px"
          />
          <h1 className="jk-heading" id="not-found-heading">
            {notFoundCopy.title}
          </h1>
          <p className="jk-lead">{notFoundCopy.body}</p>
          <div className={shared.actions}>
            <Button asChild>
              <Link href={notFoundCopy.primary.href}>
                {notFoundCopy.primary.label}
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={notFoundCopy.secondary.href}>
                {notFoundCopy.secondary.label}
              </Link>
            </Button>
          </div>
        </Tile>
      </BentoGrid>
    </div>
  );
}
