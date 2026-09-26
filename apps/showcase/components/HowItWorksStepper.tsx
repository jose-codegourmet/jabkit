"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { CommandBox } from "./CommandBox";

export type StepperSample = {
  name: string;
  displayName: string;
  query: string;
  matches: Array<{ name: string; displayName: string }>;
  files: string[];
  npmDeps: string[];
  sourcePath: string;
  sourceExcerpt: string;
  previewSrc: string | null;
};

const steps = [
  {
    verb: "Describe",
    short: "Search by intent, tag, or category.",
    long: "Search by intent, tag, or category. Metadata makes a component findable before you know its name.",
  },
  {
    verb: "Add",
    short: "One command copies the source.",
    long: "One CLI command drops source files into your project. Dependencies resolve with the install plan.",
  },
  {
    verb: "Own",
    short: "Edit tokens, props, and markup.",
    long: "The files are yours. Edit tokens, props, and markup without fighting a locked package.",
  },
] as const;

function Terminal({ sample }: { sample: StepperSample }) {
  return (
    <div className="vd-code overflow-hidden rounded-[10px] border-2 border-ink shadow-[4px_4px_0_var(--vd-shadow)]">
      <div className="border-b border-cream/15 px-3.5 py-2.5 font-mono text-xs opacity-70">
        terminal
      </div>
      <pre className="overflow-x-auto p-[18px] text-[13px] leading-[1.7]">
        <code>
          <span className="opacity-60">$</span> npx jabkit add {sample.name}
          {"\n"}
          {sample.files.map((file) => (
            <span key={file}>
              <span className="text-mustard">write</span> {file}
              {"\n"}
            </span>
          ))}
          {sample.npmDeps.length ? (
            <span className="opacity-70">
              pnpm add {sample.npmDeps.join(" ")}
            </span>
          ) : null}
        </code>
      </pre>
    </div>
  );
}

function RenderedPreview({
  sample,
  caption,
}: {
  sample: StepperSample;
  caption: string;
}) {
  return (
    <figure className="vd-card overflow-hidden">
      <figcaption className="flex justify-between gap-3 border-b-2 border-ink px-3.5 py-2.5">
        <span className="font-mono text-xs text-muted-foreground">
          {caption}
        </span>
        <span className="vd-script">Light</span>
      </figcaption>
      {sample.previewSrc ? (
        <img
          src={sample.previewSrc}
          alt={`${sample.displayName} preview`}
          loading="lazy"
          decoding="async"
          className="block h-[200px] w-full object-cover object-top"
        />
      ) : (
        <div className="grid h-[200px] place-items-center text-sm text-muted-foreground">
          Preview unavailable
        </div>
      )}
    </figure>
  );
}

/** Interactive Describe → Add → Own walkthrough driven by real registry data. */
export function HowItWorksStepper({
  samples,
  initialStep = 1,
}: {
  samples: StepperSample[];
  initialStep?: number;
}) {
  const [sampleName, setSampleName] = useState(samples[0]?.name);
  const [step, setStep] = useState(initialStep);
  const sample = samples.find((item) => item.name === sampleName) ?? samples[0];
  if (!sample) return null;

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-muted-foreground">Try it with</span>
        {samples.map((item) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={item.name === sample.name}
            onClick={() => setSampleName(item.name)}
            className="vd-chip font-mono"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="vd-card mt-5 grid overflow-hidden desk:grid-cols-[340px_minmax(0,1fr)]">
        <div className="flex flex-col border-b-2 border-ink desk:border-r-2 desk:border-b-0">
          <ol>
            {steps.map((item, index) => {
              const current = index === step;
              return (
                <li
                  key={item.verb}
                  className="border-b-2 border-ink last:border-b-0 desk:last:border-b-2"
                >
                  <button
                    type="button"
                    aria-current={current ? "step" : undefined}
                    onClick={() => setStep(index)}
                    className={`block w-full p-6 text-left transition-colors ${
                      current
                        ? "bg-mustard text-ink shadow-[inset_4px_0_0_var(--vd-tomato)]"
                        : "hover:bg-muted"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs ${current ? "text-tomato-text" : "text-muted-foreground"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1.5 block font-display text-xl">
                      {item.verb}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${current ? "" : "text-muted-foreground"}`}
                    >
                      {current ? item.long : item.short}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="mt-auto flex items-center justify-between px-6 py-4">
            <button
              type="button"
              aria-label="Previous step"
              disabled={step === 0}
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              className="vd-btn vd-btn-sm w-10 px-0 disabled:opacity-40"
            >
              <ArrowLeftIcon />
            </button>
            <span className="font-mono text-xs text-muted-foreground">
              {step + 1} / {steps.length}
            </span>
            <button
              type="button"
              aria-label="Next step"
              disabled={step === steps.length - 1}
              onClick={() =>
                setStep((current) => Math.min(steps.length - 1, current + 1))
              }
              className="vd-btn vd-btn-sm vd-btn-primary w-10 px-0 disabled:opacity-40"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div
          aria-live="polite"
          className="flex min-w-0 flex-col gap-4 bg-muted/50 p-5 tab:p-7"
        >
          {step === 0 ? (
            <>
              <div className="flex items-center gap-3 rounded-full border-3 border-ink bg-card py-2.5 pr-2.5 pl-5 shadow-[4px_4px_0_var(--vd-shadow)]">
                <span className="min-w-0 flex-1 truncate font-mono text-[15px]">
                  {sample.query}
                </span>
                <span className="vd-btn vd-btn-primary vd-btn-sm">Search</span>
              </div>
              <CommandBox
                size="sm"
                label="Search request"
                options={[
                  {
                    id: "mcp",
                    label: "search_components",
                    command: `{"tool":"search_components","arguments":{"query":"${sample.query}"}}`,
                  },
                ]}
              />
              <ul className="vd-card divide-y-2 divide-dashed divide-ink">
                {sample.matches.map((match) => (
                  <li
                    key={match.name}
                    className="flex items-center justify-between gap-3 px-4 py-2.5"
                  >
                    <span className="font-semibold">{match.displayName}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {match.name}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {step === 1 ? (
            <>
              <Terminal sample={sample} />
              <RenderedPreview
                sample={sample}
                caption={`${sample.sourcePath.split("/").at(-1)} · rendered`}
              />
            </>
          ) : null}
          {step === 2 ? (
            <>
              <div className="vd-code overflow-hidden rounded-[10px] border-2 border-ink shadow-[4px_4px_0_var(--vd-shadow)]">
                <div className="flex justify-between gap-3 border-b border-cream/15 px-3.5 py-2.5 font-mono text-xs">
                  <span className="truncate opacity-70">
                    {sample.sourcePath}
                  </span>
                  <span className="shrink-0 text-mustard">yours to edit</span>
                </div>
                <pre className="max-h-[260px] overflow-auto p-[18px] text-xs leading-[1.7]">
                  <code>{sample.sourceExcerpt}</code>
                </pre>
              </div>
              <RenderedPreview
                sample={sample}
                caption="Same file, rendered from your tree"
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
