import { Albert_Sans, Space_Mono, Playfair_Display } from "next/font/google";

export const albert_sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});

export const playfair_display = Playfair_Display({
  weight: ["500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});
