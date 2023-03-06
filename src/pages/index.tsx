import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { companyNameNoSpaces } from "@/static/constants";
import styles from "@/styles/home.module.css";

export default function Home() {
  const title = `Balas de coco com amor e carinho`;
  const description = `A ${companyNameNoSpaces} é uma empresa especializada em balas de coco gourmet. Todas balas são feitas com amor! \u2764\uFE0F`;

  return (
    <Layout
      title={title}
      description={description}
      url={process.env.NEXT_PUBLIC_APPLICATION_WEB_LINK}
      type="website"
      shouldIndexPage>
      <main>
        <Header />
        <hr className={styles.genericDivider} />
      </main>
    </Layout>
  );
}
