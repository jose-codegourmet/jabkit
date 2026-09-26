import type { ReactNode } from "react";
import { AgentsNav } from "../../components/agents/AgentsNav";
import { SiteShell } from "../../components/SiteShell";
import { mcpToolNames } from "../../lib/mcp-tools";

export default function AgentsLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <main className="grid min-h-[calc(100dvh-90px)] desk:grid-cols-[280px_minmax(0,1fr)_300px]">
        <AgentsNav tools={mcpToolNames} />
        {children}
      </main>
    </SiteShell>
  );
}
