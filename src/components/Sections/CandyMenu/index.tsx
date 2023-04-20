import PictureFrame from "@/components/PictureFrame";

import styles from "./styles.module.css";

function CandyMenu() {
  return (
    <section className={styles.candyMenuContainer}>
      <PictureFrame
        imagePath="/images/balasSequinhasRecheadas.webp"
        altText="Cardápio físico no formato pdf"
        style={styles.pictureFrameModifierContainer}
        width={100}
        height={100}
      />

      <div className={styles.candyMenuInformation}>
        <h2 className={styles.candyMenuTitle}>Cardápio de Doces</h2>

        <p className={styles.candyMenuDescription}>
          Temos um
          {` `}
          <strong>cardápio online</strong>
          {` `}
          para facilitar seu pedido!
        </p>
      </div>
    </section>
  );
}

export default CandyMenu;
