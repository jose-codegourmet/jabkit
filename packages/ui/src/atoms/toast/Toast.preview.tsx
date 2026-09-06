// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ToastCard } from "./Toast";
import { toastMocks } from "./Toast.mocks";

export default {
  Default: () => (
    <ToastCard
      title={toastMocks.default.title}
      description={toastMocks.default.description}
    />
  ),
  Variants: () => (
    <div className="flex flex-col gap-3">
      <ToastCard
        type={toastMocks.types[0].type}
        title={toastMocks.types[0].title}
        description={toastMocks.types[0].description}
      />
      <ToastCard
        title={toastMocks.action.title}
        description={toastMocks.action.description}
        actionLabel={toastMocks.action.actionLabel}
      />
      <ToastCard
        type={toastMocks.types[3].type}
        title={toastMocks.types[3].title}
        description={toastMocks.types[3].description}
      />
    </div>
  ),
};
