import Divider from "@/components/Divider";
import FloatWhatsAppBtn from "@/components/FloatWhatsAppBtn";
import CandyMenu from "@/components/Sections/CandyMenu";
import HeroHomePage from "@/components/Sections/HeroHomePage";

import styles from "@/styles/home.module.css";

import { metadataHome } from "@/static/metadata";

export const metadata = {
  ...metadataHome,
};

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <HeroHomePage />

      <Divider />

      <CandyMenu />

      <Divider />

      <FloatWhatsAppBtn />
    </main>
  );
}
