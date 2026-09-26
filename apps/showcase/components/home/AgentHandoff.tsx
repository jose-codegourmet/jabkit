import Link from "next/link";
import { Rays } from "../Rays";

const tools = [
  {
    step: "01",
    name: "search_components",
    copy: "by name, tag, or description",
  },
  { step: "02", name: "get_install_plan", copy: "walks registryDependencies" },
  { step: "03", name: "get_conventions", copy: "returns the project ruleset" },
] as const;

/** "Built for agent handoff": the MCP endpoint as a telegram. */
export function AgentHandoff() {
  return (
    <section className="relative overflow-hidden border-b-3 border-ink bg-telegraph bg-[radial-gradient(circle_at_22%_50%,oklch(0.4_0.07_245),transparent_65%)] text-cream">
      <Rays x="22%" y="50%" width="5deg" color="oklch(1 0 0 / 5%)" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-14 tab:px-8 tab:py-[104px] desk:grid-cols-[5fr_7fr] desk:gap-16">
        <div className="flex justify-center p-4">
          <img
            src="/art/jk-telegraph.webp"
            alt="JabKit handing a block to a robot telegraph operator"
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full max-w-[440px] rounded-full border-4 border-ink object-cover shadow-[0_0_0_10px_var(--vd-mustard),0_0_0_14px_var(--vd-ink),12px_12px_0_14px_oklch(0.12_0.03_250)]"
          />
        </div>
        <div className="min-w-0">
          <p className="vd-script text-2xl text-mustard">wired for robots</p>
          <h2 className="vd-h2 mt-1.5">Built for agent handoff.</h2>
          <p className="mt-4 max-w-[48ch] leading-7 opacity-90">
            MCP tools expose search, install plans, and conventions so an agent
            can resolve a component the same way a human would.
          </p>
          <div className="mt-8 overflow-hidden rounded-[14px] border-3 border-ink bg-card text-foreground shadow-[8px_8px_0_oklch(0.12_0.03_250)]">
            <div className="flex items-center gap-2.5 border-b-3 border-ink bg-tomato px-4 py-2.5 text-primary-foreground">
              <span
                aria-hidden="true"
                className="size-3 rounded-full border-2 border-ink bg-mustard"
              />
              <span className="font-mono text-[13px] tracking-[0.08em]">
                TELEGRAM · POST /mcp
              </span>
            </div>
            <ol className="grid border-b-2 border-dashed border-ink tab:grid-cols-3">
              {tools.map((tool, index) => (
                <li
                  key={tool.name}
                  className={`p-4 ${index < tools.length - 1 ? "border-b-2 border-dashed border-ink tab:border-r-2 tab:border-b-0" : ""}`}
                >
                  <span className="font-display text-2xl text-tomato-text">
                    {tool.step}
                  </span>
                  <p className="mt-2">
                    <code className="vd-code rounded-[5px] px-1.5 py-0.5 text-[13px] font-bold">
                      {tool.name}
                    </code>
                  </p>
                  <p className="mt-1 text-[13px] leading-[19px] text-muted-foreground">
                    {tool.copy}
                  </p>
                </li>
              ))}
            </ol>
            <pre className="vd-code overflow-x-auto rounded-none px-5 py-[18px] text-[13px] leading-[1.7]">
              <code>{`curl -X POST /mcp \\
  -d '{ "tool": "search_components",
        "arguments": { "query": "hero" } }'`}</code>
            </pre>
          </div>
          <Link href="/agents" className="vd-btn mt-7">
            Read the agent docs →
          </Link>
        </div>
      </div>
    </section>
  );
}
