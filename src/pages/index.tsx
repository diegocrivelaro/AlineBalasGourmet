import Layout from "@/components/Layout";
import { companyNameNoSpaces } from "@/static/constants";

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
      <h1>Header</h1>
    </Layout>
  );
}
