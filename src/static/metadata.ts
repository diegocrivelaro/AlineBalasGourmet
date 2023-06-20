/* eslint-disable import/prefer-default-export */
import { companyNameNoSpaces, companyName } from "@/static/constants";

const homeTitle = `${companyName} | Balas de coco com amor e carinho`;
const homeDescription = `A ${companyNameNoSpaces} é uma empresa especializada em balas de coco gourmet. Todas balas são feitas com amor! \u2764\uFE0F`;
const defaultThemeColor = `#FFF9EF`;

export const metadataHome = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    `Aline Balas Gourmet`,
    `Bala de coco`,
    `Bala de coco gourmet`,
    `gourmet`,
  ],
  creator: `Diego Ferreira Crivelaro`,
  icons: {
    icon: `/favicon.ico`,
    apple: [
      {
        url: `/favicons/apple-touch-icon-60x60.png`,
        sizes: `60x60`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-76x76.png`,
        sizes: `76x76`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-120x120.png`,
        sizes: `120x120`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-152x152.png`,
        sizes: `152x152`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-152x152.png`,
        sizes: `180x180`,
        type: `image/png`,
      },
    ],
  },
  themeColor: defaultThemeColor,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    type: `website`,
    siteName: companyNameNoSpaces,
    locale: `pt-BR`,
    url: process.env.NEXT_PUBLIC_APPLICATION_WEB_LINK,
    images: [
      {
        url: `/images/logo/AlineBalasGourmetOriginal.webp`,
        width: 903,
        height: 924,
      },
    ],
  },
  twitter: {
    title: homeTitle,
    description: homeDescription,
    creator: `@${companyNameNoSpaces}`,
    images: {
      url: `/images/logo/AlineBalasGourmetOriginal.webp`,
    },
  },
  appleWebApp: {
    title: homeTitle,
  },
};

const menuTitle = `Cardápio | ${companyName}`;
const menuDescription = `Confira o cardápio da ${companyName} e faça seu pedido!`;

export const metadataMenu = {
  title: menuTitle,
  description: menuDescription,
  keywords: [
    `Aline Balas Gourmet`,
    `Bala de coco`,
    `Bala de coco gourmet`,
    `gourmet`,
    `cardápio`,
  ],
  creator: `Diego Ferreira Crivelaro`,
  icons: {
    icon: `/favicon.ico`,
    apple: [
      {
        url: `/favicons/apple-touch-icon-60x60.png`,
        sizes: `60x60`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-76x76.png`,
        sizes: `76x76`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-120x120.png`,
        sizes: `120x120`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-152x152.png`,
        sizes: `152x152`,
        type: `image/png`,
      },
      {
        url: `/favicons/apple-touch-icon-152x152.png`,
        sizes: `180x180`,
        type: `image/png`,
      },
    ],
  },
  themeColor: defaultThemeColor,
  openGraph: {
    title: menuTitle,
    description: menuDescription,
    type: `website`,
    siteName: companyNameNoSpaces,
    locale: `pt-BR`,
    url: process.env.NEXT_PUBLIC_APPLICATION_WEB_LINK,
    images: [
      {
        url: `/images/logo/AlineBalasGourmetOriginal.webp`,
        width: 903,
        height: 924,
      },
    ],
  },
  twitter: {
    title: menuTitle,
    description: menuDescription,
    creator: `@${companyNameNoSpaces}`,
    images: {
      url: `/images/logo/AlineBalasGourmetOriginal.webp`,
    },
  },
  appleWebApp: {
    title: menuTitle,
  },
};
