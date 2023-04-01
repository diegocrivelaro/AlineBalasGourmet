import { memo } from "react";

import HeroSliderHomePage from "@/components/HeroSliderHomePage";

import styles from "./styles.module.css";

function HeroHomePage() {
  return (
    <section className={styles.heroHomePageContainer}>
      <HeroSliderHomePage />

      <article className={styles.heroHomePageContent}>
        <h1 className={styles.heroHomePageTitle}>Balas para adoçar seu dia!</h1>
        <p className={styles.heroHomePageDescription}>
          Balas feitas com todo amor
        </p>
      </article>
    </section>
  );
}

export default memo(HeroHomePage);
