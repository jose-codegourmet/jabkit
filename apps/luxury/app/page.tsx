import { ArrowTopRightIcon as ArrowUpRight } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { ArtImage } from "./_components/ArtImage";
import { RoomCarousel } from "./_components/RoomCarousel";
import { experienceHref, experiences, inquireHref } from "./content";
import s from "./home.module.css";
export const metadata: Metadata = {
  title: "A slower kind of stay",
  description:
    "Three considered rooms, a seasonal table, and still water. Discover Stillwater House.",
};
export default function LuxuryHomePage() {
  return (
    <main id="top" className={s.home}>
      <section className={s.hero}>
        <ArtImage
          id="lux-hero"
          mobile="lux-hero-mobile"
          alt="Stillwater House beside a quiet lake at the edge of the woodland"
          priority
        />
        <div className={s.heroCopy}>
          <p>Stillwater Reach</p>
          <h1>
            A slower kind
            <br />
            of stay.
          </h1>
          <p className={s.lede}>
            Three rooms. Open water. A little time to yourself.
          </p>
          <div className={s.actions}>
            <Button asChild>
              <a href="/rooms">
                Explore rooms <ArrowUpRight width={16} height={16} />
              </a>
            </Button>
            <a href={inquireHref()} className={s.heroLink}>
              Plan a stay
            </a>
          </div>
        </div>
      </section>
      <section className={s.intro}>
        <img
          src="/assets/design-systems/luxury/lux-logo-symbol.webp"
          alt=""
          width={48}
          height={40}
        />
        <h2>
          Nothing to hurry.
          <br />
          Plenty to come back to.
        </h2>
        <p>
          A house at the water's edge, with timber underfoot, a table set for
          the season, and rooms that make space for the view.
        </p>
        <a href="/house" className={s.textLink}>
          Discover the house <ArrowUpRight width={16} height={16} />
        </a>
      </section>
      <div className={s.rooms}>
        <RoomCarousel />
      </div>
      <section className={s.experiences} aria-labelledby="experience-home">
        <ArtImage
          id="lux-dining-detail"
          alt="A seasonal dinner served on the timber porch overlooking the lake"
        />
        <div className={s.experienceCopy}>
          <h2 id="experience-home">
            Let the day
            <br />
            find its own pace.
          </h2>
          <p>
            Take the path through the trees. Stay for another cup. Come back
            when the table is ready.
          </p>
          <div className={s.experienceLinks}>
            {experiences.map((e, i) => (
              <a href={experienceHref(e.slug)} key={e.slug}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.duration}</p>
                </div>
                <ArrowUpRight width={17} height={17} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className={s.house} aria-labelledby="house-home">
        <div className={s.houseCopy}>
          <h2 id="house-home">
            At home,
            <br />
            beside the water.
          </h2>
          <p>
            A stone threshold. A familiar chair. The changing color of the lake.
            A place remembered through its smallest details.
          </p>
          <a href="/house" className={s.textLink}>
            Inside Stillwater <ArrowUpRight width={16} height={16} />
          </a>
        </div>
        <ArtImage
          id="lux-background-water"
          alt="Forest reflections shifting across the surface of the lake"
          className={s.water}
        />
        <ArtImage
          id="lux-arrival-detail"
          alt="An open timber door and warm lantern at the house entrance"
          className={s.door}
        />
      </section>
      <section className={s.close} aria-labelledby="plan-stay">
        <ArtImage
          id="lux-cta"
          mobile="lux-cta-mobile"
          alt="The covered porch at dusk, with warm light spilling from an open door"
        />
        <div className={s.closeCopy}>
          <p className={s.small}>Your time at Stillwater</p>
          <h2 id="plan-stay">
            The door
            <br />
            is open.
          </h2>
          <p>Choose a room. Tell us when you would like to come.</p>
          <Button asChild>
            <a href={inquireHref()}>
              Plan a stay <ArrowUpRight width={16} height={16} />
            </a>
          </Button>
          <span className={s.note}>
            A local inquiry preview. No booking is made.
          </span>
        </div>
      </section>
    </main>
  );
}
