// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Form } from "./Form";
import { formMocks } from "./Form.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Form {...formMocks.default} />
    </div>
    <div className="dark bg-background">
      <Form {...formMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Form {...formMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Form {...formMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
