import DefaultLink from "@/components/DefaultComponents/DefaultLink";
import { companyName } from "@/static/constants";

import styles from "./styles.module.css";

export default function DefaultLogo() {
  return (
    <DefaultLink
      href="/"
      titleAccessibility="Clique aqui para ir na página inicial">
      <p className={styles.defaultLogo}>{companyName}</p>
    </DefaultLink>
  );
}
