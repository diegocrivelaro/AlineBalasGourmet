"use client";

import React from "react";

import Link from "next/link";

import DefaultLogo from "@/components/DefaultComponents/DefaultLogo";

import useWindowSize from "@/hooks/useWindowSize";
import { headerNavLinks } from "@/static/constants";

import MenuHamburguer from "./MenuHamburguer";
import styles from "./styles.module.css";

function Header() {
  const { width } = useWindowSize();
  const isMobileOrTablet = width <= 768;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <DefaultLogo defaultLogoModifier={styles.logo} />
        <nav className={styles.headerNavContainer}>
          {isMobileOrTablet ? (
            <MenuHamburguer />
          ) : (
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
          )}
        </nav>
      </div>

      <hr className={styles.genericDivider} />
    </header>
  );
}

export default React.memo(Header);
