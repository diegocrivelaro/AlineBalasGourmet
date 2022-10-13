import SEO from "@/components/SEO";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container} data-testid="casa">
      <h1>Home</h1>
      <SEO
        title="Teste"
        description="teste description"
        url="test.com/"
        keywords="AlineBalasGourmet, BalasGourmet, Balas de Coco"
        type="website"
        shouldIndexPage
      />
    </div>
  );
}
