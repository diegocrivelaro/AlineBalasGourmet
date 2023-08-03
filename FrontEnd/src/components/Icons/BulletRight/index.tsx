import { memo } from "react";

import Image from "next/image";

import { IconProps } from "@/types/generic";

function BulletRight({ width, height, style }: IconProps) {
  return (
    <Image
      src="images/icons/bulletRight.svg"
      alt="ícone de balas a esquerda"
      width={width}
      height={height}
      className={style}
    />
  );
}

export default memo(BulletRight);
