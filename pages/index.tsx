import { useContext } from "react";

import { FormattedMessage } from "react-intl";

import HeaderSeo from "../components/seo/HeaderSeo";
import Layout from "../components/layout";
import TypeWriter from "../components/TypeWriter";

import { configContext } from "../context/configContext";

const Home = () => {
  const { locale } = useContext(configContext);
  return (
    <>
      <HeaderSeo locale={locale} page="home" />
      <Layout>
        <div className="w-screen h-screen bg-gray-200 duration-500 ease-in dark:bg-gray-800 text-white dark:text-main-blue ">
          <div className="h-full w-full bg-home-background bg-cover bg-top flex flex-col items-center justify-center">
            <div className="absolute flex flex-col">
              <h1 className="text-4xl md:text-[3.27rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[6rem] font-black bg-black bg-opacity-[.02] rounded-full">
                <TypeWriter text="Andrés Cazares." />
              </h1>
              <h2 className="mt-5 text-xl md:text-3xl font-black items-center self-center bg-black bg-opacity-[.08] rounded-full">
                <FormattedMessage
                  id="home.subtitle"
                  defaultMessage="Web Developer"
                />
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
