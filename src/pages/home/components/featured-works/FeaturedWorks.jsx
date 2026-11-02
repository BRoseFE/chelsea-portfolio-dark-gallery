import { artworks } from "@/data/artworks";
import styles from "@/pages/home/components/featured-works/FeaturedWorks.module.css";
import ArtworkCard from "@/shared/components/artwork-card/ArtworkCard";
import { Link } from "react-router-dom";

function FeaturedWorks() {
	const featuredWorks = artworks
		.filter((a) => a?.slug && typeof a.featuredRank === "number")
		.sort((a, b) => a.featuredRank - b.featuredRank)
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
					<h2
						id="featured-works-title"
						className={styles.featuredTitle}
					>
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
