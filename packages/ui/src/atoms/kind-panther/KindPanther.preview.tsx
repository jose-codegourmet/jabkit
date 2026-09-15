// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { KindPanther } from "./KindPanther";
import { kindPantherMocks } from "./KindPanther.mocks";

export default {
  Default: () => <KindPanther {...kindPantherMocks.default} />,
  Tones: () => <KindPanther {...kindPantherMocks.primary} />,
};
