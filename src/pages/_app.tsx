import GlobalStyle from "@/shared/global.styles";
import type { AppProps } from "next/app";
import "@/styles/akar-icons.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
