import { FormattedMessage } from "react-intl";
const ExperienceCard = ({ title, date, place, description, about }) => {
  return (
    <div className="text-black dark:text-white p-3 my-2 md:p-6 md:my-4 bg-gray-300 dark:bg-gray-700  rounded-lg shadow-xl mx-3 transition-all duration-500 ease-in-out transform  hover:scale-[1.01]">
      <h4 className="mb-3  font-semibold tracking-widest uppercase ">
        <FormattedMessage id={"about." + date} defaultMessage="" />
      </h4>
      <h2 className="text-main-lightblue tracking-wide dark:text-main-blue text-3xl md:text-4xl mb-3 font-bold lg:mx-0 duration-300 ease-in ">
        <FormattedMessage id={"about." + title} defaultMessage="" />
      </h2>
      <h3 className="mb-5  font-semibold underline  uppercase dark:text-gray-300 text-gray-700 duration-300 ease-in ">
        <FormattedMessage id={"about." + place} defaultMessage="" />
      </h3>
      <p className="mb-3 text-base md:text-xl 2xl:text-2xl">
        <FormattedMessage id={"about." + description} defaultMessage="" />
      </p>
      <p className="mb-3  ">
        <FormattedMessage id={"about." + about} defaultMessage="" />
      </p>
    </div>
  );
};

export default ExperienceCard;
