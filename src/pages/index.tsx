import SEO from "@/components/SEO";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container} data-testid="casa">
      <h1>Home</h1>
      <SEO
        title="Home"
        description="As melhores balas de coco do Brasil! Feitas com todo carinho e dedicação para você!"
        url="https://www.alinebalasgourmet.com.br/"
        type="website"
        shouldIndexPage
      />
    </div>
  );
}
