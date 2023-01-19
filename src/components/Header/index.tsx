import React from "react";

import DefaultLink from "@/components/DefaultComponents/DefaultLink";
import DefaultLogo from "@/components/DefaultComponents/DefaultLogo";
import useWindowSize from "@/hooks/useWindowSize";
import { headerNavLinks } from "@/static/constants";

import MenuHamburguer from "./MenuHamburguer";
import styles from "./styles.module.css";

function Header() {
  const { width } = useWindowSize();
  const isMobile = width <= 425;

  return (
    <header className={styles.headerContainer}>
      <DefaultLogo defaultLogoModifier={styles.logo} />

      <nav className={styles.headerNavContainer}>
        {isMobile ? (
          <MenuHamburguer />
        ) : (
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
        )}
      </nav>
    </header>
  );
}

export default React.memo(Header);
