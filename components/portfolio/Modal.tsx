import React from "react";
import { FormattedMessage } from "react-intl";

interface Props {
  title: string;
  videoId: string;
  videoBool: boolean;
  onClose: () => void;
}

const ModalCard = ({ title, videoBool, videoId, onClose }: Props) => (
  <div className="bg-gray-200 dark:bg-gray-800 duration-300 ease-in absolute w-full h-full rounded-none dark:text-white text-black overflow-auto scrollbarhidden ring-2 dark:ring-main-blue/30 ring-main-lightblue/30">
    <h2 className="text-main-lightblue dark:text-main-blue text-3xl font-bold text-center duration-300 ease-in sticky top-0 bg-gray-200 dark:bg-gray-800 py-3">
      <FormattedMessage id={"portfolio.ProjectTitle." + title} />
      <button
        className="w-10 mt-3 mr-3 h-10 rounded-full absolute inset-y-0 right-0 bg-main-grey dark:bg-main-grey/40 hover:text-black hover:bg-main-blue/60 dark:hover:bg-main-blue/60 flex items-center justify-center"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 "></hr>
    </h2>
    <div className="flex justify-between my-3 items-end  mx-3 lg:mx-20 xl:mx-32 ">
      <h3 className="flex flex-col">
        <div className="text-main-lightblue dark:text-main-blue text-base md:text-xl font-bold">
          <FormattedMessage id="portfolio.card.typeLabel" />
        </div>
        <span className="text-left underline font-bold text-lg md:text-2xl">
          <FormattedMessage id={"portfolio.ProjectType." + title} />
        </span>
      </h3>
      <h3 className="flex flex-col">
        <div className="text-main-lightblue text-right dark:text-main-blue text-base md:text-xl font-bold">
          <FormattedMessage id="portfolio.card.dateLabel" />
        </div>
        <span className="text-right underline font-bold text-lg md:text-2xl">
          <FormattedMessage id={"portfolio.ProjectDate." + title} />
        </span>
      </h3>
    </div>
    <div className="mx-3 lg:mx-20 xl:mx-32 mb-10 dark:text-white">
      <div className="my-5 flex flex-col">
        <span className="text-main-lightblue dark:text-main-blue text-base md:text-xl font-bold">
          <FormattedMessage id="portfolio.card.featuresLabel" />
        </span>
        <span className="underline font-bold text-lg md:text-2xl">
          <FormattedMessage id={"portfolio.ProjectFeatures." + title} />
        </span>
      </div>
      <div className="my-5 sm:mx-0 flex flex-col">
        <span className="text-main-lightblue dark:text-main-blue text-base md:text-xl font-bold">
          <FormattedMessage id="portfolio.card.descriptionLabel" />
        </span>
        <span className="text-lg md:text-2xl">
          <FormattedMessage id={"portfolio.ProjectDescription." + title} />
        </span>
      </div>
      <div className="my-5 sm:mx-0 flex flex-col">
        <span className="text-main-lightblue dark:text-main-blue text-base md:text-xl font-bold">
          <FormattedMessage id="portfolio.card.tecLabel" />
        </span>
        <span className="underline font-bold text-lg md:text-2xl">
          <FormattedMessage id={"portfolio.ProjectTec." + title} />
        </span>
      </div>
      <hr className="dark:border-main-blue border-main-lightblue mt-3 mb-6"></hr>
    </div>
    {videoBool ? (
      <div className="px-3">
        <div className="max-h-[960px] mx-auto mb-5 rounded-2xl overflow-hidden aspect-video ring-2 dark:ring-main-blue/30 ring-main-lightblue/30">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?showinfo=0`}
            title="YouTube video player"
            allowFullScreen
            className="border-none"
          />
        </div>
      </div>
    ) : (
      <div className="mb-3"></div>
    )}
  </div>
);

export default ModalCard;
