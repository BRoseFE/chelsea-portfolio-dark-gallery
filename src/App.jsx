import styles from "@/App.module.css";
import AboutPage from "@/pages/about/About.page";
import ArtworkPage from "@/pages/artwork/Artwork.page";
import HomePage from "@/pages/home/Home.page";
import PortfolioPage from "@/pages/portfolio/Portfolio.page";
import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

const StudioPage = lazy(() => import("@/pages/studio/Studio.page"));

function App() {
	const location = useLocation();

	// Keep Sanity Studio separate from the public portfolio shell.
	// Sanity handles its own nested routes beneath /studio.
	if (location.pathname.startsWith("/studio")) {
		return (
			<Suspense fallback={<div>Loading Studio...</div>}>
				<StudioPage />
			</Suspense>
		);
	}

	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.main}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/portfolio" element={<PortfolioPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/artwork/:slug" element={<ArtworkPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
