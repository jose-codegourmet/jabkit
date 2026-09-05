"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { DEFAULT_SITE_DOMAIN } from "common/base";
import { useState } from "react";

function useCopyFeedback() {
  const [copied, setCopied] = useState(false);
  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return { copied, copy };
}

export function CopyPromptButton({ name }: { name: string }) {
  const prompt = useCopyFeedback();
  const skill = useCopyFeedback();
  const standalonePrompt = `Add the JabKit component "${name}" to this project.\n\n1. Fetch https://${DEFAULT_SITE_DOMAIN}/r/${name}.json\n2. Recursively fetch registryDependencies.\n3. Write files[] to src/components/jabkit/, preserving their paths.\n4. Install dependencies, apply light cssVars under :root and dark cssVars under .dark.\n5. Run a type check.`;
  const skillCommand = `/jabkit-component ${name}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => prompt.copy(standalonePrompt)}
        className="inline-flex h-10 items-center gap-2 rounded-[--radius] bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:translate-y-px"
      >
        {prompt.copied ? <CheckIcon /> : <CopyIcon />}
        {prompt.copied ? "Copied" : "Copy prompt"}
      </button>
      <button
        type="button"
        onClick={() => skill.copy(skillCommand)}
        className="inline-flex h-10 items-center gap-2 rounded-[--radius] border border-border bg-card px-4 text-sm font-medium text-foreground transition hover:bg-accent active:translate-y-px"
      >
        {skill.copied ? <CheckIcon /> : <CopyIcon />}
        {skill.copied ? "Copied" : "Copy skill command"}
      </button>
    </div>
  );
}
