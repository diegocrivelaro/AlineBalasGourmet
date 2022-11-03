import Layout from "@/components/Layout";
import { companyNameNoSpaces, domainLink } from "@/static/constants";

export default function Home() {
  const title = `Home`;
  const description = `A ${companyNameNoSpaces} é uma empresa especializada em balas de coco gourmet. Todas balas são feitas com amor! \u2764\uFE0F`;

  return (
    <Layout
      title={title}
      description={description}
      url={domainLink}
      type="website"
      shouldIndexPage>
      <h1>Header</h1>
    </Layout>
  );
}
