// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Input } from "../input/Input";
import { Label } from "./Label";

const PreviewLabel = () => (
  <div className="grid gap-2">
    <Label htmlFor="preview-label">Project name</Label>
    <Input id="preview-label" className="w-48" defaultValue="JabKit" />
  </div>
);

export default {
  Default: PreviewLabel,
  Variants: PreviewLabel,
};
