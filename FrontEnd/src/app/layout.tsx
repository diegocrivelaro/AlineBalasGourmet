import "@/styles/reset.css";
import "@/styles/globals.css";

import { ReactNode } from "react";

import Header from "@/components/Header";

import { dancingScript, comfortaa, poppins } from "@/utils/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dancingScript.variable} ${comfortaa.variable} ${poppins.variable}`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
