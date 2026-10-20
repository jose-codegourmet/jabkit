import { getStage, type StageId } from "../../_data/stages";

/** Every symbol drawn on the demo venue map, in legend order. */
export type MapKey =
  | StageId
  | "entrance"
  | "step-free"
  | "toilets"
  | "water"
  | "welfare"
  | "first-aid";

export interface MapFeature {
  key: MapKey;
  label: string;
  /** Plain-language location: the text equivalent of the drawing. */
  location: string;
}

export const mapFeatures: MapFeature[] = [
  {
    key: "loud-stage",
    label: getStage("loud-stage").name,
    location: "North side of the site, the largest area.",
  },
  {
    key: "glow-tent",
    label: getStage("glow-tent").name,
    location: "East side of the site, under canvas.",
  },
  {
    key: "low-end-room",
    label: getStage("low-end-room").name,
    location: "South-west corner, indoors.",
  },
  {
    key: "open-air-deck",
    label: getStage("open-air-deck").name,
    location: "South-east of the centre, open to the sky.",
  },
  {
    key: "entrance",
    label: "Entrances",
    location: "West gate and south gate.",
  },
  {
    key: "step-free",
    label: "Step-free routes",
    location:
      "From both gates to the centre of the site, then on to every stage.",
  },
  {
    key: "toilets",
    label: "Toilets",
    location: "North-west corner and south-east corner.",
  },
  {
    key: "water",
    label: "Water",
    location:
      "East of the Loud Stage, and between the Low End Room and the centre.",
  },
  {
    key: "welfare",
    label: "Welfare",
    location: "Near the west gate and north of the Glow Tent. Marked in lime.",
  },
  {
    key: "first-aid",
    label: "First aid",
    location: "Centre of the site, just south of the Loud Stage.",
  },
];

export type MarkerKey =
  | "entrance"
  | "toilets"
  | "water"
  | "welfare"
  | "first-aid";

/** Map geometry (viewBox 0 0 800 520). Keep in step with `location` above. */
export const mapGeometry = {
  width: 800,
  height: 520,
  ground:
    "M70 40H730Q770 40 770 80V440Q770 480 730 480H70Q30 480 30 440V80Q30 40 70 40Z",
  stages: [
    { id: "loud-stage", x: 250, y: 70, w: 300, h: 120, size: 38 },
    { id: "glow-tent", x: 600, y: 210, w: 140, h: 130, size: 26 },
    { id: "low-end-room", x: 80, y: 330, w: 200, h: 110, size: 28 },
    { id: "open-air-deck", x: 440, y: 370, w: 230, h: 80, size: 28 },
  ] satisfies {
    id: StageId;
    x: number;
    y: number;
    w: number;
    h: number;
    size: number;
  }[],
  routes: [
    "M48 250H400",
    "M180 250V330",
    "M400 190V462",
    "M400 275H600",
    "M400 340H555V370",
  ],
  markers: [
    { key: "entrance", x: 30, y: 250, label: "West gate" },
    { key: "entrance", x: 400, y: 480, label: "South gate" },
    { key: "toilets", x: 120, y: 150, label: "Toilets, north-west" },
    { key: "toilets", x: 720, y: 430, label: "Toilets, south-east" },
    { key: "water", x: 590, y: 120, label: "Water, east of the Loud Stage" },
    { key: "water", x: 300, y: 295, label: "Water, near the Low End Room" },
    { key: "welfare", x: 120, y: 205, label: "Welfare, near the west gate" },
    {
      key: "welfare",
      x: 670,
      y: 165,
      label: "Welfare, north of the Glow Tent",
    },
    { key: "first-aid", x: 445, y: 232, label: "First aid, centre" },
  ] satisfies { key: MarkerKey; x: number; y: number; label: string }[],
};
