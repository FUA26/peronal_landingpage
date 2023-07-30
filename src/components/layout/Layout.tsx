/* eslint-disable import/extensions */
import { Inter } from "next/font/google";
import * as React from "react";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
