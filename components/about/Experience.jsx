import { FormattedMessage } from "react-intl"
import ExperienceCard from "./ExperienceCard";
const Experience = () => {

    return ( 
        <div className="container mx-auto">
            <div className=" mx-auto lg:mx-20 xl:mx-32 my-10 dark:text-white duration-300 ease-in">
                <h2 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in ">
                    <FormattedMessage
                        id="about.title2"
                        defaultMessage=""
                    />
                </h2>
                <div className="flex flex-col 2xl:flex-row ">
                    <div>
                        <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-3 duration-300 ease-in ">
                            <FormattedMessage
                                id="about.title2.1"
                                defaultMessage=""
                            />
                        </h3>
                        <ExperienceCard
                            title="TitleEducation1"
                            date="DateEducation1"
                            place="PlaceEducation1"
                            description="DescriptionEducation1"
                            about="AboutEducation1"
                        />
                        <ExperienceCard
                            title="TitleEducation2"
                            date="DateEducation2"
                            place="PlaceEducation2"
                            description="DescriptionEducation2"
                            about="AboutEducation2"
                        />
                    </div>
                    <div>
                        <h3 className="text-main-lightblue dark:text-main-blue text-xl font-bold mx-3 duration-300 ease-in ">
                            <FormattedMessage
                                id="about.title2.2"
                                defaultMessage=""
                            />
                        </h3>
                        <ExperienceCard
                            title="TitleExperience1"
                            date="DateExperience1"
                            place="PlaceExperience1"
                            description="DescriptionExperience1"
                            about="AboutExperience1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Experience;