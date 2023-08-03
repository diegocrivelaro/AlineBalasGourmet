/* eslint-disable import/prefer-default-export */
import {
  defaultTitle,
  defaultDescription,
  companyNameNoSpaces,
  defaultThemeColor,
} from "@/static/constants";

export const metadataIndex = {
  title: defaultTitle,
  description: defaultDescription,
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
    title: defaultTitle,
    description: defaultDescription,
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
    title: defaultTitle,
    description: defaultDescription,
    creator: `@${companyNameNoSpaces}`,
    images: {
      url: `/images/logo/AlineBalasGourmetOriginal.webp`,
    },
  },
  appleWebApp: {
    title: defaultTitle,
  },
};
