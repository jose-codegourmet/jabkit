export const imageCropperMocks = {
  default: {
    src: "/assets/16b543dae15dee36.webp",
    alt: "Fashion portrait on a city street",
    aspect: "1:1" as const,
  },
  widescreen: {
    src: "/assets/16b543dae15dee36.webp",
    alt: "Fashion portrait cropped for a wide frame",
    aspect: "16:9" as const,
  },
  recoverable: {
    src: "/assets/16b543dae15dee36.webp",
    alt: "Fashion portrait with reset and documented upload limits",
    aspect: "4:3" as const,
    showReset: true,
    resetLabel: "Reset to sample",
    maxFileBytes: 8 * 1024 * 1024,
  },
} as const;
