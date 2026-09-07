import type { HTMLAttributes } from "react";

export type ImageCropperAspect = "free" | "1:1" | "4:3" | "16:9";

export interface ImageCropperArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageCropperProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  aspect?: ImageCropperAspect;
  defaultZoom?: number;
  minZoom?: number;
  maxZoom?: number;
  downloadFileName?: string;
  onCropChange?: (area: ImageCropperArea) => void;
  onFileChange?: (file: File | null) => void;
}
