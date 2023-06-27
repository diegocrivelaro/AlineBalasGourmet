import { memo } from "react";

import CardBullet from "@/components/CardBullet";

import { bullets } from "@/static/bulletsData";

import styles from "./styles.module.css";

function SearchResultsList() {
  return (
    <>
      {bullets.map(bullet => (
        <section className={styles.container} key={bullet.id}>
          <div className={styles.informationWrapper}>
            <h3 className={styles.bulletName}>
              {bullet.title}
            </h3>

            <ol className={styles.quantityOptionsWrapper}>
              {bullet.quantityOptions.map(option => (
                <li className={styles.amountOfBullets} key={option.id}>
                  {option.type}
                  {` `}
                  (
                  <span className={styles.strong}>
                    {option.mass}
                  </span>
                  , com aprox.
                  {` `}
                  <span className={styles.strong}>
                    {option.quantity}
                  </span>
                  )
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.cards}>
            {bullet.flavors.map(flavor => (
              <CardBullet
                bulletName={bullet.title}
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
