import { memo } from "react";

import Link from "next/link";

export interface DefaultLinkProps {
  href: string;
  titleAccessibility?: string;
  hasPrefetch?: boolean;
  cnLink?: string;
  children: React.ReactNode;
}

function DefaultLink({
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

export default memo(DefaultLink);
