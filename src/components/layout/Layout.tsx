/* eslint-disable import/extensions */
import { Inter } from "next/font/google";
import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
