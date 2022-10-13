import Head from "next/head";

import { companyName } from "@/static/constants";
import { SEOProps } from "@/types/types";

export default function SEO({
  title,
  description,
  url,
  type,
  keywords,
  shouldIndexPage,
}: SEOProps) {
  const pageTitle = `${companyName} | ${title}`;
  const pageImage = `${process.env.NEXT_PUBLIC_APPLICATION_WEB_LINK}/images/logo/AlineBalasGourmetOriginal.webp`;
  const pageUrlNoSlash = url.replace(/\/$/, ``);
  const themeColor = `#FFF9EF`;

  return (
    <Head>
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="image" content={pageImage} />
      <meta name="theme-color" content={themeColor} />
      <meta name="designer" content="Diego Ferreira Crivelaro" />
      <meta name="owner" content="Diego Ferreira Crivelaro" />

      {!shouldIndexPage && (
        <meta property="robots" content="noindex,nofollow" />
      )}
      <meta name="google" content="notranslate" />

      <meta property="og:site_name" content={companyName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrlNoSlash} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="903" />
      <meta property="og:image:height" content="924" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="903" />
      <meta name="twitter:image:height" content="924" />

      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon-180x180.png"
      />

      <meta name="msapplication-TileColor" content={themeColor} />
    </Head>
  );
}
