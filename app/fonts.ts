import { Albert_Sans, Kalam, Space_Mono } from "next/font/google";

export const albert_sans = Albert_Sans({
  subsets: ["latin"],
});

export const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
