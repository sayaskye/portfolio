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
          <link rel='icon' href='/logo.svg' />
          <meta name='description' content='Andrés Cazares Portfolio personal' />
          <meta name='keywords' content='México, Desarrollador, Programador, HTML, ReactJS, Tailwind, Web' />
          <meta name='author' content='Andrés Cazares' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:image' content='/logo.svg' />
        </Head>
      }
      {locale==="en-US"&&
        <Head>
          <title> Projects | Andrés Cazares Web </title>
          <link rel='icon' href='/logo.svg' />
          <meta name='description' content='Andrés Cazares Personal Portfolio' />
          <meta name='keywords' content='México, Programmer, Developer, HTML, ReactJS, Tailwind, Web' />
          <meta name='author' content='Andrés Cazares' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:image' content='/logo.svg' />
        </Head>
      }
      <Layout>
        <div className="w-screen h-auto pb-[54px] bg-gray-200 duration-500 ease-in dark:bg-gray-800">
          <div className="container mx-auto">
            <div className=" mx-auto lg:mx-20  my-10 dark:text-white duration-300 ease-in">
              <h1 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 duration-300 ease-in text-center">
                <FormattedMessage
                    id="portfolio.title"
                    defaultMessage="Projects"
                />
              </h1>
              <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-5 lg:mx-3 duration-300 ease-in ">
                <FormattedMessage
                    id="portfolio.front"
                    defaultMessage=""
                />
              </h3>
              <div className=" grid grid-cols-1 xl:grid-cols-2 ">
                
                <PortfolioCard
                  title="portfolio" 
                  imageType="portfolio" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={false} 
                  url=""
                />

                <PortfolioCard
                  title="personalBlog" 
                  imageType="personalblog" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={true} 
                  url="https://blog-andrescazares.netlify.app/"
                /> 

                <PortfolioCard
                  title="ASMPC" 
                  imageType="asmpc" 
                  videoId="lWhj9hW31Js" 
                  videoBool={true} 
                  urlBool={false} 
                  url=""
                />

                <PortfolioCard
                  title="CDC" 
                  imageType="cdc" 
                  videoId="x4eM3QJlwDE" 
                  videoBool={true} 
                  urlBool={false} 
                  url=""
                />

                <PortfolioCard
                  title="weather" 
                  imageType="weather" 
                  videoId="0gCM5yIAZ7Q" 
                  videoBool={true} 
                  urlBool={true} 
                  url="https://clima-ac.netlify.app"
                /> 

                {/* <PortfolioCard
                  title="ffxiv" 
                  imageType="ffxiv" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={false} 
                  url=""
                /> */}

                <PortfolioCard
                  title="taquero" 
                  imageType="videogame" 
                  videoId="g-3pOXJKiiE" 
                  videoBool={true} 
                  urlBool={false} 
                  url=""
                />

              </div>
              <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-5 lg:mx-3 duration-300 ease-in mt-10">
                <FormattedMessage
                    id="portfolio.back"
                    defaultMessage=""
                />
              </h3>
              <div className=" grid grid-cols-1 xl:grid-cols-2 ">
                 <PortfolioCard
                  title="strapiBlog" 
                  imageType="strapi" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={false} 
                  url=""
                /> 
              </div>
              <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-5 lg:mx-3 duration-300 ease-in mt-10">
                <FormattedMessage
                    id="portfolio.course"
                    defaultMessage=""
                />
              </h3>
              <div className=" grid grid-cols-1 xl:grid-cols-2 ">
                <PortfolioCard
                  title="ProductHunt" 
                  imageType="web" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={true} 
                  url="https://phclone-ac.netlify.app"
                />

                <PortfolioCard
                  title="chat" 
                  imageType="chat" 
                  videoId="D3u3pPRJStk" 
                  videoBool={true} 
                  urlBool={true} 
                  url="https://superchat-ac.netlify.app"
                />

                <PortfolioCard
                  title="blogphp" 
                  imageType="phpblog" 
                  videoId="dpMQ3WPNOqE" 
                  videoBool={true} 
                  urlBool={false} 
                  url=""
                />

                <PortfolioCard
                  title="apiLaravel" 
                  imageType="apis" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={true} 
                  url="https://github.com/sayaskye/apirestlaravel"
                />
                <PortfolioCard
                  title="apiNode" 
                  imageType="apis" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={true} 
                  url="https://github.com/sayaskye/apirestnodejs"
                />
                
                {/* 
                <PortfolioCard
                  title="" 
                  imageType="" 
                  videoId="" 
                  videoBool={false} 
                  urlBool={false} 
                  url=""
                />
                */}
              </div>
            </div> 
          </div> 
        </div> 
      </Layout>
    </>
  )
}
export default Portfolio;
