/* eslint-disable import/extensions */
import { Inter } from "next/font/google";
import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />
      <div className="mx-auto max-w-5xl ">{children}</div>
      <Footer />
    </div>
  );
}
