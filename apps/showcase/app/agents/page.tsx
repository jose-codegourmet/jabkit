import { DEFAULT_SITE_DOMAIN } from "common/base";
import type { Metadata, Route } from "next";
import Link from "next/link";
import { AgentsAside } from "../../components/agents/AgentsAside";
import { CommandBox } from "../../components/CommandBox";
import { mcpTools } from "../../lib/mcp-tools";

export const metadata: Metadata = {
  title: "Agents & MCP - JabKit",
  description:
    "The read-only catalogue endpoint agents use to search, plan, and install JabKit components.",
};

const flow = [
  {
    tool: "get_conventions",
    copy: "Answer JabKit's two discovery questions: what the page must accomplish and what it should look and feel like. Reuse the answers in brief on every call.",
  },
  {
    tool: "search_components",
    copy: "Compare candidates using tone, bestFor, avoidFor, visualWeight, layout, and capabilities. Inspect shortlisted source with get_component.",
  },
  {
    tool: "get_install_plan",
    copy: "See files, npm deps, and registry deps (or get_component for the full document).",
  },
  {
    tool: null,
    copy: "Install pristine source, then adapt composition, typography, brand tokens, and content. Replace demo branding and review desktop/mobile and supported themes.",
  },
] as const;

export default function AgentsOverviewPage() {
  const endpoint = `https://${DEFAULT_SITE_DOMAIN}/mcp`;
  return (
    <>
      <section className="min-w-0 px-5 py-10 tab:px-8 desk:px-12">
        <p className="vd-script text-2xl">wired for robots</p>
        <h1 className="vd-h1 mt-1 desk:text-5xl">Agents &amp; MCP</h1>
        <p className="mt-3.5 max-w-[40rem] text-[17px] leading-7 text-muted-foreground">
          A read-only MCP server on this site. Agents resolve a component the
          same way a person would: define the brand direction, compare
          candidates, install with the CLI, then adapt the source.
        </p>

        <h2 id="protocol" className="mt-10 scroll-mt-28 font-display text-2xl">
          Protocol
        </h2>
        <ul className="mt-3 space-y-2 leading-7">
          <li>
            Connect your MCP client to the URL below using Streamable HTTP. It
            supports initialization, tool discovery, and tool calls over
            JSON-RPC. No API key is required.
          </li>
          <li>
            <code className="vd-code px-1.5 py-0.5 text-[13px]">GET /mcp</code>{" "}
            returns{" "}
            <code className="font-mono text-sm">
              {'{ name: "JabKit MCP", tools: string[] }'}
            </code>
            .
          </li>
          <li>
            <code className="vd-code px-1.5 py-0.5 text-[13px]">POST /mcp</code>{" "}
            also accepts the original HTTP API body{" "}
            <code className="font-mono text-sm">{"{ tool, arguments }"}</code>{" "}
            and returns JSON.
          </li>
          <li className="text-muted-foreground">
            The tool reference pages show direct HTTP examples. MCP clients
            discover the same tools and their argument schemas automatically.
          </li>
        </ul>
        <CommandBox
          className="mt-4"
          label="MCP endpoint"
          options={[
            { id: "endpoint", label: "Streamable HTTP", command: endpoint },
          ]}
        />

        <h2
          id="data-source"
          className="mt-10 scroll-mt-28 font-display text-2xl"
        >
          Data source
        </h2>
        <p className="mt-3 max-w-[44rem] leading-7 text-muted-foreground">
          Every handler reads the committed registry JSON under{" "}
          <code className="font-mono text-sm">/r</code>. The endpoint is exactly
          as fresh as the last registry build. There is no authentication and no
          rate limiting.
        </p>

        <h2
          id="agent-flow"
          className="mt-10 scroll-mt-28 font-display text-2xl"
        >
          Agent flow
        </h2>
        <ol className="vd-card mt-4 divide-y-2 divide-dashed divide-ink">
          {flow.map((step, index) => (
            <li key={step.copy} className="flex gap-4 p-4">
              <span className="font-display text-2xl text-tomato-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                {step.tool ? (
                  <Link
                    href={`/agents/${step.tool}` as Route}
                    className="font-mono text-sm font-bold underline-offset-4 hover:underline"
                  >
                    {step.tool}
                  </Link>
                ) : (
                  <span className="font-mono text-sm font-bold">
                    npx @jabkit/cli add
                  </span>
                )}
                <span className="mt-1 block text-sm text-muted-foreground">
                  {step.copy}
                </span>
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-3 max-w-[44rem] leading-7 text-muted-foreground">
          Every tool returns{" "}
          <code className="font-mono text-sm">needs_brief</code> until the agent
          supplies both discovery answers. The agent answers from the existing
          conversation and asks the user only for missing details that affect
          selection. Calls with a complete brief return catalogue data.
        </p>

        <h2
          id="limitations"
          className="mt-10 scroll-mt-28 font-display text-2xl"
        >
          Limitations
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7 text-muted-foreground">
          <li>Read-only by design. The CLI is the writer.</li>
          <li>
            Stateless requests; no persistent sessions or notification stream.
          </li>
          <li>
            <code className="font-mono text-sm">search_components</code> returns
            eight results by default, with limit (up to 50) and offset;{" "}
            <code className="font-mono text-sm">list_components</code> has no
            pagination.
          </li>
          <li>
            Search scores use lexical metadata matches. They do not judge visual
            quality or detect every semantic conflict; inspect source and
            previews.
          </li>
          <li>
            <code className="font-mono text-sm">filesToOverwrite</code> is
            always empty.
          </li>
        </ul>

        <h2 className="mt-10 font-display text-2xl">Tools</h2>
        <ul className="mt-4 grid gap-3 tab:grid-cols-2">
          {mcpTools.map((tool) => (
            <li key={tool.name}>
              <Link
                href={`/agents/${tool.name}` as Route}
                className="vd-card block h-full p-4 transition-shadow hover:shadow-[4px_4px_0_var(--vd-tomato)]"
              >
                <span className="font-mono text-sm font-bold">{tool.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {tool.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <AgentsAside endpoint={endpoint} />
    </>
  );
}
