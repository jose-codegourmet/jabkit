// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { NavbarWithAnimatedMegaDropdown } from "./NavbarWithAnimatedMegaDropdown";
import { navbarWithAnimatedMegaDropdownMocks } from "./NavbarWithAnimatedMegaDropdown.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="min-h-[28rem] bg-background">
      <NavbarWithAnimatedMegaDropdown
        {...navbarWithAnimatedMegaDropdownMocks.default}
      />
    </div>
    <div className="dark min-h-[28rem] bg-background">
      <NavbarWithAnimatedMegaDropdown
        {...navbarWithAnimatedMegaDropdownMocks.default}
      />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full min-h-[28rem]">
      <NavbarWithAnimatedMegaDropdown
        {...navbarWithAnimatedMegaDropdownMocks.default}
      />
    </div>
  ),
  Variants: () => (
    <div className="w-full min-h-[22rem]">
      <NavbarWithAnimatedMegaDropdown
        {...navbarWithAnimatedMegaDropdownMocks.alternate}
      />
    </div>
  ),
  ThemeComparison,
};
