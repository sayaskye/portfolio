import { useContext } from "react";

import HeaderSeo from "../components/seo/HeaderSeo";
import Layout from "../components/layout";
import Info from "../components/about/Info";
import Experience from "../components/about/Experience";
import MyTecnologies from "../components/about/MyTecnologies";

import { configContext } from "../context/configContext";

const About = () => {
  const { locale } = useContext(configContext);
  return (
    <>
      <HeaderSeo locale={locale} page="about" />
      <Layout>
        <div className="w-screen h-full md:py-[54px] bg-gray-200 duration-500  ease-in dark:bg-gray-800">
          <Info />
          <Experience />
          <MyTecnologies />
        </div>
      </Layout>
    </>
  );
};
export default About;
