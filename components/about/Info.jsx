import { FormattedMessage } from "react-intl"
const AboutInfo = () => {

    let year;
    let month = new Date().getMonth();
    if(month!=10){
        year=(new Date().getFullYear())-1998
    }else{
        year=(new Date().getFullYear())-1997
    }

    return ( 
        <div className="container mx-auto">
            <div className=" mx-auto lg:mx-20 xl:mx-32 my-10 dark:text-white duration-300 ease-in">
                <h1 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in ">
                    <FormattedMessage
                        id="about.title"
                        defaultMessage="About"
                    />
                </h1>
                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-2 text-xl">

                    <div className="col-span-2 mx-3 lg:mx-0 duration-300 ease-in">
                        <div className="font-bold text-3xl">
                            <FormattedMessage
                                id="about.mainmsg1"
                                defaultMessage="Hi, im "
                            />
                            <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                                Carlos Andrés Gutiérrez Cazares 
                            </span> 
                            <FormattedMessage
                                id="about.mainmsg2"
                                defaultMessage=" Web programmer "
                            />
                        </div>
                        <br />
                        <FormattedMessage
                            id="about.mainmsg3"
                            defaultMessage=" "
                        />
                        <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                            <FormattedMessage
                                id="about.mainmsg4"
                                defaultMessage=" "
                            />
                        </span> 
                        <FormattedMessage
                            id="about.mainmsg5"
                            defaultMessage=" "
                        />
                        <span className="font-bold underline">
                            <FormattedMessage
                                id="about.mainmsg6"
                                defaultMessage=" "
                            />
                        </span>
                        <FormattedMessage
                            id="about.mainmsg7"
                            defaultMessage=" "
                        />
                        <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                            Front-end  
                        </span> 
                        <FormattedMessage
                            id="about.mainmsg8"
                            defaultMessage=" "
                        />
                        <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
                            Back-end  
                        </span> 
                        <FormattedMessage
                            id="about.mainmsg9"
                            defaultMessage=" "
                        />
                        <br />
                        <br />
                        <FormattedMessage
                            id="about.mainmsg10"
                            defaultMessage=" "
                        />

                        <hr className="2xl:hidden block dark:border-main-blue border-main-lightblue duration-300 ease-in my-3"></hr>
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
                                { year }
                                <FormattedMessage
                                    id="about.DataList1st2"
                                    defaultMessage=" Years "
                                />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="about.DataList2nd"
                                    defaultMessage=" "
                                />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="about.DataList3rd"
                                    defaultMessage=" "
                                />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="about.DataList4th1"
                                    defaultMessage=" "
                                />
                                <a href="#" className="underline">
                                    <FormattedMessage
                                        id="about.DataList4th2"
                                        defaultMessage=" "
                                    />
                                </a>
                                    
                            </li>
                            <li>    
                                <FormattedMessage
                                    id="about.DataList5th"
                                    defaultMessage=" "
                                />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="about.DataList6th"
                                    defaultMessage=" "
                                />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="about.DataList7th"
                                    defaultMessage=" "
                                />
                            </li>

                            <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in my-3"></hr>
                            <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in">
                                <FormattedMessage
                                    id="about.DataListTitle2"
                                    defaultMessage=" "
                                />
                            </h2>
                            
                            <li>
                                <FormattedMessage
                                    id="about.DataList8th"
                                    defaultMessage=" "
                                />
                            </li>
                            <li>
                                <FormattedMessage
                                    id="about.DataList9th"
                                    defaultMessage=" "
                                /> 
                            </li>

                            <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in my-3"></hr>
                            <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in">
                                Curriculum Vitae 
                                <br  className="2xl:hidden"/>
                                <button className=" text-main-lightblue dark:text-main-blue hover:text-black dark:hover:text-white rounded-full py-2 px-20 text-lg font-bold w-auto bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in my-9 self-center"> 
                                    <FormattedMessage
                                        id="about.download"
                                        defaultMessage=" "
                                    /> 
                                </button>
                            </h2>
                        </ul>
                    </div>

                    <div className="col-span-2 2xl:col-span-4 mx-3 lg:mx-0 duration-300 ease-in">
                        
                        <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in my-3"></hr>
                        <h2 className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in">
                            <FormattedMessage
                                    id="about.DataListTitle3"
                                    defaultMessage=" "
                                />
                        </h2>
                        <div className="flex flex-row flex-wrap justify-center dark:text-white duration-300 ease-in">
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/HTML.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">HTML</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/CSS3.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">CSS</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/Javascript.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">Javascript</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/React.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">React</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3 h-[160px] w-[160px]" src={`/images/tailwind.svg`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">Tailwind CSS</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/NodeJS.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">NodeJS</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3 h-[160px] w-[160px]" src={`/images/firebase.svg`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">Firebase</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/RESTful.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">RestFull</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/SQL.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">SQL</p>
                            </div>
                            <div className="flex flex-col">
                                <img className="m-3" src={`/images/GraphQL.png`} alt="Technologie" loading="lazy" />
                                <p className="mx-auto">GraphQL</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <hr className="dark:border-main-blue border-main-lightblue duration-300 ease-in my-6 h-auto"></hr>
            </div>
        </div>
    );
}
 
export default AboutInfo;