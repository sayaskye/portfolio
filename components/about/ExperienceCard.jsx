import { FormattedMessage } from "react-intl"
const ExperienceCard = ({title, date, place, description, about}) => {

    return ( 
        <div className="text-black dark:text-white duration-300 ease-in p-6 my-4 bg-gray-300 dark:bg-gray-700  rounded-lg shadow-xl mx-3 ">
            <h4 className="mb-3  font-semibold tracking-widest uppercase "> 
                <FormattedMessage
                    id={"about."+date} 
                    defaultMessage=""
                />
            </h4>
            <h2 className="text-main-lightblue dark:text-main-blue text-3xl mb-3 font-bold lg:mx-0 duration-300 ease-in ">
                <FormattedMessage
                    id={"about."+title} 
                    defaultMessage=""
                />
            </h2>
            <h3 className="mb-8  font-semibold underline tracking-widest uppercase "> 
                <FormattedMessage
                    id={"about."+place} 
                    defaultMessage=""
                />
            </h3>
            <p  className="mb-3  "> 
            <FormattedMessage
                    id={"about."+description} 
                    defaultMessage=""
                /> 
            </p>
            <p  className="mb-3  "> 
                <FormattedMessage
                    id={"about."+about} 
                    defaultMessage=""
                />
            </p>
        </div>
    );
}
 
export default ExperienceCard;