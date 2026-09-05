// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Switch } from "./Switch";

export default {
  Default: () => (
    <label className="flex items-center gap-3 text-sm" htmlFor="preview-switch">
      <Switch id="preview-switch" /> Dark mode
    </label>
  ),
  Variants: () => (
    <label className="flex items-center gap-3 text-sm" htmlFor="preview-switch">
      <Switch defaultChecked id="preview-switch" /> Dark mode
    </label>
  ),
};
