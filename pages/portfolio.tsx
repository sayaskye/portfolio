import { useContext } from "react";

import { FormattedMessage } from "react-intl";

import HeaderSeo from "../components/seo/HeaderSeo";
import Layout from "../components/layout";
import PortfolioCard from "../components/portfolio/PortfolioCard";

import {
  portfolioBack,
  portfolioCourses,
  portfolioFront,
} from "../components/portfolio/projects";
import { configContext } from "../context/configContext";

const Portfolio = () => {
  const { locale } = useContext(configContext);

  return (
    <>
      <HeaderSeo locale={locale} page="portfolio" />
      <Layout>
        <div className="w-screen h-full min-h-screen pb-[54px] bg-gray-200 duration-500 ease-in dark:bg-gray-800">
          <h1 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 duration-300 ease-in text-center">
            <FormattedMessage id="portfolio.title" />
          </h1>
          <div className="container mx-auto my-10 dark:text-white duration-300 ease-in">
            <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-5 lg:mx-3 duration-300 ease-in ">
              <FormattedMessage id="portfolio.front" />
            </h3>
            <div className=" grid grid-cols-1 xl:grid-cols-2 ">
              {portfolioFront.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  imageType={item.imageType}
                  videoId={item.videoId}
                  videoBool={item.videoBool}
                  urlBool={item.urlBool}
                  url={item.url}
                />
              ))}
            </div>
            <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-5 lg:mx-3 duration-300 ease-in mt-10">
              <FormattedMessage id="portfolio.back" />
            </h3>
            <div className=" grid grid-cols-1 xl:grid-cols-2 ">
              {portfolioBack.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  imageType={item.imageType}
                  videoId={item.videoId}
                  videoBool={item.videoBool}
                  urlBool={item.urlBool}
                  url={item.url}
                />
              ))}
            </div>
            <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-5 lg:mx-3 duration-300 ease-in mt-10">
              <FormattedMessage id="portfolio.course" />
            </h3>
            <div className=" grid grid-cols-1 xl:grid-cols-2 ">
              {portfolioCourses.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  imageType={item.imageType}
                  videoId={item.videoId}
                  videoBool={item.videoBool}
                  urlBool={item.urlBool}
                  url={item.url}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Portfolio;
