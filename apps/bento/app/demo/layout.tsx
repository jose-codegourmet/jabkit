import type { ReactNode } from "react";
import { PortalShell } from "../_components/PortalShell";

export default function DemoLayout({ children }: { children: ReactNode }) {
  return <PortalShell>{children}</PortalShell>;
}
