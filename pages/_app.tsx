import React from "react";
import { AppProps } from "next/app";

import { ConfigProvider } from "../context/configContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
