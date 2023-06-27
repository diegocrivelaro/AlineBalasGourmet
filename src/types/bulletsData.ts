import { MediasProps } from "./generic";

export type TypesOfRecipesProps =
  | `Receita inteira`
  | `Meia receita`
  | `Dois sabores`;

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
  id: string;
  type: TypesOfRecipesProps;
  mass: string;
  quantity: number;
  price: number | undefined;
}

export interface FlavorsOptionsProps {
  id: string;
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
  id: string;
  title: string;
  description: string | undefined;
  flavors: FlavorsOptionsProps[] | null;
  batters: BattersOptionsProps[] | null;
  chocolates: ChocolateOptionsProps[] | null;
  quantityOptions: QuantityOptionsProps[];
  colorOptions: ColorOptionsProps[] | null;
}
