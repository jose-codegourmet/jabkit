import type { ReactNode } from "react";
import { StickyContentWrapper } from "./StickyContentWrapper";
import { stickyContentWrapperMocks } from "./StickyContentWrapper.mocks";

const Frame = ({ children }: { children: ReactNode }) => (
  <div className="h-[56rem] overflow-hidden">{children}</div>
);

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="h-[56rem] overflow-hidden bg-background">
      <StickyContentWrapper {...stickyContentWrapperMocks.default} />
    </div>
    <div className="dark h-[56rem] overflow-hidden bg-background">
      <StickyContentWrapper {...stickyContentWrapperMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <Frame>
      <StickyContentWrapper {...stickyContentWrapperMocks.default} />
    </Frame>
  ),
  Variants: () => (
    <Frame>
      <StickyContentWrapper {...stickyContentWrapperMocks.alternate} />
    </Frame>
  ),
  ThemeComparison,
};
