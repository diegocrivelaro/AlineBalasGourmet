import { memo } from "react";

import DefaultButton from "@/components/DefaultComponents/DefaultButton";
import HeroSliderHomePage from "@/components/HeroSliderHomePage";

import styles from "./styles.module.css";

function HeroHomePage() {
  const buttonStyles = {
    containerStyle: styles.heroHomePageButtonContainer,
    buttonStyle: styles.heroHomePageButton,
    bulletStyle: styles.heroHomePageBullet,
  };

  return (
    <section className={styles.heroHomePageContainer}>
      <HeroSliderHomePage />
      <article className={styles.heroHomePageContent}>
        <h1 className={styles.heroHomePageTitle}>Balas para adoçar seu dia!</h1>
        <p className={styles.heroHomePageDescription}>
          Balas feitas com todo amor
        </p>
      </article>

      <DefaultButton
        href="/cardapio"
        titleAccessibility="Faça seu pedido agora!"
        style={buttonStyles}
        hasBullet>
        Fazer pedido!
      </DefaultButton>
    </section>
  );
}

export default memo(HeroHomePage);
