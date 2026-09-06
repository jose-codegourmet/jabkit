// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { dialogMocks } from "./Dialog.mocks";

const previewPanelClassName =
  "static max-w-xs translate-x-0 translate-y-0 shadow-none";

const DefaultPreview = () => (
  <Dialog defaultOpen modal={false}>
    <DialogTrigger
      render={<Button size="sm">{dialogMocks.default.trigger}</Button>}
    />
    <DialogContent className={previewPanelClassName}>
      <DialogHeader>
        <DialogTitle>{dialogMocks.default.title}</DialogTitle>
        <DialogDescription>{dialogMocks.default.description}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose
          render={
            <Button variant="secondary" size="sm">
              {dialogMocks.default.cancel}
            </Button>
          }
        />
        <Button size="sm">{dialogMocks.default.confirm}</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const VariantsPreview = () => (
  <Dialog defaultOpen modal={false}>
    <DialogTrigger
      render={
        <Button variant="destructive" size="sm">
          {dialogMocks.confirm.trigger}
        </Button>
      }
    />
    <DialogContent showCloseButton={false} className={previewPanelClassName}>
      <DialogHeader>
        <DialogTitle>{dialogMocks.confirm.title}</DialogTitle>
        <DialogDescription>{dialogMocks.confirm.description}</DialogDescription>
      </DialogHeader>
      <DialogFooter showCloseButton>
        <DialogClose
          render={
            <Button variant="secondary" size="sm">
              {dialogMocks.confirm.cancel}
            </Button>
          }
        />
        <Button variant="destructive" size="sm">
          {dialogMocks.confirm.confirm}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default {
  Default: DefaultPreview,
  Variants: VariantsPreview,
};
