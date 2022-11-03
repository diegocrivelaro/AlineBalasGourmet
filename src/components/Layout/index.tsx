import SEO from "@/components/SEO";
import { LayoutProps } from "@/types/types";

export default function Layout({
  title,
  description,
  url,
  type,
  shouldIndexPage,
  children,
}: LayoutProps) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        type={type}
        shouldIndexPage={shouldIndexPage}
      />
      {children}
    </>
  );
}
