import { FormattedMessage } from "react-intl";

interface Props {
  locale: "es-MX" | "en-US";
}

const Curriculum = ({ locale }: Props) => {
  const langs = {
    "es-MX": {
      ref: "/cv/AndresCazares_CV_ES.pdf",
    },
    "en-US": {
      ref: "/cv/AndresCazares_CV_EN.pdf",
    },
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in text-xl">
        Currículum Vitae
      </h2>
      <a
        href={langs[locale].ref}
        target="_blank"
        rel="noreferrer noopener"
        className=" text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white
        bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30
         rounded-full py-2 px-10 text-lg font-bold my-9 self-center mx-auto
         duration-300 ease-in "
      >
        <FormattedMessage id="about.download" />
      </a>
    </div>
  );
};

export default Curriculum;
