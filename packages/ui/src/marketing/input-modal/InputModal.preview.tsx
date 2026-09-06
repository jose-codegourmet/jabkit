// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { InputModal } from "./InputModal";
import { inputModalMocks } from "./InputModal.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <InputModal {...inputModalMocks.default} presentation="inline" />
    </div>
    <div className="dark bg-background">
      <InputModal {...inputModalMocks.default} presentation="inline" />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <InputModal {...inputModalMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <InputModal {...inputModalMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
