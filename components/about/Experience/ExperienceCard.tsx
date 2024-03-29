import { FormattedMessage } from "react-intl";

interface Props {
  title: string;
  date: string;
  place: string;
  description: string;
  about: string;
}

const ExperienceCard = ({ title, date, place, description, about }: Props) => {
  return (
    <div
      className="text-black dark:text-white bg-gray-300 dark:bg-gray-700 
        p-3 my-2 md:p-6 md:my-4 mx-3 
        rounded-lg shadow-xl hover:scale-[1.01]
        transition-all duration-500 ease-in-out transform"
    >
      <h4 className="mb-3 font-semibold tracking-widest uppercase">
        <FormattedMessage id={"about." + date} />
      </h4>
      <h2 className="text-main-lightblue tracking-wide dark:text-main-blue text-3xl md:text-4xl mb-3 font-bold lg:mx-0 duration-300 ease-in">
        <FormattedMessage id={"about." + title} />
      </h2>
      <h3 className="mb-5 font-semibold underline uppercase dark:text-gray-300 text-gray-700 duration-300 ease-in text-base">
        <FormattedMessage id={"about." + place} />
      </h3>
      <p className="mb-3 text-base md:text-xl 2xl:text-2xl">
        <FormattedMessage id={"about." + description} />
      </p>
      <p className="mb-3 ">
        <FormattedMessage id={"about." + about} />
      </p>
    </div>
  );
};

export default ExperienceCard;
