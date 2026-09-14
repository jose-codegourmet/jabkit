import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { designSystems, isReadyDesignSystem } from "./catalog";

export const metadata: Metadata = {
  title: "Design systems - JabKit",
  description:
    "Five website style directions, each as a complete fictional site: Minimal, Neo-brutalism, Editorial, Luxury, and Retro.",
};

export default function DesignSystemsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <p className="font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Website languages
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">
          Design systems
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Each direction is a full fictional website with its own tokens, type,
          and routes. Product compositions assembled from registry blocks live
          on{" "}
          <Link href="/samples" className="font-medium text-foreground">
            Samples
          </Link>
          .
        </p>
        <div className="mt-14 grid gap-3">
          {designSystems.map((entry) => {
            const body = (
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] text-primary uppercase">
                    {entry.designSystem}
                    {" · "}
                    {entry.status === "ready" ? "Ready" : "Soon"}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {entry.brand}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
                {isReadyDesignSystem(entry) ? (
                  <ArrowRightIcon className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                ) : null}
              </div>
            );

            if (isReadyDesignSystem(entry)) {
              return (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="group rounded-[--radius] border border-border bg-card p-6 transition hover:border-primary"
                >
                  {body}
                </Link>
              );
            }

            return (
              <article
                key={entry.slug}
                className="rounded-[--radius] border border-border bg-card p-6"
              >
                {body}
              </article>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
