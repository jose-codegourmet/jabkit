import { ChevronRightIcon } from "@radix-ui/react-icons";
import { DEFAULT_SITE_DOMAIN } from "common/base";
import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AgentsAside } from "../../../components/agents/AgentsAside";
import { CommandBox } from "../../../components/CommandBox";
import {
  curlExample,
  fetchExample,
  findMcpTool,
  mcpTools,
  promptExample,
} from "../../../lib/mcp-tools";

export function generateStaticParams() {
  return mcpTools.map((tool) => ({ tool: tool.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;
  const entry = findMcpTool(tool);
  return entry
    ? { title: `${entry.name} - JabKit agents`, description: entry.summary }
    : {};
}

export default async function AgentToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool: name } = await params;
  const tool = findMcpTool(name);
  if (!tool) notFound();
  const origin = `https://${DEFAULT_SITE_DOMAIN}`;
  const index = mcpTools.indexOf(tool);
  const previous = mcpTools[index - 1];
  const next = mcpTools[index + 1];

  return (
    <>
      <section className="min-w-0 px-5 py-10 tab:px-8 desk:px-12">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/agents" className="hover:text-foreground">
            Agents
          </Link>
          <ChevronRightIcon aria-hidden className="size-3.5 opacity-60" />
          <span>Tools</span>
        </nav>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h1 className="font-mono text-[28px] font-bold tracking-[-0.02em] [overflow-wrap:anywhere] tab:text-[32px]">
            {tool.name}
          </h1>
          <span className="shrink-0 rounded-full border-2 border-ink bg-muted px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap">
            read-only
          </span>
        </div>
        <p className="mt-3.5 max-w-[40rem] text-[17px] leading-7 text-muted-foreground">
          {tool.description}
        </p>

        <h2 className="mt-9 mb-3 text-sm font-semibold">Arguments</h2>
        {tool.arguments.length ? (
          <div className="vd-card overflow-x-auto text-sm">
            <table className="w-full min-w-[440px] text-left">
              <thead className="bg-muted text-[13px]">
                <tr>
                  <th scope="col" className="px-4 py-2.5 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">
                    Type
                  </th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {tool.arguments.map((argument) => (
                  <tr key={argument.name} className="border-t border-ink">
                    <td className="px-4 py-3 font-mono text-[13px]">
                      {argument.name}
                    </td>
                    <td className="px-4 py-3 font-mono text-[13px] text-muted-foreground">
                      {argument.type}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {argument.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No arguments.</p>
        )}

        <h2 className="mt-8 mb-3 text-sm font-semibold">Request</h2>
        <CommandBox
          label="Request"
          options={[
            { id: "curl", label: "curl", command: curlExample(tool, origin) },
            {
              id: "fetch",
              label: "fetch",
              command: fetchExample(tool, origin),
            },
            {
              id: "prompt",
              label: "prompt",
              command: promptExample(tool, origin),
            },
          ]}
        />

        <h2 className="mt-8 mb-3 text-sm font-semibold">
          Response{" "}
          <span className="ml-1.5 font-mono text-xs font-normal text-success">
            200
          </span>
        </h2>
        <pre className="vd-code overflow-x-auto border-2 border-ink px-5 py-[18px] text-[13px] leading-[1.7] shadow-[4px_4px_0_var(--vd-shadow)]">
          <code>{tool.response}</code>
        </pre>

        <h2 className="mt-8 mb-3 text-sm font-semibold">Errors</h2>
        {tool.errors.length ? (
          <ul className="space-y-2">
            {tool.errors.map((error) => (
              <li
                key={error.status}
                className="vd-card flex flex-wrap items-center gap-4 px-4 py-3"
              >
                <span className="rounded-md border border-ink bg-tomato px-2 py-0.5 font-mono text-xs text-primary-foreground">
                  {error.status}
                </span>
                <code className="font-mono text-[13px] text-muted-foreground">
                  {error.body}
                </code>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            None specific to this tool. An unknown tool name returns 400.
          </p>
        )}

        <nav
          aria-label="Tools"
          className="mt-10 grid grid-cols-2 gap-4 border-t-2 border-ink pt-5 text-sm"
        >
          {previous ? (
            <Link
              href={`/agents/${previous.name}` as Route}
              className="flex flex-col hover:text-tomato-text"
            >
              <span className="text-xs text-muted-foreground">← Previous</span>
              <span className="font-mono font-semibold [overflow-wrap:anywhere]">
                {previous.name}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/agents/${next.name}` as Route}
              className="flex flex-col text-right hover:text-tomato-text"
            >
              <span className="text-xs text-muted-foreground">Next →</span>
              <span className="font-mono font-semibold [overflow-wrap:anywhere]">
                {next.name}
              </span>
            </Link>
          ) : null}
        </nav>
      </section>
      <AgentsAside endpoint={`${origin}/mcp`} flowStep={tool.flowStep} />
    </>
  );
}
