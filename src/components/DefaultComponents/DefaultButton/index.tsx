import { memo, ReactNode } from "react";

import Link from "next/link";

import cn from "classnames";

import BulletLeft from "@/components/Icons/BulletLeft";
import BulletRight from "@/components/Icons/BulletRight";

import styles from "./styles.module.css";

interface DefaultButtonProps {
  href: string;
  children: ReactNode;
  hasBullet: boolean;
  style?: {
    containerStyle?: string;
    buttonStyle?: string;
    bulletStyle?: string;
  };
  titleAccessibility?: string;
}

function DefaultButton({
  href,
  children,
  hasBullet = false,
  style,
  titleAccessibility,
}: DefaultButtonProps) {
  return (
    <div className={cn(styles.defaultButtonContainer, style.containerStyle)}>
      <Link
        href={href}
        title={titleAccessibility}
        className={cn(styles.defaultButton, style.buttonStyle)}>
        {children}
      </Link>

      {hasBullet && (
        <div className={styles.containerBullet}>
          <BulletLeft width={100} height={100} style={style.bulletStyle} />
          <BulletRight width={100} height={100} style={style.bulletStyle} />
        </div>
      )}
    </div>
  );
}

export default memo(DefaultButton);
