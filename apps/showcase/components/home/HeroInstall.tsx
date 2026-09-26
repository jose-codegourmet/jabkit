"use client";

import { DEFAULT_SITE_DOMAIN } from "common/base";
import { useState } from "react";
import { CommandBox, type CommandOption } from "../CommandBox";
import { installOptions } from "../InstallCommand";

type Audience = "building" | "agent";

function agentOptions(name: string): CommandOption[] {
  return [
    { id: "skill", label: "skill", command: `/jabkit-component ${name}` },
    {
      id: "mcp",
      label: "POST /mcp",
      command: `curl -X POST https://${DEFAULT_SITE_DOMAIN}/mcp -d '{"tool":"get_install_plan","arguments":{"names":["${name}"]}}'`,
    },
  ];
}

export function HeroInstall({ name }: { name: string }) {
  const [audience, setAudience] = useState<Audience>("building");
  return (
    <div className="mt-8 max-w-[34rem]">
      <fieldset className="inline-flex gap-1 rounded-full border-2 border-ink bg-card p-1 shadow-[2px_2px_0_var(--vd-shadow)]">
        <legend className="sr-only">Show the command for</legend>
        {(
          [
            ["building", "I'm building"],
            ["agent", "I'm an agent"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={audience === value}
            onClick={() => setAudience(value)}
            className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
              audience === value
                ? "bg-ink text-cream"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </fieldset>
      <CommandBox
        key={audience}
        className="mt-3"
        label={audience === "building" ? "Install command" : "Agent command"}
        options={
          audience === "building" ? installOptions(name) : agentOptions(name)
        }
      />
    </div>
  );
}
