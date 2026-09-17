// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./Popover";
import { popoverMocks } from "./Popover.mocks";

const DefaultPreview = () => (
  <Popover defaultOpen>
    <PopoverTrigger
      render={
        <Button variant="secondary" size="sm">
          {popoverMocks.default.trigger}
        </Button>
      }
    />
    <PopoverContent>
      <PopoverHeader>
        <PopoverTitle>{popoverMocks.default.title}</PopoverTitle>
        <PopoverDescription>
          {popoverMocks.default.description}
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
);

const AlignPreview = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Popover defaultOpen>
      <PopoverTrigger
        render={
          <Button variant="secondary" size="sm">
            {popoverMocks.align.start}
          </Button>
        }
      />
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>{popoverMocks.align.startLabel}</PopoverTitle>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </div>
);

export default {
  Default: DefaultPreview,
  Align: AlignPreview,
};
