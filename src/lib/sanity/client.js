import { createClient } from "@sanity/client";

export const sanityClient = createClient({
	projectId: "1k9fi2a1",
	dataset: "production",
	apiVersion: "2025-01-01",
	useCdn: true,
	perspective: "published",
});
