import { useState, useContext, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { configContext } from "../context/configContext";
import {FormattedMessage} from 'react-intl';


const Navbar = () => {
    const {setDarkmode, setLanguage} = useContext(configContext)
    const [darkEnabled, setDarkEnabled] = useState(false);
    const [langEnabled, setLangEnabled] = useState(false);
    
    useEffect(() => {
        setDarkmode()
    }, [darkEnabled])

    useEffect(() => {
        setLanguage()
    }, [langEnabled])
  return (
    <div className="bg-navbar-fondo w-navbar h-screen  justify-center pt-20  hidden md:flex">
        <div className="flex flex-col ">
            <div className="bg-blue-400 w-48 h-48 rounded-full flex items-center justify-center">
                <div className="bg-white w-44 h-44 rounded-full flex items-center justify-center">
                    <p className="">Profile photo</p>
                </div>
            </div>
            <div className="text-white flex justify-around pt-5">
                <a href="#">Git</a>
                <a href="#">FB</a>
                <a href="#">TW</a>
            </div>
            <div className="text-white flex flex-col pt-16">
                <a href="#">Links1</a>
                <a href="#">Links2</a>
                <a href="#">Links3</a>
                <a href="#">Links4</a>
            </div>
            <div className=" flex flex-col content-end">
                <div className="py-16">
                    <Switch
                    checked={darkEnabled}
                    onChange={setDarkEnabled}
                    className={`${darkEnabled ? "bg-blue-200" : "bg-blue-900"} relative inline-flex flex-shrink-0 h-10 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-500 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${darkEnabled ? "translate-x-6" : "translate-x-0"} pointer-events-none inline-block h-9 w-9 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-500`}
                    />
                    </Switch>
                </div>

                <button className="bg-white rounded-full py-2 px-3" onClick={setLangEnabled}>
                    <FormattedMessage
                        id="nav.language"
                        defaultMessage="idioma"
                    />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
