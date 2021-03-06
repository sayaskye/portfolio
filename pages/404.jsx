
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layout'
import Head from 'next/head';
import { useContext } from 'react';
import { configContext } from "../context/configContext";
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  const {locale} = useContext(configContext)
  return (
    <>
      {locale==="es-MX"&&
        <Head>
          <title> Inicio | Andrés Cazares Web </title>
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
          <title> Home | Andrés Cazares Web </title>
          <link rel='icon' href='/logo.svg' />
          <meta name='description' content='Andrés Cazares Personal Portfolio' />
          <meta name='keywords' content='México, Programmer, Developer, HTML, ReactJS, Tailwind, Web' />
          <meta name='author' content='Andrés Cazares' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:image' content='/logo.svg' />
        </Head>
      }
      <Layout>
        <div className="w-screen h-screen bg-gray-200 duration-500 ease-in dark:bg-gray-800 text-white">
          {/* <p>Hola mundo Index</p> */}
          <div className="h-full w-full bg-error bg-cover bg-top flex flex-col items-center justify-center">
            <div className="absolute flex flex-col  text-center">
              <h1 className="text-4xl md:text-[3.27rem] lg:text-6xl xl:text-[4.5rem] 2xl:text-[6rem] font-black bg-black bg-opacity-[.02] rounded-full flicker neonText">
                <FormattedMessage
                    id="error.title"
                    defaultMessage=""
                />
              </h1>
              <div className="mt-40 mx-10 bg-main-blue/30 backdrop-blur-sm rounded-full">
                <h2 className="text-xl md:text-3xl font-black items-center self-center bg-black bg-opacity-[.08] rounded-full ">
                    <FormattedMessage
                    id="error.subtitle"
                    defaultMessage=""
                    />
                </h2>
              </div>
            </div>
          </div>
        </div> 
      </Layout>
    </>
  )
}
export default Home;
