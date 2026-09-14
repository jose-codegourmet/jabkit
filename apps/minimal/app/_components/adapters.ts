import type { Content1Section } from "@/marketing/content1";
import type { Projects16Image } from "@/marketing/projects16";
import { sampleImage } from "../assets";
import { projectHref } from "../content";
import type { ProjectRecord } from "../types";

export function toProjects16Images(
  records: ProjectRecord[],
): Projects16Image[] {
  return records.slice(0, 4).map((project, index) => {
    const view = project.slug === "reading-room" ? "detail" : "establishing";
    const image = sampleImage(project.imageIds[view], project.alt[view]);
    return {
      src: image.src,
      alt: project.alt[view],
      title: project.title,
      href: projectHref(project.slug),
      aspect: index % 2 === 0 ? "landscape" : "portrait",
    };
  });
}

export function toContent1Sections(project: ProjectRecord): Content1Section[] {
  const [brief, constraints, response] = project.sections;
  const establishing = sampleImage(
    project.imageIds.establishing,
    project.alt.establishing,
  );
  const detail = sampleImage(project.imageIds.detail, project.alt.detail);

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
          type: "paragraph",
          text: project.brief,
        },
      ],
    },
    {
      id: `${project.slug}-constraints`,
      title: constraints.title,
      blocks: [
        ...constraints.paragraphs.map((text) => ({
          type: "paragraph" as const,
          text,
        })),
        {
          type: "list",
          items: [
            {
              title: "Built limits",
              text: project.constraints,
            },
          ],
        },
        {
          type: "image",
          image: {
            src: establishing.src,
            alt: project.alt.establishing,
            caption: project.captions.establishing,
          },
        },
      ],
    },
    {
      id: `${project.slug}-response`,
      title: response.title,
      blocks: [
        ...response.paragraphs.map((text) => ({
          type: "paragraph" as const,
          text,
        })),
        {
          type: "image",
          image: {
            src: detail.src,
            alt: project.alt.detail,
            caption: project.captions.detail,
          },
        },
        {
          type: "callout",
          callout: {
            title: "What changed in the room",
            body: project.outcome,
          },
        },
      ],
    },
  ];
}
