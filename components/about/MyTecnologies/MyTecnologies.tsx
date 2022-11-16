import { FormattedMessage } from "react-intl";

import Tecnologie from "./Tecnologie";

const MyTecnologies = () => {
  const tecnologies = [
    { name: "HTML", svgname: "html" },
    { name: "CSS", svgname: "css" },
    { name: "Javascript", svgname: "js" },
    { name: "Typecript", svgname: "ts" },
    { name: "Git", svgname: "git" },
    { name: "React", svgname: "react" },
    { name: "NextJS", svgname: "next" },
    { name: "Tailwind", svgname: "tailwind" },
    { name: "Material UI", svgname: "mui" },
    { name: "Bootstrap", svgname: "bootstrap" },
    { name: "Rest API", svgname: "rest" },
    { name: "SQL", svgname: "database" },
    { name: "MongoDB", svgname: "mongo" },
    { name: "Redux", svgname: "redux" },
    { name: "Cypress", svgname: "cypress" },
    { name: "Jest", svgname: "jest" },
  ];
  const learning = [
    { name: "React Native", svgname: "react" },
    { name: "NodeJS", svgname: "node" },
    { name: "Express", svgname: "express" },
    { name: "GraphQL", svgname: "graphql" },
    { name: "Firebase", svgname: "firebase" },
    { name: "VueJs", svgname: "vue" },
    { name: "PHP", svgname: "php" },
    { name: "Laravel", svgname: "laravel" },
    { name: "Python", svgname: "python" },
  ];
  return (
    <div className="col-span-2 2xl:col-span-4 mx-3 lg:mx-0 duration-300 ease-in">
      <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6" />
      <h2 className="text-main-lightblue dark:text-main-blue text-3xl md:text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
        <FormattedMessage id="about.DataListTitle3" defaultMessage=" " />
      </h2>
      <div className="flex flex-row flex-wrap justify-center dark:text-white duration-100 ease-in ">
        {tecnologies.map((tecnologie) => (
          <Tecnologie
            key={tecnologie.name}
            name={tecnologie.name}
            svgname={tecnologie.svgname}
          />
        ))}
      </div>
      <h2 className="text-main-lightblue dark:text-main-blue text-3xl md:text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
        <FormattedMessage id="about.DataListTitle4" defaultMessage=" " />
      </h2>
      <div className="flex flex-row flex-wrap justify-center dark:text-white duration-100 ease-in">
        {learning.map((tecnologie) => (
          <Tecnologie
            key={tecnologie.name}
            name={tecnologie.name}
            svgname={tecnologie.svgname}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTecnologies;
