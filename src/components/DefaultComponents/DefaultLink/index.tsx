import Link from "next/link";

import { DefaultLinkProps } from "@/types/DefaultLinkProps";

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
