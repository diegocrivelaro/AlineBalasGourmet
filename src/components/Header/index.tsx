import Image from "next/image";

import React, { useState } from "react";

import DefaultLink from "@/components/DefaultComponents/DefaultLink";
import DefaultLogo from "@/components/DefaultComponents/DefaultLogo";
import { headerNavLinks } from "@/static/constants";

import styles from "./styles.module.css";

function Header() {
  const [menuHamburguer, setMenuHamburguer] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <DefaultLogo />

      <nav className={styles.headerNavContainer}>
        {menuHamburguer ? (
          <section className={styles.openMenuContainer}>
            <div className={styles.openMenu}>
              <Image
                src="/images/icons/closeIcon.svg"
                width={34}
                height={34}
                alt="Fechar menu de navegação"
                aria-label="Botão para fechar o menu de navegação"
                title="Fechará o menu de navegação"
                onClick={() => setMenuHamburguer(false)}
              />

              <ol className={styles.headerMenu}>
                {headerNavLinks.map(navigationLink => (
                  <li key={navigationLink.title}>
                    <DefaultLink
                      href={navigationLink.path}
                      titleAccessibility={navigationLink.title}
                      cnLink={styles.headerMenuLink}>
                      {navigationLink.name}
                    </DefaultLink>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : (
          <Image
            src="/images/icons/menuHamburguerIcon.svg"
            width={28}
            height={28}
            alt="Abrir menu de navegação"
            aria-label="Botão para abrir o menu de navegação"
            title="Abrirá o menu de navegação"
            className={styles.headerIconMenuHamburguer}
            onClick={() => setMenuHamburguer(true)}
          />
        )}
      </nav>
    </header>
  );
}

export default React.memo(Header);
