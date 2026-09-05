// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Checkbox } from "./Checkbox";

export default {
  Default: () => (
    <label
      className="flex items-center gap-2 text-sm"
      htmlFor="preview-checkbox"
    >
      <Checkbox id="preview-checkbox" /> Enable notifications
    </label>
  ),
  Variants: () => (
    <label
      className="flex items-center gap-2 text-sm"
      htmlFor="preview-checkbox"
    >
      <Checkbox defaultChecked id="preview-checkbox" /> Enable notifications
    </label>
  ),
};
