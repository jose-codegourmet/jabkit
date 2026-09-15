// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { StupidInsect } from "./StupidInsect";
import { stupidInsectMocks } from "./StupidInsect.mocks";

export default {
  Default: () => (
    <div className="h-64 w-80">
      <StupidInsect {...stupidInsectMocks.default} />
    </div>
  ),
  Tones: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="h-56">
        <StupidInsect {...stupidInsectMocks.default} />
      </div>
      <div className="h-56">
        <StupidInsect {...stupidInsectMocks.dusk} />
      </div>
    </div>
  ),
};
