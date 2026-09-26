import type { Metadata, Route } from "next";
import Link from "next/link";
import { PreviewImage } from "../../components/PreviewImage";
import { SiteShell } from "../../components/SiteShell";
import { isReadySample, samples } from "./catalog";

export const metadata: Metadata = {
  title: "Samples - JabKit",
  description:
    "Complete product pages assembled from JabKit blocks. Start with Quarry, then copy the composition into your own tree.",
};

export default function SamplesPage() {
  const ready = samples.filter(isReadySample);
  const pending = samples.filter((sample) => !isReadySample(sample));

  return (
    <SiteShell>
      <main className="mx-auto max-w-[1280px] px-5 py-14 tab:px-8 tab:py-16">
        <p className="vd-kicker mb-4">Samples</p>
        <h1 className="vd-h1 max-w-[20ch] desk:text-5xl">
          Full product pages, assembled from blocks.
        </h1>
        <p className="mt-4 max-w-[40rem] text-[17px] leading-7 text-muted-foreground">
          Each sample composes real registry components with its own copy. Open
          one to see how the pieces fit.
        </p>

        {ready.map((sample) => {
          const [lead] = sample.components;
          return (
            <Link
              key={sample.slug}
              href={sample.href}
              className="vd-card group mt-10 grid overflow-hidden transition-shadow hover:shadow-[6px_6px_0_var(--vd-tomato)] desk:grid-cols-[1.35fr_1fr]"
            >
              <figure className="relative border-b-2 border-ink desk:border-r-2 desk:border-b-0">
                <div className="aspect-[16/10] h-full max-h-[420px] w-full overflow-hidden desk:aspect-auto">
                  {lead ? (
                    <PreviewImage
                      name={lead}
                      displayName={`${sample.brand} opening block`}
                    />
                  ) : null}
                </div>
                {lead ? (
                  <figcaption className="absolute bottom-3 left-3 rounded-full border-2 border-ink bg-card px-3 py-1 font-mono text-[11px]">
                    Opens with {lead}
                  </figcaption>
                ) : null}
              </figure>
              <div className="flex flex-col gap-3.5 p-6 tab:p-10">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full border-2 border-ink bg-success px-2.5 py-0.5 font-mono text-[11px] text-cream uppercase">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-cream"
                  />
                  Ready
                </span>
                <h2 className="vd-h2">{sample.brand}</h2>
                <p className="font-mono text-xs text-muted-foreground">
                  {sample.designSystem} landing · {sample.href}
                </p>
                <p className="leading-[26px] text-muted-foreground">
                  {sample.description}
                </p>
                <ul
                  aria-label="Composed from"
                  className="flex flex-wrap gap-1.5"
                >
                  {sample.components.map((component) => (
                    <li
                      key={component}
                      className="rounded-md border border-ink bg-muted px-2 py-1 font-mono text-[11px]"
                    >
                      {component}
                    </li>
                  ))}
                </ul>
                <span className="vd-btn vd-btn-primary mt-auto self-start">
                  Open sample →
                </span>
              </div>
            </Link>
          );
        })}

        {pending.length > 0 ? (
          <>
            <h2 className="mt-14 font-display text-2xl">Coming next</h2>
            <div className="mt-4 grid gap-4 tab:grid-cols-2 desk:grid-cols-3">
              {pending.map((sample) => (
                <article
                  key={sample.slug}
                  className="rounded-[--radius] border-2 border-dashed border-ink p-5 opacity-60"
                >
                  <span className="font-mono text-[11px] text-muted-foreground uppercase">
                    Pending
                  </span>
                  <p className="mt-2 font-semibold">{sample.brand}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {sample.description}
                  </p>
                </article>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink pt-6">
          <span className="text-muted-foreground">
            Looking for complete websites with their own visual language?
          </span>
          <Link
            href={"/design-systems" as Route}
            className="font-semibold text-tomato-text underline-offset-4 hover:underline"
          >
            Design systems →
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
