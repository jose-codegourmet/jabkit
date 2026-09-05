// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const PreviewDialog = () => (
  <Dialog defaultOpen>
    <DialogTrigger render={<Button size="sm">Open dialog</Button>} />
    <DialogContent
      showCloseButton={false}
      className="!static !w-64 !translate-x-0 !translate-y-0 !shadow-none"
    >
      <DialogHeader>
        <DialogTitle>Invite teammate</DialogTitle>
        <DialogDescription>Give your team access in seconds.</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default {
  Default: PreviewDialog,
  Variants: PreviewDialog,
};
