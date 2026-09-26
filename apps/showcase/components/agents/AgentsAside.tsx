"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useCopyFeedback } from "../CommandBox";

/** Right rail on `/agents`: endpoint, caveats, freshness, and flow position. */
export function AgentsAside({
  endpoint,
  flowStep,
}: {
  endpoint: string;
  flowStep?: string;
}) {
  const { copied, copy } = useCopyFeedback();
  return (
    <aside className="flex flex-col gap-4 px-5 pb-10 tab:px-8 desk:border-l-2 desk:border-ink desk:px-6 desk:py-10">
      <section className="vd-card p-[18px]">
        <h2 className="text-sm font-semibold">Endpoint</h2>
        <p className="mt-2.5 flex flex-col gap-1.5 font-mono text-xs">
          <span>
            <span className="font-bold text-success">GET</span>
            {"  "}/mcp{" "}
            <span className="text-muted-foreground">→ tool list</span>
          </span>
          <span>
            <span className="font-bold text-tomato-text">POST</span> /mcp{" "}
            <span className="text-muted-foreground">→ call a tool</span>
          </span>
        </p>
        <button
          type="button"
          onClick={() => copy(endpoint)}
          className="vd-btn vd-btn-sm mt-3.5 w-full"
        >
          {copied ? <CheckIcon aria-hidden /> : <CopyIcon aria-hidden />}
          {copied ? "Copied" : "Copy endpoint URL"}
        </button>
      </section>
      <section className="vd-card bg-mustard/25 p-[18px]">
        <h2 className="text-sm font-semibold">Heads up</h2>
        <p className="mt-2 text-[13px] leading-5">
          Not the MCP wire format or JSON-RPC. Standard MCP clients need an
          adapter. No auth or rate limiting.
        </p>
      </section>
      <section className="vd-card p-[18px]">
        <h2 className="text-sm font-semibold">Freshness</h2>
        <p className="mt-2 text-[13px] leading-5 text-muted-foreground">
          Reflects the last committed registry build.
        </p>
      </section>
      {flowStep ? (
        <section className="vd-card p-[18px]">
          <h2 className="text-sm font-semibold">In the agent flow</h2>
          <p className="mt-2 text-[13px] leading-5 text-muted-foreground">
            {flowStep}
          </p>
          <Link
            href="/agents#agent-flow"
            className="mt-2 inline-block text-[13px] font-semibold text-tomato-text underline-offset-4 hover:underline"
          >
            See the flow →
          </Link>
        </section>
      ) : null}
    </aside>
  );
}
