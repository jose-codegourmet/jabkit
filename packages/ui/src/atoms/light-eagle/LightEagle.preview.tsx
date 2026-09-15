// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { LightEagle } from "./LightEagle";
import { lightEagleMocks } from "./LightEagle.mocks";

export default {
  Default: () => (
    <div className="h-64 w-80">
      <LightEagle {...lightEagleMocks.default} />
    </div>
  ),
  Tones: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="h-56">
        <LightEagle {...lightEagleMocks.default} />
      </div>
      <div className="h-56">
        <LightEagle {...lightEagleMocks.slate} />
      </div>
    </div>
  ),
};
