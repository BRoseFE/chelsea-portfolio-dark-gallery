import styles from "@/shared/components/header/Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
	const navLinkClass = ({ isActive }) =>
		isActive
			? `${styles.headerNavListLink} ${styles.activeLink}`
			: styles.headerNavListLink;

	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<div className={styles.headerTitle}>
					<p>
						<NavLink className={styles.headerTitleLink} to="/" end>
							Chelsea's Drawings
						</NavLink>
					</p>
				</div>

				<nav className={styles.headerNav}>
					<ul className={styles.headerNavList}>
						<li>
							<NavLink to="/" className={navLinkClass} end>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink to="/portfolio" className={navLinkClass}>
								Portfolio
							</NavLink>
						</li>

						<li>
							<NavLink to="/about" className={navLinkClass}>
								About
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
