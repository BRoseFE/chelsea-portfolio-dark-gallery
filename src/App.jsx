import styles from "@/App.module.css";
import AboutPage from "@/pages/about/About.page";
import ArtworkPage from "@/pages/artwork/Artwork.page";
import HomePage from "@/pages/home/Home.page";
import PortfolioPage from "@/pages/portfolio/Portfolio.page";
import { Route, Routes } from "react-router-dom";
import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/Header";

function App() {
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
