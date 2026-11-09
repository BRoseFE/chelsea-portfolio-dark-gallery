import { defineField, defineType } from "sanity";

export const artwork = defineType({
	name: "artwork",
	title: "Artwork",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required().min(1).max(120),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.max(1000),
		}),
		defineField({
			name: "year",
			title: "Year Created",
			type: "number",
			validation: (Rule) =>
				Rule.integer()
					.min(1900)
					.max(new Date().getFullYear() + 1),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			description:
				"Optional category label, such as Portrait, Botanical, or Abstract.",
			validation: (Rule) => Rule.max(80),
		}),
		defineField({
			name: "thumbnail",
			title: "Thumbnail Image",
			type: "image",
			options: { hotspot: true },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "fullImage",
			title: "Full-resolution Image",
			type: "image",
			options: { hotspot: true },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "featured",
			title: "Featured",
			type: "boolean",
			initialValue: false,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "displayOrder",
			title: "Display Order",
			type: "number",
			description:
				"Lower numbers appear earlier when the portfolio is sorted by display order.",
			initialValue: 0,
			validation: (Rule) => Rule.required().integer().min(0),
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "year",
			media: "thumbnail",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle: subtitle ? String(subtitle) : "Year not set",
				media,
			};
		},
	},
});

export default artwork;
