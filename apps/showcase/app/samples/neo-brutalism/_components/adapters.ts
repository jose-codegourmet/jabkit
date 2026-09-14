import type { About6Image } from "@/marketing/about6";
import type { Content1Section } from "@/marketing/content1";
import type { Projects13Project } from "@/marketing/projects13";
import { sampleImage } from "../assets";
import { disciplineLabel, engagementLabel, projectHref } from "../content";
import type { ProjectRecord } from "../types";

export function toProjects13Projects(
  records: ProjectRecord[],
): Projects13Project[] {
  return records.map((project, index) => {
    const image = sampleImage(project.imageIds.object, project.alt.object);
    return {
      index: String(index + 1).padStart(2, "0"),
      title: project.title,
      date: `${disciplineLabel(project.discipline)} / ${project.year}`,
      description: project.problem,
      href: projectHref(project.slug),
      image: {
        src: image.src,
        alt: project.alt.object,
      },
    };
  });
}

export function toContent1Sections(project: ProjectRecord): Content1Section[] {
  const [brief, idea, applications] = project.sections;
  const object = sampleImage(project.imageIds.object, project.alt.object);
  const application = sampleImage(
    project.imageIds.application,
    project.alt.application,
  );

  return [
    {
      id: `${project.slug}-brief`,
      title: brief.title,
      blocks: [
        ...brief.paragraphs.map((text) => ({
          type: "paragraph" as const,
          text,
        })),
        {
          type: "list",
          items: [
            { title: "Audience and constraint", text: project.problem },
            { title: "Subject", text: project.subject },
          ],
        },
      ],
    },
    {
      id: `${project.slug}-idea`,
      title: idea.title,
      blocks: [
        ...idea.paragraphs.map((text) => ({
          type: "paragraph" as const,
          text,
        })),
        {
          type: "callout",
          callout: {
            title: "Central idea",
            body: project.idea,
          },
        },
        {
          type: "image",
          image: {
            src: object.src,
            alt: project.alt.object,
            caption: project.captions.object,
          },
        },
      ],
    },
    {
      id: `${project.slug}-applications`,
      title: applications.title,
      blocks: [
        ...applications.paragraphs.map((text) => ({
          type: "paragraph" as const,
          text,
        })),
        {
          type: "image",
          image: {
            src: application.src,
            alt: project.alt.application,
            caption: project.captions.application,
          },
        },
        {
          type: "table",
          table: {
            caption: "Deliverables in this case",
            columns: ["Piece", "Role"],
            rows: project.deliverables.map((item, index) => [
              `0${index + 1}`,
              item,
            ]),
          },
        },
        {
          type: "paragraph",
          text: `Scope for this case: ${engagementLabel(project.scopeId)}.`,
        },
      ],
    },
  ];
}

export function studioImages(kind: "story" | "workplace"): About6Image[] {
  if (kind === "story") {
    return [
      sampleImage(
        "neo-studio-a",
        "Worktable with printed proofs under hard directional light, fictional studio",
      ),
      sampleImage(
        "neo-team",
        "Three fictional collaborators around a production table",
      ),
      sampleImage(
        "neo-p01-b",
        "Close printed application material on the studio table",
      ),
    ].map((image) => ({
      src: image.src,
      alt: image.alt,
      aspectClassName: "aspect-[4/5]",
    }));
  }
  return [
    sampleImage(
      "neo-studio-b",
      "Production materials and vinyl tests on an off-white sweep",
    ),
    sampleImage(
      "neo-p04-a",
      "Campaign object still used as a workshop reference",
    ),
    sampleImage(
      "neo-hero",
      "Sculptural studio object used as a stand-in for the Good Noise hero",
    ),
  ].map((image, index) => ({
    src: image.src,
    alt: image.alt,
    aspectClassName: index === 1 ? "aspect-[4/3]" : "aspect-[4/5]",
  }));
}
