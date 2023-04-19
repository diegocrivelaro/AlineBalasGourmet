import { memo } from "react";

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
    </section>
  );
}

export default memo(CandyMenu);
