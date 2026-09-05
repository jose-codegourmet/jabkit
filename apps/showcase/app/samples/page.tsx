import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { samples } from "./catalog";

export const metadata: Metadata = {
  title: "Samples - JabKit",
  description:
    "Complete pages assembled from JabKit blocks. Start with the SaaS landing sample.",
};

export default function SamplesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <p className="font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Developer samples
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">
          Pages, not galleries.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Each sample is a complete site composed from registry blocks. Use them
          to see how JabKit reads as a product, then copy the pattern into your
          own tree.
        </p>
        <div className="mt-14 grid gap-3">
          {samples.map((sample) => (
            <Link
              key={sample.slug}
              href={sample.href}
              className="group rounded-[--radius] border border-border bg-card p-6 transition hover:border-primary"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] text-primary uppercase">
                    {sample.status === "ready" ? "Ready" : "Soon"}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {sample.title}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                    {sample.description}
                  </p>
                </div>
                <ArrowRightIcon className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
