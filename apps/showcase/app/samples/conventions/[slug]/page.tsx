import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/atoms/button";
import { DemoNotice } from "../../../components/samples/DemoNotice";
import { sampleHref } from "../../../components/samples/query";
import { findRecordBySlug } from "../../../components/samples/records";
import { conventionRecords, conventionsPath } from "./content";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return conventionRecords.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = findRecordBySlug(conventionRecords, slug);
  if (!record) return { title: "Unknown record - JabKit" };
  return {
    title: `${record.title} - sample conventions`,
    description: record.summary,
  };
}

export default async function ConventionRecordPage({ params }: PageProps) {
  const { slug } = await params;
  const record = findRecordBySlug(conventionRecords, slug);
  if (!record) notFound();

  const inquireHref = sampleHref(conventionsPath, {
    [record.kind]: record.id,
  });

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="font-mono text-xs tracking-[0.16em] text-primary uppercase">
        {record.kind}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        {record.title}
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-8 text-muted-foreground">
        {record.summary}
      </p>
      <DemoNotice>
        Canonical fixture record. Summary and detail share this object. No
        remote image is attached until a site ticket vendors assets.
      </DemoNotice>
      <div className="mt-8 flex flex-wrap gap-2">
        <Button asChild>
          <Link href={inquireHref}>Preview with this record</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={conventionsPath}>Back to the list</Link>
        </Button>
      </div>
    </main>
  );
}
