import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity/client";

const imageBuilder = createImageUrlBuilder(sanityClient);

export function getSanityImageUrl(source, { width, quality = 85 } = {}) {
	if (!source?.asset) return undefined;

	let builder = imageBuilder.image(source).auto("format").fit("max");

	if (width) builder = builder.width(width);
	if (quality) builder = builder.quality(quality);

	return builder.url();
}
