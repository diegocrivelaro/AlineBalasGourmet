import "@/styles/reset.css";
import "@/styles/globals.css";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>

      <noscript>
        <h1>
          <strong> Aline Balas Gourmet não funciona sem JavaScript!</strong>
        </h1>
        <p>Por favor, habilite o JavaScript em seu navegador!</p>
      </noscript>
    </html>
  );
}
