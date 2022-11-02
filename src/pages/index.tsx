import SEO from "@/components/SEO";

import DefaultLink from "../components/DefaultLink/index";

export default function Home() {
  return (
    <div data-testid="casa">
      <h1>Home - Página Inicial</h1>
      <SEO
        title="Home"
        description="As melhores balas de coco do Brasil! Feitas com todo carinho e dedicação para você!"
        url="https://www.alinebalasgourmet.com.br/"
        type="website"
        shouldIndexPage
      />
      <DefaultLink
        href="https://nextjs.org/docs/api-reference/next/link"
        titleAccessibility="Documentação">
        Next.js Documentation
      </DefaultLink>
    </div>
  );
}
