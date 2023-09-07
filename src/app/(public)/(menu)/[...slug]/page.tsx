import SearchCard from "@/components/SearchCard";

interface CandyMenuProps {
  params: {
    slug: string[];
  };
}

export default function CandyMenu({ params }: CandyMenuProps) {
  console.log(params);

  return (
    <>
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </>
  );
}
