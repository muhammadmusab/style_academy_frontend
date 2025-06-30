import type { Metadata } from "next";

import "./globals.css";
import { poppins, roboto, inter } from "@/fonts";

export const metadata: Metadata = {
  title: "Style Academy",
  description: "Pakistani brands clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
