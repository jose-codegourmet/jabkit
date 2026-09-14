import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { DemoBar } from "../../../components/samples/DemoBar";

export const metadata: Metadata = {
  title: "Draft composition - JabKit samples",
  description:
    "Unpublished local draft used to verify sample demo controls. Not a catalogue entry.",
  robots: { index: false, follow: false },
};

export default function DraftSamplePage() {
  return (
    <div className="bg-background text-foreground">
      <DemoBar designSystem="Draft" brand="Local composition" />
      <main
        id="top"
        className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-12 sm:px-6"
      >
        <p className="font-mono text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Unpublished
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Temporary draft composition
        </h1>
        <p className="max-w-2xl leading-7 text-muted-foreground">
          This route checks shared demo controls beside the SaaS sample. It is
          not a design-system website and is omitted from the sample catalogue.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/samples">Back to samples</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/samples/saas">Open SaaS sample</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
