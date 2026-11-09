import FeaturedWorks from "@/pages/home/components/featured-works/FeaturedWorks";
import styles from "@/pages/home/Home.page.module.css";
import About from "@/shared/components/about/AboutSection";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className={styles.home}>
			<section className={styles.hero} aria-labelledby="home-title">
				<div className={styles.heroInner}>
					<p className={styles.eyebrow}>
						<span /> An independent drawing portfolio
					</p>
					<h1 id="home-title" className={styles.heroTitle}>
						The art of <em>seeing</em>
						<br />
						what words cannot.
					</h1>
					<p className={styles.heroDescription}>
						A collection of drawings by Chelsea Rose, exploring
						expression, feeling, and the details that make each
						subject human.
					</p>
					<div className={styles.heroActions}>
						<Link to="/portfolio" className={styles.primaryLink}>
							Explore the collection{" "}
							<span aria-hidden="true">↗</span>
						</Link>
						<Link to="/about" className={styles.secondaryLink}>
							Meet the artist
						</Link>
					</div>
					<div className={styles.heroNote}>
						<span>01</span> Selected works · 2021-2026
					</div>
				</div>
				<div className={styles.heroRule} aria-hidden="true" />
			</section>
			<FeaturedWorks />
			<About title="Behind the drawings" />
		</div>
	);
}

export default HomePage;
