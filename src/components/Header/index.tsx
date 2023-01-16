import DefaultLink from "@/components/DefaultComponents/DefaultLink";
import DefaultLogo from "@/components/DefaultComponents/DefaultLogo";
import { headerNavLinks } from "@/static/constants";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <DefaultLogo />

      <nav>
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
      </nav>
    </header>
  );
}
