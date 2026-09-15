import { ArrowTopRightIcon as ArrowUpRight } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Projects16 } from "@/marketing/projects16";
import { ArtImage } from "./_components/ArtImage";
import { toProjects16Images } from "./_components/adapters";
import { contactHref, homeProjects, principles } from "./content";
import s from "./home.module.css";

export const metadata: Metadata = {
  title: "Architecture & interiors",
  description:
    "West Room Studio designs compact homes, considered interiors, and useful spaces for everyday life.",
};

export default function MinimalHomePage() {
  return (
    <main id="top" className={s.home}>
      <section data-motion-hero className={s.hero}>
        <div className={s.heroCopy}>
          <p className={s.label}>Architecture & interiors</p>
          <h1 data-motion-title>
            Room for
            <br />
            everyday life.
          </h1>
          <p className={s.lede}>
            Considered homes, workrooms, and small spaces. Designed around the
            way you live.
          </p>
          <Button asChild>
            <a href="/work">
              Explore our work <ArrowUpRight width={17} height={17} />
            </a>
          </Button>
        </div>
        <figure className={s.heroFigure}>
          <ArtImage
            id="min-hero"
            mobile="min-hero-mobile"
            alt="Daylight and garden views through the Courtyard House interior"
            priority
          />
          <figcaption>
            <span>Courtyard House</span>
            <span>North Hollow · 2024</span>
          </figcaption>
        </figure>
      </section>
      <div className={s.practiceLine}>
        <span>Small spaces. Lasting possibilities.</span>
        <span>Residential · Interiors · Adaptive reuse</span>
      </div>
      <Projects16
        data-motion-gallery
        className={s.work}
        title="A few places we've made."
        description="Homes, shared rooms, and the spaces in between. Each begins with what is already there."
        action={{ label: "View all six projects", href: "/work" }}
        images={toProjects16Images(homeProjects())}
      />
      <section
        data-motion-reveal
        className={s.approach}
        aria-labelledby="approach"
      >
        <ArtImage
          id="min-process-model"
          alt="Carefully cut study model of a compact urban room"
          className={s.model}
        />
        <div className={s.approachCopy}>
          <h2 id="approach">
            Good rooms begin
            <br />
            with good questions.
          </h2>
          <p>
            Where does the light fall? What belongs together? What can we leave
            out? We work from the scale of a room to the detail of a join.
          </p>
          <ol>
            {principles.map((p, i) => (
              <li key={p.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className={s.textLink} href="/studio">
            Meet the practice <ArrowUpRight width={17} height={17} />
          </a>
        </div>
      </section>
      <section
        data-motion-reveal
        className={s.materials}
        aria-labelledby="materials-title"
      >
        <div className={s.materialCopy}>
          <h2 id="materials-title">
            Few materials.
            <br />
            Carefully put together.
          </h2>
          <p>
            Timber, stone, plaster, linen. Honest surfaces that feel better with
            use.
          </p>
          <a className={s.textLink} href="/services">
            Our services <ArrowUpRight width={17} height={17} />
          </a>
        </div>
        <ArtImage
          id="min-materials"
          alt="Timber end grain, stone, plaster, and woven linen arranged in a material study"
        />
        <ArtImage
          id="min-background-shadow"
          alt="A crisp window shadow on pale mineral plaster"
          className={s.shadowStudy}
        />
      </section>
      <section data-motion-reveal className={s.close} aria-labelledby="inquire">
        <ArtImage
          id="min-cta"
          mobile="min-cta-mobile"
          alt="Room models and timber samples on the studio worktable"
        />
        <div className={s.closeCopy}>
          <h2 id="inquire">
            What room are
            <br />
            you thinking about?
          </h2>
          <p>Start with a place, a possibility, or a question.</p>
          <Button asChild>
            <a href={contactHref()}>
              Discuss a project <ArrowUpRight width={17} height={17} />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
