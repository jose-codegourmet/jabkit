import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { Separator } from "@/atoms/separator";
import { ChartGroup14 } from "@/dashboard/chart-group14";
import { About8 } from "@/marketing/about8";
import { CaseStudies13 } from "@/marketing/case-studies13";
import { CodeExample14 } from "@/marketing/code-example14";
import { Compare5 } from "@/marketing/compare5";
import { Content2 } from "@/marketing/content2";
import { Cta28 } from "@/marketing/cta28";
import { Faq12 } from "@/marketing/faq12";
import { HeroSection5 } from "@/marketing/hero-section-5";
import {
  board,
  close,
  company,
  compare,
  customers,
  help,
  hero,
  instrument,
  quarryBrand,
  signals,
} from "./content";

export const metadata: Metadata = {
  title: "Quarry - JabKit SaaS sample",
  description:
    "A complete SaaS landing page assembled from JabKit blocks. Quarry is a fictional product-analytics company.",
};

export default function SaasSamplePage() {
  return (
    <div id="top" className="overflow-x-hidden bg-background text-foreground">
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <p className="text-xs leading-5 text-muted-foreground sm:text-sm">
            JabKit sample. Assembled from existing blocks, not a live product.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/samples">All samples</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/components">Components</Link>
            </Button>
          </div>
        </div>
      </div>

      <HeroSection5 {...hero} />

      <Compare5 {...compare} className="border-y border-border bg-card" />

      <CodeExample14 id="instrument" {...instrument} />

      <Content2
        id="signals"
        {...signals}
        className="border-y border-border bg-card"
      />

      <CaseStudies13 id="customers" {...customers} />

      <ChartGroup14
        id="board"
        {...board}
        className="overflow-x-auto border-y border-border bg-muted/40"
      />

      <About8 id="company" {...company} />

      <Faq12 id="help" {...help} className="border-y border-border bg-card" />

      <div id="start">
        <Cta28 {...close} />
      </div>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={quarryBrand.href}
              className="text-sm font-semibold tracking-tight"
            >
              {quarryBrand.name}
            </a>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#instrument"
                className="inline-flex min-h-11 items-center hover:text-foreground"
              >
                Product
              </a>
              <a
                href="#customers"
                className="inline-flex min-h-11 items-center hover:text-foreground"
              >
                Customers
              </a>
              <a
                href="#company"
                className="inline-flex min-h-11 items-center hover:text-foreground"
              >
                Company
              </a>
              <a
                href="#help"
                className="inline-flex min-h-11 items-center hover:text-foreground"
              >
                Help
              </a>
            </nav>
          </div>
          <Separator />
          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Fictional brand for a JabKit developer sample.</p>
            <Link
              href="/samples"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              More JabKit samples
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
