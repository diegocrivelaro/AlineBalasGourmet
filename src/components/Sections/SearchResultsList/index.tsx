import { memo } from "react";

import CardBullet from "@/components/CardBullet";

import { bullets } from "@/static/bulletsData";

import styles from "./styles.module.css";

function SearchResultsList() {
  return (
    <>
      {bullets.map(bullet => (
        <section className={styles.container} key={bullet.id}>
          <div className={styles.cards}>
            {bullet.flavors.map(flavor => (
              <CardBullet
                flavorName={flavor.name}
                price={flavor.price}
                medias={flavor.medias}
                key={flavor.id}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default memo(SearchResultsList);
