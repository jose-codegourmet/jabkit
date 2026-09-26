"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { agentPrompt, skillCommand } from "../lib/agent-prompt";
import { useCopyFeedback } from "./CommandBox";

export function CopyPromptButton({ name }: { name: string }) {
  const prompt = useCopyFeedback();
  const skill = useCopyFeedback();

  return (
    <div className="flex flex-col gap-2.5">
      <button
        type="button"
        onClick={() => prompt.copy(agentPrompt(name))}
        className="vd-btn vd-btn-sm justify-between"
      >
        {prompt.copied ? "Copied" : "Copy prompt"}
        {prompt.copied ? <CheckIcon aria-hidden /> : <CopyIcon aria-hidden />}
      </button>
      <button
        type="button"
        onClick={() => skill.copy(skillCommand(name))}
        aria-label={skill.copied ? "Copied" : "Copy skill command"}
        className="vd-code flex items-center justify-between gap-2 px-3 py-2.5 text-left text-xs"
      >
        <span className="[overflow-wrap:anywhere]">{skillCommand(name)}</span>
        {skill.copied ? (
          <CheckIcon aria-hidden className="shrink-0 text-mustard" />
        ) : (
          <CopyIcon aria-hidden className="shrink-0 text-mustard" />
        )}
      </button>
    </div>
  );
}
