import { useContext, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { configContext } from "../context/configContext";
import { FormattedMessage } from 'react-intl';
import Link from 'next/link'


const Navbar = () => {
    const {setDarkmode, setLanguage, theme, darkEnabled, setDarkEnabled, menuOpen, setMenuOpen} = useContext(configContext)
    let copy;
    let year = new Date().getFullYear();

    const changeToEs = ()=>{
        setMenuOpen(!menuOpen)
        setLanguage('es')
        localStorage.setItem('lang', 'es');
    }
    const changeToEn = ()=>{
        setMenuOpen(!menuOpen)
        setLanguage('en')
        localStorage.setItem('lang', 'en');
    }
    const changeTheme = ()=>{
        if(darkEnabled){
            setDarkEnabled(false)
            localStorage.setItem('theme', 'dark');
        }else{
            setDarkEnabled(true)
            localStorage.setItem('theme', '');
        }
        setDarkmode(localStorage.getItem('theme'))
    }
    useEffect(() => {
        if (window) { 
            const themeStorage = localStorage.getItem('theme');
            const langStorage = localStorage.getItem('lang');

            if(themeStorage!==null){
                if(themeStorage==='dark'){
                    setDarkEnabled(false)
                }else{
                    setDarkEnabled(true)
                }
            }else{
                localStorage.setItem('theme', 'dark');
            }
            
            if(langStorage!==null){
                if(langStorage==='es'){
                    setLanguage('es')
                }else{
                    setLanguage('en')
                }
            }else{
                localStorage.setItem('lang', 'en');
            }
        }
    }, []); 

    if(year!=2021){
        copy="2021-"+(new Date().getFullYear())
    }else{
        copy=2021
    }

  return (
    <div className="overflow-auto scrollbarhidden">
        <div className="">
            <button 
                className="w-14 h-14 rounded-full dark:bg-main-grey/40 bg-main-grey hover:text-black hover:bg-main-blue/60 dark:hover:bg-main-blue/60 fixed flex items-center justify-center top-2 right-2 duration-300 ease-in z-50 md:hidden" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                }
            </button>
        </div>
        <div className={`bg-gray-100 dark:bg-navbar-fondo w-screen md:w-navbar duration-300 ease-in px-10 h-screen justify-center pt-10 md:pt-20 fixed md:static md:flex ${menuOpen ? "flex absolute z-40" : "hidden"}`}>
            <div className="flex flex-col justify-between mx-0 items-center">
                <div className="border-main-lightblue dark:border-main-blue w-48 h-48 rounded-full hidden md:flex items-center justify-center duration-300 ease-in border-8">
                    <div className=" bg-cover w-44 h-44 rounded-full flex items-center justify-center">
                        <img className="" src="/images/Profile menu.png" alt="Andr??s Cazares"  />
                    </div>
                </div>
                <div className="text-main-lightblue dark:text-main-blue flex justify-around w-60 py-2">
                    <a href="https://github.com/sayaskye" target="_blank" rel="noopener" className="hover:scale-150 duration-300 stroke-current  hover:text-black dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/andres-cazares-web/" target="_blank" rel="noopener" className="hover:scale-150 duration-300 stroke-current  hover:text-black dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/ChaoCazares" target="_blank" rel="noopener" className="hover:scale-150 duration-300 stroke-current  hover:text-black dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                </div>
                <div className="text-main-lightblue dark:text-main-blue text-2xl flex flex-col items-center w-60 font-semibold">
                    <Link href="/">
                        <a className="duration-300 ease-in-out w-full h-14 rounded-3xl flex items-center justify-center bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 hover:text-black mb-2 dark:hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            
                            <FormattedMessage
                                id="nav.home"
                                defaultMessage="Home"
                            />
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="duration-300 ease-in-out w-full h-14 rounded-3xl flex items-center justify-center bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 hover:text-black mb-2 dark:hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            <FormattedMessage
                                id="nav.about"
                                defaultMessage="About"
                            />
                        </a>
                    </Link>
                    <Link href="/portfolio">
                        <a className="duration-300 ease-in-out w-full h-14 rounded-3xl flex items-center justify-center bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 hover:text-black mb-2 dark:hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            <FormattedMessage
                                id="nav.projects"
                                defaultMessage="Projects"
                            />
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="duration-300 ease-in-out w-full h-14 rounded-3xl flex items-center justify-center bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 hover:text-black mb-2 dark:hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            <FormattedMessage
                                id="nav.contact"
                                defaultMessage="Contact"
                            />
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col pb-12 md:pb-20 w-60">
                    <div className="pb-2 mx-2">
                        <Switch
                        checked={darkEnabled}
                        onChange={changeTheme}
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
                        <button className="text-main-lightblue dark:text-main-blue dark:hover:text-white hover:text-black rounded-full py-2 px-3 text-lg font-bold w-1/2 mx-2 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in" onClick={() => changeToEs()}>
                            Espa??ol
                        </button>
                        <button className="text-main-lightblue dark:text-main-blue dark:hover:text-white hover:text-black rounded-full py-2 px-3 text-lg font-bold w-1/2 mx-2 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in" onClick={() => changeToEn()}>
                            English
                        </button>
                    </div>
                    <div className="my-3 mx-auto">
                        <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in "> &copy; {copy} Andr??s Cazares</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
