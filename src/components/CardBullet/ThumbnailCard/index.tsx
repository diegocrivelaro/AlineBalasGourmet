import { memo } from "react";

import Image from "next/image";

import MissingUnitImage from "@/components/MissingUnitImage";

import { MediasProps } from "@/types/generic";

interface ThumbnailCardProps {
  flavorName: string;
  medias: MediasProps[] | null;
}

function ThumbnailCard({ flavorName, medias }: ThumbnailCardProps) {
  if (!medias || medias.length === 0) {
    return <MissingUnitImage />;
  }

  const getThumbnail = medias.find(media => media.tags.includes(`THUMBNAIL`));
  const getAltText =
    getThumbnail.altText ?? `Imagem em miniatura da bala de ${flavorName}`;
  const getTitle = getThumbnail.title ?? `Bala de ${flavorName}`;

  return (
    <Image
      src={getThumbnail.url}
      alt={getAltText}
      title={getTitle}
      placeholder="blur"
    />
  );
}

export default memo(ThumbnailCard);
