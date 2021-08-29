import { FormattedMessage } from "react-intl"
import Modal from '@material-ui/core/Modal';
import { useState } from "react";
import { useContext } from "react";
import {configContext} from '../../context/configContext' 

const PortfolioCard = ({title, date, tecnologies, description, features, type, url}) => {

    const {theme} = useContext(configContext)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className="bg-gray-200 dark:bg-gray-800 duration-300 ease-in absolute translate-x-[0%] md:translate-x-[12%] translate-y-[0%] md:translate-y-[5%] w-full md:w-4/5 max-h-[100%] md:max-h-[90%] rounded-none md:rounded-xl px-5 dark:text-white text-black overflow-auto scrollbarhidden">
            <h2 className="text-main-lightblue dark:text-main-blue text-3xl font-bold text-center duration-300 ease-in sticky top-0 bg-gray-200 dark:bg-gray-800 py-3">
                <FormattedMessage
                    id={"portfolio."+title} 
                    defaultMessage=""
                />
                <button 
                    className="w-10 mt-3 h-10 rounded-full absolute inset-y-0 right-0 hover:text-black hover:bg-main-blue/60 dark:hover:bg-main-blue/60 flex items-center justify-center" 
                    onClick={() => handleClose()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            
                <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 "></hr>
            </h2>


            <div className="flex justify-between my-3 items-end  mx-3 lg:mx-20 xl:mx-32 ">
                <h3 className="  font-semibold underline tracking-widest uppercase "> 
                    <FormattedMessage
                        id={"portfolio."+type} 
                        defaultMessage=""
                    />
                </h3>
                <h3 className="  font-semibold underline tracking-widest uppercase "> 
                    <FormattedMessage
                        id={"portfolio."+date} 
                        defaultMessage=""
                    />
                </h3>
            </div>
            <div className=" mx-auto lg:mx-20 xl:mx-32 mb-10 dark:text-white duration-300 ease-in">
                <div className=" text-xl duration-300 ease-in">
                    <div className=" mx-3 lg:mx-0 duration-300 ease-in">
                        <div className="font-bold text-3xl duration-300 ease-in my-5">
                            <FormattedMessage
                                id={"portfolio."+features} 
                                defaultMessage=""
                            />
                        </div>
                        <FormattedMessage
                            id={"portfolio."+description} 
                            defaultMessage=""
                        />
                        <div className="font-bold text-sm my-5 duration-300 ease-in">
                            <FormattedMessage
                                id={"portfolio."+tecnologies} 
                                defaultMessage=""
                            />
                        </div>

                        <hr className=" dark:border-main-blue border-main-lightblue duration-300 ease-in mt-3 mb-6"></hr>
                    </div>
                </div>
            </div>

            <div className="w-full h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[65vh]">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JBDoscllt0w?showinfo=0" title="YouTube video player" allowFullScreen></iframe>
          
            </div>

            <div className="mb-5"/>
        </div>
    );

    return ( 
        <div className="text-black dark:text-white   my-4 bg-gray-300 dark:bg-gray-700  rounded-3xl shadow-xl mx-5 lg:mx-3 flex flex-col lg:flex-row xl:flex-col 2xl:flex-row  transition-all duration-500 ease-in-out transform  hover:scale-[1.01]">
            <div className="lg:w-1/2 xl:w-full 2xl-w-1/2 ">
                <img className="lg:rounded-l-3xl 2xl:rounded-l-3xl lg:rounded-r-none 2xl:rounded-r-none rounded-t-3xl rounded-b-none xl:rounded-t-3xl xl:rounded-b-none object-cover h-full w-full shadow-xl " src={url} alt="Project"  />
            </div>
            <div className="lg:w-1/2 xl:w-full 2xl-w-1/2 mt-3 h-1/2 ">
                <div className="flex justify-between mx-3">
                    <h2 className="text-main-lightblue dark:text-main-blue text-3xl mb-3 font-bold lg:mx-0 duration-300 ease-in ">
                        <FormattedMessage
                            id={"portfolio."+title} 
                            defaultMessage=""
                        />
                    </h2>
                    
                    {/* <h4 className="mb-3  font-semibold  uppercase text-gray-600 dark:text-gray-400 mx-2 "> 
                        <FormattedMessage
                            id={"portfolio."+type} 
                            defaultMessage=""
                        />
                    </h4> */}
                </div>
                

                {/* <h4 className="mb-3 mx-3 font-semibold  uppercase text-gray-600 dark:text-gray-400 "> 
                    <FormattedMessage
                        id={"portfolio."+date} 
                        defaultMessage=""
                    />
                </h4> */}
                
                <p  className=" mx-3 limitTextLines my-5 md:my-10 2xl:my-20"> 
                <FormattedMessage
                        id={"portfolio."+description} 
                        defaultMessage=""
                    /> 
                </p>

                {/* <p  className="mb-3 mx-3 "> 
                    <FormattedMessage
                        id={"portfolio."+features} 
                        defaultMessage=""
                    />
                </p> */}

                <div className="flex justify-between m-3 items-end">
                    {/* <h3 className="  font-semibold underline tracking-widest uppercase "> 
                        <FormattedMessage
                            id={"portfolio."+tecnologies} 
                            defaultMessage=""
                        />
                    </h3> */}
                    
                    <button type="button" onClick={handleOpen} className="text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full mx-5 text-lg font-bold w-full px-3 h-8 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in ">
                        <FormattedMessage
                            id={"portfolio.watch"} 
                            defaultMessage=""
                        />
                    </button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <div className={`${theme} overflow-auto` }>
                            {body}
                        </div>
                    </Modal>
                </div>
                
            </div>
        </div>
    );
}
 
export default PortfolioCard;