import { ArrowTopRightIcon as ArrowUpRight } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { ArtImage } from "./_components/ArtImage";
import { engagements, homeProjects, processStages, startHref } from "./content";
import s from "./home.module.css";
export const metadata: Metadata = {
  title: "Independent branding studio",
  description:
    "Good Noise builds identities and launch campaigns for independent places, people, and ideas.",
};
export default function NeoHomePage() {
  return (
    <main id="top" className={s.home}>
      <section className={s.hero}>
        <div className={s.heroCopy}>
          <p className={s.eyebrow}>Independent minds. Unmistakable brands.</p>
          <h1>
            MAKE SOME
            <br />
            GOOD NOISE.
          </h1>
          <p>
            Brand identities and launch campaigns for the places and people
            doing their own thing.
          </p>
          <div className={s.actions}>
            <Button asChild>
              <a href="/work">
                See the work <ArrowUpRight width={20} height={20} />
              </a>
            </Button>
            <a className={s.plainLink} href={startHref()}>
              Start a brief
            </a>
          </div>
        </div>
        <ArtImage
          id="neo-hero"
          alt="Black megaphone with a lime band, photographed in hard studio light"
          priority
          className={s.heroImage}
        />
      </section>
      <div className={s.ticker}>
        <span>Identity</span>
        <span aria-hidden="true">↗</span>
        <span>Art direction</span>
        <span aria-hidden="true">↗</span>
        <span>Campaigns</span>
        <span aria-hidden="true">↗</span>
        <span>Made to be seen</span>
      </div>
      <section className={s.work} aria-labelledby="work-title">
        <div className={s.sectionTitle}>
          <h2 id="work-title">
            WORK THAT
            <br />
            GETS OUT THERE.
          </h2>
          <a href="/work" className={s.plainLink}>
            All projects <ArrowUpRight width={20} height={20} />
          </a>
        </div>
        <div className={s.projectGrid}>
          {homeProjects().map((p, i) => (
            <a key={p.slug} href={`/work/${p.slug}`} className={s.project}>
              <ArtImage id={p.imageIds.object} alt={p.alt.object} />
              <div className={s.projectCaption}>
                <span className={s.index}>0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>
                    {p.subject} · {p.discipline}
                  </p>
                </div>
                <ArrowUpRight width={28} height={28} />
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className={s.services} aria-labelledby="engagements">
        <div className={s.serviceVisual}>
          <ArtImage
            id="neo-service-object"
            alt="Black stationery case, lime cards, and a curling white paper strip"
          />
          <p>
            From the first mark
            <br />
            to the last printed piece.
          </p>
        </div>
        <div className={s.serviceCopy}>
          <h2 id="engagements">
            PICK YOUR
            <br />
            STARTING POINT.
          </h2>
          <div>
            {engagements.map((e, i) => (
              <a
                className={s.serviceRow}
                key={e.id}
                href={startHref({ plan: e.id })}
              >
                <span>0{i + 1}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.suitable}</p>
                </div>
                <ArrowUpRight width={24} height={24} />
              </a>
            ))}
          </div>
          <a href="/services" className={s.plainLink}>
            Compare scopes <ArrowUpRight width={18} height={18} />
          </a>
        </div>
      </section>
      <section className={s.studio} aria-labelledby="method">
        <div className={s.studioIntro}>
          <h2 id="method">
            LESS GUESSWORK.
            <br />
            MORE GOOD WORK.
          </h2>
          <p>
            One clear idea. Tested on real objects.
            <br />A system you can keep using.
          </p>
        </div>
        <ArtImage
          id="neo-process-wall"
          alt="Good Noise poster studies, pinned above the ink-covered studio workbench"
          className={s.wall}
        />
        <ol className={s.steps}>
          {processStages.map((stage, i) => (
            <li key={stage.id}>
              <span>0{i + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className={s.close} aria-labelledby="close">
        <ArtImage
          id="neo-cta"
          mobile="neo-cta-mobile"
          alt="An ink roller and folded black carton on stacked lime and white paper"
        />
        <div className={s.closeCopy}>
          <h2 id="close">
            GOT SOMETHING
            <br />
            TO SAY?
          </h2>
          <p>Let's give it a face, a voice, and a place in the world.</p>
          <Button asChild>
            <a href={startHref()}>
              Start a brief <ArrowUpRight width={20} height={20} />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
