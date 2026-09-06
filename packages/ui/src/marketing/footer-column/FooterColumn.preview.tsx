// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { FooterColumn } from "./FooterColumn";
import { footerColumnMocks } from "./FooterColumn.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <FooterColumn {...footerColumnMocks.default} />
    </div>
    <div className="dark bg-background">
      <FooterColumn {...footerColumnMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <FooterColumn {...footerColumnMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <FooterColumn {...footerColumnMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
