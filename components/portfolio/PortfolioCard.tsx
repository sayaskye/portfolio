import { useState, useContext } from "react";

import { FormattedMessage } from "react-intl";
import Modal from "@material-ui/core/Modal";

import ModalCard from "./Modal";
import { configContext } from "../../context/configContext";

interface Props {
  title: string;
  imageType: string;
  videoId: string;
  url: string;
  urlBool: boolean;
  videoBool: boolean;
}

const PortfolioCard = ({
  title,
  imageType,
  videoId,
  url,
  urlBool,
  videoBool,
}: Props) => {
  const { theme } = useContext(configContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="text-black dark:text-white h/auto my-4 bg-gray-300 dark:bg-gray-700 rounded-3xl shadow-xl mx-5 lg:mx-3 flex flex-col lg:flex-row xl:flex-col 2xl:flex-row transition-all duration-500 ease-in-out transform hover:scale-[1.01]">
      <div className="lg:w-1/2 xl:w-full 2xl-w-1/2 h-1/2 lg:h-full xl:h-1/2 2xl:h-full flex items-center justify-center">
        <img
          className="lg:rounded-l-3xl 2xl:rounded-l-3xl lg:rounded-r-none 2xl:rounded-r-none rounded-t-3xl rounded-b-none xl:rounded-t-3xl xl:rounded-b-none object-fill h-[260px] w-[calc(100%-12px)]  m-3"
          src={`/images/cards/${imageType}.svg`}
          alt="Project"
        />
      </div>
      <div className="lg:w-1/2 xl:w-full 2xl-w-1/2 mt-3 h-auto ">
        <div className="flex flex-col text-center ">
          <h2 className="text-main-lightblue dark:text-main-blue text-3xl mb-3 font-bold lg:mx-3 duration-300 ease-in mx-5">
            <FormattedMessage id={"portfolio.ProjectTitle." + title} />
          </h2>
        </div>
        <p className=" w-3/4 mx-auto limitTextLines">
          <FormattedMessage id={"portfolio.ProjectDescription." + title} />
        </p>
        <div className="flex justify-between my-3  ">
          <div className="flex flex-col w-3/4 mx-auto ">
            {urlBool && (
              <a
                href={url}
                target="_blank"
                rel="noopener"
                className="text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full text-lg font-bold w-full leading-8 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in text-center my-3"
              >
                <FormattedMessage id={"portfolio.link"} />
              </a>
            )}
            <button
              type="button"
              onClick={handleOpen}
              className="text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full text-lg font-bold w-full px-3 h-8 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in cursor-pointer"
            >
              <FormattedMessage id={"portfolio.watch"} />
            </button>
          </div>
          <Modal open={open} onClose={handleClose}>
            <div className={`${theme} overflow-auto`}>
              <ModalCard
                title={title}
                videoBool={videoBool}
                videoId={videoId}
                onClose={handleClose}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
