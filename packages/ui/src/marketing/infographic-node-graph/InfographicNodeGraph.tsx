"use client";

import {
  BarChart3,
  Cloud,
  Database,
  Globe,
  Hexagon,
  Lock,
  Maximize2,
  MousePointer2,
  Plus,
  Share2,
  ThumbsUp,
  Users,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { InfographicNode } from "@/atoms/infographic-node";
import { cn } from "@/lib/cn";
import { infographicNodeGraphMocks } from "./InfographicNodeGraph.mocks";
import type {
  InfographicGraphEdge,
  InfographicNodeGraphProps,
  InfographicNodeIconName,
} from "./InfographicNodeGraph.types";

const icons: Record<InfographicNodeIconName, ReactNode> = {
  lock: <Lock />,
  expand: <Maximize2 />,
  analytics: <BarChart3 />,
  cloud: <Cloud />,
  database: <Database />,
  thumbs: <ThumbsUp />,
  cursor: <MousePointer2 />,
  users: <Users />,
  globe: <Globe />,
  share: <Share2 />,
  network: <Hexagon />,
  plus: <Plus />,
  close: <X />,
};

interface MeasuredEdge {
  key: string;
  from: string;
  to: string;
  d: string;
  length: number;
}

function measureEdges(
  root: HTMLElement,
  svg: SVGSVGElement,
  edges: InfographicGraphEdge[],
): MeasuredEdge[] {
  const svgBox = svg.getBoundingClientRect();
  if (svgBox.width === 0 || svgBox.height === 0) return [];
  const viewW = svg.viewBox.baseVal.width || 600;
  const viewH = svg.viewBox.baseVal.height || 600;
  const scaleX = viewW / svgBox.width;
  const scaleY = viewH / svgBox.height;

  return edges.flatMap((edge) => {
    const fromEl = root.querySelector<HTMLElement>(
      `[data-node-id="${edge.from}"]`,
    );
    const toEl = root.querySelector<HTMLElement>(`[data-node-id="${edge.to}"]`);
    if (!fromEl || !toEl) return [];
    const fromBox = fromEl.getBoundingClientRect();
    const toBox = toEl.getBoundingClientRect();
    const x1 = (fromBox.left + fromBox.width / 2 - svgBox.left) * scaleX;
    const y1 = (fromBox.top + fromBox.height / 2 - svgBox.top) * scaleY;
    const x2 = (toBox.left + toBox.width / 2 - svgBox.left) * scaleX;
    const y2 = (toBox.top + toBox.height / 2 - svgBox.top) * scaleY;
    return [
      {
        key: `${edge.from}-${edge.to}`,
        from: edge.from,
        to: edge.to,
        d: `M ${x1} ${y1} L ${x2} ${y2}`,
        length: Math.hypot(x2 - x1, y2 - y1),
      },
    ];
  });
}

export function InfographicNodeGraph({
  className,
  nodes = infographicNodeGraphMocks.default.nodes,
  edges = infographicNodeGraphMocks.default.edges,
  revealOrder = infographicNodeGraphMocks.default.revealOrder,
  ...props
}: InfographicNodeGraphProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeIds, setActiveIds] = useState<Set<string>>(() => new Set());
  const [paths, setPaths] = useState<MeasuredEdge[]>([]);
  const graphNodes = nodes ?? [];
  const graphEdges = edges ?? [];
  const order = useMemo(
    () => revealOrder ?? graphNodes.map((node) => node.id),
    [graphNodes, revealOrder],
  );

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg) return;

    const measure = () => {
      setPaths(measureEdges(root, svg, graphEdges));
    };

    const frame = window.requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [graphEdges]);

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg || paths.length === 0) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    const setup = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setActiveIds(new Set(graphNodes.map((node) => node.id)));
        return;
      }

      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const pathEls = Array.from(
        svg.querySelectorAll<SVGPathElement>("[data-graph-edge]"),
      );
      pathEls.forEach((path, index) => {
        const length = paths[index]?.length ?? path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 72%",
            end: "bottom 18%",
            scrub: 0.65,
          },
        });

        order.forEach((id, index) => {
          const incoming = pathEls.filter((path) => path.dataset.to === id);
          timeline.call(
            () => {
              setActiveIds((current) => {
                const next = new Set(current);
                next.add(id);
                return next;
              });
            },
            undefined,
            index * 0.35,
          );
          incoming.forEach((path) => {
            timeline.to(
              path,
              { strokeDashoffset: 0, duration: 0.35, ease: "none" },
              index * 0.35,
            );
          });
        });
      }, root);

      revert = () => ctx.revert();
    };

    void setup();
    return () => {
      cancelled = true;
      revert?.();
    };
  }, [graphNodes, order, paths]);

  return (
    <div
      ref={rootRef}
      data-slot="infographic-node-graph"
      className={cn("relative aspect-square w-full max-w-[38rem]", className)}
      {...props}
    >
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 size-full text-foreground"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <path
            key={path.key}
            data-graph-edge=""
            data-from={path.from}
            data-to={path.to}
            d={path.d}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.28}
            strokeWidth={2}
          />
        ))}
      </svg>
      {graphNodes.map((node) => (
        <div
          key={node.id}
          data-node-id={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <InfographicNode
            label={node.label}
            value={node.value}
            tone={node.tone}
            shape={node.shape}
            icon={node.icon ? icons[node.icon] : undefined}
            state={activeIds.has(node.id) ? "active" : "idle"}
          />
        </div>
      ))}
    </div>
  );
}
