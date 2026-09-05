// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Label } from "../label/Label";
import { Textarea } from "./Textarea";

export default {
  Default: () => (
    <div className="w-52">
      <Label htmlFor="preview-textarea">Notes</Label>
      <Textarea
        id="preview-textarea"
        className="mt-2 min-h-20"
        placeholder="Add a note…"
      />
    </div>
  ),
  Variants: () => (
    <div className="w-52">
      <Label htmlFor="preview-textarea">Notes</Label>
      <Textarea
        id="preview-textarea"
        className="mt-2 min-h-20"
        defaultValue="Shipping a better component library."
        placeholder="Add a note…"
      />
    </div>
  ),
};
