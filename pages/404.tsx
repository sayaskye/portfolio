import { useContext } from "react";

import { FormattedMessage } from "react-intl";

import HeaderSeo from "../components/seo/HeaderSeo";
import Layout from "../components/layout";

import { configContext } from "../context/configContext";

const Error = () => {
  const { locale } = useContext(configContext);
  return (
    <>
      <HeaderSeo locale={locale} page="error" />
      <Layout>
        <div className="w-screen h-screen bg-gray-200 duration-500 ease-in dark:bg-gray-800 text-white">
          <div className="h-full w-full bg-error bg-cover bg-top flex flex-col items-center justify-center">
            <div className="absolute flex flex-col  text-center">
              <h1 className="text-4xl md:text-[3.27rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[6rem] font-black bg-black bg-opacity-[.02] rounded-full flicker neonText">
                <FormattedMessage id="error.title" defaultMessage="" />
              </h1>
              <div className="mt-40 mx-10 bg-main-blue/30 backdrop-blur-sm rounded-full">
                <h2 className="text-xl md:text-3xl font-black items-center self-center bg-black bg-opacity-[.08] rounded-full ">
                  <FormattedMessage id="error.subtitle" defaultMessage="" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Error;
