"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function CopyPromptButton({ name }: { name: string }) {
  const [mode, setMode] = useState<"standalone" | "skill">("standalone");
  const [copied, setCopied] = useState(false);
  const prompt =
    mode === "skill"
      ? `/jabkit-component ${name}`
      : `Add the JabKit component "${name}" to this project.\n\n1. Fetch https://jabkit.dev/r/${name}.json\n2. Recursively fetch registryDependencies.\n3. Write files[] to src/components/jabkit/, preserving their paths.\n4. Install dependencies, apply light cssVars under :root and dark cssVars under .dark.\n5. Run a type check.`;
  async function copy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <div className="space-y-3 rounded-[--radius] border border-border bg-card p-4">
      <div className="flex gap-2 text-sm">
        <button
          type="button"
          onClick={() => setMode("standalone")}
          className={
            mode === "standalone"
              ? "font-semibold text-foreground"
              : "text-muted-foreground"
          }
        >
          Standalone prompt
        </button>
        <span className="text-muted-foreground">/</span>
        <button
          type="button"
          onClick={() => setMode("skill")}
          className={
            mode === "skill"
              ? "font-semibold text-foreground"
              : "text-muted-foreground"
          }
        >
          Skill command
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-5 text-muted-foreground">
        {prompt}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-10 items-center gap-2 rounded-[--radius] bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:translate-y-px"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? "Copied" : "Copy prompt"}
      </button>
    </div>
  );
}
