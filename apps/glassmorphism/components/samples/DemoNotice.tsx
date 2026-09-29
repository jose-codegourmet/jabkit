import type { ReactNode } from "react";

export function DemoNotice({ children }: { children?: ReactNode }) {
  return (
    <p role="note" className="text-sm leading-6 text-muted-foreground">
      {children ??
        "Demo only. This preview stays in the browser. Nothing is sent."}
    </p>
  );
}
