// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import { Separator } from "./Separator";

function ConfirmationPreview({
  title,
  description,
  confirm,
  confirmVariant = "primary",
}: {
  title: string;
  description: string;
  confirm: string;
  confirmVariant?: "primary" | "destructive";
}) {
  return (
    <div className="w-72">
      <div className="space-y-1.5">
        <h4 className="text-sm font-medium text-foreground">{title}</h4>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-end gap-2">
        <Button size="sm" variant="secondary">
          Cancel
        </Button>
        <Button size="sm" variant={confirmVariant}>
          {confirm}
        </Button>
      </div>
    </div>
  );
}

export default {
  Default: () => (
    <ConfirmationPreview
      title="Archive Harbor"
      description="Harbor will leave the dashboard. You can restore it from Archives later."
      confirm="Archive"
    />
  ),
  Variants: () => (
    <ConfirmationPreview
      title="Delete Harbor"
      description="This removes Harbor and its environments. This cannot be undone."
      confirm="Delete"
      confirmVariant="destructive"
    />
  ),
};
