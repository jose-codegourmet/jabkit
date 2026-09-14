import type { Metadata } from "next";
import Link from "next/link";
import {
  isSampleDesignSystemId,
  type SampleDesignSystemId,
  sampleDesignSystemLabels,
  sampleDesignSystems,
} from "../../../components/samples/design-systems";
import { SampleScope } from "../../../components/samples/SampleScope";
import { ScopeControlSet } from "../../../components/samples/ScopeControlSet";
import { ThemeToggle } from "../../../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Scoped token reference - JabKit",
  description:
    "Reference surface for scoped sample-site tokens, typography, and portal inheritance.",
};

export default async function ScopeReferencePage({
  searchParams,
}: {
  searchParams: Promise<{ system?: string }>;
}) {
  const { system: requested } = await searchParams;
  const system: SampleDesignSystemId = isSampleDesignSystemId(requested)
    ? requested
    : "minimal";
  const pressClassName =
    system === "minimal" || system === "luxury"
      ? "active:translate-y-0"
      : undefined;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Scoped token reference. Fictional sample styles, not a live brand.
            </p>
            <ThemeToggle />
          </div>
          <nav
            aria-label="Sample destinations"
            className="flex flex-wrap gap-3 text-sm"
          >
            <Link className="underline underline-offset-4" href="/samples">
              All samples
            </Link>
            <Link className="underline underline-offset-4" href="/samples/saas">
              SaaS sample
            </Link>
            <Link className="underline underline-offset-4" href="/components">
              Catalogue
            </Link>
          </nav>
          <nav
            aria-label="Design system scope"
            className="flex flex-wrap gap-2"
          >
            {sampleDesignSystems.map((id) => (
              <Link
                key={id}
                className={`rounded-[--radius] border px-3 py-1.5 text-sm ${
                  id === system
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card"
                }`}
                href={`/samples/scope-reference?system=${id}`}
              >
                {sampleDesignSystemLabels[id]}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-4 px-5 py-8 sm:px-8 lg:grid-cols-2">
        <SampleScope
          className="rounded-[--radius] border border-border p-[var(--jk-space-lg)]"
          colorMode="light"
          system={system}
        >
          <p className="jk-label text-muted-foreground">
            {sampleDesignSystemLabels[system]} / light
          </p>
          <h1 className="jk-heading mt-[var(--jk-space-sm)]">
            Scoped controls
          </h1>
          <p className="jk-body mt-[var(--jk-space-sm)] text-muted-foreground">
            Button, input, navigation popup, dialog, and tooltip share this
            scope. Portals mount inside the marked tree.
          </p>
          <div className="mt-[var(--jk-space-lg)]">
            <ScopeControlSet pressClassName={pressClassName} />
          </div>
        </SampleScope>

        <SampleScope
          className="dark rounded-[--radius] border border-border p-[var(--jk-space-lg)]"
          colorMode="dark"
          system={system}
        >
          <p className="jk-label text-muted-foreground">
            {sampleDesignSystemLabels[system]} / dark
          </p>
          <h2 className="jk-heading mt-[var(--jk-space-sm)]">
            Matching dark surfaces
          </h2>
          <p className="jk-body mt-[var(--jk-space-sm)] text-muted-foreground">
            Dark values live on the scope, not on the document element, so
            leaving this route restores catalogue tokens.
          </p>
          <div className="mt-[var(--jk-space-lg)]">
            <ScopeControlSet pressClassName={pressClassName} />
          </div>
        </SampleScope>
      </main>
    </div>
  );
}
