import { useContext } from "react";
import { Switch } from "@headlessui/react";

import { configContext } from "../../context/configContext";

const Footer = () => {
  const {
    setDarkmode,
    setLanguage,
    darkEnabled,
    setDarkEnabled,
    menuOpen,
    setMenuOpen,
    locale,
  } = useContext(configContext);

  const changeToEs = () => {
    setMenuOpen(!menuOpen);
    setLanguage("es-MX");
    localStorage.setItem("lang", "es-MX");
  };
  const changeToEn = () => {
    setMenuOpen(!menuOpen);
    setLanguage("en-US");
    localStorage.setItem("lang", "en-US");
  };
  const changeTheme = () => {
    if (darkEnabled) {
      setDarkEnabled(false);
      localStorage.setItem("theme", "dark");
    } else {
      setDarkEnabled(true);
      localStorage.setItem("theme", "");
    }
    setDarkmode(localStorage.getItem("theme"));
  };
  return (
    <div className="flex flex-col w-60">
      <div className="pb-2 mx-2 flex items-center justify-center">
        <Switch
          checked={darkEnabled}
          onChange={changeTheme}
          className={`${
            darkEnabled ? "bg-blue-200" : "bg-blue-900"
          } relative inline-flex w-16 h-10 items-center border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-500 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${
              darkEnabled ? "translate-x-5" : "-translate-x-[3px]"
            } pointer-events-none h-9 w-9 rounded-full bg-white shadow-lg transform transition ease-in-out duration-500 flex items-center justify-center`}
          >
            {darkEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </span>
        </Switch>
        <button
          className="text-main-lightblue dark:text-main-blue dark:hover:text-white hover:text-black rounded-full py-2 px-3 text-lg font-bold w-auto mx-2 bg-gray-500/10 dark:bg-main-grey/10 hover:bg-main-blue/50 dark:hover:bg-main-blue/30 duration-300 ease-in border-none cursor-pointer"
          onClick={locale === "es-MX" ? changeToEn : changeToEs}
        >
          {locale === "es-MX" ? "In English" : "En Español"}
        </button>
      </div>
      <div className="my-3 mx-auto">
        <span className="text-main-lightblue dark:text-main-blue font-bold duration-300 ease-in ">
          &copy; {"2021-" + new Date().getFullYear()} Andrés Cazares
        </span>
      </div>
    </div>
  );
};

export default Footer;
