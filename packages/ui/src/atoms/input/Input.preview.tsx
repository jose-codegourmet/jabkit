// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Label } from "../label/Label";
import { Input } from "./Input";

export default {
  Default: () => (
    <div className="w-52">
      <Label htmlFor="preview-input">Email</Label>
      <Input
        id="preview-input"
        className="mt-2"
        placeholder="you@example.com"
      />
    </div>
  ),
  Variants: () => (
    <div className="w-52">
      <Label htmlFor="preview-input">Email</Label>
      <Input
        id="preview-input"
        className="mt-2"
        placeholder="you@example.com"
        defaultValue="hello@jabkit.dev"
      />
    </div>
  ),
};
