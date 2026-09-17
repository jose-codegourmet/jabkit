import { Trash2Icon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";
import { alertDialogMocks } from "./AlertDialog.mocks";

const previewPanelClassName =
  "static max-w-xs translate-x-0 translate-y-0 shadow-none";

const DefaultPreview = () => (
  <AlertDialog defaultOpen>
    <AlertDialogTrigger
      render={
        <Button size="sm" variant="secondary">
          {alertDialogMocks.default.trigger}
        </Button>
      }
    />
    <AlertDialogContent className={previewPanelClassName}>
      <AlertDialogHeader>
        <AlertDialogTitle>{alertDialogMocks.default.title}</AlertDialogTitle>
        <AlertDialogDescription>
          {alertDialogMocks.default.description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel size="sm">
          {alertDialogMocks.default.cancel}
        </AlertDialogCancel>
        <AlertDialogAction size="sm">
          {alertDialogMocks.default.confirm}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

const VariantsPreview = () => (
  <AlertDialog defaultOpen>
    <AlertDialogTrigger
      render={
        <Button size="sm" variant="destructive">
          {alertDialogMocks.destructive.trigger}
        </Button>
      }
    />
    <AlertDialogContent size="sm" className={previewPanelClassName}>
      <AlertDialogHeader>
        <AlertDialogMedia className="bg-destructive/10 text-destructive">
          <Trash2Icon />
        </AlertDialogMedia>
        <AlertDialogTitle>
          {alertDialogMocks.destructive.title}
        </AlertDialogTitle>
        <AlertDialogDescription>
          This will permanently delete this chat conversation. View{" "}
          <a href="#settings">Settings</a> to delete any memories saved during
          this chat.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel size="sm" variant="ghost">
          {alertDialogMocks.destructive.cancel}
        </AlertDialogCancel>
        <AlertDialogAction size="sm" variant="destructive">
          {alertDialogMocks.destructive.confirm}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default {
  Default: DefaultPreview,
  Variants: VariantsPreview,
};
