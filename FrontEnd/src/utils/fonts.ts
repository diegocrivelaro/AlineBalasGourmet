/* eslint quotes: ["error", "double"] */
// eslint-disable-next-line camelcase
import { Dancing_Script, Comfortaa, Poppins } from "next/font/google";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  fallback: ["cursive", "system-ui"],
  variable: "--dancingscript-font",
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--comfortaa-font",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins-font",
  fallback: ["sans-serif", "system-ui"],
});
