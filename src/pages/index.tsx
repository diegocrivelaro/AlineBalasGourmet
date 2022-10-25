import SEO from "@/components/SEO";

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
    </div>
  );
}
