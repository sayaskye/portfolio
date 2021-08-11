import { FormattedMessage } from 'react-intl'
const Info = () => {
    return ( 
        <div className="container mx-auto">
            <div className=" mx-auto lg:mx-20 xl:mx-48 my-10 dark:text-white duration-300 ease-in">
                <h1 className="text-main-lightblue dark:text-main-blue text-5xl my-10 font-bold mx-3 lg:mx-0 duration-300 ease-in ">
                    <FormattedMessage
                        id="contact.title"
                        defaultMessage="Contact"
                    />
                </h1>
                <div className="flex flex-col mx-3 lg:mx-0 duration-300 ease-in">
                    <div className="flex flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <p className="ml-2">+52 656 <strong>393 1234</strong> </p>
                    </div>
                    <div className="flex flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="ml-2"><strong>chaotears</strong>@gmail.com</p>
                    </div>
                    <div className="flex flex-grow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="ml-2">Ciudad Juárez, Chihuahua, <strong>México.</strong></p>
                    </div>
                </div>
            </div>
            <hr className="dark:border-main-blue border-main-lightblue mx-3 duration-300 ease-in "></hr>
        </div>
     );
}
 
export default Info;