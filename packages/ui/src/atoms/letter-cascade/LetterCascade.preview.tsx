// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { LetterCascade } from "./LetterCascade";
import { letterCascadeMocks } from "./LetterCascade.mocks";

export default {
  Default: () => <LetterCascade {...letterCascadeMocks.default} />,
  CenterWave: () => <LetterCascade {...letterCascadeMocks.centerWave} />,
  ExtraBouncy: () => <LetterCascade {...letterCascadeMocks.extraBouncy} />,
  ClickTrigger: () => <LetterCascade {...letterCascadeMocks.clickTrigger} />,
  Snappy: () => <LetterCascade {...letterCascadeMocks.snappy} />,
};
