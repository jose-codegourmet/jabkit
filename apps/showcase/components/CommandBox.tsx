"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export type CommandOption = { id: string; label: string; command: string };

export function useCopyFeedback() {
  const [copied, setCopied] = useState(false);
  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return { copied, copy };
}

/** Dark command box: option tabs, one command line, and a copy button. */
export function CommandBox({
  options,
  label = "Command",
  className = "",
  size = "md",
}: {
  options: CommandOption[];
  label?: string;
  className?: string;
  size?: "sm" | "md";
}) {
  const [activeId, setActiveId] = useState(options[0]?.id);
  const { copied, copy } = useCopyFeedback();
  const active = options.find((option) => option.id === activeId) ?? options[0];
  if (!active) return null;

  return (
    <div
      className={`overflow-hidden rounded-[10px] border-2 border-ink bg-code text-code-foreground shadow-[4px_4px_0_var(--vd-shadow)] ${className}`}
    >
      {options.length > 1 ? (
        <fieldset className="flex flex-wrap gap-1 border-b border-cream/15 px-2 py-1.5">
          <legend className="sr-only">{label}</legend>
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={option.id === active.id}
              onClick={() => setActiveId(option.id)}
              className={`rounded-md px-2.5 py-1.5 font-mono text-xs transition-colors ${
                option.id === active.id
                  ? "bg-mustard font-bold text-ink"
                  : "text-cream/80 hover:text-cream"
              }`}
            >
              {option.label}
            </button>
          ))}
        </fieldset>
      ) : null}
      <div
        className={`flex items-center gap-3 ${size === "sm" ? "px-3 py-2.5" : "px-4 py-3"}`}
      >
        <pre
          className={`min-w-0 flex-1 font-mono whitespace-pre-wrap [overflow-wrap:anywhere] ${size === "sm" ? "text-[13px]" : "text-sm"}`}
        >
          <code>{active.command}</code>
        </pre>
        <button
          type="button"
          onClick={() => copy(active.command)}
          aria-label={copied ? "Copied" : `Copy ${label.toLowerCase()}`}
          className="grid size-9 shrink-0 place-items-center rounded-md border border-cream/25 text-mustard transition hover:bg-cream/10"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}
