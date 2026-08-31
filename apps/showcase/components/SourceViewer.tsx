"use client";

import { useState } from "react";

export function SourceViewer({
  files,
  embedded = false,
}: {
  files: Array<{ path: string; content: string }>;
  embedded?: boolean;
}) {
  const [active, setActive] = useState(0);
  if (!files.length) return null;
  return (
    <section
      className={
        embedded
          ? "overflow-hidden"
          : "overflow-hidden rounded-[--radius] border border-border bg-card"
      }
    >
      <div className="flex overflow-x-auto border-b border-border">
        {files.map((file, index) => (
          <button
            type="button"
            key={file.path}
            onClick={() => setActive(index)}
            className={`shrink-0 px-4 py-3 font-mono text-xs ${active === index ? "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {file.path.split("/").at(-1)}
          </button>
        ))}
      </div>
      <pre className="code-sheen max-h-[34rem] overflow-auto p-5 text-xs leading-5 text-muted-foreground">
        <code>{files[active].content}</code>
      </pre>
    </section>
  );
}
