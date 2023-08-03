import { memo } from "react";

import Image from "next/image";

import cn from "classnames";

import { widthHeightProps } from "@/types/generic";

import styles from "./styles.module.css";

interface PictureFrameProps extends widthHeightProps {
  imagePath: string;
  altText: string;
  style: string;
}

function PictureFrame({
  imagePath,
  altText,
  style,
  width,
  height,
}: PictureFrameProps) {
  return (
    <picture className={cn(styles.pictureFrameContainer, style)}>
      <Image
        src={imagePath}
        alt={altText}
        className={styles.pictureFrameImage}
        width={width}
        height={height}
        unoptimized
      />
    </picture>
  );
}

export default memo(PictureFrame);
