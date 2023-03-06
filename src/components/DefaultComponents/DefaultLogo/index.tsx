import cn from "classnames";

import DefaultLink from "@/components/DefaultComponents/DefaultLink";
import { companyName } from "@/static/constants";
import { DefaultLogoProps } from "@/types/DefaultLogoProps";

import styles from "./styles.module.css";

export default function DefaultLogo({ defaultLogoModifier }: DefaultLogoProps) {
  return (
    <DefaultLink
      href="/"
      titleAccessibility="Clique aqui para ir na página inicial">
      <p className={cn(styles.defaultLogo, defaultLogoModifier)}>
        {companyName}
      </p>
    </DefaultLink>
  );
}
