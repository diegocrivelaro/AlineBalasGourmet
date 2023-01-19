import React from "react";

import DefaultLogo from "@/components/DefaultComponents/DefaultLogo";
import useWindowSize from "@/hooks/useWindowSize";

import MenuHamburguer from "./MenuHamburguer";
import styles from "./styles.module.css";

function Header() {
  const { width } = useWindowSize();
  const isMobileOrTablet = width <= 425;

  return (
    <header className={styles.headerContainer}>
      <DefaultLogo />

      <nav className={styles.headerNavContainer}>
        {isMobileOrTablet ? <MenuHamburguer /> : <h1>casa</h1>}
      </nav>
    </header>
  );
}

export default React.memo(Header);
