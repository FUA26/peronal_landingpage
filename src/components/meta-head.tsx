import Head from "next/head";
import React from "react";

export default function MetaHead() {
  const meta = {
    title: "Fatih Ulil Albab",
    description: "An personal website portfolio and blog by Fatih Ulil Albab",
    robots: "follow, index",
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta name="robots" content={meta.robots} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
