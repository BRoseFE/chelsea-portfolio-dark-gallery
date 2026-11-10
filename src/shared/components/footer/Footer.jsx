import styles from "@/shared/components/footer/Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInner}>
				<small className={styles.footerCopyright}>
					© {new Date().getFullYear()} Chelsea Rose - Drawings •
					Website by{" "}
					<a
						href="https://bransonrose.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						Branson Rose
					</a>
				</small>
			</div>
		</footer>
	);
}

export default Footer;
