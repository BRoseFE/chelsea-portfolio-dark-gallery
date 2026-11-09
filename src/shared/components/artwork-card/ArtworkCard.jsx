import styles from "@/shared/components/artwork-card/ArtworkCard.module.css";
import { getSanityImageUrl } from "@/lib/sanity/image";
import { Link } from "react-router-dom";

function ArtworkCard({ artwork }) {
	const { slug, title, year } = artwork;
	if (!slug || !title) return null;

	const imageUrl = getSanityImageUrl(artwork.thumbnail, {
		width: 900,
	});

	const imageAlt = year ? `${title} (${year})` : title;

	return (
		<article className={styles.artworkCard}>
			<Link
				to={`/artwork/${slug}`}
				className={styles.artworkCardLink}
				aria-label={`View ${title}`}
			>
				<div className={styles.artworkImageFrame}>
					{imageUrl ? (
						<img
							src={imageUrl}
							alt={imageAlt}
							loading="lazy"
							decoding="async"
							className={styles.artworkCardImage}
						/>
					) : (
						<p role="status">Artwork image unavailable.</p>
					)}

					<span className={styles.imageOverlay} aria-hidden="true">
						<span>
							View artwork <span>↗</span>
						</span>
					</span>
				</div>

				<div className={styles.artworkCardMeta}>
					<h3 className={styles.artworkCardTitle}>{title}</h3>
					{year && (
						<span className={styles.artworkCardYear}>{year}</span>
					)}
				</div>
			</Link>
		</article>
	);
}

export default ArtworkCard;
