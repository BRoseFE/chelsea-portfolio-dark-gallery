import styles from "@/pages/about/About.page.module.css";
import AboutSection from "@/shared/components/about/AboutSection";

function AboutPage() {
	return (
		<div className={styles.aboutPage}>
			<header className={styles.aboutPageHeader}>
				<p className={styles.aboutPageEyebrow}>
					A little about the artist
				</p>
				<h1 className={styles.aboutPageTitle}>About Chelsea</h1>
			</header>
			<section className={styles.aboutSection}>
				<AboutSection
					intro="Welcome to my portfolio"
					description={
						<>
							<p>
								I began drawing with my cousin when we were
								children, sometime before the age of ten. It was
								not anything formal-just moments here and there
								with pencils and paper, filling quiet spaces the
								way children do.
							</p>
							<p>
								Life around us was often chaotic and as I grew
								older the noise of it did not fade. What I did
								notice, though, was how deeply aware I was of
								people. I have always been sensitive to the
								small things others might miss-the quick shift
								in someone's expression, the tension in a smile,
								the micro expressions that pass across a face
								for only a second before disappearing again.
							</p>
							<p>
								Seeing people that closely can be complicated.
								It can quickly create distance in new
								relationships, and sometimes even in the ones
								that have been there my entire life. Observing
								so much leaves a lot to process.
							</p>
							<p>
								Drawing has become the place where I do that.
								What started as a quiet childhood activity has
								grown into something much more necessary. It's
								where I slow things down, where moments-past and
								present-can be examined, understood and
								sometimes finally released.
							</p>
							<p>
								For me, drawing is not only about creating an
								image. It's a way of making sense of the things
								I have witnessed, what I have felt, and what has
								stayed with me long after the moment itself has
								passed.
							</p>
						</>
					}
				/>
			</section>
		</div>
	);
}

export default AboutPage;
