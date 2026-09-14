import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { isReadySample, samples } from "./catalog";

export const metadata: Metadata = {
  title: "Samples - JabKit",
  description:
    "Complete pages assembled from JabKit blocks. Start with Quarry, West Room Studio, Good Noise, Common Hours, or Stillwater House. Further design-system sites become ready independently.",
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
          own tree. Pending entries are listed but not linked until their root
          route is released.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          Shared fixture, filter, and demo-form conventions live on a contract
          route, not in this catalogue.{" "}
          <Link
            href="/samples/conventions"
            className="font-medium text-foreground"
          >
            Sample conventions
          </Link>
        </p>
        <div className="mt-14 grid gap-3">
          {samples.map((sample) => {
            const body = (
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] text-primary uppercase">
                    {sample.designSystem}
                    {" · "}
                    {sample.status === "ready" ? "Ready" : "Soon"}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {sample.brand}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">
                    {sample.description}
                  </p>
                </div>
                {isReadySample(sample) ? (
                  <ArrowRightIcon className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                ) : null}
              </div>
            );

            if (isReadySample(sample)) {
              return (
                <Link
                  key={sample.slug}
                  href={sample.href}
                  className="group rounded-[--radius] border border-border bg-card p-6 transition hover:border-primary"
                >
                  {body}
                </Link>
              );
            }

            return (
              <article
                key={sample.slug}
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
