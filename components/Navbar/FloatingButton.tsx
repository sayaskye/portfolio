import { useContext } from "react";
import { configContext } from "../../context/configContext";

const FloatingButton = () => {
  const { menuOpen, setMenuOpen } = useContext(configContext);
  return (
    <>
      <button
        className="w-14 h-14 border-none rounded-full dark:bg-main-grey/40 bg-main-grey hover:text-black hover:bg-main-blue/60 dark:hover:bg-main-blue/60 fixed flex items-center justify-center top-2 right-2 duration-300 ease-in z-50 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default FloatingButton;
