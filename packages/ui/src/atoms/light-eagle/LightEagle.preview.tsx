// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { LightEagle } from "./LightEagle";
import { lightEagleMocks } from "./LightEagle.mocks";

export default {
  Default: () => <LightEagle {...lightEagleMocks.default} />,
  Tones: () => <LightEagle {...lightEagleMocks.sky} />,
};
