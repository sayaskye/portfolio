import { FormattedMessage } from "react-intl";

const AboutMainText = () => {
  const blueClass =
    "text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in";
  return (
    <div className="col-span-2 mx-3 lg:mx-0 duration-300 ease-in">
      <div className="font-bold text-2xl lg:text-3xl">
        <FormattedMessage id="about.mainmsg1" defaultMessage="Hi, im " />
        <span className="text-main-lightblue dark:text-main-blue  duration-300 ease-in ">
          Carlos Andrés Gutiérrez Cazares
        </span>
        <FormattedMessage
          id="about.mainmsg2"
          defaultMessage=" Web programmer "
        />
      </div>
      <div className="text-lg lg:text-xl">
        <br />
        <FormattedMessage id="about.mainmsg3" />
        <span className={blueClass}>
          <FormattedMessage id="about.mainmsg4" />
        </span>
        <FormattedMessage id="about.mainmsg5" />
        <span className="underline">
          <FormattedMessage id="about.mainmsg6" />
        </span>
        <FormattedMessage id="about.mainmsg7" />
        <span className={blueClass}>Front-end</span>
        <FormattedMessage id="about.mainmsg8" />
        <span className={blueClass}>Back-end</span>
        <FormattedMessage id="about.mainmsg9" />
        <br />
        <br />
        <FormattedMessage id="about.mainmsg10" />
        <br />
        <br />
        <FormattedMessage id="about.mainmsg11" />
        <br />
        <br />
        <FormattedMessage id="about.mainmsg12" />
      </div>
      <hr className="2xl:hidden block dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
    </div>
  );
};

export default AboutMainText;
