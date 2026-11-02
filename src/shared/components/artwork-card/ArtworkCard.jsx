import styles from "@/shared/components/artwork-card/ArtworkCard.module.css";
import { getThumbPath } from "@/utils/imagePaths";
import { Link } from "react-router-dom";

function ArtworkCard({ artwork }) {
	const { slug, title, year } = artwork;
	if (!slug || !title) return null;

	return (
		<article className={styles.artworkCard}>
			<Link
				to={`/artwork/${slug}`}
				className={styles.artworkCardLink}
				aria-label={`View ${title}`}
			>
				<div className={styles.artworkImageFrame}>
					<img
						src={getThumbPath(slug)}
						alt={`${title} (${year})`}
						loading="lazy"
						decoding="async"
						className={styles.artworkCardImage}
					/>
					<span className={styles.imageOverlay} aria-hidden="true">
						<span>
							View artwork <span>↗</span>
						</span>
					</span>
				</div>
				<div className={styles.artworkCardMeta}>
					<h3 className={styles.artworkCardTitle}>{title}</h3>
					<span className={styles.artworkCardYear}>{year}</span>
				</div>
			</Link>
		</article>
	);
}

export default ArtworkCard;
