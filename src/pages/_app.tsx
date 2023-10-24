import "@/styles/globals.css";
import "@/styles/mdx.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import nProgress from "nprogress";
import { Router } from "next/router";

import "@/styles/nprogress.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
