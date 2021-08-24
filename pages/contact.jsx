
import Layout from '../components/layout'
import Info from '../components/contact/Info'
import Form from '../components/contact/Form'
import Head from 'next/head';
import { useContext } from 'react';
import { configContext } from "../context/configContext";

const Contact = () => {
  const {locale} = useContext(configContext)
  return (
    <>
      {locale==="es-MX"&&
        <Head>
          <title> Contacto | Andrés Cazares Web </title>
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
          <title> Contact | Andrés Cazares Web </title>
          <link rel='icon' href='/logo.png' />
          <meta name='description' content='Andrés Cazares Personal Portfolio' />
          <meta name='keywords' content='México, Programmer, Developer, HTML, ReactJS, Tailwind, Web' />
          <meta name='author' content='Andrés Cazares' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:image' content='/images/logo.png' />
        </Head>
      }
      <Layout>
        <div className="w-screen h-auto py-[54px] bg-gray-200 duration-500 ease-in dark:bg-gray-800">
          <Info></Info>
          <Form></Form>
        </div> 
      </Layout>
    </>
  )
}
export default Contact;
