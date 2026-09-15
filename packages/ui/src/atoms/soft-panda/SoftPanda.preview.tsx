// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { SoftPanda } from "./SoftPanda";
import { softPandaMocks } from "./SoftPanda.mocks";

export default {
  Default: () => <SoftPanda {...softPandaMocks.default} />,
  Tones: () => (
    <div className="flex flex-wrap items-end gap-6">
      <SoftPanda {...softPandaMocks.compact} />
      <SoftPanda {...softPandaMocks.muted} />
      <SoftPanda {...softPandaMocks.chart} />
    </div>
  ),
};
