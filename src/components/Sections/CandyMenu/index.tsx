import { headers } from "next/headers";
import Image from "next/image";

import DefaultButton from "@/components/DefaultComponents/DefaultButton";
import PictureFrame from "@/components/PictureFrame";

import { isMobile } from "@/utils/helpers";

import styles from "./styles.module.css";

function CandyMenu() {
  const header = headers();
  const isMobileDevice = isMobile(header.get(`user-agent`));

  const buttonStyles = {
    buttonContainerStyle: styles.candyMenuButtonContainer,
    buttonStyle: styles.candyMenuButton,
    bulletStyle: styles.candyMenuBullet,
  };

  return (
    <section className={styles.candyMenuContainer}>
      {!isMobileDevice && (
        <PictureFrame
          imagePath="/images/balasSequinhasRecheadas.webp"
          altText="Cardápio físico no formato pdf"
          style={styles.pictureFrameModifierContainer}
          width={100}
          height={100}
        />
      )}

      <div className={styles.candyMenuInformation}>
        <h2 className={styles.candyMenuTitle}>Cardápio de Doces</h2>

        <p className={styles.candyMenuDescription}>
          Temos um
          {` `}
          <strong>cardápio online</strong>
          {` `}
          para facilitar seu pedido!
        </p>

        <DefaultButton
          href="/cardapio"
          titleAccessibility="Ver cardápio"
          hasBullet
          style={buttonStyles}>
          <Image
            src="/images/icons/menuIcon.svg"
            alt="ícone para simbolizar um cardápio"
            width={20}
            height={20}
          />
          Cardápio
        </DefaultButton>
      </div>
    </section>
  );
}

export default CandyMenu;
