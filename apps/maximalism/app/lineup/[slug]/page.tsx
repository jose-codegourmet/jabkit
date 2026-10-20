import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artistSlugs, getArtist } from "../../_data/artists";
import { ArtistPage } from "./_page/ArtistPage";
import { artistNotFoundCopy, artistSeo } from "./_page/content";

type ArtistRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artistSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArtistRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) {
    return {
      title: artistNotFoundCopy.heading,
      robots: { index: false },
    };
  }
  return artistSeo(artist);
}

export default async function Page({ params }: ArtistRouteProps) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();
  return <ArtistPage artist={artist} />;
}
