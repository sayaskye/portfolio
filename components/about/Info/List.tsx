import { useContext } from "react";
import { FormattedMessage } from "react-intl";

import Curriculum from "./Curriculum";
import { configContext } from "../../../context/configContext";

const List = () => {
  const { locale } = useContext(configContext);

  const getYearDiffWithMonth = (startDate: Date, endDate: Date) => {
    const ms = endDate.getTime() - startDate.getTime();
    const date = new Date(ms);
    return Math.abs(date.getUTCFullYear() - 1970);
  };

  const year = getYearDiffWithMonth(new Date("1997-09-21"), new Date());

  return (
    <div className="col-span-2 2xl:col-span-1 mx-3 lg:mx-0 duration-300 ease-in 2xl:pl-10">
      <ul className="list-disc 2xl:list-outside list-inside p-0">
        <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in text-xl">
          <FormattedMessage id="about.DataListTitle1" />
        </h2>
        <li>
          <FormattedMessage id="about.DataList1st1" />
          {year}
          <FormattedMessage id="about.DataList1st2" />
        </li>
        <li>
          <FormattedMessage id="about.DataList2nd" />
        </li>
        <li>
          <FormattedMessage id="about.DataList4th1" />
          <a
            href="https://www.blog.andrescazares.com/"
            className="underline dark:text-main-blue text-main-lightblue duration-300 ease-in"
            target="_blank"
            rel="noopener"
          >
            <FormattedMessage id="about.DataList4th2" />
          </a>
        </li>

        <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
        <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in text-xl">
          <FormattedMessage id="about.DataListTitle2" />
        </h2>

        <li>
          <FormattedMessage id="about.DataList8th" />
        </li>
        <li>
          <FormattedMessage id="about.DataList9th" />
        </li>

        <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
        <Curriculum locale={locale} />
      </ul>
    </div>
  );
};

export default List;
