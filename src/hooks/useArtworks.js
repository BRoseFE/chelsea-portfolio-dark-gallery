import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity/client";
import { artworkBySlugQuery, artworksQuery } from "@/lib/sanity/queries";

async function fetchArtworks() {
	return sanityClient.fetch(artworksQuery);
}

async function fetchArtworkBySlug(slug) {
	return sanityClient.fetch(artworkBySlugQuery, { slug });
}

export function useArtworks() {
	const query = useQuery({
		queryKey: ["artworks"],
		queryFn: fetchArtworks,
	});

	return {
		...query,
		artworks: query.data ?? [],
	};
}

export function useArtwork(slug) {
	const query = useQuery({
		queryKey: ["artwork", slug],
		queryFn: () => fetchArtworkBySlug(slug),
		enabled: Boolean(slug),
	});

	return {
		...query,
		artwork: query.data ?? null,
	};
}
