import { memo } from "react";

import { MediasProps } from "@/types/generic";

import { formatCurrencyInReais } from "@/utils/helpers";

import styles from "./styles.module.css";
import ThumbnailCard from "./ThumbnailCard";

interface CardBulletProps {
  flavorName: string;
  price: number;
  medias: MediasProps[] | null;
}

function CardBullet({ flavorName, price, medias }: CardBulletProps) {
  const getFormattedPrice = formatCurrencyInReais(price);

  return (
    <section className={styles.container}>
      <div className={styles.informationWrapper}>
        <p className={styles.flavorName}>
          {flavorName}
        </p>

        <p className={styles.price}>
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
