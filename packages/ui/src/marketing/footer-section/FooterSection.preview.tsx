// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { FooterSection } from "./FooterSection";
import { footerSectionMocks } from "./FooterSection.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <FooterSection {...footerSectionMocks.default} theme="light" />
    </div>
    <div className="dark bg-background">
      <FooterSection {...footerSectionMocks.default} theme="dark" />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <FooterSection {...footerSectionMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <FooterSection {...footerSectionMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
