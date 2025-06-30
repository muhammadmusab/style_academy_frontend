import type { Metadata } from "next";
import Header from "@/components/globals/header";

import Footer from "@/components/globals/footer";
import { Fragment } from "react";

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
    <Fragment>
      <Header />

      {children}

      <Footer />
    </Fragment>
  );
}
