// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AspectRatio } from "./AspectRatio";
import { aspectRatioMocks } from "./AspectRatio.mocks";

export default {
  Default: () => (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={aspectRatioMocks.default.ratio}
        className="rounded-lg bg-muted"
      >
        <img
          src={aspectRatioMocks.default.src}
          alt={aspectRatioMocks.default.alt}
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  ),
  Square: () => (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={aspectRatioMocks.square.ratio}
        className="rounded-lg bg-muted"
      >
        <img
          src={aspectRatioMocks.square.src}
          alt={aspectRatioMocks.square.alt}
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  ),
  Portrait: () => (
    <div className="w-48">
      <AspectRatio
        ratio={aspectRatioMocks.portrait.ratio}
        className="rounded-lg bg-muted"
      >
        <img
          src={aspectRatioMocks.portrait.src}
          alt={aspectRatioMocks.portrait.alt}
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  ),
};
