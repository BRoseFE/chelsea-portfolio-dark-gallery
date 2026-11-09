import { useArtworks } from "@/hooks/useArtworks";
import styles from "@/pages/portfolio/Portfolio.page.module.css";
import ArtworkCard from "@/shared/components/artwork-card/ArtworkCard";

function PortfolioPage() {
	const { artworks, isLoading, isError } = useArtworks();

	return (
		<section
			className={styles.portfolioPage}
			aria-labelledby="portfolio-title"
		>
			<header className={styles.portfolioHeader}>
				<p className={styles.portfolioEyebrow}>The collection</p>

				<h1 id="portfolio-title" className={styles.portfolioTitle}>
					Portfolio
				</h1>

				<p className={styles.portfolioDescription}>
					A selection of drawings, studies, and pieces collected over
					the years.
				</p>

				{!isLoading && !isError && artworks.length > 0 && (
					<span className={styles.portfolioCount}>
						{String(artworks.length).padStart(2, "0")} works
					</span>
				)}
			</header>

			{isLoading && <p role="status">Loading artwork...</p>}

			{isError && (
				<p role="alert">
					The collection could not be loaded. Please try again later.
				</p>
			)}

			{!isLoading && !isError && artworks.length === 0 && (
				<p role="status">
					No artwork is currently available. Please check back later.
				</p>
			)}

			{!isLoading && !isError && artworks.length > 0 && (
				<ul className={styles.portfolioGrid}>
					{artworks.map((artwork) => (
						<li
							key={artwork.slug}
							className={styles.portfolioPiece}
						>
							<ArtworkCard artwork={artwork} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
}

export default PortfolioPage;
