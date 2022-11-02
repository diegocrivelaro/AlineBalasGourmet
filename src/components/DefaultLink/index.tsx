import Link from "next/link";

import { DefaultLinkProps } from "@/types/types";

export default function DefaultLink({
  href,
  titleAccessibility = `Link para ${href}`,
  hasPrefetch = false,
  children,
  ...rest
}: DefaultLinkProps) {
  return (
    <Link href={href} prefetch={hasPrefetch} {...rest}>
      <a title={titleAccessibility}>{children}</a>
    </Link>
  );
}
