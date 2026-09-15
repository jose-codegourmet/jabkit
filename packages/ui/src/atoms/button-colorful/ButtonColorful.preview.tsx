// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ButtonColorful } from "./ButtonColorful";
import { buttonColorfulMocks } from "./ButtonColorful.mocks";

export default {
  Default: () => <ButtonColorful {...buttonColorfulMocks.default} />,
  Sizes: () => <ButtonColorful {...buttonColorfulMocks.alternate} />,
};
