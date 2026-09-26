"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useCopyFeedback } from "./CommandBox";

/**
 * Dark "npx jabkit add {name}" chip that appears over a catalogue card on
 * hover or keyboard focus. Sits above the card's stretched link.
 */
export function CopyAddChip({ name }: { name: string }) {
  const { copied, copy } = useCopyFeedback();
  const command = `npx jabkit add ${name}`;
  return (
    <button
      type="button"
      onClick={() => copy(command)}
      aria-label={copied ? "Copied" : `Copy install command for ${name}`}
      className="absolute top-2.5 right-2.5 z-10 flex h-[30px] max-w-[calc(100%-1.25rem)] items-center gap-1.5 rounded-lg border-2 border-tomato bg-code px-2.5 font-mono text-xs text-code-foreground opacity-0 shadow-[2px_2px_0_var(--vd-shadow)] transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
    >
      {copied ? (
        <CheckIcon aria-hidden className="shrink-0" />
      ) : (
        <CopyIcon aria-hidden className="shrink-0" />
      )}
      <span className="truncate">{copied ? "Copied" : command}</span>
    </button>
  );
}
