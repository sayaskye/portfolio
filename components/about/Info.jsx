import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { configContext } from "../../context/configContext";

const AboutInfo = () => {
  let spanish = false;
  let english = false;

  const { locale } = useContext(configContext);

  if (locale === "es-MX") {
    spanish = true;
    english = false;
  } else {
    english = true;
    spanish = false;
  }

  const getYearDiffWithMonth = (startDate, endDate) => {
    const ms = endDate.getTime() - startDate.getTime();
    const date = new Date(ms);
    return Math.abs(date.getUTCFullYear() - 1970);
  };

  const year = getYearDiffWithMonth(new Date("1997-09-21"), new Date());

  return (
    <div className="container mx-auto">
      <div className=" mx-auto lg:mx-20 xl:mx-32 mb-10 dark:text-white duration-300 ease-in">
        <h1 className="text-main-lightblue dark:text-main-blue text-5xl mb-10 font-bold mx-3 lg:mx-0 duration-300 ease-in text-center">
          <FormattedMessage id="about.title" defaultMessage="About" />
        </h1>
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-2 text-xl">
          <div className="border-main-lightblue dark:border-main-blue w-48 h-48 mx-auto mb-5 rounded-full md:hidden flex items-center justify-center duration-300 ease-in border-8">
            <div className=" bg-cover w-44 h-44 rounded-full flex items-center justify-center ">
              <img
                className=""
                src="/images/Profile menu.png"
                alt="Andrés Cazares"
              />
            </div>
          </div>

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
              <FormattedMessage id="about.mainmsg3" defaultMessage=" " />
              <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                <FormattedMessage id="about.mainmsg4" defaultMessage=" " />
              </span>
              <FormattedMessage id="about.mainmsg5" defaultMessage=" " />
              <span className=" underline">
                <FormattedMessage id="about.mainmsg6" defaultMessage=" " />
              </span>
              <FormattedMessage id="about.mainmsg7" defaultMessage=" " />
              <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                Front-end
              </span>
              <FormattedMessage id="about.mainmsg8" defaultMessage=" " />
              <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                Back-end
              </span>
              <FormattedMessage id="about.mainmsg9" defaultMessage=" " />
              <br />
              <br />
              <FormattedMessage id="about.mainmsg10" defaultMessage=" " />
              <br />
              <br />
              <FormattedMessage id="about.mainmsg11" defaultMessage=" " />
              <br />
              <br />
              <FormattedMessage id="about.mainmsg12" defaultMessage=" " />
            </div>

            <hr className="2xl:hidden block dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
          </div>

          <div className="col-span-2 2xl:col-span-1 mx-3 lg:mx-0 duration-300 ease-in">
            <ul className="list-disc 2xl:list-outside list-inside 2xl:ml-10">
              <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in">
                <FormattedMessage
                  id="about.DataListTitle1"
                  defaultMessage="My data "
                />
              </h2>
              <li>
                <FormattedMessage
                  id="about.DataList1st1"
                  defaultMessage="Age: "
                />
                {year}
                <FormattedMessage
                  id="about.DataList1st2"
                  defaultMessage=" Years "
                />
              </li>
              <li>
                <FormattedMessage id="about.DataList2nd" defaultMessage=" " />
              </li>
              <li>
                <FormattedMessage id="about.DataList4th1" defaultMessage=" " />
                <a
                  href="https://www.blog.andrescazares.com/"
                  className="underline"
                  target="_blank"
                  rel="noopener"
                >
                  <FormattedMessage
                    id="about.DataList4th2"
                    defaultMessage=" "
                  />
                </a>
              </li>

              <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
              <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in">
                <FormattedMessage
                  id="about.DataListTitle2"
                  defaultMessage=" "
                />
              </h2>

              <li>
                <FormattedMessage id="about.DataList8th" defaultMessage=" " />
              </li>
              <li>
                <FormattedMessage id="about.DataList9th" defaultMessage=" " />
              </li>

              <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
              <div className="flex flex-col">
                <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in">
                  Currículum Vitae
                </h2>
                {spanish && (
                  <a
                    href="/cv/AndresCazares_CV_ES.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=" text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full py-2 px-10 text-lg font-bold  bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in my-9 self-center mx-auto"
                  >
                    <FormattedMessage id="about.download" defaultMessage=" " />
                  </a>
                )}
                {english && (
                  <a
                    href="/cv/AndresCazares_CV_EN.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className=" text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full py-2 px-10 text-lg font-bold  bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in my-9 self-center mx-auto"
                  >
                    <FormattedMessage id="about.download" defaultMessage=" " />
                  </a>
                )}
              </div>
            </ul>
          </div>
        </div>
        <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in my-6 h-auto"></hr>
      </div>
    </div>
  );
};

export default AboutInfo;
