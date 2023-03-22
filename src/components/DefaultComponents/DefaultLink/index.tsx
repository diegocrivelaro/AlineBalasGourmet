import Link from "next/link";

export interface DefaultLinkProps {
  href: string;
  titleAccessibility?: string;
  hasPrefetch?: boolean;
  cnLink?: string;
  children: React.ReactNode;
}

export default function DefaultLink({
  href,
  titleAccessibility = `Link para ${href}`,
  hasPrefetch = false,
  cnLink,
  children,
  ...rest
}: DefaultLinkProps) {
  return (
    <Link
      href={href}
      title={titleAccessibility}
      prefetch={hasPrefetch}
      {...rest}
      className={cnLink}>
      {children}
    </Link>
  );
}
