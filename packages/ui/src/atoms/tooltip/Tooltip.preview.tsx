// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const PreviewTooltip = () => (
  <TooltipProvider>
    <Tooltip defaultOpen>
      <TooltipTrigger render={<Button size="sm">Hover me</Button>} />
      <TooltipContent>Helpful context</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default {
  Default: PreviewTooltip,
  Variants: PreviewTooltip,
};
