import { FormattedMessage } from "react-intl";

import Tecnologie from "./Tecnologie";

const MyTecnologies = () => {
  return (
    <div className="col-span-2 2xl:col-span-4 mx-3 lg:mx-0 duration-300 ease-in">
      <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
      <h2 className="text-main-lightblue dark:text-main-blue text-3xl md:text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
        <FormattedMessage id="about.DataListTitle3" defaultMessage=" " />
      </h2>
      <div className="flex flex-row flex-wrap justify-center dark:text-white duration-100 ease-in ">
        <Tecnologie name="HTML" svgname="html" />
        <Tecnologie name="CSS" svgname="css" />
        <Tecnologie name="Javascript" svgname="js" />
        <Tecnologie name="Typecript" svgname="ts" />
        <Tecnologie name="Git" svgname="git" />
        <Tecnologie name="React" svgname="react" />
        <Tecnologie name="Tailwind" svgname="tailwind" />
        <Tecnologie name="Bootstrap" svgname="bootstrap" />
        <Tecnologie name="Firebase" svgname="firebase" />
        <Tecnologie name="Rest API" svgname="rest" />
        <Tecnologie name="SQL" svgname="database" />
        <Tecnologie name="MongoDB" svgname="mongo" />
        <Tecnologie name="Redux" svgname="redux" />

        {/* <Tecnologie name=""svgname=""/>  */}
      </div>
      <h2 className="text-main-lightblue dark:text-main-blue text-3xl md:text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
        <FormattedMessage id="about.DataListTitle4" defaultMessage=" " />
      </h2>
      <div className="flex flex-row flex-wrap justify-center dark:text-white duration-100 ease-in">
        <Tecnologie name="Jest" svgname="jest" />
        <Tecnologie name="React Native" svgname="react" />
        <Tecnologie name="NodeJS" svgname="node" />
        <Tecnologie name="Express" svgname="express" />
        <Tecnologie name="GraphQL" svgname="graphql" />
        <Tecnologie name="VueJs" svgname="vue" />
        <Tecnologie name="PHP" svgname="php" />
        <Tecnologie name="Laravel" svgname="laravel" />
        <Tecnologie name="Python" svgname="python" />
        {/* <Tecnologie name="Angular"svgname="angular"/>  */}
        {/* <Tecnologie name=""svgname=""/>  */}
      </div>
    </div>
  );
};

export default MyTecnologies;
