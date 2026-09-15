// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { LoudParrot } from "./LoudParrot";
import { loudParrotMocks } from "./LoudParrot.mocks";

export default {
  Default: () => <LoudParrot {...loudParrotMocks.default} />,
  Tones: () => (
    <div className="flex flex-wrap items-end gap-6">
      <LoudParrot {...loudParrotMocks.compact} />
      <LoudParrot {...loudParrotMocks.muted} />
      <LoudParrot {...loudParrotMocks.chart} />
    </div>
  ),
};
