import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
