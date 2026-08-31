"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const runners = [
  {
    id: "npx",
    label: "npx",
    command: (name: string) => `npx jabkit add ${name}`,
  },
  {
    id: "pnpm",
    label: "pnpm dlx",
    command: (name: string) => `pnpm dlx jabkit add ${name}`,
  },
  {
    id: "bunx",
    label: "bunx",
    command: (name: string) => `bunx jabkit add ${name}`,
  },
] as const;

type RunnerId = (typeof runners)[number]["id"];

export function InstallCommand({ name }: { name: string }) {
  const [runner, setRunner] = useState<RunnerId>("npx");
  const [copied, setCopied] = useState(false);
  const active = runners.find((item) => item.id === runner) ?? runners[0];
  const command = active.command(name);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="overflow-hidden rounded-[--radius] border border-border bg-card">
      <div className="flex items-center gap-1 border-b border-border px-2 py-1.5">
        {runners.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setRunner(item.id)}
            className={`rounded-md px-2.5 py-1.5 font-mono text-xs transition ${
              runner === item.id
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 bg-muted/40 px-4 py-3">
        <pre className="min-w-0 flex-1 overflow-x-auto font-mono text-sm text-foreground">
          <code>{command}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy install command"}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:bg-accent hover:text-foreground"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}
