// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const PreviewDropdownMenu = () => (
  <DropdownMenu defaultOpen>
    <DropdownMenuTrigger render={<Button size="sm">Actions</Button>} />
    <DropdownMenuContent className="!static !w-40 !shadow-none">
      <DropdownMenuItem>Copy link</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default {
  Default: PreviewDropdownMenu,
  Variants: PreviewDropdownMenu,
};
