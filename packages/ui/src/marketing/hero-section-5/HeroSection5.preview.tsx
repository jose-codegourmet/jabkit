// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { HeroSection5 } from "./HeroSection5";
import { heroSection5EditorialMocks } from "./HeroSection5.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <HeroSection5 />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <HeroSection5
        brand={heroSection5EditorialMocks.brand}
        navItems={heroSection5EditorialMocks.navItems}
        headerAction={heroSection5EditorialMocks.headerAction}
        kicker={heroSection5EditorialMocks.kicker}
        title={heroSection5EditorialMocks.title}
        description={heroSection5EditorialMocks.description}
        primaryAction={heroSection5EditorialMocks.primaryAction}
        secondaryAction={heroSection5EditorialMocks.secondaryAction}
        video={heroSection5EditorialMocks.video}
      />
    </div>
  ),
};
