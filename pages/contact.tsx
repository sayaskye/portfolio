import { useContext } from "react";

import HeaderSeo from "../components/seo/HeaderSeo";
import Layout from "../components/layout";
import Info from "../components/contact/Info";
import Form from "../components/contact/Form";

import { configContext } from "../context/configContext";

const Contact = () => {
  const { locale } = useContext(configContext);
  return (
    <>
      <HeaderSeo locale={locale} page="contact" />
      <Layout>
        <div
          className=" w-screen h-full min-h-screen
        bg-gray-200 dark:bg-gray-800
          duration-500 ease-in "
        >
          <Info />
          <Form />
        </div>
      </Layout>
    </>
  );
};
export default Contact;
