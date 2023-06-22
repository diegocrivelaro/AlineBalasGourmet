import SearchResultsList from "@/components/Sections/SearchResultsList";

import { metadataMenu } from "@/static/metadata";

export const metadata = {
  ...metadataMenu,
};

export default function Cardapio() {
  return (
    <main>
      <SearchResultsList />
    </main>
  );
}
