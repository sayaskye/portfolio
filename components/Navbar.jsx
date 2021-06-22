import { useState, useContext, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { configContext } from "../context/configContext";
import { FormattedMessage } from 'react-intl';
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    const {setDarkmode, setLanguage} = useContext(configContext)
    const [darkEnabled, setDarkEnabled] = useState(false);
    
    useEffect(() => {
        if(darkEnabled){
            setDarkmode("")
        }else{
            setDarkmode("dark")
        }
    }, [darkEnabled])

  return (
    <div className="bg-navbar-fondo w-navbar h-screen justify-center pt-20 hidden md:flex ">
        <div className="flex flex-col justify-between mx-0 items-center">
            <div className="bg-blue-400 w-48 h-48 rounded-full flex items-center justify-center ">
                <div className="bg-profile bg-cover w-44 h-44 rounded-full flex items-center justify-center">
                    <Image src="/../public/images/ProfilePictureMenu.png" alt="Imagen de Andres Cazares" width="200%" height="200%"/>
                </div>
            </div>
            <div className="text-white flex justify-around w-64 ">
                <a href="#" target="_blank" className="hover:scale-150 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3AB5EF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a href="#" target="_blank" className="hover:scale-150 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3AB5EF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <line x1="8" y1="11" x2="8" y2="16" />
                        <line x1="8" y1="8" x2="8" y2="8.01" />
                        <line x1="12" y1="16" x2="12" y2="11" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                </a>
                <a href="#" target="_blank" className="hover:scale-150 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3AB5EF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                </a>
            </div>
            <div className="text-main-blue text-2xl flex flex-col items-center w-64 mb-16">
                <Link href="/">
                    <a className="w-full h-14 rounded-full flex items-center justify-center bg-main-grey/10 hover:bg-main-blue/20 hover:text-white duration-200 ease-in mb-2">
                        <FormattedMessage
                            id="nav.home"
                            defaultMessage="Home"
                        />
                    </a>
                </Link>
                <Link href="/about">
                    <a className="w-full h-14 rounded-full flex items-center justify-center bg-main-grey/10 hover:bg-main-blue/20 hover:text-white duration-200 ease-in mb-2">
                        <FormattedMessage
                            id="nav.about"
                            defaultMessage="About"
                        />
                    </a>
                </Link>
                <Link href="/portfolio">
                    <a className="w-full h-14 rounded-full flex items-center justify-center bg-main-grey/10 hover:bg-main-blue/20 hover:text-white duration-200 ease-in mb-2">
                        <FormattedMessage
                            id="nav.projects"
                            defaultMessage="Projects"
                        />
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="w-full h-14 rounded-full flex items-center justify-center bg-main-grey/10 hover:bg-main-blue/20 hover:text-white duration-200 ease-in mb-2">
                        <FormattedMessage
                            id="nav.contact"
                            defaultMessage="Contact"
                        />
                    </a>
                </Link>
            </div>
            <div className="flex flex-col pb-20 w-64">

                <div className="pb-2 mx-2">
                    <Switch
                    checked={darkEnabled}
                    onChange={setDarkEnabled}
                    className={`${darkEnabled ? "bg-blue-200" : "bg-blue-900"} relative inline-flex flex-shrink-0 h-10 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-500 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                    <span
                        aria-hidden="true"
                        className={`${darkEnabled ? "translate-x-6" : "translate-x-0"} pointer-events-none h-9 w-9 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-500 flex items-center justify-center`}
                    >
                        {darkEnabled ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        }
                    </span>
                    </Switch>
                </div>

                <div className="flex">
                    <button className="bg-white rounded-full py-2 px-3 text-lg font-bold w-1/2 mx-2" onClick={() => setLanguage('es')}>
                        Español
                    </button>
                    <button className="bg-white rounded-full py-2 px-3 text-lg font-bold w-1/2 mx-2" onClick={() => setLanguage('en')}>
                        English
                    </button>
                </div>
               {/*  <button className="bg-white rounded-full py-2 px-3 text-lg font-bold" onClick={setLangEnabled}>
                    <FormattedMessage
                        id="nav.language"
                        defaultMessage="Language"
                    />
                </button>  */}

            </div>
        </div>
    </div>
  );
};

export default Navbar;
