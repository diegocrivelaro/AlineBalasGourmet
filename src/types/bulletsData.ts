import { MediasProps } from "./generic";

export type TypesOfRecipesProps =
  | `Receita inteira`
  | `Meia receita`
  | `Receita inteira com 2 sabores diferentes`;

export type ChocolateOptionsProps =
  | `Ao leite`
  | `Meio amargo`
  | `Blend (Amargo e Ao Leite)`;

export type BattersOptionsProps =
  | `Amendoim`
  | `Café`
  | `Chocolate`
  | `Limão`
  | `Morango`
  | `Nozes`
  | `Tradicional`;

export interface QuantityOptionsProps {
  type: TypesOfRecipesProps;
  quantity: number | undefined;
  price: number | undefined;
}

export interface FlavorsOptionsProps {
  name: string;
  description: string | undefined;
  price: number;
  medias: MediasProps[] | null;
}

export interface ColorOptionsProps {
  name: string;
  color: string | undefined;
}

export interface BulletsProps {
  title: string;
  description: string | undefined;
  flavors: FlavorsOptionsProps[] | null;
  batters: BattersOptionsProps[] | null;
  chocolates: ChocolateOptionsProps[] | null;
  quantityOptions: QuantityOptionsProps[];
  colorOptions: ColorOptionsProps[] | null;
}