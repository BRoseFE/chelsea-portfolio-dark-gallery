export const artworkFields = `
  _id,
  title,
  "slug": slug.current,
  description,
  year,
  category,
  featured,
  displayOrder,
  thumbnail,
  fullImage
`;

export const artworksQuery = `
  *[_type == "artwork" && defined(slug.current)]
    | order(displayOrder asc, _createdAt desc) {
      ${artworkFields}
    }
`;

export const artworkBySlugQuery = `
  *[_type == "artwork" && slug.current == $slug][0] {
    ${artworkFields}
  }
`;
