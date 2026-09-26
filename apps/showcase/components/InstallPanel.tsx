"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { type KeyboardEvent, useId, useRef, useState } from "react";
import { agentPrompt, installPlanCurl } from "../lib/agent-prompt";
import { CommandBox, useCopyFeedback } from "./CommandBox";
import { InstallCommand } from "./InstallCommand";

const tabs = [
  { id: "cli", label: "CLI" },
  { id: "prompt", label: "Prompt" },
  { id: "mcp", label: "MCP" },
] as const;
type TabId = (typeof tabs)[number]["id"];

/** "Add to your project": CLI, agent prompt, and MCP install plan. */
export function InstallPanel({ name }: { name: string }) {
  const [tab, setTab] = useState<TabId>("cli");
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const prompt = useCopyFeedback();

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = tabs.findIndex((item) => item.id === tab);
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + tabs.length) % tabs.length;
    setTab(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="vd-card overflow-hidden">
      <h2 className="px-4 pt-4 font-semibold">Add to your project</h2>
      <div
        role="tablist"
        aria-label="Install method"
        onKeyDown={onKeyDown}
        className="mx-4 mt-3 flex gap-1 rounded-full border-2 border-ink bg-muted p-1 text-[13px]"
      >
        {tabs.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${baseId}-${item.id}-tab`}
            aria-selected={tab === item.id}
            aria-controls={
              tab === item.id ? `${baseId}-${item.id}-panel` : undefined
            }
            tabIndex={tab === item.id ? 0 : -1}
            onClick={() => setTab(item.id)}
            className={`flex-1 rounded-full py-1.5 font-semibold tracking-[0.06em] uppercase transition-colors ${
              tab === item.id
                ? "bg-ink text-cream"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-${tab}-panel`}
        aria-labelledby={`${baseId}-${tab}-tab`}
        className="flex flex-col gap-2.5 px-4 pt-3 pb-4"
      >
        {tab === "cli" ? (
          <>
            <InstallCommand name={name} size="sm" />
            <p className="text-[13px] leading-5 text-muted-foreground">
              Adds source files to{" "}
              <code className="font-mono text-xs">src/components/jabkit</code>{" "}
              with its registry dependencies.
            </p>
          </>
        ) : null}
        {tab === "prompt" ? (
          <>
            <pre className="vd-code max-h-44 overflow-auto px-3 py-2.5 text-xs leading-5 whitespace-pre-wrap">
              {agentPrompt(name)}
            </pre>
            <button
              type="button"
              onClick={() => prompt.copy(agentPrompt(name))}
              className="vd-btn vd-btn-sm vd-btn-primary"
            >
              {prompt.copied ? (
                <CheckIcon aria-hidden />
              ) : (
                <CopyIcon aria-hidden />
              )}
              {prompt.copied ? "Copied" : "Copy prompt"}
            </button>
          </>
        ) : null}
        {tab === "mcp" ? (
          <>
            <CommandBox
              size="sm"
              label="Install plan request"
              options={[
                {
                  id: "curl",
                  label: "curl",
                  command: installPlanCurl(name),
                },
              ]}
            />
            <p className="text-[13px] leading-5 text-muted-foreground">
              Returns files, npm deps, and CSS variables. A plan, not an
              install.
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}
