import { FormattedMessage } from 'react-intl'
import Layout from '../components/layout'
import Head from 'next/head';
import { useContext } from 'react';
import { configContext } from "../context/configContext";
import PortfolioCard from '../components/portfolio/PortfolioCard';

const Portfolio = () => {
  const {locale} = useContext(configContext)
  return (
    <>
      {locale==="es-MX"&&
        <Head>
          <title> Proyectos | Andrés Cazares Web </title>
          <link rel='icon' href='/logo.png' />
          <meta name='description' content='Andrés Cazares Portfolio personal' />
          <meta name='keywords' content='México, Desarrollador, Programador, HTML, ReactJS, Tailwind, Web' />
          <meta name='author' content='Andrés Cazares' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:image' content='/images/logo.png' />
        </Head>
      }
      {locale==="en-US"&&
        <Head>
          <title> Projects | Andrés Cazares Web </title>
          <link rel='icon' href='/logo.png' />
          <meta name='description' content='Andrés Cazares Personal Portfolio' />
          <meta name='keywords' content='México, Programmer, Developer, HTML, ReactJS, Tailwind, Web' />
          <meta name='author' content='Andrés Cazares' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:image' content='/images/logo.png' />
        </Head>
      }
      <Layout>
        <div className="w-screen h-auto pb-[54px] bg-gray-200 duration-500 ease-in dark:bg-gray-800">
          <div className="container mx-auto">
            <div className=" mx-auto lg:mx-20  my-10 dark:text-white duration-300 ease-in">
              <h1 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 duration-300 ease-in ">
                <FormattedMessage
                    id="portfolio.title"
                    defaultMessage="Projects"
                />
              </h1>
              <div className=" grid grid-cols-1 xl:grid-cols-2 ">
                <PortfolioCard
                  title="ProjectTitel1"
                  date="ProjectDate1"
                  features="ProjectFeatures1"
                  description="ProjectDescription1"
                  tecnologies="ProjectTec1"
                  type="ProjectType1"
                  url="/images/background.png"
                />

                <PortfolioCard
                  title="ProjectTitel2"
                  date="ProjectDate2"
                  features="ProjectFeatures2"
                  description="ProjectDescription2"
                  tecnologies="ProjectTec2"
                  type="ProjectType2"
                  url="/images/background.png"
                />

                <PortfolioCard
                  title="ProjectTitel3"
                  date="ProjectDate3"
                  features="ProjectFeatures3"
                  description="ProjectDescription3"
                  tecnologies="ProjectTec3"
                  type="ProjectType3"
                  url="/images/background.png"
                />
              </div>
            </div> 
          </div> 
        </div> 
      </Layout>
    </>
  )
}
export default Portfolio;
