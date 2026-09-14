import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { DemoNotice } from "../../../components/samples/DemoNotice";
import { DemoPreviewForm } from "../../../components/samples/DemoPreviewForm";
import {
  filterSampleRecords,
  parseAllowlistedQuery,
  parseFacetFilter,
  resolveSampleSelection,
  SAMPLE_FILTERS,
  sampleHref,
} from "../../../components/samples/query";
import { sampleEmptyCopy } from "../../../components/samples/records";
import { VisitFavorites } from "../../../components/samples/VisitFavorites";
import {
  conventionRecordHref,
  conventionRecords,
  conventionsPath,
  disabledCloudSync,
} from "./content";

export const metadata: Metadata = {
  title: "Sample conventions - JabKit",
  description:
    "Shared content, navigation, and demo-state conventions for JabKit sample sites.",
};

export default async function SampleConventionsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const parsed = parseAllowlistedQuery(await searchParams);
  const filter = parseFacetFilter(parsed.filter);
  const records = filterSampleRecords(conventionRecords, {
    filter,
    q: parsed.q,
  });
  const selection = resolveSampleSelection(conventionRecords, parsed);
  const formContext = selection.record
    ? { title: selection.record.title, kind: selection.record.kind }
    : selection.ignoredUnknown.length
      ? { missing: true as const }
      : undefined;

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="font-mono text-xs tracking-[0.16em] text-primary uppercase">
        SH-06
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Sample conventions
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-8 text-muted-foreground">
        Contract route for typed fixtures, URL filters, and a client-only
        preview form. Not a branded design-system site.
      </p>
      <DemoNotice>
        Fictional records only. No backend, analytics, auth, or payment.
      </DemoNotice>

      <nav
        aria-label="Convention sections"
        className="mt-8 flex flex-wrap gap-4 text-sm"
      >
        <a href="#records" className="min-h-11 inline-flex items-center">
          Records
        </a>
        <a href="#preview" className="min-h-11 inline-flex items-center">
          Preview form
        </a>
        <Link href="/samples" className="min-h-11 inline-flex items-center">
          All samples
        </Link>
        <Link href="/components" className="min-h-11 inline-flex items-center">
          Components
        </Link>
      </nav>

      <section id="records" className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Records</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Filter and search are query parameters. Invalid filters become All.
          Unknown select IDs are ignored.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SAMPLE_FILTERS.map((value) => (
            <Button
              key={value}
              size="sm"
              variant={filter === value ? "primary" : "secondary"}
              asChild
            >
              <Link
                href={sampleHref(conventionsPath, {
                  filter: value,
                  q: parsed.q,
                })}
                aria-current={filter === value ? "page" : undefined}
              >
                {value === "all" ? "All" : value}
              </Link>
            </Button>
          ))}
        </div>
        <form className="mt-4 grid max-w-md gap-2" action={conventionsPath}>
          {filter !== "all" ? (
            <input type="hidden" name="filter" value={filter} />
          ) : null}
          <Label htmlFor="convention-q">Search titles</Label>
          <Input id="convention-q" name="q" defaultValue={parsed.q ?? ""} />
          <Button type="submit" size="sm" variant="secondary">
            Apply search
          </Button>
        </form>
        <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
          {records.length} {records.length === 1 ? "record" : "records"}
        </p>
        {records.length === 0 ? (
          <div className="mt-4 grid gap-3">
            <p>{sampleEmptyCopy.noMatches}</p>
            <Button asChild variant="secondary" size="sm">
              <Link href={conventionsPath}>Reset filters</Link>
            </Button>
          </div>
        ) : (
          <ul className="mt-4 grid gap-3">
            {records.map((record) => (
              <li
                key={record.id}
                className="rounded-[--radius] border border-border p-4"
              >
                <p className="font-mono text-[11px] text-primary uppercase">
                  {record.kind}
                </p>
                <h3 className="mt-1 text-lg font-semibold">
                  <Link
                    href={conventionRecordHref(record.slug)}
                    className="hover:text-primary"
                  >
                    {record.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {record.summary}
                </p>
                <Link
                  href={sampleHref(conventionsPath, {
                    filter,
                    q: parsed.q,
                    [record.kind]: record.id,
                  })}
                  className="mt-2 inline-flex min-h-11 items-center text-sm font-medium"
                >
                  Preselect for preview
                </Link>
              </li>
            ))}
          </ul>
        )}
        {selection.ignoredUnknown.length > 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            {sampleEmptyCopy.unknownSelection}
          </p>
        ) : null}
      </section>

      <section id="kept" className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          Visit favorites
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          In-memory for this visit. Reload clears the set. Nothing is written to
          storage or a server.
        </p>
        <div className="mt-4">
          <VisitFavorites
            records={conventionRecords.map((record) => ({
              id: record.id,
              title: record.title,
            }))}
          />
        </div>
      </section>

      <section id="preview" className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">Preview form</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Native required and email checks, inline errors, focus on the first
          invalid field, retained values on Edit, and a live status message. No
          fake delay.
        </p>
        <div className="mt-6 rounded-[--radius] border border-border p-4 sm:p-6">
          <DemoPreviewForm context={formContext} />
        </div>
        <div className="mt-6">
          <Button type="button" disabled title={disabledCloudSync.reason}>
            {disabledCloudSync.label}
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">
            {disabledCloudSync.reason}
          </p>
        </div>
      </section>
    </main>
  );
}
