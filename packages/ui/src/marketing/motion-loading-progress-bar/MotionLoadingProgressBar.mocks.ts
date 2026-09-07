import type { MotionLoadingProgressBarProps } from "./MotionLoadingProgressBar.types";

export const motionLoadingProgressBarMocks = {
  default: {
    eyebrow: "Loading",
    heading: "Progress that settles, not snaps.",
    description:
      "Discrete jumps feed a spring so the bar eases into each waypoint. Quiet and still when motion is reduced.",
    status: "Assembling the drop",
    completeStatus: "Ready to ship",
    autoPlay: true,
    loop: true,
  },
  alternate: {
    eyebrow: "Sync",
    heading: "A determinate pause mid-catalogue.",
    description:
      "Hold a known fill when the job is waiting on the network. Same capsule, no looping demo.",
    status: "Indexing lookbooks",
    completeStatus: "Catalogue ready",
    autoPlay: false,
    progress: 38,
    reducedProgress: 38,
    loop: false,
  },
} satisfies Record<"default" | "alternate", MotionLoadingProgressBarProps>;
