// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TubelightNavbar } from "./TubelightNavbar";
import { tubelightNavbarMocks } from "./TubelightNavbar.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="min-h-56 bg-background">
      <TubelightNavbar {...tubelightNavbarMocks.default} />
    </div>
    <div className="dark min-h-56 bg-background">
      <TubelightNavbar {...tubelightNavbarMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="min-h-80 w-full bg-background">
      <TubelightNavbar {...tubelightNavbarMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="min-h-80 w-full bg-background">
      <TubelightNavbar {...tubelightNavbarMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
