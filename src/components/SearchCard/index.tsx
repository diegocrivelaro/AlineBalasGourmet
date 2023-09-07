import { memo } from "react";

import Image from "next/image";

import styles from "./styles.module.css";

function SearchCard() {
  return (
    <section className={styles.searchCardContainer}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>
            Brigadeiro de Leite Ninho com Amêndoas Laminadas
          </h2>

          <p className={styles.description}>
            Chocolate com leite ninho e chocolate belga
          </p>
        </div>

        <p>
          <b className={styles.price}>R$ 125,00</b>
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/images/slider/Slider2.jpg" alt="nada" fill />
      </div>
    </section>
  );
}

export default memo(SearchCard);
