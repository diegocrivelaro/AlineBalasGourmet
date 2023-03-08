import Header from "@/components/Header";

import styles from "@/styles/home.module.css";

import { metadataIndex } from "@/static/metadata";

export const metadata = {
  ...metadataIndex,
};

export default function Home() {
  return (
    <main>
      <Header />
      <hr className={styles.genericDivider} />
    </main>
  );
}
