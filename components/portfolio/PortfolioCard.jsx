import { FormattedMessage } from "react-intl"
const PortfolioCard = ({title, date, tecnologies, description, features, type, url}) => {
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
                    
                    <h4 className="mb-3  font-semibold  uppercase text-gray-600 dark:text-gray-400 mx-2 "> 
                        <FormattedMessage
                            id={"portfolio."+type} 
                            defaultMessage=""
                        />
                    </h4>
                </div>
                

                <h4 className="mb-3 mx-3 font-semibold  uppercase text-gray-600 dark:text-gray-400 "> 
                    <FormattedMessage
                        id={"portfolio."+date} 
                        defaultMessage=""
                    />
                </h4>
                
                <p  className="mb-3 mx-3 "> 
                <FormattedMessage
                        id={"portfolio."+description} 
                        defaultMessage=""
                    /> 
                </p>

                <p  className="mb-3 mx-3 "> 
                    <FormattedMessage
                        id={"portfolio."+features} 
                        defaultMessage=""
                    />
                </p>

                <div className="flex justify-between m-3 items-end">
                    <h3 className="  font-semibold underline tracking-widest uppercase "> 
                        <FormattedMessage
                            id={"portfolio."+tecnologies} 
                            defaultMessage=""
                        />
                    </h3>
                    
                    <button type="button" className="text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full mr-5 text-lg font-bold w-auto px-3 h-8 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in ">
                        <FormattedMessage
                            id={"portfolio.watch"} 
                            defaultMessage=""
                        />
                    </button>
                </div>
                
            </div>
        </div>
    );
}
 
export default PortfolioCard;