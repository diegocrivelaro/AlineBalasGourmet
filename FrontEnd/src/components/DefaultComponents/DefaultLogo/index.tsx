import { memo } from "react";

import Link from "next/link";

import cn from "classnames";

import { companyName } from "@/static/constants";

import styles from "./styles.module.css";

interface DefaultLogoProps {
  defaultLogoModifier?: string;
}

function DefaultLogo({ defaultLogoModifier }: DefaultLogoProps) {
  return (
    <Link href="/" title="Clique aqui para ir na página inicial">
      <p className={cn(styles.defaultLogo, defaultLogoModifier)}>
        {companyName}
      </p>
    </Link>
  );
}

export default memo(DefaultLogo);
