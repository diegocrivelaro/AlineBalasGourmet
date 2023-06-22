export type MediasTagsProps = `THUMBNAIL` | `HERO`;

export interface WidthHeightProps {
  width: number;
  height: number;
}

export interface IconProps extends WidthHeightProps {
  style?: string;
}

export interface MediasProps {
  url: string | undefined;
  description: string | undefined;
  altText: string | undefined;
  title: string | undefined;
  tags: MediasTagsProps[] | null;
}
