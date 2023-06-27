import { memo } from "react";

import { MediasProps } from "@/types/generic";

import { formatCurrencyInReais } from "@/utils/helpers";

import styles from "./styles.module.css";
import ThumbnailCard from "./ThumbnailCard";

interface CardBulletProps {
  bulletName: string;
  flavorName: string;
  price: number;
  medias: MediasProps[] | null;
}

function CardBullet({ bulletName, flavorName, price, medias }: CardBulletProps) {
  const getFormattedPrice = formatCurrencyInReais(price);

  return (
    <section className={styles.container} title={`${bulletName} de ${flavorName}`}>
      <div className={styles.informationWrapper}>
        <p className={styles.flavorName}>
          {flavorName}
        </p>

        <p className={styles.price} title={`Receita inteira está por ${getFormattedPrice}`}>
          {getFormattedPrice}
        </p>
      </div>

      <div className={styles.thumbnailWrapper}>
        <ThumbnailCard flavorName={flavorName} medias={medias} />
      </div>
    </section>
  );
}

export default memo(CardBullet);
