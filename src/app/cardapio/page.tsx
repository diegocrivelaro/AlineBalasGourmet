import SearchResultsList from "@/components/Sections/SearchResultsList";

import styles from "@/styles/menu.module.css";

import { metadataMenu } from "@/static/metadata";

export const metadata = {
  ...metadataMenu,
};

export default function Cardapio() {
  return (
    <main className={styles.menuContainer}>
      <SearchResultsList />
    </main>
  );
}
