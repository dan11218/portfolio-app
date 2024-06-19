import { Space_Mono, Playfair_Display, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal"],
  variable: "--font-inter",
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_mono",
});

export const playfair_display = Playfair_Display({
  weight: ["500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair_display",
});
