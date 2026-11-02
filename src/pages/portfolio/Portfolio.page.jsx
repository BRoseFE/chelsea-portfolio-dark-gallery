import { artworks } from "@/data/artworks";
import styles from "@/pages/portfolio/Portfolio.page.module.css";
import ArtworkCard from "@/shared/components/artwork-card/ArtworkCard";

function PortfolioPage() {
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
				<span className={styles.portfolioCount}>
					{String(artworks.length).padStart(2, "0")} works
				</span>
			</header>
			<ul className={styles.portfolioGrid}>
				{artworks.map((artwork) => (
					<li key={artwork.slug} className={styles.portfolioPiece}>
						<ArtworkCard artwork={artwork} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default PortfolioPage;
