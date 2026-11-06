import { useArtworks } from "@/hooks/useArtworks";
import styles from "@/pages/home/components/featured-works/FeaturedWorks.module.css";
import ArtworkCard from "@/shared/components/artwork-card/ArtworkCard";
import { Link } from "react-router-dom";

function FeaturedWorks() {
  const { artworks } = useArtworks();
  const featuredWorks = artworks
    .filter(
      (artwork) =>
        artwork?.slug &&
        (artwork.featured === true ||
          (artwork.featured !== false &&
            typeof artwork.featuredRank === "number")),
    )
    .sort(
      (a, b) =>
        (a.displayOrder ?? a.featuredRank ?? 0) -
        (b.displayOrder ?? b.featuredRank ?? 0),
    )
    .slice(0, 6);

  if (!featuredWorks.length) return null;

  return (
    <section
      className={styles.featuredWorks}
      aria-labelledby="featured-works-title"
    >
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.featuredKicker}>A closer look</p>
          <h2 id="featured-works-title" className={styles.featuredTitle}>
            Selected works
          </h2>
        </div>
        <Link to="/portfolio" className={styles.viewAll}>
          View all work <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <ul className={styles.featuredGrid}>
        {featuredWorks.map((artwork) => (
          <li key={artwork.slug} className={styles.featuredItem}>
            <ArtworkCard artwork={artwork} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedWorks;
