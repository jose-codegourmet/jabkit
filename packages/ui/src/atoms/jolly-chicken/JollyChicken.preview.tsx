// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { JollyChicken } from "./JollyChicken";
import { jollyChickenMocks } from "./JollyChicken.mocks";

export default {
  Default: () => <JollyChicken {...jollyChickenMocks.default} />,
  Night: () => <JollyChicken {...jollyChickenMocks.night} />,
};
