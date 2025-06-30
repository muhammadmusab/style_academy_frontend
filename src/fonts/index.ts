import { Poppins, Roboto_Condensed, Inter } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
  //   preload:false,
  subsets: ["latin"],
});
export const inter = Poppins({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  display: "swap",
  //   preload:false,
  subsets: ["latin"],
});
export const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  display: "swap",
  //   preload:false,
  subsets: ["latin"],
});
