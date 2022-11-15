import Head from "next/head";

import { seoOptions } from "./HeaderOptions";

interface Props {
  locale: "es-MX" | "en-US";
  page: "home" | "about" | "portfolio" | "contact" | "error";
}

const HeaderSeo = ({ locale, page }: Props) => {
  console.log(seoOptions[page][locale]);
  return (
    <Head>
      <title> {seoOptions[page][locale].title} </title>
      <link rel="icon" href="/logo.svg" />
      <meta name="description" content={seoOptions[page][locale].description} />
      <meta name="keywords" content={seoOptions[page][locale].keywords} />
      <meta name="author" content="Andrés Cazares" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:image" content="/logo.svg" />
    </Head>
  );
};

export default HeaderSeo;
