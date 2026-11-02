import { artworks } from "@/data/artworks";
import styles from "@/pages/artwork/Artwork.page.module.css";
import { getFullPath } from "@/utils/imagePaths";
import { Link, useParams } from "react-router-dom";

function ArtworkPage() {
	const { slug } = useParams();
	const artwork = artworks.find((art) => art.slug === slug);

	if (!artwork) {
		return (
			<section className={styles.notFound}>
				<p className={styles.artworkEyebrow}>The collection</p>
				<h1>Artwork not found</h1>
				<Link to="/portfolio">Return to the portfolio</Link>
			</section>
		);
	}

	return (
		<article className={styles.artworkPage}>
			<div className={styles.artworkPageInner}>
				<nav className={styles.artworkPageNav} aria-label="Breadcrumb">
					<Link to="/portfolio" className={styles.artworkPageNavLink}>
						← Back to portfolio
					</Link>
					<span>Artwork / {artwork.year}</span>
				</nav>

				<div className={styles.artworkLayout}>
					<figure className={styles.artworkFigure}>
						<div className={styles.imageWrap}>
							<img
								src={getFullPath(artwork.slug)}
								alt={`${artwork.title} (${artwork.year})`}
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
							From the collection · {artwork.year}
						</p>
						<h1
							id="artwork-title"
							className={styles.artworkMetaTitle}
						>
							{artwork.title}
						</h1>
						<div className={styles.metaRule} />
						<p className={styles.artworkMetaDescription}>
							{artwork.description}
						</p>
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
