/* eslint-disable import/extensions */
import { Inter } from "next/font/google";
import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

import MetaHead from "../meta-head";
import Container from "../ui/container";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <MetaHead />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
