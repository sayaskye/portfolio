import { FormattedMessage } from "react-intl";

import ExperienceCard from "./ExperienceCard";
import { education, experience } from "./info";

const Experience = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto lg:mx-20 xl:mx-32 my-10 dark:text-white duration-300 ease-in">
        <h2 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
          <FormattedMessage id="about.title2" defaultMessage="" />
        </h2>
        <div className="flex flex-col  ">
          <div>
            <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-3 duration-300 ease-in ">
              <FormattedMessage id="about.title2.1" defaultMessage="" />
            </h3>
            <div className="grid grid-cols-1 2xl:grid-cols-2">
              {education.map((item) => (
                <ExperienceCard
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  place={item.place}
                  description={item.description}
                  about={item.about}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 2xl:mt-0">
            <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-3 duration-300 ease-in ">
              <FormattedMessage id="about.title2.2" defaultMessage="" />
            </h3>
            <div className="grid grid-cols-1 2xl:grid-cols-2">
              {experience.map((item) => (
                <ExperienceCard
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  place={item.place}
                  description={item.description}
                  about={item.about}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
