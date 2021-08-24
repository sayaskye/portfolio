import { FormattedMessage } from "react-intl"
const PortfolioCard = ({title, date, tecnologies, description, features, type, url}) => {
    return ( 
        <div className="text-black dark:text-white duration-300 ease-in  my-4 bg-gray-300 dark:bg-gray-700  rounded-3xl shadow-xl mx-3 flex flex-col lg:flex-row xl:flex-col 2xl:flex-row">
            <div className="lg:w-1/2 xl:w-full 2xl-w-1/2 ">
                <img className="lg:rounded-l-3xl 2xl:rounded-l-3xl lg:rounded-r-none 2xl:rounded-r-none rounded-t-3xl rounded-b-none xl:rounded-t-3xl xl:rounded-b-none object-cover h-full w-full " src={url} alt="Project" loading="lazy" />
            </div>
            <div className="lg:w-1/2 xl:w-full 2xl-w-1/2  ml-3 mt-3 h-1/2 ">
                <div className="flex justify-between ">
                    <h2 className="text-main-lightblue dark:text-main-blue text-3xl mb-3 font-bold lg:mx-0 duration-300 ease-in ">
                        <FormattedMessage
                            id={"portfolio."+title} 
                            defaultMessage=""
                        />
                    </h2>
                    
                    <h4 className="mb-3  font-semibold tracking-widest uppercase text-gray-600 dark:text-gray-400 mx-4 "> 
                        <FormattedMessage
                            id={"portfolio."+type} 
                            defaultMessage=""
                        />
                    </h4>
                </div>
                

                <h4 className="mb-3  font-semibold tracking-widest uppercase text-gray-600 dark:text-gray-400 "> 
                    <FormattedMessage
                        id={"portfolio."+date} 
                        defaultMessage=""
                    />
                </h4>
                
                <p  className="mb-3  mr-5"> 
                <FormattedMessage
                        id={"portfolio."+description} 
                        defaultMessage=""
                    /> 
                </p>

                <p  className="mb-3  "> 
                    <FormattedMessage
                        id={"portfolio."+features} 
                        defaultMessage=""
                    />
                </p>

                <div className="flex justify-between ">
                    <h3 className="mb-8  font-semibold underline tracking-widest uppercase "> 
                        <FormattedMessage
                            id={"portfolio."+tecnologies} 
                            defaultMessage=""
                        />
                    </h3>
                    
                    <button type="button" className="text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full mr-5 text-lg font-bold w-14 h-8 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in ">
                        Ver
                    </button>
                </div>
                
            </div>
        </div>
    );
}
 
export default PortfolioCard;