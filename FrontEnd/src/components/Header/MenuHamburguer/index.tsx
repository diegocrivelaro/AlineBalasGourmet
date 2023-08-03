"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { headerNavLinks } from "@/static/constants";

import styles from "./styles.module.css";

function MenuHamburguer() {
  const [menuHamburguer, setMenuHamburguer] = useState(false);

  return menuHamburguer ? (
    <section className={styles.menuMobileContainer}>
      <div className={styles.menuMobileBackground}>
        <div className={styles.menuMobileContent}>
          <Image
            src="/images/icons/closeIcon.svg"
            width={34}
            height={34}
            alt="Fechar menu de navegação"
            aria-describedby="Botão para fechar o menu de navegação"
            title="Fechará o menu de navegação"
            onClick={() => setMenuHamburguer(false)}
          />

          <ol className={styles.headerMenu}>
            {headerNavLinks.map(navigationLink => (
              <li key={navigationLink.title}>
                <Link
                  href={navigationLink.path}
                  title={navigationLink.title}
                  className={styles.headerMenuLink}>
                  {navigationLink.name}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  ) : (
    <Image
      src="/images/icons/menuHamburguerIcon.svg"
      width={28}
      height={28}
      alt="Abrir menu de navegação"
      aria-describedby="Botão para abrir o menu de navegação"
      title="Abrirá o menu de navegação"
      className={styles.headerIconMenuHamburguer}
      onClick={() => setMenuHamburguer(true)}
    />
  );
}

export default React.memo(MenuHamburguer);
