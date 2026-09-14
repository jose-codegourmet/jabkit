"use client";

import dynamic from "next/dynamic";

// Mount after hydration so cached image loads reach the cropper's onLoad
// handler and initialize its natural dimensions before enabling download.
export const BrowserCropper = dynamic(
  () => import("@/atoms/image-cropper").then((module) => module.ImageCropper),
  {
    ssr: false,
    loading: () => (
      <p className="jk-body flex min-h-72 items-center" role="status">
        Loading the local image editor…
      </p>
    ),
  },
);
