// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { AvatarBorder } from "./AvatarBorder";
import { avatarBorderMocks } from "./AvatarBorder.mocks";

export default {
  Default: () => (
    <AvatarBorder
      alt={avatarBorderMocks.default.alt}
      fallback={avatarBorderMocks.default.fallback}
      size="lg"
      src={avatarBorderMocks.default.src}
    />
  ),
  Variants: () => (
    <div className="flex flex-wrap items-end gap-6">
      <AvatarBorder
        alt={avatarBorderMocks.default.alt}
        fallback={avatarBorderMocks.default.fallback}
        size="sm"
        src={avatarBorderMocks.default.src}
      />
      <AvatarBorder
        alt={avatarBorderMocks.second.alt}
        fallback={avatarBorderMocks.second.fallback}
        src={avatarBorderMocks.second.src}
      />
      <AvatarBorder fallback={avatarBorderMocks.fallback.fallback} size="lg" />
      <AvatarBorder
        alt={avatarBorderMocks.default.alt}
        animate={false}
        fallback={avatarBorderMocks.default.fallback}
        size="lg"
        src={avatarBorderMocks.default.src}
      />
    </div>
  ),
};
