// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { HardSwan } from "./HardSwan";
import { hardSwanMocks } from "./HardSwan.mocks";

export default {
  Default: () => (
    <div className="h-40 w-[28rem]">
      <HardSwan {...hardSwanMocks.default} />
    </div>
  ),
  Palettes: () => (
    <div className="flex w-[28rem] flex-col gap-4">
      <div className="h-40">
        <HardSwan {...hardSwanMocks.default} />
      </div>
      <div className="h-40">
        <HardSwan {...hardSwanMocks.dusk} />
      </div>
    </div>
  ),
  WithCaption: () => (
    <div className="h-40 w-[28rem]">
      <HardSwan {...hardSwanMocks.overlay}>
        <p className="bg-card/90 px-4 py-2 text-sm font-medium text-card-foreground shadow-sm">
          Open studio hours
        </p>
      </HardSwan>
    </div>
  ),
};
