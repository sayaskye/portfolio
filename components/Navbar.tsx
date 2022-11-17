import { useContext } from "react";

import { configContext } from "../context/configContext";
import Footer from "./Navbar/Footer";
import FloatingButton from "./Navbar/FloatingButton";
import NavigationLinks from "./Navbar/NavigationLinks";
import Socials from "./Navbar/Socials";

const Navbar = () => {
  const { menuOpen } = useContext(configContext);

  return (
    <div className="overflow-auto scrollbarhidden">
      <FloatingButton />
      <div
        className={`bg-gray-100 dark:bg-navbar-fondo w-screen md:w-navbar duration-300 ease-in px-0 h-screen justify-center pt-2 md:pt-4 lh:pt-16 fixed md:static md:flex ${
          menuOpen ? "flex absolute z-40" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-between mx-0 items-center">
          <img
            className="w-40 h-40 ring-8 rounded-full ring-main-lightblue dark:ring-main-blue duration-300 ease-in mt-2 md:mt-6 lg:mt-8 xl:mt-10"
            src="/images/Profile menu.png"
            alt="Andrés Cazares"
          />
          <Socials />
          <NavigationLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
