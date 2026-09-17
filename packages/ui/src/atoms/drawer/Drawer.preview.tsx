// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";
import { drawerMocks } from "./Drawer.mocks";

const previewPanelClassName =
  "static m-0 h-auto max-h-none w-full max-w-xs transform-none shadow-none";

const DefaultPreview = () => (
  <Drawer defaultOpen modal={false} disablePointerDismissal>
    <DrawerTrigger
      render={
        <Button size="sm" variant="secondary">
          {drawerMocks.default.trigger}
        </Button>
      }
    />
    <DrawerContent className={previewPanelClassName}>
      <DrawerHeader>
        <DrawerTitle>{drawerMocks.default.title}</DrawerTitle>
        <DrawerDescription>{drawerMocks.default.description}</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 text-sm text-muted-foreground">
        {drawerMocks.default.body}
      </div>
      <DrawerFooter>
        <Button size="sm">{drawerMocks.default.confirm}</Button>
        <DrawerClose
          render={
            <Button size="sm" variant="secondary">
              {drawerMocks.default.cancel}
            </Button>
          }
        />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

const VariantsPreview = () => (
  <Drawer
    defaultOpen
    modal={false}
    disablePointerDismissal
    showSwipeHandle
    swipeDirection="right"
  >
    <DrawerTrigger
      render={
        <Button size="sm" variant="secondary">
          {drawerMocks.side.trigger}
        </Button>
      }
    />
    <DrawerContent className={previewPanelClassName}>
      <DrawerHeader>
        <DrawerTitle>{drawerMocks.side.title}</DrawerTitle>
        <DrawerDescription>{drawerMocks.side.description}</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 text-sm text-muted-foreground">
        {drawerMocks.side.body}
      </div>
      <DrawerFooter>
        <Button size="sm">{drawerMocks.side.confirm}</Button>
        <DrawerClose
          render={
            <Button size="sm" variant="secondary">
              {drawerMocks.side.cancel}
            </Button>
          }
        />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default {
  Default: DefaultPreview,
  Variants: VariantsPreview,
};
