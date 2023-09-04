import { ReactNode } from "react";

import Header from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />

      {children}
    </main>
  );
}
