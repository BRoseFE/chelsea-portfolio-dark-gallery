import { useArtwork } from "@/hooks/useArtworks";
import { getSanityImageUrl } from "@/lib/sanity/image";
import styles from "@/pages/artwork/Artwork.page.module.css";
import { getFullPath } from "@/utils/imagePaths";
import { Link, useParams } from "react-router-dom";

function ArtworkPage() {
  const { slug } = useParams();
  const { artwork, isPending, isError } = useArtwork(slug);

  if (!artwork) {
    return (
      <section className={styles.notFound}>
        <p className={styles.artworkEyebrow}>The collection</p>
        <h1>
          {isPending
            ? "Loading artwork"
            : isError
              ? "Unable to load artwork"
              : "Artwork not found"}
        </h1>
        {isError && (
          <p role="status">
            The CMS could not be reached. Please try again shortly.
          </p>
        )}
        <Link to="/portfolio">Return to the portfolio</Link>
      </section>
    );
  }

  const imageUrl =
    getSanityImageUrl(artwork.fullImage, { width: 2400, quality: 90 }) ??
    getFullPath(artwork.slug);
  const imageAlt = artwork.year
    ? `${artwork.title} (${artwork.year})`
    : artwork.title;

  return (
    <article className={styles.artworkPage}>
      <div className={styles.artworkPageInner}>
        <nav className={styles.artworkPageNav} aria-label="Breadcrumb">
          <Link to="/portfolio" className={styles.artworkPageNavLink}>
            ← Back to portfolio
          </Link>
          <span>
            Artwork{artwork.year ? ` / ${artwork.year}` : ""}
          </span>
        </nav>

        <div className={styles.artworkLayout}>
          <figure className={styles.artworkFigure}>
            <div className={styles.imageWrap}>
              <img
                src={imageUrl}
                alt={imageAlt}
                className={styles.artworkPageImage}
              />
            </div>
            <figcaption className={styles.artworkMetaSignature}>
              © Chelsea Rose
            </figcaption>
          </figure>

          <section
            className={styles.artworkMeta}
            aria-labelledby="artwork-title"
          >
            <p className={styles.artworkEyebrow}>
              From the collection{artwork.year ? ` · ${artwork.year}` : ""}
            </p>
            <h1 id="artwork-title" className={styles.artworkMetaTitle}>
              {artwork.title}
            </h1>
            <div className={styles.metaRule} />
            {artwork.description && (
              <p className={styles.artworkMetaDescription}>
                {artwork.description}
              </p>
            )}
            <Link to="/portfolio" className={styles.moreWorkLink}>
              Explore more work <span>↗</span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}

export default ArtworkPage;
