export interface SEOProps {
  title: string;
  description: string;
  url: string;
  type: string;
  shouldIndexPage: boolean;
}

export interface LayoutProps extends SEOProps {
  children: React.ReactNode;
}

export interface DefaultLinkProps {
  href: string;
  titleAccessibility?: string;
  hasPrefetch?: boolean;
  cnLink?: string;
  children: React.ReactNode;
}
