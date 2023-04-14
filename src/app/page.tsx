import Header from "@/components/Header";
import HeroHomePage from "@/components/Sections/HeroHomePage";

import styles from "@/styles/home.module.css";

import { metadataIndex } from "@/static/metadata";

export const metadata = {
  ...metadataIndex,
};

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Header />

      <HeroHomePage />
    </main>
  );
}
