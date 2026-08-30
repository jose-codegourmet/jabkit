"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function ComponentPreview({
  name,
  story = "Default",
}: {
  name: string;
  story?: string;
}) {
  const [dark, setDark] = useState(false);
  return (
    <section className="overflow-hidden rounded-[--radius] border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-xs text-muted-foreground">
          Live preview
        </span>
        <button
          type="button"
          aria-label="Toggle preview theme"
          onClick={() => setDark((current) => !current)}
          className="grid size-8 place-items-center rounded-md border border-border text-muted-foreground hover:bg-accent"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <div
        className={`${dark ? "dark" : ""} overflow-hidden bg-background ${name === "hero228" ? "min-h-[36rem]" : "aspect-[16/10]"}`}
      >
        <iframe
          title={`${name} ${story} preview`}
          aria-hidden="true"
          className="h-full w-full border-0"
          src={`/preview/${name}/${story}?theme=${dark ? "dark" : "light"}`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
