import { useQuery } from "@tanstack/react-query";
import { artworks as localArtworks } from "@/data/artworks";
import { sanityClient } from "@/lib/sanity/client";
import {
  artworkBySlugQuery,
  artworksQuery,
} from "@/lib/sanity/queries";

async function fetchArtworks() {
  return sanityClient.fetch(artworksQuery);
}

async function fetchArtworkBySlug(slug) {
  return sanityClient.fetch(artworkBySlugQuery, { slug });
}

function mergeArtworkSources(cmsArtworks = []) {
  const mergedBySlug = new Map(
    localArtworks.map((artwork) => [artwork.slug, artwork]),
  );

  for (const artwork of cmsArtworks) {
    if (artwork?.slug) {
      mergedBySlug.set(artwork.slug, artwork);
    }
  }

  const localSlugs = new Set(localArtworks.map((artwork) => artwork.slug));
  const cmsOnlyArtworks = [...mergedBySlug.values()]
    .filter((artwork) => !localSlugs.has(artwork.slug))
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));

  return [
    ...localArtworks.map((artwork) => mergedBySlug.get(artwork.slug)),
    ...cmsOnlyArtworks,
  ];
}

export function useArtworks() {
  const query = useQuery({
    queryKey: ["artworks"],
    queryFn: fetchArtworks,
  });

  return {
    ...query,
    artworks: mergeArtworkSources(query.data ?? []),
  };
}

export function useArtwork(slug) {
  const query = useQuery({
    queryKey: ["artwork", slug],
    queryFn: () => fetchArtworkBySlug(slug),
    enabled: Boolean(slug),
  });

  const localArtwork = localArtworks.find((artwork) => artwork.slug === slug);

  return {
    ...query,
    artwork: query.data ?? localArtwork ?? null,
  };
}
