// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { createToastManager, Toaster } from "./Toast";
import { toastMocks } from "./Toast.mocks";

const inFlowViewport =
  "!pointer-events-auto !relative !inset-auto !bottom-auto !right-auto !mx-0 !w-full !max-w-none";

function previewManager(item: {
  title: string;
  description?: string;
  type?: string;
  actionLabel?: string;
}) {
  const manager = createToastManager();
  manager.add({
    title: item.title,
    description: item.description,
    type: item.type,
    timeout: 0,
    ...(item.actionLabel
      ? { actionProps: { children: item.actionLabel } }
      : {}),
  });
  return manager;
}

const defaultManager = previewManager(toastMocks.default);
const successManager = previewManager(toastMocks.types[0]);
const actionManager = previewManager(toastMocks.action);
const errorManager = previewManager(toastMocks.types[3]);

function Frame({
  manager,
}: {
  manager: ReturnType<typeof createToastManager>;
}) {
  return (
    <div className="relative h-28 w-80">
      <Toaster
        disablePortal
        timeout={0}
        toastManager={manager}
        viewportClassName={inFlowViewport}
      />
    </div>
  );
}

export default {
  Default: () => <Frame manager={defaultManager} />,
  Variants: () => (
    <div className="flex flex-col gap-3">
      <Frame manager={successManager} />
      <Frame manager={actionManager} />
      <Frame manager={errorManager} />
    </div>
  ),
};
