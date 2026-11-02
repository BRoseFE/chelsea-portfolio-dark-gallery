import chelsea from "@/assets/images/chelsea.webp";
import styles from "@/shared/components/about/AboutSection.module.css";
import Button from "@/shared/components/button/Button";

function AboutSection({
	intro = "Hi, I'm Chelsea",
	description = "I enjoy drawing.",
	img = chelsea,
	title,
}) {
	const titleId = title ? "about-section-title" : undefined;

	return (
		<section className={styles.about} aria-labelledby={titleId}>
			<div className={styles.aboutInner}>
				{title && (
					<header className={styles.aboutHeader}>
						<p className={styles.aboutKicker}>The artist</p>
						<h2 id={titleId} className={styles.aboutHeaderTitle}>
							{title}
						</h2>
					</header>
				)}
				<div className={styles.aboutContent}>
					<figure className={styles.aboutImageContainer}>
						<img
							className={styles.aboutImage}
							src={img}
							alt="Chelsea Rose"
							loading="lazy"
						/>
						<figcaption>Artist · Chelsea Rose</figcaption>
					</figure>
					<div className={styles.aboutText}>
						<p className={styles.aboutIntro}>{intro}</p>
						<div className={styles.aboutContentText}>
							{description}
						</div>
						<div className={styles.aboutActions}>
							<Button text="Get in touch" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
