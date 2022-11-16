import { FormattedMessage } from "react-intl";

import AboutMainText from "./AboutMainText";
import List from "./List";

const AboutInfo = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto lg:mx-20 xl:mx-32 mb-10 dark:text-white duration-300 ease-in">
        <h1 className="text-main-lightblue dark:text-main-blue text-5xl mb-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
          <FormattedMessage id="about.title" defaultMessage="About" />
        </h1>
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-2 text-xl">
          <div className="md:hidden flex items-center justify-center duration-300 ease-in pb-6">
            <img
              className="w-40 h-40 ring-8 rounded-full ring-main-lightblue dark:ring-main-blue duration-300 ease-in mt-2 md:mt-6 lg:mt-8 xl:mt-10"
              src="/images/Profile menu.png"
              alt="Andrés Cazares"
            />
          </div>
          <AboutMainText />
          <List />
        </div>
        <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in my-6 h-auto"></hr>
      </div>
    </div>
  );
};

export default AboutInfo;
